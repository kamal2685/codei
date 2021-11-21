module.exports.profile = function(req,res){
    return res.send('<h1> PROFILE LOADED </h1>');
}
module.exports.posts = function(req,res){
    return res.send('POSTs!!');
}