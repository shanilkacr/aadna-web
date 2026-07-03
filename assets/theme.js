document.addEventListener('DOMContentLoaded', function () {
  // Cart drawer
  var cartDrawer = document.getElementById('CartDrawer');
  var cartToggles = document.querySelectorAll('[data-cart-toggle]');
  var cartCloses = document.querySelectorAll('[data-cart-drawer-close]');

  function openCart() {
    if (cartDrawer) cartDrawer.classList.add('is-open');
  }
  function closeCart() {
    if (cartDrawer) cartDrawer.classList.remove('is-open');
  }
  cartToggles.forEach(function (el) { el.addEventListener('click', openCart); });
  cartCloses.forEach(function (el) { el.addEventListener('click', closeCart); });

  // Mobile nav (each header instance has its own toggle/nav pair)
  document.querySelectorAll('[data-menu-toggle]').forEach(function (menuToggle) {
    var nav = menuToggle.closest('.site-header__inner').querySelector('[data-nav]');
    if (nav) {
      menuToggle.addEventListener('click', function () {
        nav.classList.toggle('is-open');
      });
    }
  });

  // Search panel (each header instance has its own toggle/panel pair)
  document.querySelectorAll('[data-search-toggle]').forEach(function (searchToggle) {
    var header = searchToggle.closest('.site-header');
    var searchPanel = header ? header.querySelector('[data-search-panel]') : null;
    if (searchPanel) {
      searchToggle.addEventListener('click', function () {
        searchPanel.hidden = !searchPanel.hidden;
        searchPanel.classList.toggle('is-open');
      });
    }
  });

  // Solid header slides in once scrolled past the threshold
  var solidHeader = document.querySelector('[data-header-solid]');
  if (solidHeader) {
    var scrollThreshold = 120;
    function updateHeaderState() {
      solidHeader.classList.toggle('is-visible', window.scrollY > scrollThreshold);
    }
    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
  }

  // Product thumbnails
  document.querySelectorAll('[data-thumbnail]').forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      var main = document.getElementById('ProductMainImage');
      if (main) main.src = thumb.dataset.full;
    });
  });

  // Cart add via fetch (progressive enhancement, falls back to normal form submit)
  document.querySelectorAll('form[action^="/cart/add"]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      if (!window.fetch) return;
      e.preventDefault();
      var formData = new FormData(form);
      fetch('/cart/add.js', { method: 'POST', body: formData })
        .then(function (res) { return res.json(); })
        .then(function () { window.location.reload(); })
        .catch(function () { form.submit(); });
    });
  });
});
