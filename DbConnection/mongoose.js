const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb://localhost:27017/project")
.then(()=>console.log("connected")).catch(()=>console.log("not connected"));