 
        /* جافاسكريبت الأسبوع الرابع: التفاعل مع النموذج */
        const contactForm = document.getElementById('scandoForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // نمنع الإرسال التلقائي لنتحكم فيه

        const form = e.target;
        const data = new FormData(form);
        const userName = form.querySelector('input[name="fullName"]').value;

        // إرسال البيانات باستخدام Fetch مع تحديد طريقة POST
        fetch(form.action, {
            method: 'POST', // تأكيد طريقة الإرسال المطلوبة
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                // عرض رسالة النجاح فقط بعد التأكد من وصول البيانات
                form.innerHTML = `
                    <div style="padding: 40px; background: #112240; border-radius: 15px; border: 1px solid #26a69a; text-align: center;">
                        <h3 style="color: #26a69a;">شكراً لك يا ${userName}!</h3>
                        <p style="color: white;">لقد استلمنا رسالتك بنجاح، تفقد إيميلك الآن.</p>
                    </div>
                `;
            } else {
                alert("حدث خطأ، تأكد من إعدادات Formspree.");
            }
        }).catch(error => {
            alert("حدث خطأ في الاتصال.");
        });
    });
}
        // مراقبة حركة التمرير (Scroll) في المتصفح
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    
    // إذا نزل المستخدم أكثر من 50 بكسل، أضف الكلاس .scrolled
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        // إذا عاد للأعلى، احذف الكلاس لتعود شفافة
        nav.classList.remove('scrolled');
    }
});
// استهداف زر Explore
const exploreBtn = document.getElementById('exploreBtn');
if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
        document.querySelector('.services').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // عندما يدخل العنصر للشاشة: أضف كلاس الظهور
            entry.target.classList.add('visible');
        } else {
            // عندما يخرج العنصر من الشاشة: احذف كلاس الظهور (ليعود مخفياً)
            entry.target.classList.remove('visible');
        }
    });
}, { 
    threshold: 0.1 
});

// تفعيل المراقب على كل الصناديق
document.querySelectorAll('.reveal').forEach(card => {
    observer.observe(card);
});
// 1. أمسك أيقونة القائمة
const menuToggle = document.getElementById('menu-toggle');
// 2. أمسك قائمة الروابط
const navList = document.getElementById('nav-list');
const navLinks = document.querySelectorAll('.nav-links a');
// 3. عند الضغط على الأيقونة...
menuToggle.addEventListener('click', () => {
    // اكتب هنا السطر الذي يقوم بـ toggle لكلمة 'active' داخل الـ navList
    // تلميح: استخدم navList.classList...
    navList.classList.toggle('active');
});
// 4. عند الضغط على أي رابط داخل القائمة...
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
    const links = document.querySelectorAll('.nav-links a');
const list = document.getElementById('nav-list');

links.forEach(link => {
link.onclick = () => {
list.classList.remove('active');
};
});
});
let lastScrollTop = 0;
window.onscroll = function() {
let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
if (currentScroll > lastScrollTop) {
document.querySelector('.navbar').style.top = "-80px"; // يختفي البار
} else {
document.querySelector('.navbar').style.top = "0"; // يظهر البار
}
lastScrollTop = currentScroll;
};
const backToTopBtn = document.getElementById('backToTop');

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
window.addEventListener('scroll', () => {
    const navList = document.getElementById('nav-list');
    // إذا كانت القائمة مفتوحة (تحتوي على كلاس active) قم بإغلاقها عند السكرول
    if (navList.classList.contains('active')) {
        navList.classList.remove('active');
    }
});
// نظام عرض الصور المنبثقة
const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("imgFull");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close-modal");

document.querySelectorAll('.project-card img').forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        document.body.style.overflow = "hidden"; // منع السكرول خلف الصورة
    }
});

closeBtn.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// إغلاق عند الضغط خارج الصورة
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}