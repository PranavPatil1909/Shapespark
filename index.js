ConvertToJson = () => {
  var tabl = document.getElementById("tableofcontents");
  console.log(tabl);
  var head = [];
  var rows = [];
  for (var i = 0; i < tabl.rows[0].cells.length; i++) {
    //to coppy the heading elements of the column
    head.push(tabl.rows[0].cells[i].innerHTML);
  }
  // console.log(head);
  for (var i = 1; i < tabl.rows.length; i++) {
    //to coppy the row elements of the column

    var row = {};

    for (var j = 0; j < tabl.rows[i].cells.length; j++) {
      row[head[j]] = tabl.rows[i].cells[j].innerHTML;
    }
    // console.log(row);
    rows.push(row);
  }
  exptable = JSON.stringify(rows);
  console.log(exptable);
};

downloadCSV = (csv, filename) => {
  var csvfile;
  var downloadLink;
  csvfile = new Blob([csv], { type: "text/csv" });
  downloadLink = document.createElement("a");
  downloadLink.download = filename;
  downloadLink.href = window.URL.createObjectURL(csvfile);
  // console.log(downloadLink);
  downloadLink.style.display = "none";
  // document.appendChild(downloadLink.href);
  downloadLink.click();
};

ConvertTocsv = (filename) => {
  // console.log("button is live");
  var csv = [];
  var rows = document.querySelectorAll("table tr");

  for (var i = 0; i < rows.length; i++) {
    var row = [];
    var cols = rows[i].querySelectorAll("td, th");
    //   console.log(cols);
    for (var j = 0; j < cols.length; j++) {
      row.push(cols[j].innerText);
    }
    csv.push(row.join(","));
  }

  // console.log(csv);
  // downloadCSV(csv.join("\n"), filename);
};

// var _0x9cb6 = [
//   "\x74\x61\x62\x6C\x65\x6F\x66\x63\x6F\x6E\x74\x65\x6E\x74\x73",
//   "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64",
//   "\x6C\x6F\x67",
//   "\x6C\x65\x6E\x67\x74\x68",
//   "\x63\x65\x6C\x6C\x73",
//   "\x72\x6F\x77\x73",
//   "\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C",
//   "\x70\x75\x73\x68",
//   "\x73\x74\x72\x69\x6E\x67\x69\x66\x79",
//   "\x74\x65\x78\x74\x2F\x63\x73\x76",
//   "\x61",
//   "\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74",
//   "\x64\x6F\x77\x6E\x6C\x6F\x61\x64",
//   "\x68\x72\x65\x66",
//   "\x63\x72\x65\x61\x74\x65\x4F\x62\x6A\x65\x63\x74\x55\x52\x4C",
//   "\x55\x52\x4C",
//   "\x64\x69\x73\x70\x6C\x61\x79",
//   "\x73\x74\x79\x6C\x65",
//   "\x6E\x6F\x6E\x65",
//   "\x63\x6C\x69\x63\x6B",
//   "\x74\x61\x62\x6C\x65\x20\x74\x72",
//   "\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72\x41\x6C\x6C",
//   "\x74\x64\x2C\x20\x74\x68",
//   "\x69\x6E\x6E\x65\x72\x54\x65\x78\x74",
//   "\x2C",
//   "\x6A\x6F\x69\x6E",
//   "\x0A",
// ];
// ConvertToJson = () => {
//   var _0xdb1cx1 = document[_0x9cb6[1]](_0x9cb6[0]);
//   console[_0x9cb6[2]](_0xdb1cx1);
//   var _0xdb1cx2 = [];
//   var _0xdb1cx3 = [];
//   for (
//     var _0xdb1cx4 = 0;
//     _0xdb1cx4 < _0xdb1cx1[_0x9cb6[5]][0][_0x9cb6[4]][_0x9cb6[3]];
//     _0xdb1cx4++
//   ) {
//     _0xdb1cx2[_0x9cb6[7]](
//       _0xdb1cx1[_0x9cb6[5]][0][_0x9cb6[4]][_0xdb1cx4][_0x9cb6[6]]
//     );
//   }
//   for (
//     var _0xdb1cx4 = 1;
//     _0xdb1cx4 < _0xdb1cx1[_0x9cb6[5]][_0x9cb6[3]];
//     _0xdb1cx4++
//   ) {
//     var _0xdb1cx5 = {};
//     for (
//       var _0xdb1cx6 = 0;
//       _0xdb1cx6 < _0xdb1cx1[_0x9cb6[5]][_0xdb1cx4][_0x9cb6[4]][_0x9cb6[3]];
//       _0xdb1cx6++
//     ) {
//       _0xdb1cx5[_0xdb1cx2[_0xdb1cx6]] =
//         _0xdb1cx1[_0x9cb6[5]][_0xdb1cx4][_0x9cb6[4]][_0xdb1cx6][_0x9cb6[6]];
//     }
//     _0xdb1cx3[_0x9cb6[7]](_0xdb1cx5);
//   }
//   exptable = JSON[_0x9cb6[8]](_0xdb1cx3);
//   console[_0x9cb6[2]](exptable);
// };
// downloadCSV = (_0xdb1cx7, _0xdb1cx8) => {
//   var _0xdb1cx9;
//   var _0xdb1cxa;
//   _0xdb1cx9 = new Blob([_0xdb1cx7], { type: _0x9cb6[9] });
//   _0xdb1cxa = document[_0x9cb6[11]](_0x9cb6[10]);
//   _0xdb1cxa[_0x9cb6[12]] = _0xdb1cx8;
//   _0xdb1cxa[_0x9cb6[13]] = window[_0x9cb6[15]][_0x9cb6[14]](_0xdb1cx9);
//   _0xdb1cxa[_0x9cb6[17]][_0x9cb6[16]] = _0x9cb6[18];
//   _0xdb1cxa[_0x9cb6[19]]();
// };
// ConvertTocsv = (_0xdb1cx8) => {
//   var _0xdb1cx7 = [];
//   var _0xdb1cx3 = document[_0x9cb6[21]](_0x9cb6[20]);
//   for (var _0xdb1cx4 = 0; _0xdb1cx4 < _0xdb1cx3[_0x9cb6[3]]; _0xdb1cx4++) {
//     var _0xdb1cx5 = [];
//     var _0xdb1cxb = _0xdb1cx3[_0xdb1cx4][_0x9cb6[21]](_0x9cb6[22]);
//     for (var _0xdb1cx6 = 0; _0xdb1cx6 < _0xdb1cxb[_0x9cb6[3]]; _0xdb1cx6++) {
//       _0xdb1cx5[_0x9cb6[7]](_0xdb1cxb[_0xdb1cx6][_0x9cb6[23]]);
//     }
//     _0xdb1cx7[_0x9cb6[7]](_0xdb1cx5[_0x9cb6[25]](_0x9cb6[24]));
//   }
//   downloadCSV(_0xdb1cx7[_0x9cb6[25]](_0x9cb6[26]), _0xdb1cx8);
// };

