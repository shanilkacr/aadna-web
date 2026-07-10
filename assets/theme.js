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

  // Mobile menu drawer: slides in from the left, shared by all header instances
  var menuDrawer = document.getElementById('MenuDrawer');
  function closeMenuDrawer() {
    if (!menuDrawer) return;
    menuDrawer.classList.remove('is-open');
    menuDrawer.setAttribute('aria-hidden', 'true');
  }
  document.querySelectorAll('[data-menu-toggle]').forEach(function (menuToggle) {
    menuToggle.addEventListener('click', function () {
      if (!menuDrawer) return;
      menuDrawer.classList.add('is-open');
      menuDrawer.setAttribute('aria-hidden', 'false');
    });
  });
  document.querySelectorAll('[data-menu-drawer-close]').forEach(function (el) {
    el.addEventListener('click', closeMenuDrawer);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenuDrawer();
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

  // Predictive search: live product suggestions (image, title, price) fetched
  // from Shopify via the Section Rendering API as the user types.
  var predictiveInput = searchPanel ? searchPanel.querySelector('[data-predictive-input]') : null;
  var predictiveResults = searchPanel ? searchPanel.querySelector('[data-predictive-results]') : null;

  function updateSearchPush() {
    if (!isSearchOpen()) return;
    document.documentElement.style.setProperty('--search-push', searchPanel.scrollHeight + 'px');
  }

  if (predictiveInput && predictiveResults) {
    var predictiveUrl = predictiveResults.dataset.predictiveUrl || '/search/suggest';
    var debounceTimer = null;
    var lastQuery = '';

    function clearPredictive() {
      predictiveResults.innerHTML = '';
      predictiveResults.hidden = true;
      updateSearchPush();
    }

    predictiveInput.addEventListener('input', function () {
      var query = predictiveInput.value.trim();
      clearTimeout(debounceTimer);
      if (query.length < 2) {
        lastQuery = '';
        clearPredictive();
        return;
      }
      debounceTimer = setTimeout(function () {
        if (query === lastQuery) return;
        lastQuery = query;
        fetch(predictiveUrl + '?q=' + encodeURIComponent(query) + '&resources[type]=product&section_id=predictive-search')
          .then(function (res) { return res.text(); })
          .then(function (html) {
            if (predictiveInput.value.trim() !== query) return;
            var doc = new DOMParser().parseFromString(html, 'text/html');
            var inner = doc.querySelector('[data-predictive-results-inner]');
            if (inner) {
              predictiveResults.innerHTML = '';
              predictiveResults.appendChild(inner);
              predictiveResults.hidden = false;
            } else {
              clearPredictive();
            }
            updateSearchPush();
          })
          .catch(function () { clearPredictive(); });
      }, 250);
    });
  }

  // Mega menu: full-width panel per header instance, opened with hover intent
  // on the trigger nav item; a short close delay lets the cursor travel from
  // the link down into the panel without it flickering shut.
  document.querySelectorAll('.site-header').forEach(function (header) {
    var trigger = header.querySelector('[data-mega-trigger]');
    var panel = header.querySelector('[data-mega-menu]');
    if (!trigger || !panel) return;

    var closeTimer = null;

    function openMega() {
      clearTimeout(closeTimer);
      header.classList.add('mega-open');
    }
    function scheduleCloseMega() {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(function () {
        header.classList.remove('mega-open');
      }, 150);
    }

    trigger.addEventListener('mouseenter', openMega);
    trigger.addEventListener('mouseleave', scheduleCloseMega);
    panel.addEventListener('mouseenter', openMega);
    panel.addEventListener('mouseleave', scheduleCloseMega);
    trigger.addEventListener('focusin', openMega);
    panel.addEventListener('focusin', openMega);
    trigger.addEventListener('focusout', scheduleCloseMega);
    panel.addEventListener('focusout', scheduleCloseMega);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.site-header.mega-open').forEach(function (header) {
        header.classList.remove('mega-open');
      });
    }
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

  // Product mobile slideshow: dot pagination + swipe (no horizontal scroll)
  document.querySelectorAll('[data-product-slideshow]').forEach(function (slideshow) {
    var slides = slideshow.querySelectorAll('.product__media-slide');
    var dotsWrap = slideshow.parentElement.querySelector('[data-product-slideshow-dots]');
    var dots = dotsWrap ? dotsWrap.querySelectorAll('.product__media-dot') : [];
    var current = 0;
    var touchStartX = 0;

    function goTo(index) {
      if (!slides.length) return;
      current = Math.max(0, Math.min(index, slides.length - 1));
      slides.forEach(function (slide, i) {
        slide.classList.toggle('is-active', i === current);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === current);
      });
    }

    goTo(0);

    dots.forEach(function (dot, i) {
      dot.style.cursor = 'pointer';
      dot.addEventListener('click', function () {
        goTo(i);
      });
    });

    slideshow.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slideshow.addEventListener('touchend', function (e) {
      var diff = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(diff) < 40) return;
      goTo(diff < 0 ? current + 1 : current - 1);
    }, { passive: true });
  });

  // Product accordions: only one open at a time
  document.querySelectorAll('[data-product-accordions]').forEach(function (wrap) {
    var accordions = wrap.querySelectorAll('[data-product-accordion]');
    accordions.forEach(function (details) {
      details.addEventListener('toggle', function () {
        if (!details.open) return;
        accordions.forEach(function (other) {
          if (other !== details) other.open = false;
        });
      });
    });
  });

  // Product quantity stepper
  document.querySelectorAll('[data-quantity-control]').forEach(function (control) {
    var input = control.querySelector('[data-quantity-input]');
    var minus = control.querySelector('[data-quantity-minus]');
    var plus = control.querySelector('[data-quantity-plus]');
    if (!input || !minus || !plus) return;

    minus.addEventListener('click', function () {
      var current = parseInt(input.value, 10) || 1;
      if (current > 1) input.value = current - 1;
    });

    plus.addEventListener('click', function () {
      var current = parseInt(input.value, 10) || 1;
      input.value = current + 1;
    });
  });

  // Product variant picker: sync color chips, selects, and hidden variant id
  document.querySelectorAll('.product__form').forEach(function (form) {
    var section = form.closest('.product');
    var variantsScript = section ? section.querySelector('script[id^="ProductVariants-"]') : null;
    if (!variantsScript) return;

    var variants;
    try {
      variants = JSON.parse(variantsScript.textContent);
    } catch (e) {
      return;
    }

    var variantInput = form.querySelector('[data-variant-id]');
    var addButton = form.querySelector('.product__add-to-cart');
    var optionSelects = form.querySelectorAll('.product__option-select[data-option-index]');
    if (!variantInput || !optionSelects.length) return;

    var addToCartLabel = addButton ? addButton.dataset.addLabel : '';
    var soldOutLabel = addButton ? addButton.dataset.soldOutLabel : '';

    function getSelectedOptions() {
      return Array.from(optionSelects).map(function (select) {
        return select.value;
      });
    }

    function findVariant(options) {
      return variants.find(function (variant) {
        return variant.options.every(function (optionValue, index) {
          return optionValue === options[index];
        });
      });
    }

    function syncColorChips(optionIndex, value) {
      form.querySelectorAll('[data-color-chips][data-option-index="' + optionIndex + '"] .product__color-chip').forEach(function (chip) {
        var isSelected = chip.dataset.colorValue === value;
        chip.classList.toggle('is-selected', isSelected);
        chip.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
      });
    }

    function updateVariantState() {
      var variant = findVariant(getSelectedOptions());
      if (!variant || !addButton) return;

      variantInput.value = variant.id;
      addButton.disabled = !variant.available;
      addButton.textContent = variant.available ? addToCartLabel : soldOutLabel;
    }

    optionSelects.forEach(function (select) {
      select.addEventListener('change', function () {
        syncColorChips(select.dataset.optionIndex, select.value);
        updateVariantState();
      });
    });

    form.querySelectorAll('[data-color-chips]').forEach(function (chipGroup) {
      var optionIndex = chipGroup.dataset.optionIndex;
      var select = form.querySelector('.product__option-select[data-option-index="' + optionIndex + '"]');
      if (!select) return;

      chipGroup.querySelectorAll('.product__color-chip').forEach(function (chip) {
        chip.addEventListener('click', function () {
          select.value = chip.dataset.colorValue;
          select.dispatchEvent(new Event('change', { bubbles: true }));
        });
      });
    });
  });

  // Collection filters: sidebar collapse + mobile drawer
  document.querySelectorAll('[data-collection-body]').forEach(function (body) {
    var filtersWrap = body.querySelector('[data-collection-filters]');
    if (!filtersWrap) return;

    var panel = filtersWrap.querySelector('[data-collection-filters-panel]');
    var overlay = filtersWrap.querySelector('[data-collection-filters-overlay]');
    var mobileToggle = filtersWrap.querySelector('[data-collection-filters-toggle]');
    var collapseBtns = filtersWrap.querySelectorAll('[data-collection-filters-collapse]');
    var closeBtn = filtersWrap.querySelector('[data-collection-filters-close]');
    var form = filtersWrap.querySelector('#CollectionFiltersForm');
    var sortSelect = filtersWrap.querySelector('#SortBy');
    var grid = body.querySelector('[data-collection-grid]');

    function isDesktop() {
      return window.matchMedia('(min-width: 901px)').matches;
    }

    function setExpanded(expanded) {
      body.classList.toggle('is-filters-expanded', expanded);
      body.classList.toggle('is-filters-collapsed', !expanded);
      if (grid) grid.style.setProperty('--grid-columns', expanded ? '3' : '4');
      collapseBtns.forEach(function (btn) {
        btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        btn.setAttribute(
          'aria-label',
          expanded ? (btn.dataset.labelCollapse || 'Collapse filters') : (btn.dataset.labelExpand || 'Expand filters')
        );
      });
    }

    function openMobilePanel() {
      if (!panel || isDesktop()) return;
      panel.classList.add('is-open');
      if (mobileToggle) {
        mobileToggle.classList.add('is-active');
        mobileToggle.setAttribute('aria-expanded', 'true');
      }
    }

    function closeMobilePanel() {
      if (!panel || isDesktop()) return;
      panel.classList.remove('is-open');
      if (mobileToggle) {
        mobileToggle.classList.remove('is-active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    }

    collapseBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (isDesktop()) {
          setExpanded(body.classList.contains('is-filters-collapsed'));
        } else {
          openMobilePanel();
        }
      });
    });

    if (mobileToggle) {
      mobileToggle.addEventListener('click', function () {
        if (panel.classList.contains('is-open')) closeMobilePanel();
        else openMobilePanel();
      });
    }
    if (closeBtn) closeBtn.addEventListener('click', closeMobilePanel);

    if (sortSelect && form) {
      var sortDisplay = filtersWrap.querySelector('.collection-filters__sort-display');

      function updateSortDisplay() {
        if (sortDisplay && sortSelect.selectedIndex >= 0) {
          sortDisplay.textContent = sortSelect.options[sortSelect.selectedIndex].text;
        }
      }

      updateSortDisplay();

      sortSelect.addEventListener('change', function () {
        updateSortDisplay();
        form.submit();
      });
    }

    if (form) {
      form.querySelectorAll('input[type="checkbox"]').forEach(function (input) {
        input.addEventListener('change', function () {
          form.submit();
        });
      });
    }

    function syncLayout() {
      if (isDesktop()) {
        closeMobilePanel();
        if (!body.classList.contains('is-filters-expanded') && !body.classList.contains('is-filters-collapsed')) {
          setExpanded(true);
        }
      } else {
        body.classList.remove('is-filters-expanded', 'is-filters-collapsed');
        if (grid) grid.style.removeProperty('--grid-columns');
      }
    }

    syncLayout();
    window.addEventListener('resize', syncLayout);
  });

  // Personalization: trim and enforce max 15 characters before add to cart
  document.querySelectorAll('[data-personalization-input]').forEach(function (input) {
    input.addEventListener('input', function () {
      if (input.value.length > 15) {
        input.value = input.value.slice(0, 15);
      }
    });
  });

  // Design Your Own enquiry form: include selected file details in the contact body
  document.querySelectorAll('[data-design-your-own-form]').forEach(function (form) {
    var fileInput = form.querySelector('[data-design-your-own-file]');
    var bodyInput = form.querySelector('[data-design-your-own-body]');
    var preview = form.querySelector('[data-design-your-own-preview]');
    var maxFileSize = 5 * 1024 * 1024;

    if (fileInput) {
      fileInput.addEventListener('change', function () {
        if (!preview) return;
        preview.hidden = true;
        preview.innerHTML = '';

        var file = fileInput.files && fileInput.files[0];
        if (!file) return;

        if (file.size > maxFileSize) {
          preview.hidden = false;
          preview.textContent = 'File is too large. Please choose an image or PDF under 5 MB.';
          fileInput.value = '';
          return;
        }

        preview.hidden = false;
        preview.textContent = 'Selected: ' + file.name;

        if (file.type.indexOf('image/') === 0) {
          var reader = new FileReader();
          reader.onload = function (event) {
            var img = document.createElement('img');
            img.src = event.target.result;
            img.alt = file.name;
            preview.appendChild(img);
          };
          reader.readAsDataURL(file);
        }
      });
    }

    form.addEventListener('submit', function () {
      if (!bodyInput || !fileInput) return;

      var file = fileInput.files && fileInput.files[0];
      if (!file) return;

      var note = '\n\nReference file: ' + file.name + ' (' + Math.max(1, Math.round(file.size / 1024)) + ' KB)';
      if (bodyInput.value.indexOf(note) === -1) {
        bodyInput.value = bodyInput.value.trim() + note;
      }
    });
  });

  // Cart add via fetch (progressive enhancement, falls back to normal form submit)
  document.querySelectorAll('form[action^="/cart/add"]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      var personalizationInput = form.querySelector('[data-personalization-input]');
      if (personalizationInput) {
        personalizationInput.value = personalizationInput.value.trim().slice(0, 15);
        if (!personalizationInput.value) {
          e.preventDefault();
          personalizationInput.focus({ preventScroll: true });
          return;
        }
      }

      if (!window.fetch) return;
      e.preventDefault();
      var formData = new FormData(form);
      fetch('/cart/add.js', { method: 'POST', body: formData })
        .then(function (res) { return res.json(); })
        .then(function () { window.location.reload(); })
        .catch(function () { form.submit(); });
    });
  });

  // Quick Add to Cart
  document.querySelectorAll('[data-quick-add]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var variantId = btn.getAttribute('data-variant-id');
      if (!variantId) {
        window.location.href = btn.getAttribute('data-product-url');
        return;
      }
      btn.style.pointerEvents = 'none';
      fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: [{ id: parseInt(variantId, 10), quantity: 1 }] })
      })
        .then(function (res) { return res.json(); })
        .then(function () {
          btn.style.pointerEvents = '';
          document.dispatchEvent(new CustomEvent('cart:updated'));
        })
        .catch(function () { btn.style.pointerEvents = ''; });
    });
  });

  // Design Your Own: show selected filename next to the attach button
  var dyoFile = document.querySelector('[data-design-your-own-file]');
  var dyoFilename = document.querySelector('[data-design-your-own-filename]');
  if (dyoFile && dyoFilename) {
    dyoFile.addEventListener('change', function () {
      dyoFilename.textContent = dyoFile.files.length ? dyoFile.files[0].name : '';
    });
  }
});
