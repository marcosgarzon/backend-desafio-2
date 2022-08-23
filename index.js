const Manager = require('./manager.js');
const manager = new Manager()

let user = {
    title: "Cerveza",
    price: "45",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAi7JaBgDIQfUOkFjJtCuUlFMFn67JGPSS3w&usqp=CAU",
}

// Descomentar los siguientes métodos para hacer las pruebas:

// manager.save(user).then(result => console.log(result))
// manager.getAll().then(result => console.log(result))
// manager.getById(2).then(result => console.log(result))
// manager.updateUser(2, user).then(result => console.log(result))
// manager.deleteById(1).then(result => console.log(result))
// manager.deleteAll().then(result => console.log(result))