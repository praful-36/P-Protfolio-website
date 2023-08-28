
  // scroll btn code

  window.onload = function() {
    adjustScrollButtonVisibility();
    window.addEventListener('resize', adjustScrollButtonVisibility);
  };
  
  function adjustScrollButtonVisibility() {
    var scrollButton = document.getElementById("scrollButton");
    if (window.innerWidth > 800) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  }
  
  window.onscroll = function() { scrollFunction() };
  
  function scrollFunction() {
    var scrollButton = document.getElementById("scrollButton");
    if (window.innerWidth > 800) {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    }
  }
  
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

//FAQ toggle

const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
      button.addEventListener('click', () => {
        const faqs = document.querySelectorAll('.faq');

        faqs.forEach(faq => {
          const answer = faq.querySelector('.faq-answer');
          const faqButton = faq.querySelector('.toggle-button');

          if (faqButton === button) {
            const isOpen = answer.style.display === 'block';

            answer.style.display = isOpen ? 'none' : 'block';
            faqButton.innerText = isOpen ? '+' : '-';
          } else {
            answer.style.display = 'none';
            faqButton.innerText = '+';
          }
        });
      });
    });