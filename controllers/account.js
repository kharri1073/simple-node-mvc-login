exports.index = function(req, res)
{

    res.render('account.ejs',
    {
        title:'you had to login',
        content: 'account info here',
        user: req.user
    });

};

exports.update = function(req, res)
{
    res.render('account.ejs',
    {
        title: 'update account',
        content: 'update your account here',
        user: req.user
    });
}
