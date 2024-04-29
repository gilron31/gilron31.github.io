sidebar_state = 'open';
sidebar_width = '150px';

function toggleNav() {
  if (sidebar_state == 'open') {
    document.getElementById('mySidebar').style.width = sidebar_width;
    document.getElementById('main').style.marginLeft = sidebar_width;
    sidebar_state = 'closed';
  } else if (sidebar_state == 'closed') {
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    sidebar_state = 'open';
  } else {
    console.log('Error: ' + sidebar_state);
  }
}

// The locale our app first shows
const defaultLocale = 'en';
// The active locale
let locale;
// Gets filled with active locale translations
let translations = {};
// When the page content is ready...
document.addEventListener('DOMContentLoaded', () => {
  // Translate the page to the default locale
  setLocale(defaultLocale);
});
// Load translations for the given locale and translate
// the page to this locale

async function setLocale(newLocale) {
  if (newLocale === locale) return;
  const newTranslations = await fetchTranslationsFor(
      newLocale,
  );
  locale = newLocale;
  translations = newTranslations;
  // Set <html dir> attribute
  document.documentElement.dir = dir(newLocale);
  // Not necessary for direction flow, but for good measure...
  document.documentElement.lang = newLocale;
  translatePage();
}
// ...
function dir(locale) {
  return locale === 'he' ? 'rtl' : 'ltr';
}

// Retrieve translations JSON object for the given
// locale over the network
async function fetchTranslationsFor(newLocale) {
  const response = await fetch(`/translations/${newLocale}.json`);
  return await response.json();
}
// Replace the inner text of each element that has a
// data-i18n-key attribute with the translation corresponding
// to its data-i18n-key
function translatePage() {
  document.querySelectorAll('[data-i18n-key]').forEach(translateElement);
}
// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key
function translateElement(element) {
  const key = element.getAttribute('data-i18n-key');
  const translation = translations[key];
  element.innerText = translation;
}


function toggleLang() {
  const langbtn = document.querySelector('[langbtn]');
  if (locale == 'en') {
    setLocale('he')
    langbtn.textContent = 'EN';
  } else if (locale == 'he') {
    setLocale('en')
    langbtn.textContent = 'HE';
  } else {
    console.log('Error: ' + locale + ' is not supported');
  }
}