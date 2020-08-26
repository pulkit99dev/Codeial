module.exports.profile = function(req, res){
    //return res.end('Your Profile')
    res.render('user', {
        title : 'User Profile'
    })
}