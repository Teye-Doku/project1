const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());

app.use('/',(req,res,next) => {
     console.log('it is working')
})


app.listen(PORT,() => console.log(`Server is running on port ${PORT}`));

