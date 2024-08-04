const express = require('express');
const app = express();

// Middleware setup
app.use(express.json());

// Routes setup
app.use('/api/users', require('./routes/userRoutes'));

module.exports = {
  start: () => {
    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
  }
};