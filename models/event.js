const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }, 
    description:{
        type:String,
        required:true
    },
    date:{type:Date,default:Date.now},
    location:{type:String,required:true},
    studentsEnrolled:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Student",
        }
    ],
    attendStudents:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Student",
        }
    ],
    createdBy:{type:mongoose.Schema.Types.ObjectId,ref:"Admin"},
});

module.exports = mongoose.model('Event', eventSchema);
