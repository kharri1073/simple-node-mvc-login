exports.index = function(req, res)
{

    res.render('login.ejs',
    {
        title:'you had to login',
        content: 'account info here'
    });

};
