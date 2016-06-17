var index_model = require('./models/index.js');
var index_controller = require('./controllers/index.js');
var about_controller = require('./controllers/about.js');

module.exports = function(app)
{
    app.get('/', index_controller.index);
    app.get('/about', about_controller.about);
}
