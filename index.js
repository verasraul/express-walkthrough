const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;


const fruits = require('./fruits');

// routes
app.get('/', (req, res) => {
    res.send('Hello RaUUUUUUUl!!!')
})

app.get('/welcome-page', (req, res) => {
    res.send('Welcome to my webpage')
})

app.get('/favorite-food', (req, res) => {
    res.send('My favorite plate is Paella.')
})

app.get('/favorite-movie', (req, res) => {
    res.send('My favorite movie is Scarface.')
})

app.get('/about-me', (req, res) => {
    res.send('I code COOL things.')
})

app.get('/contact', (req, res) => {
    res.send('My e-mail is verasraul@gmail.com')
})

app.get('/article/:slug', (req, res) => {
    console.log(req.params);
    // { slug: 'how-to-improve-your-drumming' }
})

app.get('/ping', (req, res) => {
    res.json('pong');
})

app.get('/greet/:name', (req, res) => {
    let name = req.params.name;
    // console.log('Hello there', name)
    res.send(`Hello there ${name}` ) 
})

app.get('/five', (req, res) => {
    res.send([1, 2, 3, 4, 5])
})

app.get('/evens/:n', (req,res) => {
    let n = req.params.n;
    console.log('n =', n);
    let num = parseInt(n);
    console.log(num)
    let newArray=[];
    for(let i=2; i<= n; i++) {
        i % 2 == 0 ? newArray.push(i) : null;
    }
    res.send(newArray)
})

app.get('/namelength/:name', (req, res) =>{
    let name = req.params.name.toString();
    res.send(`Name Length = ${name.length}`)
})

app.get('/fruits', (req, res) => {
    res.send(fruits);
})

app.get('/fruits/:name', (req, res) => {
    let getName  = req.params.name;
    // console.log('Fruit Name = ', name)
    const fruitName = (index) => {
        if(index.name == getName ) {
            return index;
        }else{
            return null;
        }
    }
    const fruitFilter = fruits.filter(fruitName);

    // let fruitMapping = fruits.map((index) => {
    //     let name  = req.params.name;
    //     if(index.name == name) {
    //         return index;
    //     }else{
    //         return null;
    //     }
        
    // })
    res.send(fruitFilter)
})




app.listen(PORT, () => console.log(`running on port ${PORT}`));