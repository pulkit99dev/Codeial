module.exports.pay = function(req, res){
    //return res.end('Payment done');
    res.render('pay', {
        title: 'Payment Page'
    })
}