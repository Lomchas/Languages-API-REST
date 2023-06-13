import {app, link} from './app.js'
import { PORT } from './config.js'

// Config connection
app.listen(PORT, () => {
    console.log("Connecting...")
    setTimeout(() => {
        console.log(`|| You connected! || Port=${PORT} ||\n|| Go-to: ${link} ||`)

    }, 2000);
});


