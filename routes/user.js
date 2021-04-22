const express = require('express')
const router = express.Router();
const UserModel = require('./schema/user.model')
const jwt = require('jsonwebtoken');
const cookie_middleware = require('./middleware/cookie_middleware');


router.post('/register', function(req, res) {
    const username = req.body.username;
    const password = String(req.body.password);

    if (!username || !password) {
        res.sendStatus(400);
    }

    const user = {
        username: username,
        password: password, 
    }

    return UserModel.addUser(user)
        .then((response) => {
            const token = jwt.sign(response.username, 'salty_salt')


            res.cookie('webdevtoken', token).status(200).send(response);
        }, (error) => {

            res.status(401).send(error)
        });
})


router.post('/login', function(req, res) {
    const username = req.body.username;
    const password = String(req.body.password);

    if (!username || !password) {
        res.sendStatus(400);
    }

    return UserModel.findUser(username)
        .then((response) => {
            console.log(response);
            console.log(password);

            if (response.password !== password) {
                return res.status(402).send("Password does not match");
            }

            const token = jwt.sign(response.username, 'salty_salt')


            res.cookie('webdevtoken', token).status(200).send(response);
        }, (error) => {

            res.status(401).send(error)
        });
})

// router.post('/loggedIn', cookie_middleware (req, res) => {
//     if (req.username) {
//         res.send(true);
//     } else {
//         res.send(false);
//     }
// })

router.post('/logOut', (req, res) => {
    res.clearCookie('webdevtoken');
    res.sendStatus(200);
})

router.get('/all', function(req, res) {
    return UserModel.getAllUsers().then(response => res.send(response))
})


module.exports = router;