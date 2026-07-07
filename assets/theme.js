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

  // Shared search overlay: expands from the top and pushes page content down.
  // Multiple headers (transparent/solid) share data-search-toggle buttons that
  // all open the same single overlay.
  var searchPanel = document.querySelector('[data-search-panel]');
  var searchToggles = document.querySelectorAll('[data-search-toggle]');

  function setToggleState(active) {
    searchToggles.forEach(function (toggle) {
      toggle.classList.toggle('is-active', active);
    });
  }

  function openSearch() {
    if (!searchPanel) return;
    var pushHeight = searchPanel.scrollHeight;
    document.documentElement.style.setProperty('--search-push', pushHeight + 'px');
    searchPanel.classList.add('is-open');
    setToggleState(true);
    var input = searchPanel.querySelector('input[type="search"]');
    // Avoid focus-triggered scrolling: the panel is fixed and already fully
    // visible, so a plain focus() (no scroll) keeps the viewport in place.
    if (input) input.focus({ preventScroll: true });
  }

  function closeSearch() {
    if (!searchPanel) return;
    searchPanel.classList.remove('is-open');
    setToggleState(false);
    document.documentElement.style.setProperty('--search-push', '0px');
  }

  function isSearchOpen() {
    return searchPanel && searchPanel.classList.contains('is-open');
  }

  searchToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      if (isSearchOpen()) {
        closeSearch();
      } else {
        openSearch();
      }
    });
  });

  // Close on click outside the panel and its toggle buttons
  document.addEventListener('click', function (e) {
    if (!isSearchOpen()) return;
    var clickedToggle = e.target.closest('[data-search-toggle]');
    var clickedInsidePanel = searchPanel && searchPanel.contains(e.target);
    if (!clickedToggle && !clickedInsidePanel) {
      closeSearch();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isSearchOpen()) closeSearch();
  });

  // Solid header (homepage only) slides in once scrolled past the threshold
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
