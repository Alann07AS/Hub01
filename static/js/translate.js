import { translates } from "../translation/fr.tl";

export function trad() {
    var userLang = (navigator.languages || navigator.userLanguages)[0].split("-")[0];
    userLang = "fr" 
    var translations = translates;

    // var to_translates = document.getElementsByClassName("translate");
    var to_translates = document.querySelectorAll('[tl]');
    console.log(to_translates);

    for (const to_t of to_translates) {
        to_t.textContent = translations[to_t.tl][userLang] || to_t.textContent;
    }

}