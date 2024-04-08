window.addEventListener("load", function() {
  if (window.location.pathname !== '/sobre') {
    let count = 1;

    const nextImage = () => {
      const radioElement = document.getElementById("radio" + count);
      if (radioElement) {
        radioElement.checked = true;
        count = (count >= 4) ? 1 : count + 1;
      }
    };

    setInterval(nextImage, 5000);
    
    const geral = document.querySelector(".geral");
    const menu = document.querySelector(".menu");

    if (geral && menu) {
      geral.addEventListener("click", () => {
        geral.classList.toggle('active');
        menu.classList.toggle('active');
      });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });

    document.querySelectorAll('.scroll-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  } else {
    console.log('Página "/sobre" carregada.');
  }
});
