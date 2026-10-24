window.scrollTo(0, 0);

$(function () {
  function headerOffset() {
    const header = document.querySelector("header");
    if (!header) return 120;
    return Math.ceil(header.getBoundingClientRect().height) + 8;
  }

  AOS.init({
    duration: 1200,
    once: true,
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 30) {
      $("body").addClass("navbar-scrolled");
    } else {
      $("body").removeClass("navbar-scrolled");
    }
  });

  const $toggle = $("#nav-toggle");
  const $nav = $("#navbar");

  function setNavOpen(open) {
    $("body").toggleClass("nav-open", open);
    $toggle.attr("aria-expanded", open ? "true" : "false");
  }

  $toggle.on("click", function () {
    setNavOpen(!$("body").hasClass("nav-open"));
  });

  function scrollToHash(hash, smooth) {
    if (!hash || hash === "#") return;
    const el = document.querySelector(hash);
    if (!el) return;
    setNavOpen(false);
    const y = Math.max(
      0,
      el.getBoundingClientRect().top + window.scrollY - headerOffset()
    );
    window.scrollTo({
      top: y,
      behavior: smooth === false ? "auto" : "smooth",
    });
  }

  $('a[href^="#"]').on("click", function (event) {
    const hash = $(this).attr("href");
    if (!hash || hash === "#" || !document.querySelector(hash)) return;
    event.preventDefault();
    scrollToHash(hash, true);
    if (history.replaceState) {
      history.replaceState(null, "", hash);
    }
  });

  $(window).on("resize", function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
      setNavOpen(false);
    }
  });

  if (window.location.hash) {
    requestAnimationFrame(function () {
      scrollToHash(window.location.hash, false);
    });
  }
});
