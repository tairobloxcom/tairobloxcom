(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    // Expand/collapse long intro
    document.querySelectorAll('.custom-view-more-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.querySelector('.custom-view-more');
        if (!target) return;
        target.classList.toggle('is-expanded');
        var span = btn.querySelector('span') || btn;
        span.textContent = target.classList.contains('is-expanded') ? 'Thu gọn' : 'Xem thêm';
      });
    });

    // Render star ratings from data-stars
    document.querySelectorAll('.rating[data-stars]').forEach(function (el) {
      var value = parseFloat(el.getAttribute('data-stars') || '0');
      var full = Math.round(Math.max(0, Math.min(5, value)));
      var html = '';
      for (var i = 1; i <= 5; i++) {
        html += '<span class="star' + (i > full ? ' empty' : '') + '">★</span>';
      }
      el.innerHTML = html;
      el.setAttribute('aria-label', value + ' sao');
    });

    // Desktop dropdown click support
    document.querySelectorAll('.has-dropdown > a').forEach(function (link) {
      link.addEventListener('click', function (e) {
        if (window.innerWidth < 850) return;
        var li = link.parentElement;
        if (!li) return;
        if (link.getAttribute('href') === '#' || li.querySelector('.sub-menu, .nav-dropdown')) {
          e.preventDefault();
          li.classList.toggle('is-open');
        }
      });
    });

    // Lightweight mobile menu fallback
    var menuBtn = document.querySelector('.nav-icon a, a[aria-label="Menu"]');
    if (menuBtn && !document.querySelector('.github-mobile-panel')) {
      var overlay = document.createElement('div');
      overlay.className = 'github-mobile-overlay';
      var panel = document.createElement('nav');
      panel.className = 'github-mobile-panel';
      panel.setAttribute('aria-label', 'Menu mobile');
      var close = document.createElement('button');
      close.className = 'github-close';
      close.textContent = 'Đóng menu';
      panel.appendChild(close);

      document.querySelectorAll('.header-nav-main .nav-top-link').forEach(function (a) {
        var clone = a.cloneNode(true);
        clone.querySelectorAll('i').forEach(function (i) { i.remove(); });
        panel.appendChild(clone);
      });

      document.body.appendChild(overlay);
      document.body.appendChild(panel);

      function openMenu(e) {
        e.preventDefault();
        overlay.classList.add('is-active');
        panel.classList.add('is-active');
      }
      function closeMenu() {
        overlay.classList.remove('is-active');
        panel.classList.remove('is-active');
      }
      menuBtn.addEventListener('click', openMenu);
      overlay.addEventListener('click', closeMenu);
      close.addEventListener('click', closeMenu);
    }
  });
})();