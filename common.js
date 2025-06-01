window.addEventListener("pagehide", function () {
  alert("[pagehide] URL:", window.location.href);
  // console.log("[pageshow] URL:", window.location.href);
  window.location = "http://www.google.com";
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
