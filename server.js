const express = require("express");

const app = express();

app.get("/",(request, response)=>{
  response.send("try it");
});

app.get("/api/timestamp/:string", (request, response)=>{
  if(request.params.string === ""){
    response.json({"error" : "Invalid Date" });
  }else{
    let timer = request.params.string;
    let answer;
    if(Number(timer) == NaN){
      answer = {
        "unix": (new Date(timer)).getTime(),
        "utc":(new Date(timer)).toUTCString()
      }
    }else{
      answer = {
        "unix": (new Date(timer)).getTime(),
        "utc": (new Date(Number(timer))).toUTCString()
      };
    }
  }
  
  response.json(answer);
  
});

app.listen(3000);
