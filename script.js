document.addEventListener('DOMContentLoaded', function() {
    const moreButton = document.getElementById('more-about-me-btn');
    const moreContent = document.getElementById('more-about-me-content');

    moreButton.addEventListener('click', function() {
        if (moreContent.style.display === 'none') {
            moreContent.style.display = 'block';
            moreButton.textContent = 'Less';
        } else {
            moreContent.style.display = 'none';
            moreButton.textContent = 'More';
        }
    });
});