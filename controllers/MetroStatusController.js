const store = require('store');
const MetroStatusMiddleware = require('../middlewares/MetroStatusMiddleware');

exports.getAllStatus = function(req,res) {
    
    res.send(MetroStatusMiddleware.all);
    
};

exports.getLineStatus = function(req,res) {

    // console.log(MetroStatusMiddleware.line(req.params.linha));
    res.send(MetroStatusMiddleware.line(req.params.linha));

    // console.log(getStatusLinhasMetro(15));
    // res.end(getStatusLinhasMetro(15));
  
};