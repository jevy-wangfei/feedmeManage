var express = require('express');
var sys = require('sys');
var exec = require('child_process').exec,
  child;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var result = "";
  //ps -ef|grep java|grep -v 'grep'
  exec("ps -ef|grep java|grep -v 'grep'", function(error, stdout, stderr) {
    console.log("Error:" + error + "\nStdout:" + stdout + "StdErr:\n" +
      stderr);
    res.render('index', {
      title: 'Feedme host Manager',
      status: error,
      out: stdout
    });
  });

});


router.get('/reload', function(req, res) {
  var result = "";
  exec("~/manage/./deploy.sh", function(error, stdout, stderr) {
    console.log("Error:" + error + "\nStdout:" + stdout + "StdErr:\n" +
      stderr);
    res.render('index', {
      title: 'Feedme host Manager',
      status: error,
      out: stdout
    });
  });
});

module.exports = router;
