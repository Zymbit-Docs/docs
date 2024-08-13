const darkTheme = window.document.getElementsByTagName('body')[0];
const toggle = document.getElementsByClassName('switch__input')[0];


function setTheme(mode) {
    if (mode) {
      darkTheme.classList.add('dark-mode');
      setTimeout(function () {
        localStorage.setItem('darkMode', true);
    }, 100);
      //
    } else if (!mode) {
      darkTheme.classList.remove('dark-mode');
      setTimeout(function () {
        localStorage.setItem('darkMode', false);
    }, 100);
    }
}

const prefersDark =
    localStorage.getItem('darkMode') != null
        ? localStorage.getItem('darkMode')
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDark != null && prefersDark == 'true') {
  darkTheme.classList.add('dark-mode');
  toggle.setAttribute('checked', true);
} else {
  darkTheme.classList.remove('dark-mode');
  toggle.setAttribute('checked', false);
}

