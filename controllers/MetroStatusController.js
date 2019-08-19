const MetroStatusMiddleware = require('../middlewares/MetroStatusMiddleware');

exports.getAllStatus = function(req,res) {
    
    res.send(MetroStatusMiddleware.all());
    
};

exports.getLineStatus = function(req,res) {

    res.send(MetroStatusMiddleware.line(req.params.linha));
  
};