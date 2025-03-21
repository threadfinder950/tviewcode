import mongoose from 'mongoose';
const nameSchema = new mongoose.Schema({
    given: String,
    surname: String,
    fromDate: Date,
    toDate: Date
});
const vitalEventSchema = new mongoose.Schema({
    date: Date,
    place: String,
    notes: String
});
const personSchema = new mongoose.Schema({
    names: [nameSchema],
    birth: vitalEventSchema,
    death: vitalEventSchema,
    gender: {
        type: String,
        enum: ['M', 'F', 'O', 'U'], // Male, Female, Other, Unknown
        default: 'U'
    },
    media: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Media'
        }],
    notes: String,
    sourceId: String, // Original ID from GEDCOM
    customFields: mongoose.Schema.Types.Mixed, // For additional information
}, {
    timestamps: true
});
export default mongoose.model('Person', personSchema);
