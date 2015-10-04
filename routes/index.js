var express = require('express');
var sys = require('sys');
var exec = require('child_process').exec,
  child;
var router = express.Router();


var error2 = "";
var out2 = "";

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
      out: stdout,
      status2: error2,
      out2: out2
    });
  });
});

router.get('/reload', function(req, res) {

  //~/feedmeManage/./deploy.sh
  exec("~/feedmeManage/./deploy.sh", function(error, stdout, stderr) {
    console.log("Error:" + error + "\nStdout:" + stdout + "StdErr:\n" +
      stderr);
    error2 = error;
    out2 = stdout;
  });
  res.redirect('/');
});

module.exports = router;
