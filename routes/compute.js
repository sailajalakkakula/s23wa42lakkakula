var express = require('express');
var router = express.Router();

/* GET home page. */

let x;
let y;
router.get('/', function(req, res, next) {
res.render('computation', { title: 'Sailaja Lakkakula' });
  
if(req.query.x ==undefined ) {
  console.log("if condition");
  x=Math.floor(Math.random()*1000);
  y=Math.fround(Math.random()*10);
let y1=Math.pow(x,y);
let y2=Math.sign(y);
let y3=Math.tanh(x);
let y4=Math.trunc(y);
  res.send('Math.pow() applied to '+x+' and '+y+' is ' +y1+"<br>" 
  +'Math.sign() applied to '+y+' is '+y2+"<br>"
  +'Math.tanh()  applied to '+x+' is'+y3+"<br>"
  +'Math.trunc() applied to '+y+' is'+y4); 

}
else{

  console.log("Else condition");
  x = req.query.x;
  let y1=Math.pow()(x,x);
  let y2=Math.sign(x);
  let y3=Math.tanh(x);
  let y4=Math.trunc(y);
  res.send('Math.pow() applied to '+x+' and '+y+' is ' +y1+"<br>" 
  +'Math.sign() applied to '+y+' is '+y2+"<br>"
  +'Math.tanh()  applied to '+x+' is '+y3+"<br>"
  +'Math.trunc() applied to '+y+' is '+y4);
}
});

module.exports = router;