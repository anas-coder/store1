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
    menuToggle.classList.toggle('active'); // نضيف كلاس يغير الشكل
});

// تحسين قابلية الوصول
menuToggle.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        menu.classList.toggle('show');
        menuToggle.classList.toggle('active');
    }
});

document.querySelectorAll(".dropdown > a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const submenu = this.nextElementSibling;

        // نقفل أي دروب داون مفتوح غير اللي ضغطنا عليه
        document.querySelectorAll(".dropdown-menu").forEach(menu => {
            if (menu !== submenu) menu.style.display = "none";
        });

        // نفتح / نقفل اللي ضغطنا عليه
        if (submenu.style.display === "block") {
            submenu.style.display = "none";
        } else {
            submenu.style.display = "block";
        }
    });
});

let btn = document.getElementById("btn1")

window.onscroll = function(){
    if(scrollY >= 70){
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

// وظيفة البحث الديناميكي
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('search-input-header');
    const searchResultsDiv = document.getElementById('search-results');

    // بيانات المنتجات (يمكنك استبدالها ببيانات حقيقية من قاعدة بيانات أو API)
    const products = [
        { name: "تكييفات جديدة", image: "img/2.png", category: "تكييفات جديدة" },
        { name: "تكييفات مستعملة", image: "img/2-2.png", category: "تكييفات مستعملة" },
        { name: "مراوح جديدة", image: "img/3.png", category: "مراوح جديدة" },
        { name: "مراوح مستعملة", image: "img/3-3.png", category: "مراوح مستعملة" },
        { name: "افران جديدة", image: "img/4.png", category: "افران جديدة" },
        { name: "افران مستعملة", image: "img/4-4.png", category: "افران مستعملة" },
        { name: "بوتجازات جديدة" , image: "img/5.png", category: "بوتجازات جديدة" },
        { name: "بوتجازات مستعملة", image: "img/5-5.png", category: "بوتجازات مستعملة" },
        { name: "ثلاجات جديدة" , image: "img/6.png", category: "ثلاجات جديدة" },
        { name: "ثلاجات مستعملة", image: "img/6-6.png", category: "ثلاجات مستعملة" },
        { name: "غسالات جديدة", image: "img/7.png", category: "غسالات جديدة" },
        { name: "غسالات مستعملة", image: "img/7-7.png", category: "غسالات مستعملة" },
        { name: "فريزر جديد", image: "img/9.png", category: "فريزر جديد" },
        { name: "فريزر مستعمل", image: "img/8-8.png", category: "فريزر مستعمل" },
        { name: "تلفزيونات جديدة", image: "img/10-0.png", category: "تلفزيونات جديدة" },
        { name: "تلفزيونات مستعملة", image: "img/10-10.png", category: "تلفزيونات مستعملة" },
        // أضف المزيد من المنتجات هنا
    ];

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        searchResultsDiv.innerHTML = ''; // مسح النتائج السابقة

        if (searchTerm.length === 0) {
            searchResultsDiv.classList.remove('show');
            return;
        }

        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.category.toLowerCase().includes(searchTerm)
        );

        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                const resultItem = document.createElement('div');
                resultItem.classList.add('search-result-item');
                resultItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <span>${product.name}</span>
                `;
                // عند النقر على نتيجة البحث، يمكنك توجيه المستخدم لصفحة المنتج أو عرض تفاصيله
                resultItem.addEventListener('click', () => {
                    alert(`تم اختيار: ${product.name}`);
                    // هنا يمكنك إضافة كود التوجيه لصفحة المنتج
                    searchInput.value = product.name; // وضع اسم المنتج في حقل البحث
                    searchResultsDiv.classList.remove('show'); // إخفاء النتائج
                });
                searchResultsDiv.appendChild(resultItem);
            });
            searchResultsDiv.classList.add('show');
        } else {
            searchResultsDiv.classList.remove('show');
        }
    });

    // إخفاء نتائج البحث عند النقر خارج مربع البحث
    document.addEventListener('click', function(event) {
        if (!searchResultsDiv.contains(event.target) && event.target !== searchInput) {
            searchResultsDiv.classList.remove('show');
        }
    });
});



 const iconButtons = document.querySelectorAll(".icon-button");

    // Function to clear active states
    function clearActive() {
      iconButtons.forEach(btn => {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      });
    }

    // Add click and keyboard support for selection
    iconButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        clearActive();
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
      });

      btn.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
          e.preventDefault();
          btn.click();
        }
      });
    });


    document.querySelectorAll(".dropdown > a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const parent = this.parentElement;

    // لو فيه مفتوح غيره → اقفله
    document.querySelectorAll(".dropdown").forEach(drop => {
      if (drop !== parent) drop.classList.remove("open");
    });

    // اعمل toggle للكلاس
    parent.classList.toggle("open");
  });
});
