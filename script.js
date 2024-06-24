document.addEventListener('DOMContentLoaded', function() {
    const moreButton = document.getElementById('more-about-me-btn');
    const moreContent = document.getElementById('more-about-me-content');

    moreButton.addEventListener('click', function() {
        if (!moreContent.classList.contains('show')) {
            moreContent.style.display = 'block';
            setTimeout(() => {
                moreContent.classList.add('show');
            }, 10);
            moreButton.textContent = 'Less';
        } else {
            moreContent.classList.remove('show');
            setTimeout(() => {
                moreContent.style.display = 'none';
            }, 500);
            moreButton.textContent = 'More';
        }
    });
});