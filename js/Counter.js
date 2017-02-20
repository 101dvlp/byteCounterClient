function clientName(){
  // バイト数を取得する
  var str = document.getElementById("clientNameText").value;
  var count = charcount(str);
  document.getElementById("clientByte").innerHTML = count;
  console.log("クライアント略称のバイト数 = " + count);
  // 文字数を比較する
  var maxClient = 40;
  if( parseInt(count) > parseInt(maxClient) ){
    document.getElementById("clientResult").style.color = "#b71c1c";
    document.getElementById("clientResult").innerHTML = "NG";
  } else {
    document.getElementById("clientResult").innerHTML = "OK";
  }
}

function chargeName(){
  // バイト数を取得する
  var str = document.getElementById("chargeNameText").value;
  var count = charcount(str);
  document.getElementById("chargeByte").innerHTML = count;
  console.log("請求先名のバイト数 = " + count);
  // 文字数を比較する
  var maxCharge = 40;
  if( parseInt(count) > parseInt(maxCharge) ){
    document.getElementById("chargeResult").style.color = "#b71c1c";
    document.getElementById("chargeResult").innerHTML = "NG";
  } else {
    document.getElementById("chargeResult").innerHTML = "OK";
  }

}

// バイト数カウント
var charcount = function (str) {
  len = 0;
  str = escape(str);
  for (i=0;i<str.length;i++,len++) {
    if (str.charAt(i) == "%") {
      if (str.charAt(++i) == "u") {
        i += 3;
        len++;
      }
      i++;
    }
  }
  return len;
}

