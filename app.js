const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, './public');
const dir = 3050;
app.use(express.static(publicPath));
/*app.listen(dir, () => {
    console.log('Servidor corriendo');
    console.log('http://localhost:'+dir+'/');
});*/

app.listen(process.env.PORT || 3000,function(){
    console.log('Servidor corriendo en el puerto 3000');
})

app.get('/', (req, res) => {
    //let htmlPath = path.resolve(__dirname, './views/index.html');
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/register.html', (req, res) => {
    //let htmlPath = path.resolve(__dirname, './views/index.html');
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/login.html', (req, res) => {
    //let htmlPath = path.resolve(__dirname, './views/index.html');
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});