// CSP가 허용하는 같은 출처의 외부 스크립트입니다. 앱과 CSS보다 먼저 실행합니다.
// 배포 시 내용 해시가 붙은 assets/bootstrap-*.js로 내보냅니다(/vite.config.js).
(function () {
  // X 안드로이드 웹뷰는 막대를 화면 위에 덮습니다. 해당 UA에만 X 여백과 안내를 적용합니다.
  if (/TwitterAndroid/.test(navigator.userAgent)) document.documentElement.classList.add('in-app-x');
  // 저장된 화면 테마는 /src/theme.js와 같은 규칙으로 첫 화면부터 적용합니다.
  var theme = 'dark';
  try {
    var saved = JSON.parse(localStorage.getItem('atelier.theme.v1') || 'null') || {};
    if (saved.system === true) theme = window.matchMedia && matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    else if (saved.mode === 'light') theme = 'light';
  } catch (error) {}
  document.documentElement.setAttribute('data-theme', theme);
  if (theme === 'light') document.querySelector('meta[name="theme-color"]').setAttribute('content', '#f6f3fa');
})();
