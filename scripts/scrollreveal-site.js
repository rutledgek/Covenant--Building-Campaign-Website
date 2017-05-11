window.sr = ScrollReveal();

sr.reveal('.left', {
  duration: 2000,
  origin: 'left',
  distance: '100px',
  easing: 'ease-out',
  mobile: false,

})

sr.reveal('.right', {
  delay: 200,
  duration: 2000,
  origin: 'bottom',
  distance: '50px',
  easing: 'ease-out',
  mobile: false,

})
