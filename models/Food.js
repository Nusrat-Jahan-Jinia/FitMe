const mongoose = require('mongoose');

const foodSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        s_name: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        des: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        value: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
    },
    {
        timestamps: true,
        // eslint-disable-next-line prettier/prettier
    },
);

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;
