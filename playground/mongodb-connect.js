    //const MongoClient = require('mongodb').MongoClient;
    const { MongoClient, ObjectId } = require('mongodb');
    MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
        if (err) {
            console.log('Unable to connect');
        }
        console.log('Connected to MongoDB server');
        const db = client.db('TodoApp');

        let obj = new ObjectId();
        console.log('________');
        console.log('****', obj);
        // db.collection('Todos').insertOne({
        //     text: 'Something to do',
        //     completed: false
        // }, (err, result) => {
        //     if (err) {
        //       return console.log('Unable to insert todo', err);
        //     } 
        //     console.log(JSON.stringify(result.ops, undefined, 2));
        // });

        // db.collection('Users').insertOne({
        //     name: 'Scott',
        //     location: 'Corvallis'
        // }, (err, result) => {
        //     if(err) {
        //         return console.log('Unable to insert user', err);
        //     }
        //     console.log(JSON.stringify(result.ops, undefined, 2));
        // })
        

        client.close();
    })
