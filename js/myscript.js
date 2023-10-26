const sidenav = document.querySelectorAll(".sidenav");
M.Sidenav.init(sidenav);

const slider = document.querySelectorAll(".slider");
M.Slider.init(slider, {
  indicators: false,
  transition: 600,
  interval: 2700,
});

const parallax = document.querySelectorAll(".parallax");
M.Parallax.init(parallax);

const materialbox = document.querySelectorAll(".materialboxed");
M.Materialbox.init(materialbox);

const scroll = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(scroll, {
  scrollOffset: 50,
});

const carousel = document.querySelectorAll(".carousel");
M.Carousel.init(carousel);
