var wol = require('wol');
const ping = require('ping');
console.log('function is running');
function teststat(){
  ping.sys.probe('IP_ADDR', function(islive){
    islive?console.log(''):wol.wake('MAC_ADDR')
    });}
teststat();
