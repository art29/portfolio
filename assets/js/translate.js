let available_languages = ["fr", "en"];
let default_language = "en";

function applyStrings(language) {

    let lang;

    if (language != null ){
        if(available_languages.includes(language.substr(0, 2))) {
            lang = language.substr(0, 2);
        }
    } else {
        if(available_languages.includes(window.navigator.language.substr(0, 2))) {
            lang = window.navigator.language.substr(0, 2);
        }
    }

    if(lang === null) {
        lang = default_language;
    }

    document.querySelectorAll(`[data-lang]`).forEach(element => {
        let key = element.getAttribute('data-lang');

        if (key) {
            element.textContent = langdata.languages[lang].strings[key];
        }
    });
}

let url_params = new URLSearchParams(window.location.search);
applyStrings(url_params.get('lang'));