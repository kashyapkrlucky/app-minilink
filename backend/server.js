const app = require('./src/app');
const { chalkStyles } = require('./src/utils/chalkUtils');
const http = require('http');
const https = require('https');
const { initSocket } = require('./socket');
// const socketIo = require('socket.io');
const config = require('./src/config');
const PORT = config['port'];

const server = http.createServer(app);
const io = initSocket(server);

// Socket.io connection handling
io.on('connection', (socket) => {
    socket.on('join', (userId) => {
        console.log('A user connected', userId);
        socket.join(userId);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(PORT, () => {
    const protocol = server instanceof https.Server ? 'https' : 'http';
    const host = server.address().address === '::' ? 'localhost' : server.address().address;
    const port = server.address().port;
    console.log();
    console.log(`${chalkStyles.info('---------------------------------------------')}`);
    console.log(`${chalkStyles.info('------------')} ${chalkStyles.success('Server : Express Js')} ${chalkStyles.info('------------')}`);
    console.log(`${chalkStyles.info('---------------------------------------------')}`);
    console.log(`${chalkStyles.success('✓ Server is running on:')} ${protocol}://${host}:${port}`);
    console.log(`${chalkStyles.debug('Press ⌃ [CTRL] + C to stop the server')}`);
    console.log(`${chalkStyles.info('---------------------------------------------')}`);
});