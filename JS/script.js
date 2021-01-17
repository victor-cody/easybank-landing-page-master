(function () {
  var renderPage = true;

  if (
    navigator.userAgent.indexOf("MSIE") !== -1 ||
    navigator.appVersion.indexOf("Trident/") > 0
  ) {
    /* Microsoft Internet Explorer detected in. */
    window.alert(`Please view this in a modern browser such as Chrome or Microsoft Edge. 
The Page Might Not work correctly :)`);
    renderPage = false;
  }

  if (renderPage) {
    const Preloader = $('#loader');
    const overlay2 = $('#overlay-2');
    const body = document.querySelector('body');

    window.addEventListener('load',() => {
      if (Preloader == null || overlay2 == null) return;
      Preloader.delay(250).fadeOut(2000,function () {  
        $(this).remove();
        overlay2.remove();
      });
    });

    //Header scroll class
    const header = document.getElementById("header");
    const navigation = document.getElementById("nav-menu-container");

    function headerScroll() {
      let Y = document.documentElement.scrollTop || document.body.scrollTop;
      if (Y > 500) {
        header.classList.add("header-scrolled-view");
      } else {
        header.classList.remove("header-scrolled-view");
      }
    }

    window.addEventListener("scroll", () => headerScroll());
    headerScroll();

    // Mobile Navigation on smaller resolutions
    $("#mobile-nav-toggle").on("click", function () {
      $(this).find("i").toggleClass("fa-times");
      $("#mobile-nav").toggleClass("active");
      $("#overlay").toggleClass("active");
      $("#overlay").click(function () {
        $("#mobile-nav-toggle").find("i").toggleClass("fa-times");
        $("#mobile-nav").toggleClass("active");
        $(this).removeClass("active");
      });
    });

    // Navigation active state on scroll
    const nav_sections = $("section");
    let main_nav = $(".nav-menu, #mobile-nav");
    let main_nav_height = $("#header").outerHeight();

    $(window).on("scroll", function () {
      let cur_pos = $(this).scrollTop();

      nav_sections.each(function () {
        let top = $(this).offset().top - main_nav_height,
          bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
          main_nav.find("li").removeClass("menu-active menu-item-active");
          main_nav
            .find('a[href="#' + $(this).attr("id") + '"]')
            .parent("li")
            .addClass("menu-active menu-item-active");
        }
      });
    });

    //smooth scroll into view effect
    function scrollToView(el, effect) {
      let screenHeight = Number(window.outerHeight) / 1.8;
      const Element = document.querySelectorAll(el);
      Element.forEach((element) => {
        let element_Position = element.getBoundingClientRect().top;
        let timer = Number(element.dataset.wowDelay);
        // window.screenY
        if (element_Position < screenHeight) {
          setTimeout(() => {
            element.classList.add(effect);
          }, timer);
          // window.requestAnimationFrame(scrollToView);
        }
      });
    }

    window.addEventListener("scroll", () => {
      scrollToView(".toFadeIn", "fadeInUp");
      scrollToView(".toBounceInUp", "bounceInUp");
    });

    //Call to action Modals
    const openModelBtn = document.querySelectorAll("[data-model-target]"),
      closeModelBtn = document.querySelectorAll("[data-close-modal]");

    openModelBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const modal = document.getElementById(btn.dataset.modalTarget);
        openModel(modal);
      });
    });

    closeModelBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        const modal = btn.closest(".popup.active-popup");
        closeModel(modal);
      });
    });

    //function to popup the modal onto the screen
    function openModel(mod) {
      if (mod === null) return;
      mod.classList.add("active-popup");
    }

    //function to pop off the modal off  the screen
    function closeModel(mod) {
      if (mod === null) return;
      mod.classList.remove(".active-popup");
    }
  }
})();
