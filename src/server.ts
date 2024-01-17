import express from 'express'
import router from './router';
import morgan from 'morgan';
import { protect } from './modules/auth';
import { createUser, signIn } from './handlers/user';


const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
   res.status(200)
})

app.use('/api', protect,  router)
app.post('/createuser', createUser)
app.post('/signin', signIn)

export default app