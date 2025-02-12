
import express from 'express';
import router from './router';

let app = express();
let PORT_NUM = 9999;  //<- by default, this is port 80 for HTTP, or 443 HTTPS (w/ a certificate)

app.use("/api", router);


app.listen(PORT_NUM, () => {
    console.log("Server started on port " + PORT_NUM);
});


