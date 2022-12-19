const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
    .connect("mongodb://127.0.0.1:27017/taskdb04")
    .then(() => console.log("Conneted!"))
    .catch((err) => console.log(err.message));
