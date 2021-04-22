const express = require('express')
const router = express.Router();
const { v4: uuid } = require('uuid');
const peopleModel = require('./schema/people.model')
const cookie_middleware = require('./middleware/cookie_middleware');


router.get('/', cookie_middleware, function(req, res) {
    const username = req.username;
    console.log(username);
    return peopleModel.findPeopleByUsername(username)
        .then((peopleResponse) => {
            res.status(200).send(peopleResponse)
        }, (error) => {
            res.status(500)
        })
    

})


router.get('/:firstName', function(req, res) {
    // localhost:8000/api/people/hunter
    // req.params === {firstName: 'hunter'}

    for(let i = 0; i < people.length; i++ ){
        const person = people[i];
        if (person.name === req.params.firstName) {
            return res.status(200).send(person);
        }
    }

    res.status(404).send("No person found with the name " + req.params.firstName)

})

router.post('/', cookie_middleware, function(req, res) {
    const person = req.body;
    const username = req.username;
    person.username = username;
    person.id = uuid();
    return peopleModel.addPerson(person)
        .then((newPersonResponse) => {

            res.status(200).send(newPersonResponse)

        }, (error) => {
            res.status(400).send(error)
        })

    // const newPerson = {};
    // newPerson.name = req.body.name;
    // newPerson['age'] = req.body.age;
    // newPerson.id = uuid();

    // console.log(newPerson);

    // people.push(newPerson);

    // res.sendStatus(200);

})

module.exports = router;