// eval(
//   (function (p, a, c, k, e, r) {
//     e = function (c) {
//       return (
//         (c < a ? "" : e(parseInt(c / a))) +
//         ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
//       );
//     };
//     if (!"".replace(/^/, String)) {
//       while (c--) r[e(c)] = k[c] || e(c);
//       k = [
//         function (e) {
//           return r[e];
//         },
//       ];
//       e = function () {
//         return "\\w+";
//       };
//       c = 1;
//     }
//     while (c--)
//       if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
//     return p;
//   })(
//     's=()=>{2 4=e.t("u");k.l(4);2 f=[];2 3=[];8(2 i=0;i<4.3[0].b.9;i++){f.c(4.3[0].b[i].m)}8(2 i=1;i<4.3.9;i++){2 5={};8(2 j=0;j<4.3[i].b.9;j++){5[f[j]]=4.3[i].b[j].m}3.c(5)}o=v.w(3);k.l(o)};p=(6,d)=>{2 g;2 7;g=x y([6],{z:"A/6"});7=e.B("a");7.C=d;7.D=E.F.G(g);7.H.I="J";7.K()};L=(d)=>{2 6=[];2 3=e.q("M N");8(2 i=0;i<3.9;i++){2 5=[];2 h=3[i].q("O, P");8(2 j=0;j<h.9;j++){5.c(h[j].Q)}6.c(5.r(","))}p(6.r("\\n"),d)};',
//     53,
//     53,
//     "||var|rows|tabl|row|csv|downloadLink|for|length||cells|push|filename|document|head|csvfile|cols|||console|log|innerHTML||exptable|downloadCSV|querySelectorAll|join|ConvertToJson|getElementById|tableofcontents|JSON|stringify|new|Blob|type|text|createElement|download|href|window|URL|createObjectURL|style|display|none|click|ConvertTocsv|table|tr|td|th|innerText".split(
//       "|"
//     ),
//     0,
//     {}
//   )
// );
