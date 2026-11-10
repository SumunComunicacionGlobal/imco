// Registrar ScrollTrigger antes de crear animaciones que lo utilizan.
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    // Animar elementos con la clase .animate al entrar en el viewport
    gsap.utils.toArray('.wp-cover:not(.card-project) > .wp-block-cover__inner-container > * > *, .wp-block-heading, main .wp-block-paragraph, .wp-block-button, .card-blog > *, .wp-block-image').forEach(function (element) {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element, // Elemento que activa la animación
                start: 'top 80%', // Inicia cuando el top del elemento está al 80% del viewport
                end: 'bottom 20%', // Termina cuando el bottom del elemento está al 20% del viewport
                toggleActions: 'play none none none', // Reproducir solo una vez
            },
            opacity: 0,
            y: 50,
            duration: 0.3,
        });
    });
});


const triggerSection = document.querySelector('#kpis-section');
const elements = document.querySelectorAll('.animated-number');

    if (triggerSection && elements.length > 0) {
        gsap.from(elements, {
        textContent: 0,
        duration: 2,
        snap: { textContent: 1 },
        scrollTrigger: {
            trigger: triggerSection,
            start: 'top center',
        },
        });
    }


  // Efecto parallax + scale suave para fondo de covers.
  gsap.utils.toArray('.bg-scroll-animated .wp-block-cover').forEach(function (cover) {
    const bgImage = cover.querySelector('.wp-block-cover__image-background');

    if (!bgImage) {
      return;
    }

    gsap.set(bgImage, {
      scale: 1,
      yPercent: -4,
      transformOrigin: '50% 50%',
      willChange: 'transform',
    });

    gsap.to(bgImage, {
      scale: 1.20,
      yPercent: 7,
      ease: 'none',
      scrollTrigger: {
        trigger: cover,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });
  });


//Horizontal Scroll Galleries
const portfolio = document.getElementById("portfolio");

if (portfolio) {
  const horizontalSections = gsap.utils.toArray(".horiz-gallery-wrapper", portfolio);

  horizontalSections.forEach(function (sec) {
    const pinWrap = sec.querySelector(".horiz-gallery-strip");

    if (!pinWrap) {
      return;
    }

    const getHorizontalScrollLength = () => Math.max(0, pinWrap.scrollWidth - sec.clientWidth);

    gsap.to(pinWrap, {
      x: () => -getHorizontalScrollLength(),
      ease: "none",
      scrollTrigger: {
        scrub: true,
        trigger: sec,
        pin: sec,
        start: "top top+=80",
        end: () => `+=${getHorizontalScrollLength()}`,
        invalidateOnRefresh: true
      }
    });
  });
}

