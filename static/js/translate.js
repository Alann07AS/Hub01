var userLang = (navigator.languages || navigator.userLanguages)[0].split("-")[0];

var translations = document.getElementById('translations_login_content').innerHTML;
console.log(translations);
var translationsObj = JSON.parse(translations);

var to_translates = document.getElementsByClassName("translate");

for (const to_t of to_translates) {
    
    to_t.textContent = translationsObj[to_t.id][userLang] || to_t.textContent;

}
