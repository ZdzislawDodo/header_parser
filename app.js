var express = require("express"),
    app = express();

    
app.get("/", function(req, res) {
    //console.log(req.headers);
    var obj = req.headers;
    var data = {
        ipaddress: obj["x-forwarded-for"],
        language:obj["accept-language"].slice(0, 5),
        software: obj["user-agent"].slice(13, 27)
    };
    res.send(data);
});
    
app.listen(process.env.PORT, process.env.ID, function() {
    console.log("Server is listening");
});