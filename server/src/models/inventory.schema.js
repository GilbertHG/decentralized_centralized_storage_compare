module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            url: String,
            storageType: {
                type: String,
                enum: ['s3','filecoin']
            },
            description: String,
            extension: String,
            category: String,
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("inventory", schema);
};