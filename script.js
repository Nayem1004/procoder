const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        cards.forEach(card => {
            const role = card.querySelector('.role').textContent.toLowerCase();
            const isIntern = role.includes('intern');
            const isExecutive = role.includes('cto') || role.includes('senior');

            if (filter === 'inovation') {
                card.style.display = 'block';
            } else if (filter === 'intern') {
                card.style.display = isIntern ? 'block' : 'none';
            } else if (filter === 'executive') {
                card.style.display = isExecutive ? 'block' : 'none';
            }
        });
    });
});


