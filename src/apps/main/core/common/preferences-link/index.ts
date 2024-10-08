import scriptURL from "./script.ts?url";

export function init() {
  Services.obs.addObserver((window) => {
    const document = window.document as Document;
    //console.error(document.location.href);
    if (document.location?.href.startsWith("about:preferences")) {
      Services.scriptloader.loadSubScript(
        "chrome://noraneko-startup/content/about-preferences.js",
        window,
      );
    }
  }, "chrome-document-global-created");
}
