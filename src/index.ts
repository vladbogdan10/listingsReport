import express, { Application } from 'express';
import * as viewController from './controllers/viewController';
import * as dataController from './controllers/dataController';

const app: Application = express();
const port = 5000;

app.use('/static', express.static('public'));

app.get('/', viewController.index);
app.get('/api', dataController.index);

app.listen(port, () => console.log(`Server is listening on port ${port}!`));

export default app;
