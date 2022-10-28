const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

 app.use((req, res, next) => {
   User.findById('635aadc8b349f7da186d90c7')
     .then(user => {
       req.user = user;
       next();
     })
     .catch(err => console.log(err));
 });

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    'mongodb+srv://ixtab:1@cluster0.jq65ufq.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('DBconnection established');
  })
  .then(() => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Max',
          email: 'max@text.com',
          cart: {
            items: []
          }
        })
        user.save()
      }
    })
  })
  .then(() => {
    app.listen(8001);
    console.log(`Listening on PORT 8001`);
  })
  .catch(err => {
    console.log(err);
  });
