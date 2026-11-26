(function () {
  var eyes = document.querySelectorAll('img[src$="eye.png"]');
  if (!eyes.length) return;
  var fields = ["passwordInput", "confermPasswordInput"].map(function (i) { return document.getElementById(i); }).filter(Boolean);
  function sync(on) {
    fields.forEach(function (f) { f.type = on ? "text" : "password"; });
    eyes.forEach(function (e) { e.setAttribute("aria-pressed", on ? "true" : "false"); e.setAttribute("aria-label", on ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"); });
  }
  var on = false;
  function flip() { on = !on; sync(on); }
  eyes.forEach(function (e) {
    e.removeAttribute("onclick");
    e.setAttribute("role", "button"); e.setAttribute("tabindex", "0");
    e.style.cursor = "pointer";
    e.addEventListener("click", flip);
    e.addEventListener("keydown", function (ev) { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); flip(); } });
  });
  sync(false);
})();
