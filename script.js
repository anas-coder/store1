    function toggleFaq(element) {
            const answer = element.nextElementSibling;
            const icon = element.querySelector('span:last-child');
            
            if (answer.classList.contains('active')) {
                answer.classList.remove('active');
                icon.textContent = '+';
            } else {
                // Close all other FAQ items
                document.querySelectorAll('.faq-answer').forEach(item => {
                    item.classList.remove('active');
                });
                document.querySelectorAll('.faq-question span:last-child').forEach(item => {
                    item.textContent = '+';
                });
                
                // Open current FAQ item
                answer.classList.add('active');
                icon.textContent = '-';
            }
        }


document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".slider-nav.prev");
  const nextButton = document.querySelector(".slider-nav.next");
  const sliderList = document.querySelector(".slider-list");

  // مقدار التحريك (ممكن تزوده أو تقلله حسب عرض العنصر)
  const scrollAmount = 250;

  nextButton.addEventListener("click", () => {
    sliderList.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  prevButton.addEventListener("click", () => {
    sliderList.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
});






document.addEventListener("DOMContentLoaded", function () {
  const prevButton2 = document.getElementById("slider-right")
  const nextButton2 = document.getElementById("slider-left")
  const sliderList2 = document.getElementById("all-sliders")

  // مقدار التحريك (ممكن تزوده أو تقلله حسب عرض العنصر)
  const scrollAmount2 = 250;

  nextButton2.addEventListener("click", () => {
    sliderList2.scrollBy({ left: scrollAmount2, behavior: "smooth" });
  });

  prevButton2.addEventListener("click", () => {
    sliderList2.scrollBy({ left: -scrollAmount2, behavior: "smooth" });
  });
});



  const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    // تحسين قابلية الوصول: إظهار القائمة عند الضغط على زر Enter على الأيقونة
    menuToggle.addEventListener('keydown', (e) => {
        if(e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            menu.classList.toggle('show');
        }
    });

let btn = document.getElementById("btn")

window.onscroll = function(){
  if(scrollY >= 200){
    btn.style.display = "block"
  }else{
    btn.style.display = "none"
  }
}

   btn.onclick = function(){
    scroll({
      top : 0,
      left : 0 ,
      behavior : "smooth"
    })
   }



   