var eerste = [];
var tweede = [];
var special = [];
var allebew = [];
var rekenen1;
var rekenen2;
var doen = 0;


var zeroans = "Imagine that you have zero cookies and you split them evenly among zero friends. How many cookies does each person get? See? It doesn't make sense. And Cookie Monster is sad that there are no cookies, and you are sad that you have no friends";

function getId(id) {
  return document.getElementById(id);
}

function text() {
  console.log("text");
  var doc = document.getElementById('output');
  if (getId("DDD").innerHTML == zeroans) {
    console.log("yes");
    getId("DDD").style.fontSize = "18px";
    getId("DDD").style.lineHight = "5px";
  } else {
    getId("DDD").style.fontSize = "90px";
    if (getId("DDD").innerHTML.length >= "7") {
      getId("DDD").style.fontSize = "60px";
    }
    if (getId("DDD").innerHTML.length >= "10") {
      getId("DDD").style.fontSize = "40px";
      if (getId("DDD").innerHTML.length >= "12") {
        getId("DDD").style.fontSize = "35px";
        if (getId("DDD").innerHTML.length >= "14") {
          getId("DDD").style.fontSize = "30px";
          if (getId("DDD").innerHTML.length >= "16") {
            getId("DDD").style.fontSize = "28px";
            if (getId("DDD").innerHTML.length >= "18") {
              getId("DDD").style.fontSize = "23px";
              if (getId("DDD").innerHTML.length >= "20") {
                getId("DDD").style.overflowX = "scroll";

              }
            }
          }
        }
      }
    }
  }

}

//setInterval(text, 10)


function operation(b) {
  var doc = document.getElementById('DDD');

  var bew = b;
  if (bew == '/') {
    doc.innerHTML = "&#247;";
    allebew.push('/');
  } else if (bew == 'procent') {
    doc.innerHTML = "&percnt;";
    allebew.push('%');

  } else if (bew == '*') {
    doc.innerHTML = "&times;";
    allebew.push('*');

  } else if (bew == '-') {
    doc.innerHTML = "&minus;";
    allebew.push('-');

  } else if (bew == '+') {
    doc.innerHTML = "&plus;";
    allebew.push('+');

  } else if (bew == 'xx') {
    doc.innerHTML = "&sup2;";
    allebew.push('square');

  } else if (bew == 'wrtl') {
    doc.innerHTML = "&radic;";
    allebew.push('root');

  } else if (bew == 'macht') {
    var str = "x";
    var result = "y" + str.sup();
    doc.innerHTML = result;
    allebew.push('toPower');

  } else if (bew == 'mwrlt') {
    var wstr = "x";
    var wresult = wstr.sup() + "&radic;y";
    doc.innerHTML = wresult;
    allebew.push('toRoot');
  } else if (bew == 'sin') {
    doc.innerHTML = "sin&ang;";
    allebew.push('sin');

  } else if (bew == 'cos') {
    doc.innerHTML = "cos&ang;";
    allebew.push('cos');

  } else if (bew == 'tan') {
    doc.innerHTML = "tan&ang;";
    allebew.push('tan');

  } else if (bew == 'asin') {
    var sinstr = "-1";
    var sinresult = "sin" + sinstr.sup() + "&ang;";
    doc.innerHTML = sinresult;
    allebew.push('asin');

  } else if (bew == 'acos') {
    var cosstr = "-1";
    var cosresult = "cos" + cosstr.sup() + "&ang;";
    doc.innerHTML = cosresult;
    allebew.push('acos');

  } else if (bew == 'atan') {
    var tanstr = "-1";
    var tanresult = "tan" + tanstr.sup() + "&ang;";
    doc.innerHTML = tanresult;
    allebew.push('atan');

  } else if (bew == 'rndm') {
    var random = Math.floor((Math.random() * 100) + 1);
    doc.innerHTML = random;
  } else if (bew == 'pi') {
    doc.innerHTML = Math.PI;
    if (eerste.length === 0) {
      alert("eerste = " + Math.PI);
      var pushPi = parseInt(Math.PI);
      eerste.push(3.141592653589793);
      alert(3.141592653589793 + 3);
    } else if (tweede.length === 0) {
      alert("tweede = " + Math.PI);
      tweede.push(Math.PI + 1000);
      alert(tweede);
    }
  } else if (bew == 'ac') {
    doc.innerHTML = "0";
    eerste = [];
    tweede = [];
    allebew = [];
    rekenen1;
    rekenen2;
    doen = 0;
    getId("DDD").style.fontSize = "90px";
  }

}

