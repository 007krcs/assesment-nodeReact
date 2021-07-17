const express = require('express');
const app = express();
const jsonObj = require('./dummy.json');

app.use(express.json());

app.get("/list", function(req, res){
  
    var source = req.query.source;
    var dest = req.query.dest;
    var deptDate = req.query.deptDate;
    
    if(jsonObj[source+dest] === undefined){
        return res.status(404).send('No flights are found');
    }
    var temp = jsonObj[source+dest].filter(item=>{
        return item.DepartDate===deptDate 
    });
    
    
    if(!temp) return res.status(404).send('No flights are found');
    res.status(200).send(temp);
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`App is listening to port ${PORT}`);
})