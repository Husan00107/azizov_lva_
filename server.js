const express = require('express');
const path = require('path');
const app = express();
const PORT = "3000";

const CreatePath = (filename)=> path.resolve(__dirname,'views',`${filename}.html`);  

app.get('/',(req,res)=>{
    res.sendFile(CreatePath('index'));
});
app.get('/registration',(req,res)=>{
    res.sendFile(CreatePath('reg'));
});
app.get('/season',(req,res)=>{
    res.sendFile(CreatePath('ki'));
});
app.get('/weapsons',(req,res)=>{
    res.sendFile(CreatePath('ht'));
});
app.get('/cars',(req,res)=>{
    res.sendFile(CreatePath('car'));
});
app.get('/uc',(req,res)=>{
    res.sendFile(CreatePath('uc'));
});
app.get('/set',(req,res)=>{
    res.sendFile(CreatePath('set'));
});
app.get('/card',(req,res)=>{
    res.sendFile(CreatePath('card'));
});
app.get('/erangel',(req,res)=>{
    res.sendFile(CreatePath('card'));
});
app.get('/karakin',(req,res)=>{
    res.sendFile(CreatePath('card'));
});
app.get('/sanhok',(req,res)=>{
    res.sendFile(CreatePath('card'));
});
app.listen(PORT,'localhost',(error)=>{
    error ? console.log(error): console.log(`localhost:${PORT}`);
});
