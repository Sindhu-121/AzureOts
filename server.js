// const express = require('express');
// const cors = require('cors'); // Import the cors module
// const path = require('path');
// const app = express();
// const port = 8080;

// app.use(cors()); // Enable CORS for all routes

// app.get('/api/data', (req, res) => {
//     res.json({ message: 'Hello from the server!' });
// });

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + "/my-app/build/index.html");
// });

// app.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
// });
const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 8080;

      const cors = require('cors');
      app.use(cors());
app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/my-app/build/"));


app.get('/api/data', (req, res) => {
        res.json({ message: 'Hello from the server!' });
    });
    
app.get('/', (req,res) => {
  res.sendFile(process.cwd()+"/my-app/build/index.html");
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});