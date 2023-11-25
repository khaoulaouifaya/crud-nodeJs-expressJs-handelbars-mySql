import express from 'express';
import {getAll} from './database.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const port = 3000;
const app = express();
const router = express.Router();



app.set('view engine', 'pug');
app.set('views',path.join(__dirname, 'views'))

app.listen(port, () => console.log(`App listening to port ${port}`));

app.get('/',async (req, res) => {
    var all = await getAll();
    res.render('main',{data:JSON.stringify(all)});
});

app.get('/users',(req,res)=>{
    const datab = {
        pageTitle: 'Home Page',
        message: 'Welcome to our website!'
    }
    res.render('main',{data: datab});
})