const express=require("express");
const https=require("https");
var bodyParser = require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    const query=req.body.cityName;
    const unit=req.body.units;
    const apiKey="f857729bfa08878dadf48e7adc31a5a2"
    const url="https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey +"&units="+unit;
    console.log(unit);

    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const weatherData=JSON.parse(data);
            const temp=weatherData.main.temp;
            var deg;
            if(unit==="metric")
                deg="C";
            if(unit==="imperial")
                deg="F";
            if(unit==="standard")
                deg="K";
            res.write("I dont know");
        })
    })
})

app.listen("3000",function(){
    console.log("Server running at 3000");
})