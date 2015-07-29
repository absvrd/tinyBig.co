// ===================================
//      Server File and Specs.
// ===================================
//  node package declarations
var express    = require('express'),    
    app        = express(),         
    path       = require('path'),
    port       = process.env.PORT || 8000;


// ===================================
//         Node Server
// ===================================

// Specify main directory location
app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Run server; output port on success
app.listen(8000);
console.log('Server running on port: ' + port);









