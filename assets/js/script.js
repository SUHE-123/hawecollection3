    // Show/hide tombol saat scroll
    window.onscroll = function () {
        const btn = document.getElementById("backToTopBtn");
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          btn.style.display = "block";
        } else {
          btn.style.display = "none";
        }
      };
    
      // Scroll ke atas dengan animasi
      document.getElementById("backToTopBtn").addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });

      window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
      
      

// animasi konten dan script rousel konten 2
  AOS.init({
    duration: 800,
    once: true
  });
// ....
  function scrollProduct(amount) {
    const scrollBox = document.getElementById("productScroll");
    scrollBox.scrollBy({ left: amount, behavior: 'smooth' });
  }

  // back to top
  const backToTopBtn = document.getElementById("backToTop");

  // Tampilkan tombol saat scroll ke bawah
  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTopBtn.style.display = "flex";
    } else {
      backToTopBtn.style.display = "none";
    }
  };

  // Scroll smooth ke atas saat diklik
  backToTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };




