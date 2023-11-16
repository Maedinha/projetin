import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('TEST');
    res.send('Hello World from Homepage');
});

app.get('/papeis/:id', (req, res) => {
    return res.json(req.params.id);
})

app.post('/papeis', (req, res) => {
    const papel = new Papel(req.body.id, req.body.owner, req.body.quantity, req.body.name, req.body.value);
    return res.json(papelRepository.save(papel));
})

app.put('/papeis/:id', (req, res) => {
    if (existsById(req.params.id)) {
        papelRepository.update(req.body);
        return res.status(204);
    }
    return res.status(422);
})

app.delete('/papeis/:id', (req, res) => {
    if (existsById(req.params.id)) {
        papelRepository.delete(req.body);
        return res.status(204);
    }
    return res.status(422);
})

app.listen(PORT, () => console.log('Hello World'));