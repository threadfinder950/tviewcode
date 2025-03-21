import mongoose from 'mongoose';
const relationshipSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Parent-Child', 'Spouse', 'Sibling', 'Other'],
        required: true
    },
    persons: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Person',
            required: true
        }],
    date: {
        start: Date,
        end: Date
    },
    notes: String
}, {
    timestamps: true
});
// Ensure at least 2 persons are included in a relationship
relationshipSchema.pre('save', function (next) {
    if (this.persons.length < 2) {
        const error = new Error('Relationship must include at least 2 persons');
        return next(error);
    }
    next();
});
export default mongoose.model('Relationship', relationshipSchema);
