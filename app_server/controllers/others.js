/* GET Other page. */
module.exports.about = function(req, res, next){
  res.render('index', { title: 'About' });
};
