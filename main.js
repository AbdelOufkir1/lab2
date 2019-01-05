
const {add, load} = require('./classes')
const express = require('express');
const app = express();
const port = 3000;

app.get('/ping', (request, response) => {

    response.json({'message':'pong'});
})

app.get('/class/add', (request, response) => {

    const {query} = request; // const query = request.query;
    const {Class, name, age, city, grade} = query;
    const data = {name, age, city, grade};

    add(Class, data, (err,res) => {
        if (err) {
            console.log(err);
        }
        // console.log('response: ', res);
    });
    

    console.log(name, age, city, grade);
})

app.listen(port, ()=> {
    console.log(`listening to port ${port}`)
})
