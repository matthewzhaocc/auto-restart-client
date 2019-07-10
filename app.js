var wol = require('wol');
const ping = require('ping');
console.log('function is running');
function teststat(){
  ping.sys.probe('10.20.0.80', function(islive){
    islive?console.log(''):wol.wake('e0:d5:5e:a9:5e:24')
    });}
teststat();
