import mongoose from 'mongoose';
const eventSchema = new mongoose.Schema({
    person: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
        required: true
    },
    type: {
        type: String,
        enum: ['Work', 'Education', 'Residence', 'Military', 'Medical', 'Travel', 'Achievement', 'Custom'],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: String,
    date: {
        start: Date,
        end: Date,
        isRange: {
            type: Boolean,
            default: false
        }
    },
    location: {
        place: String,
        coordinates: {
            latitude: Number,
            longitude: Number
        }
    },
    media: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Media'
        }],
    notes: String,
    sources: [String],
    customFields: mongoose.Schema.Types.Mixed
}, {
    timestamps: true
});
export default mongoose.model('Event', eventSchema);
