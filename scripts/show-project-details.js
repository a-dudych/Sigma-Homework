window.addEventListener('DOMContentLoaded', showDetails)

function showDetails() {
    const portfolioItems = document.body.querySelectorAll('.portfolio-item')

    function show() {
        this.lastElementChild.style.display = "block"
    }

    function hide() {
        this.lastElementChild.style.display = "none"
    }

    for (let i = 0; i < portfolioItems.length; i++) {
        portfolioItems[i].onmouseenter = show;
        portfolioItems[i].onmouseleave = hide;
    }
}