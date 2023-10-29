
  var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
//Đồng hồ đếm ngược
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  initializeClock('clockdiv', deadline);

  let accounts =[];
function register() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
      const existingAccount = accounts.find(account => account.username === username);

      if (existingAccount) {
        alert('Username đã tồn tại. Vui lòng chọn username khác.');
        } else {
            const account = { username, password };
            accounts.push(account);
            localStorage.setItem('accounts', JSON.stringify(accounts));
            alert('Đăng ký thành công!');
        }
    } else {
        alert('Vui lòng nhập username và password.');
    }
}
document.addEventListener('DOMContentLoaded', function() {
  const loginStatusElement = document.getElementById('loginStatus');//!*!
  
  const isLoggedIn = true; //kiểm tra logic đăng nhập thực tế
  
  if (isLoggedIn) {
      // Nếu đã đăng nhập, hiển thị tên người dùng
      const username = ''; // 
      loginStatusElement.textContent = `Xin chào, ${username}!`;
  } else {
      // Nếu chưa đăng nhập, hiển thị nút đăng nhập
      const loginLink = document.createElement('a');
      loginLink.href = '#';
      loginLink.textContent = 'Đăng nhập';
      loginStatusElement.appendChild(loginLink);
  }
});

function login() {
  const enteredUsername = document.getElementById('username').value;
  const enteredPassword = document.getElementById('password').value;

  if (enteredUsername && enteredPassword) {
      const loggedInAccount = accounts.find(account => 
          account.username === enteredUsername && account.password === enteredPassword
      );

      if (loggedInAccount) {
          alert('Đăng nhập thành công!');
      } else {
          alert('Sai tên đăng nhập hoặc mật khẩu.');
      }
  } else {
      alert('Vui lòng nhập tên đăng nhập và mật khẩu.');
  }
}
const weather = document.getElementById('weather')

const weather_report = document.createElement('div')

weather_report.textContent = 'Phan tu'


weather.addEventListener('mouseenter', function(){
    weather.appendChild(weather_report)
})


weather.addEventListener('mouseleave', function() {
    if(weather.contains(weather_report)) {
        weather.removeChild(weather_report)
    }
})






const weather1 = document.getElementById('weather1')

const weather1_report = document.createElement('div')

weather1_report.textContent = 'con me may'

weather1.addEventListener('mouseenter', function(){
    weather1.appendChild(weather1_report)
})


weather1.addEventListener('mouseleave', function() {
    if(weather1.contains(weather1_report)) {
        weather1.removeChild(weather1_report)
    }
})
