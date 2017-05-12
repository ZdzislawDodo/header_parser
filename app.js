var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    os = require('os'),
    data = {
        ipaddress: "",
        language:"",
        software: os.platform()
    };
    
app.use(bodyParser.urlencoded({ extended: false }));
    
require('dns').lookup(os.hostname(), function (err, add, fam) {
    if(err) throw err;
    console.log('addr: '+add);
    data.ipaddress = add;
    app.get("/", function(req, res) {
        //var language = JSON.parse(req.headers["accept-language"]);
        var arr = req.headers["accept-language"].split(',');
        data.language =  arr[0];
        res.send(req.headers);
    });
});
    
app.listen(process.env.PORT, process.env.ID, function() {
    console.log("Server is listening");
});