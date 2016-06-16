var index_model = require('./models/index.js');
var index_controller = require('./controllers/index.js');

module.exports = function(app)
{
    app.get('/', index_controller.index);
}
