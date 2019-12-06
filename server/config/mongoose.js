const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Tasks', { useNewUrlParser: true, useUnifiedTopology: true });
