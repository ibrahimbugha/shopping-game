var userMoney = Number(localStorage.getItem("score456566"))

console.log("your money");

console.log(userMoney);

function first(){
    userMoney+=1
    console.log(userMoney)
    document.getElementById('txt').innerHTML = userMoney
    document.getElementById('audio').src = 'MONEY SOUND EFFECT !!.mp4'
    return ch ()
}
function two(){
    userMoney+=2
    console.log(userMoney)
    document.getElementById('txt').innerHTML = userMoney
    document.getElementById('audio').src = 'MONEY SOUND EFFECT !!.mp4'
    return ch ()
}
function three(){
    userMoney+=3
    console.log(userMoney)
    document.getElementById('txt').innerHTML = userMoney
    document.getElementById('audio').src = 'MONEY SOUND EFFECT !!.mp4'
    return ch ()
}
function four(){
    userMoney+=4
    console.log(userMoney)
    document.getElementById('txt').innerHTML = userMoney
    document.getElementById('audio').src = 'MONEY SOUND EFFECT !!.mp4'
    return ch ()
}
function five(){
    userMoney+=5
    console.log(userMoney)
    document.getElementById('txt').innerHTML = userMoney
    document.getElementById('audio').src = 'MONEY SOUND EFFECT !!.mp4'
    return ch ()
}
function six(){
    userMoney+=6
    console.log(userMoney)
    document.getElementById('txt').innerHTML = userMoney
    document.getElementById('audio').src = 'MONEY SOUND EFFECT !!.mp4'
    return ch ()
}
function seven(){
    userMoney+=7
    console.log(userMoney)
    document.getElementById('txt').innerHTML = userMoney
    document.getElementById('audio').src = 'MONEY SOUND EFFECT !!.mp4'
    return ch ()
}
function eight(){
    userMoney+=8
    console.log(userMoney)
    document.getElementById('txt').innerHTML = userMoney
    document.getElementById('audio').src = 'MONEY SOUND EFFECT !!.mp4'
    return ch ()
}
function nine(){
    userMoney+=9
    console.log(userMoney)
    document.getElementById('txt').innerHTML = userMoney
    document.getElementById('audio').src = 'MONEY SOUND EFFECT !!.mp4'
    return ch ()
}
function ten(){
    userMoney+=10
    console.log(userMoney)
    document.getElementById('txt').innerHTML = userMoney
    document.getElementById('audio').src = 'MONEY SOUND EFFECT !!.mp4'
    return ch ()
}
function zero(){
    userMoney=0
    console.log(userMoney)
    document.getElementById('txt').innerHTML = userMoney
    document.getElementById('audio').src = 'sound effect __ fail joke sound effect, funny sound effect.mp3'
    return ch ()
}
var xe =0
function double(){
    userMoney*=2
    console.log(userMoney)
    document.getElementById('txt').innerHTML = userMoney
    document.getElementById('audio').src = 'Victory Sound Effect.mp4'
    return ch ()
}
function dob() {
    var xe = Number(document.getElementById("xe").value)

var txt = userMoney*=xe
console.log(userMoney)
    document.getElementById('txt').innerHTML = userMoney
    document.getElementById('audio').src = 'Victory Sound Effect.mp4'
    return ch ()
}
function div() {
    var di = Number(document.getElementById("di").value)

var txt = userMoney/=di
console.log(userMoney)
    document.getElementById('txt').innerHTML = userMoney
    document.getElementById('audio').src = 'sound effect __ fail joke sound effect, funny sound effect.mp3'
    return ch ()
}
function pls() {
    var pl = Number(document.getElementById("pl").value)

var txt = userMoney+=pl
console.log(userMoney)
    document.getElementById('txt').innerHTML = userMoney
    document.getElementById('audio').src = 'MONEY SOUND EFFECT !!.mp4'
    return ch ()
}
function dec() {
    var de = Number(document.getElementById("de").value)

var txt = userMoney-=de
console.log(userMoney)
    document.getElementById('txt').innerHTML = userMoney
    document.getElementById('audio').src = 'Spongebob Sad - Sound Effect(HD).mp4'
     ch ()
}

function ch () {

    localStorage.setItem('score456566',userMoney)
}
function checkCode() {
    var enteredCode = document.getElementById('secretCode').value;
    var correctCode = "ibrahimistheking";  // Define your correct code here

    if (enteredCode === correctCode) {
        var txt = userMoney+=1000
        document.getElementById('txt').innerHTML = userMoney
ch()
    document.getElementById('audio').src = 'Victory Sound Effect.mp4'
    } else {
    document.getElementById('audio').src = 'Are You Cheating - Sound Effect (1).mp4'
    var txt = userMoney-=500
    document.getElementById('txt').innerHTML = userMoney
    ch ()
    }
}

// دالة لعرض لوحة النتائج
function loadLeaderboard() {
    fetch('https://script.google.com/macros/s/AKfycbzwKz5qp7y2fm7H9iAeBTSW454B-RZ48IeOW4a-2cuf5qqqHBtHIR9gygkOYBqq6PHb/exec')
      .then(response => response.json())
      .then(data => {
        const leaderboard = document.getElementById('leaderboard');
        leaderboard.innerHTML = ''; // مسح أي محتوى قديم
        data.forEach((player, index) => {
          const li = document.createElement('li');
          li.textContent = `${index + 1}. ${player[0]} - ${player[1]}`;
          leaderboard.appendChild(li);
        });
      })
      .catch(error => console.error('Error:', error));
  }
  
  // دالة لتحديث الرصيد في Google Sheets
  function updateScore(username, score) {
    fetch('https://script.google.com/macros/s/AKfycbzwKz5qp7y2fm7H9iAeBTSW454B-RZ48IeOW4a-2cuf5qqqHBtHIR9gygkOYBqq6PHb/exec', {
      method: 'POST',
      body: new URLSearchParams({
        'username': username,
        'score': score
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
    .then(response => response.text())
    .then(() => loadLeaderboard())
    .catch(error => console.error('Error:', error));
  }
  
  // مثال لاستخدامها بعد كل نقرة
  document.getElementById('first').onclick = function() {
    let userMoney = Number(localStorage.getItem("score456566"));
    userMoney += 1; // زيادة الرصيد
    localStorage.setItem("score456566", userMoney);
    
    // تحديث Google Sheets
    updateScore('PlayerName', userMoney); // استبدل "PlayerName" باسم اللاعب الفعلي
  }
  
// هيك زبط ؟