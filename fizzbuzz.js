const express = require('express');
const app = express();
const PORT = 3005;

app.get('/', (req, res) => {
    res.send('Hello, Node.js!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

for (var i = 1; i <= 200; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 7 === 0) {
        console.log("Boom");
    } else {
        console.log(i);
    }
}