Telegram.WebApp.ready();
const user = Telegram.WebApp.initDataUnsafe.user;
document.getElementById('username').innerText = user.first_name;