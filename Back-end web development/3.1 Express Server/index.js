import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send('index.html');
//   })
  
// app.post('/', (req, res) => {
//     res.send('Got a POST request');
// });

// app.put('/user', (req, res) => {
//     res.send('Got a PUT request at /user');
// });

// app.delete('/user', (req, res) => {
//     res.send('Got a DELETE request at /user');
// });

// app.use(express.static('public'));

app.get('/johnny',(req, res)=> {
    res.send("<h1 style='font-size: 10rem;'>Hello World</h1>")
});
app.listen(3000);