// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Update active nav link
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
        
        // Change active nav link on scroll
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            
            document.querySelectorAll('section').forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    document.querySelectorAll('.nav-links a').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
        // Update copyright year automatically
document.getElementById('current-year').textContent = new Date().getFullYear();

// Add developer credit with link
const developerCredit = document.getElementById('developer-credit');
developerCredit.innerHTML = 'Developed by <a href="https://www.worldwaysweb-developers.co.ke/" target="_blank" rel="noopener noreferrer">Worldways Web-Developers</a>';
// Attempt to detect and block F12/right-click/inspect (easily bypassed)
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.onkeydown = function(e) {
  if (e.key === 'F12' || 
      (e.ctrlKey && e.shiftKey && e.key === 'I') || 
      (e.ctrlKey && e.shiftKey && e.key === 'J') || 
      (e.ctrlKey && e.key === 'U')) {
    e.preventDefault();
    alert('Developer tools are disabled for this page');
    return false;
  }
};

// More aggressive detection (still not foolproof)
setInterval(function() {
  if (window.outerWidth - window.innerWidth > 200 || 
      window.outerHeight - window.innerHeight > 200) {
    // Dev tools might be open
    window.location.reload();
  }
}, 1000);