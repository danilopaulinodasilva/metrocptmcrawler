const CptmStatusMiddleware = require('../middlewares/CptmStatusMiddleware');

exports.getAllStatus = function(req,res) {
    
    res.send(CptmStatusMiddleware.all());
    
};

exports.getLineStatus = function(req,res) {

    res.send(CptmStatusMiddleware.line(req.params.linha));
  
};