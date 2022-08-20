const mongoose = require('mongoose');

const PlannerSchema = mongoose.Schema({
    name: {
        type:String,
        required:[true, "Name is required"],
    },
    dueDate: {
        type:Date,
    },
    complete: {
        type:Boolean,
    }
}, {timestamps:true});

const Planner = mongoose.model('planner', PlannerSchema);

module.exports = Planner;