function makeNum(x) {
  var doc = document.getElementById('DDD');

  if (doen === 0) {
    eerste.push(x);
    var beindeerste = eerste.join("");
    var eindeerste = parseFloat(beindeerste.replace(',', '.').replace(' ', ''));
    doc.innerHTML = eindeerste;
    rekenen1 = eindeerste;
  } else if (doen !== 0) {
    tweede.push(x);
    var beindtweede = tweede.join("");
    var eindtweede = parseFloat(beindtweede.replace(',', '.').replace(' ', ''));
    doc.innerHTML = eindtweede;
    rekenen2 = eindtweede;
  }
  let l = text();

}

function check() {
  var doc = document.getElementById('DDD');

  var klaar;
  var result;
  var beginnum = rekenen1;
  var eindnum = rekenen2;


  var actie = allebew[allebew.length - 1];


  if (actie == "/") {
    klaar = beginnum / eindnum;
    if (beginnum === 0 && eindnum === 0) {
      result = zeroans;
      //doc.style.fontSize = "18px";
      doc.innerHTML = result;
    } else {


      result = Math.round(klaar * 100) / 100;
      doc.innerHTML = result;
    }
  } else if (actie == "*") {
    klaar = beginnum * eindnum;
    result = Math.round(klaar * 100) / 100;

    doc.innerHTML = result;
  } else if (actie == "-") {
    klaar = beginnum - eindnum;
    result = Math.round(klaar * 100) / 100;

    doc.innerHTML = result;
  } else if (actie == '+') {
    if (beginnum == 707 && eindnum == 707) {
      doc.style.fontSize = "18";

      doc.innerHTML = "Haha grappig man (het antwoord is 1414)";
    } else {
      klaar = beginnum + eindnum;
      result = Math.round(klaar * 100) / 100;
      doc.innerHTML = result;
    }
  } else if (actie == "%") {
    klaar = (beginnum / eindnum) * 100;
    result = Math.round(klaar * 100) / 100;

    doc.innerHTML = result + "%";
  } else if (actie == "square") {
    klaar = Math.pow(beginnum, 2);
    result = Math.round(klaar * 1000) / 1000;
    doc.innerHTML = result;

  } else if (actie == "root") {
    klaar = Math.pow(beginnum, 0.5);
    result = Math.round(klaar * 1000) / 1000;
    doc.innerHTML = result;

  } else if (actie == "toPower") {
    klaar = Math.pow(beginnum, eindnum);
    result = Math.round(klaar * 1000) / 1000;
    doc.innerHTML = result;

  } else if (actie == "toRoot") {
    var makeRoot = 1 / eindnum;
    klaar = Math.pow(beginnum, makeRoot);
    result = Math.round(klaar * 1000) / 1000;
    doc.innerHTML = result;

  } else if (actie == "sin") {
    klaar = Math.sin(beginnum * Math.PI / 180);
    result = Math.round(klaar * 1000) / 1000;
    doc.innerHTML = result;

  } else if (actie == "cos") {
    klaar = Math.cos(beginnum * Math.PI / 180);
    result = Math.round(klaar * 1000) / 1000;
    doc.innerHTML = result;

  } else if (actie == "tan") {
    klaar = Math.tan(beginnum * Math.PI / 180);
    result = Math.round(klaar * 1000) / 1000;
    doc.innerHTML = result;
  } else if (actie == "asin") {
    klaar = Math.asin(beginnum) * (180 / Math.PI);
    result = Math.round(klaar * 1000) / 1000;
    doc.innerHTML = result;
  } else if (actie == "acos") {
    klaar = Math.acos(beginnum) * (180 / Math.PI);
    result = Math.round(klaar * 1000) / 1000;
    doc.innerHTML = result;
  } else if (actie == "atan") {
    klaar = Math.atan(beginnum) * (180 / Math.PI);
    result = Math.round(klaar * 1000) / 1000;
    doc.innerHTML = result;
  }
  eerste = [];
  tweede = [];
  allebew = [];
  rekenen1;
  rekenen2;
  doen = 0;


}
