const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(toggle)
        toggle.parentElement.classList.toggle('active');
    })
})