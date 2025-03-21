import mongoose from 'mongoose';
const mediaSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Photo', 'Document', 'Audio', 'Video'],
        required: true
    },
    title: String,
    description: String,
    file: {
        path: {
            type: String,
            required: true
        },
        originalName: String,
        mimeType: String,
        size: Number
    },
    date: Date,
    tags: [String],
    persons: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Person'
        }],
    events: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event'
        }],
    notes: String
}, {
    timestamps: true
});
export default mongoose.model('Media', mediaSchema);
