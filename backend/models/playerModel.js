import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const playerSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    date_of_birth:{
        type: Date,
    },
    teams:{
        type: Array,
    },
    runs_scored:{
        type: Number,
    },
    retired:{
        type: Boolean,
        default: false
    },
    formats_playing:{
        type: Number,
        enum: [1, 2, 3],
    },
    createdDate: {
        type: Date,
        default: Date.now // javascript command
    }
});