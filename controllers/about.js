exports.about = function(req, res)
{

    var showdown  = require('showdown');
    var converter = new showdown.Converter();

    var readme_html = converter.makeHtml( fs.readFileSync( path.resolve(__dirname,'../README.md'), 'utf8' ) );

    res.render('index.ejs',//TODO: this really should be setup as a layout instead of a view
    {
        title:'About the simple-node-mvc project',
        content: readme_html
    });

};

exports.secret = function(req, res)
{

    res.render('index.ejs',//TODO: this really should be setup as a layout instead of a view
    {
        title:'secret about page',
        content: 'just a secret page'
    });

};
