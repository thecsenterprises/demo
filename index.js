const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', async (req, res) => {
    return res.json({expected: 'Home age'});
});

app.get('/:id', async (req, res) => {
    let id = req.params.id;
    id = id.charAt(0).toUpperCase() + id.slice(1);
    return res.json({expected: `${id} Page`});
});

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));