function showRequirements(popupId) {
  document.getElementById("popup-" + popupId).style.display = "block";
}

// JavaScript function to close the popup
function closePopup(popupId) {
  document.getElementById("popup-" + popupId).style.display = "none";
}
function translateElementById(elementId, translations, lang) {
  const element = document.getElementById(elementId);
  if (element && translations[lang][elementId]) {
    element.textContent = translations[lang][elementId];
  }
}
