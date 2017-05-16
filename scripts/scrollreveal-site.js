var scrollDuration = 1000;

window.sr = ScrollReveal();

sr.reveal('.doubletitle', {
  duration: scrollDuration,
  origin: 'top',
  // distance: '100px',
  easing: 'ease-out',
})

sr.reveal('.left', {
  delay: 220,
  duration: scrollDuration,
  origin: 'left',
  distance: '100px',
  easing: 'ease-out',
})

sr.reveal('.right', {
  delay: 200,
  duration: scrollDuration,
  origin: 'bottom',
  distance: '50px',
  easing: 'ease-out',
})

sr.reveal('.quote1', {
    delay: 200,
  duration: scrollDuration,
  easing: 'ease-out',

})
