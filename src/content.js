import browser from "webextension-polyfill";

// Mevcut sekme bilgilerini al
browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
    console.log("Active Tab URL:", tabs[0].url);
}).catch(error => {
    console.error("Error querying tabs:", error);
});
