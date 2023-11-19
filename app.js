import express from 'express';
import handlebars from 'express-handlebars';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';


const port = 3000;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);




app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')))
app.listen(port, () => console.log(`App listening to port ${port}`));

app.get('/', (req, res) => {
    res.render('main', { layout: 'index' });
});