document.addEventListener('DOMContentLoaded', setSwitchTheme);
const darkTheme = window.document.getElementsByTagName('body')[0]; // get current theme
const toggle = document.getElementsByClassName('switch__input')[0]; // get switch input
const storedDark = localStorage.getItem('darkMode'); // get stored theme, if any
const prefersDark = localStorage.getItem('darkMode') != null
        ? localStorage.getItem('darkMode')
        : window.matchMedia('(prefers-color-scheme: dark)').matches;

function setSwitchTheme() {
  console.log("Toggle checked: ", toggle.checked);
  console.log("Stored dark: ", storedDark);
    if (toggle.checked || prefersDark) {
        setTheme(true);
    } else {
        setTheme(false);
    }
}
function setTheme(mode) {
    if (mode) {
      darkTheme.classList.add('dark-mode');
      toggle.setAttribute('checked', true);
        setTimeout(function () {
            localStorage.setItem('darkMode', true);
        }, 100);
        //
    } else if (!mode) {
      darkTheme.classList.remove('dark-mode');
      toggle.setAttribute('checked', false);
        setTimeout(function () {
            localStorage.setItem('darkMode', false);
        }, 100);
    }
}

if (prefersDark !== null && prefersDark == 'true') {
    darkTheme.classList.add('dark-mode');
     toggle.setAttribute('checked', true);
} else {
    darkTheme.classList.remove('dark-mode');
   toggle.setAttribute('checked', false);
}
