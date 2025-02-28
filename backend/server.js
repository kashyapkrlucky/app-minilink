const app = require('./src/app');
const { chalkStyles } = require('./src/utils/chalkUtils');

const config = require('./src/config');

const PORT = config['PORT'];

app.listen(PORT, () => {
    console.log(`${chalkStyles.success(`✓ Server is running on`)} http://localhost:${PORT}`);
});