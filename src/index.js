const express = require('express');
const server = express();
server.use(express.json());

/* server.get('/teste', (req, res) => {
    res.send('Backend ok!! ');
}); */

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task', TaskRoutes);

server.listen(3000, () => {
    console.log('API ONLINE');
});