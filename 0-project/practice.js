function test(t) {
  if (t === undefined) {
    return 'Undefined value!'
  }
  return t;
}

let x;

console.log(test(x));

var num = 1;
var num2 = num * 2;

var remainder1 = 30 % 4;
console.log(remainder1);

var str1 = "abc";
console.log(str1.length);

var str2 = "   ";
console.log(str2.length);

console.log("graph-qlfadf".length);

var str = "afdsfasdf";
console.log(str[3]);

var a = '6'.repeat(3);
console.log(a);

var b = 'hi bellmin'.includes(' bell');
console.log(b);

var c = 'what r u doing?'.startsWith('r u');
console.log(`c = ${c}`);

var d = 'I am doing Coding'.endsWith('ding');
console.log(d);

var e = 'Are you sure?'.indexOf(' yo');
console.log(e);

var f = 'Yeah I am sure'.slice(2, 5);
console.log(f);

var g = 'I?doubt?that'.split('?');
console.log(g);

var h = 'Why would you doubt my word?'.split('');
console.log(h);

var i = 'You hAve BeEn DiSHonest'.toLowerCase();
console.log(i);

var j = 'No wAy'.toUpperCase();
console.log(j);