(function () {
  console.log("VARIABLE DE CONTROL : " + window.__LAYOUT_SCRIPT_EXECUTED__)
  if (window.__LAYOUT_SCRIPT_EXECUTED__) return;
  window.__LAYOUT_SCRIPT_EXECUTED__ = true;
  console.log("Testing layout.js ... " + window.__LAYOUT_SCRIPT_EXECUTED__ + "  --  "  + Math.floor(Math.random() * 100000));
})();
