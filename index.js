const express = require('express');
const app = express();

const port = 3000;

const user = [];

// START: Pengerjaan mulai dari sini ya.

// TODO: buat 2 pemanggilan middleware disini menggunakapp.use
app.use(express.static('statics'));
app.use(express.json());

// TODO: lengkapi fungsi ini untuk menambah element ke array `user` berdasar isi dari req.body.namaProperty
function postRegistration(req, res) {
    user.push({
        name: req.body.name,
        password: req.body.password
    });

    res.status(200).json({ status: 'success' });
    res.end();
}

// TODO: lengkapi fungsi ini untuk menampilkan isi dari array `user`
function getUsers(req, res) {
    res.status(200).json(user);
    res.end();
}

// TODO: buat 2 pemanggilan app.METHOD disini
app.post('/registration', postRegistration);
app.get('/users', getUsers);


// END: Jangan ubah apapun di bawah ini
app.listen(port);