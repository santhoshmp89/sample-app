window.addEventListener("pagehide", function () {
  console.log("[pagehide] URL:", window.location.href);
});

window.addEventListener("pageshow", function () {
  console.log("[pageshow] URL:", window.location.href);
});

// window.addEventListener("beforeunload", function () {
//   console.log("[beforeunload] URL:", window.location.href);
// });

// document.addEventListener("visibilitychange", () => {
//   console.log(`[visibilitychange] State: ${document.visibilityState}`);
// });
