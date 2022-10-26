const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typeSchema = new Schema({
    typeId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    title : {
        type: String,
		required: true
    }
});

module.exports = mongoose.model("Type", typeSchema);