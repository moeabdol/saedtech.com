const year = new Date().getFullYear();
const yearSpan = document.getElementById('credits-year');
if (yearSpan) yearSpan.innerText = year.toString();
