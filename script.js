$(document).ready(function () {
  "use-stricts";

  // Get the navbar
  const navbar = document.querySelector(".navbar");

  // Get the offset position of the navbar
  const sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function navbarSticky() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  function scrollToSection(selcted, section) {
    $(selcted).click(function (e) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(section).offset().top - 120,
        },
        2000
      );
    });
  }

  scrollToSection("#introduct", "#section-introduct");
  scrollToSection("#product", "#section-product");
  scrollToSection("#project", "#section-project");
  scrollToSection("#testimonials", "#section-testimonials");

  document
    .getElementById("scroll-to-top")
    .addEventListener("click", function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });
  document.getElementById("contact").addEventListener("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: document.body.scrollHeight }, "slow");
  });

  window.onscroll = function () {
    if ($(document).scrollTop() > 700) {
      $("#scroll-to-top").addClass("show");
    } else {
      $("#scroll-to-top").removeClass("show");
    }
    navbarSticky();
  };

  new Swiper(".swiper-container", {
    speed: 600,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let ourProduct = "";
  for (let i = 0; i < 6; i++) {
    ourProduct += ` 
      <div class="col-12 col-sm-4 mt-4">
        <div class="card product" style="width: 18rem">
          <img src="./images/1.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>`;
  }

  document.querySelector("#our-product").innerHTML = ourProduct;
});
