(function () {
  var inp = document.getElementById("passwordInput");
  var box = document.getElementById("pwMeter");
  if (!inp || !box) return;
  var bar = document.createElement("div"); bar.className = "pw-bar"; bar.setAttribute("aria-hidden", "true");
  var fill = document.createElement("span"); bar.appendChild(fill);
  var txt = document.createElement("div"); txt.className = "pw-txt"; txt.setAttribute("aria-live", "polite");
  box.appendChild(bar); box.appendChild(txt);
  var L = [["", "#d1d5db", 0], ["ضعيفة جدا", "#c62828", 20], ["ضعيفة", "#e65100", 40], ["متوسطة", "#d98a00", 60], ["قوية", "#2e9e5b", 80], ["قوية جدا", "#1b7f45", 100]];
  function score(p) {
    if (!p) return 0;
    var s = 0;
    if (p.length >= 8) s++;
    if (p.length >= 12) s++;
    if (/[a-z]/.test(p) && /[A-Z]/.test(p)) s++;
    if (/\d/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    if (/^(.)\1+$/.test(p) || /^(password|passw0rd|12345678|123456789|1234567890|qwertyui|qwerty123|abcdefgh|iloveyou|00000000)$/i.test(p)) s = 1;
    return Math.max(1, Math.min(5, s));
  }
  function upd() {
    var l = L[score(inp.value)];
    fill.style.width = l[2] + "%"; fill.style.background = l[1];
    txt.textContent = l[0] ? "قوة كلمة المرور: " + l[0] : "";
  }
  inp.addEventListener("input", upd);
  upd();
})();
