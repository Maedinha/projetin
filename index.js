import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('TEST');
    res.send('Hello World from Homepage');
});

app.get('/user', (req, res) => {
    console.log('TEST');
    res.send('Hello World from userpage');
});

app.listen(PORT, () => console.log('Hello World'));