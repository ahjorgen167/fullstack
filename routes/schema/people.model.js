const mongoose = require('mongoose');

const PeopleSchema = require('./people.schema').PeopleSchema;

const PeopleModel = mongoose.model('People', PeopleSchema);

function addPerson(person) {
    return PeopleModel.create(person);
}

function findAllPeople() {
    return PeopleModel.find().exec();
}

function findPeopleByAge(age) {
    return PeopleModel.find({age: age}).exec();
}

function findPeopleByUsername(username) {
    return PeopleModel.find({username: username}).exec();
}


exports.addPerson = addPerson;
exports.findAllPeople = findAllPeople;
exports.findPeopleByAge = findPeopleByAge;
exports.findPeopleByUsername = findPeopleByUsername;