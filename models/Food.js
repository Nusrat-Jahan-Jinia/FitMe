const mongoose = require('mongoose');

const foodSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        scientific_name: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        food_value: {
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
