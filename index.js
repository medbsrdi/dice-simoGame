
function RefreshMyPage(){
  var result = Math.floor(Math.random(6)*6+1);
  var result2 = Math.floor(Math.random(6)*6+1);
  //
  // alert("Playr 1:"+result+" Player 2: "+result2);

  if(result != result2){
    var textImage1 = "img/dice"+result+".png";
    var textImage2 = "img/dice"+result2+".png";
    if(result>result2){
        document.querySelector("h1").innerHTML = "Player One Win!";
        document.querySelector("h1").setAttribute('style','color:red;');
    }else if (result<result2) {
      document.querySelector("h1").innerHTML = "Player Two Win!";
      document.querySelector("h1").setAttribute('style','color:red;');
    }else{
      document.querySelector("h1").innerHTML = "Draw !!";
      document.querySelector("h1").setAttribute('style','color:green;');
    }
    document.getElementById('img-one').src=textImage1;
    document.getElementById('img-two').src=textImage2;
    setTimeout(window.location.replace("#title-loc"),5000);
  }
}
