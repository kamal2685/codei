module.exports.profile = function(req,res){
    return res.render('user',{
        title : "user"
    });
}
module.exports.posts = function(req,res){
    return res.send('POSTs!!');
}