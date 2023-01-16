const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const studentSchema = new Schema({
    name: {type: String, required: true},
    currentClass: {type: Number, required: true},
    division: {type: String, required: true}
});

const studentModel= mongoose.model('Students', studentSchema);

module.exports= studentModel;