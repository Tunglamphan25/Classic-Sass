/**=========== 1, Responsive Menu ============ */
var toggleMenu = document.querySelector(".header__bar-button");
var topMolbie = document.querySelector(".header__bar-list-mobile");
toggleMenu.addEventListener("click", function () {
  topMolbie.classList.toggle("show");
  document.querySelector(".header").classList.toggle("color");
});
var itemSubMenu = Array.from(document.querySelectorAll(".list-mobile__item"));
itemSubMenu.forEach(function (btn) {
  btn.onclick = function () {
    btn.lastElementChild.classList.toggle("showSub");
  };
});
//**================== 2, Sticky Menu ==================== **//
var scrollState = 500;
var navClasses = document.querySelector(".header").classList;
var scrollTop = function () {
  return window.scrollY;
};

var scrollDetect = function (home, down, up) {
  var currentScroll = scrollTop();
  if (currentScroll === 0) {
    navClasses.remove("record");
  } else if (scrollTop() < 500) {
    home();
  } else if (currentScroll >= scrollState) {
    down();
  } else {
    up();
  }
  scrollState = scrollTop();
};

function homeAction() {
  document.querySelector(".header").classList.add("record");
  document.querySelector(".header").style.display = "block";
}

function downAction() {
  navClasses.remove("open");
  navClasses.add("collapse");
  document.querySelector(".header").style.display = "none";
}

function upAction() {
  navClasses.remove("collapse");
  navClasses.add("open");
  document.querySelector(".header").style.display = "block";
}

window.addEventListener("scroll", function () {
  scrollDetect(homeAction, downAction, upAction);
});
//**================== 3, Back to top ==================== **//
$(window).on("scroll", function (event) {
  if ($(this).scrollTop() > 600) {
    $(".back-to-top").fadeIn(200);
  } else {
    $(".back-to-top").fadeOut(200);
  }
});
//Animate the scroll to top
$(".back-to-top").on("click", function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    600
  );
});
// Owl Carousel Brand //
var owl = $(".brand__sources");
owl.owlCarousel({
  items: 7,
  loop: true,
  dots: false,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    320: {
      items: 3,
    },
    576: {
      items: 3,
    },
    768: {
      items: 5,
    },
    1000: {
      center: true,
      items: 7,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});
// Owl Carousel Team //
$(".owl-member").owlCarousel({
  loop: true,
  margin: 80,
  nav: false,
  responsive: {
    320: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 1,
    },
    1000: {
      center: true,
      items: 1,
    },
  },
});
function myFunction(x) {
  x.classList.toggle("change");
}
// Number auto run
const designSection = document.querySelector(".design");
const counters = document.querySelectorAll(".counters");
const speed = 100;

window.addEventListener("scroll", function () {
  if (designSection.offsetTop < window.pageYOffset + 230) {

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        console.log(typeof Number(counter.getAttribute("data-target")));
        const count = +counter.innerText;
        const inc = target / speed;
        if (count < target) {
          counter.innerText = Math.ceil(count + inc);

          setTimeout(updateCount, 200);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }
});
