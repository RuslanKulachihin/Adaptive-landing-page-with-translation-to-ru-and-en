const select = document.querySelector('select');
const allLang = ['en', 'ru'];

select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  console.log(hash);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#ru';
    location.reload();
    console.log(hash);
  }
  select.value = hash;
  document.querySelector('title').innerHTML = langArr['unit'][hash];
  document.getElementById('search').placeholder = langArr['searchs'][hash];
  for (let key in langArr) {
    let elem = document.querySelector('.lng-' + key);
    console.log(hash);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
      console.log(hash);
    }
  }
}

changeLanguage();
