// window.addEventListener("pagehide", function () {
//   alert("[pagehide] URL:", window.location.href);
//   // console.log("[pageshow] URL:", window.location.href);
//   // window.location = "http://www.google.com";
// });

window.addEventListener("pagehide", function () {
  const data = {
    event: "page_unload",
    url: window.location.href,
    timestamp: Date.now()
  };

  const blob = new Blob([JSON.stringify(data)], { type: "application/json" });

  navigator.sendBeacon("/log", blob); // Replace with your server endpoint
});

// window.addEventListener("pageshow", function () {
//   console.log("[pageshow] URL:", window.location.href);
// });

// window.addEventListener("beforeunload", function () {
//   console.log("[beforeunload] URL:", window.location.href);
// });

// document.addEventListener("visibilitychange", () => {
//   console.log(`[visibilitychange] State: ${document.visibilityState}`);
// });
