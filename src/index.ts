import { connect, disconnect } from '../src/database/database'
import { app, PORT } from './server'

try {
    app.listen(PORT, () => {
        console.log(`Server started on http://localhost:${PORT}`);
    });

    connect();
} catch (err) {
    console.log(err)
    disconnect()
}