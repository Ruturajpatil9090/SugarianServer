const express = require('express');
const bodyParser = require('body-parser');
const GroupMaster = require('./routes/groupMasterRoutes');
const sequelize = require('./config/database');
const cors = require('cors')

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// Sync Sequelize models with the database
sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
});

// Use company routes
app.use('/groupmaster',GroupMaster);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});