exports.about = function(req, res)
{

    var fs = require("fs");
    var path = require('path');
    var showdown  = require('showdown');
    var converter = new showdown.Converter();

    var readme_html = converter.makeHtml( fs.readFileSync( path.resolve(__dirname,'../README.md'), 'utf8' ) );

    res.render('index.ejs',//TODO: this really should be setup as a layout instead of a view
    {
        title:'About the simple-node-mvc project',
        content: readme_html
    });

};
