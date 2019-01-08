import * as express from 'express';

const app = express();

app.get(
    '/api/books', (req: express.Request, res: express.Response) => {
        return res.contentType('application/json').send({ value: 'Hello world!!' });
    });

app.listen(
    3000,
    () => {
        console.log('Example app listening on port 3000!');
    });

app.use(express.static('public'));

export default app;
