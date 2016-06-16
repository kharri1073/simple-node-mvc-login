exports.index = function(req, res) 
{
    res.render('index.ejs', 
    {
        title:'basic node mvc index page',
        content:'hello world!',
    });
};
