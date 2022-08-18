window.addEventListener('DOMContentLoaded', hidePortfolioItems);

function hidePortfolioItems() {
    const portfolioContainer = document.body.querySelector('.portfolio-container');
    const browseAll = document.body.querySelector('.browse-all');
    
    for (let i = 6; i < portfolioContainer.children.length; i++) {
        portfolioContainer.children[i].style.display = "none";
    }

    browseAll.addEventListener('click', showPortfolioItems)
}

function showPortfolioItems() {
    const portfolioContainer = document.body.querySelector('.portfolio-container');
    const buttonText = document.body.querySelector('.browse-all__text');
    
    for (let i = 6; i < portfolioContainer.children.length; i++) {
        if (portfolioContainer.children[i].style.display == "none") {
            portfolioContainer.children[i].style.display = "block";
        } else {
            portfolioContainer.children[i].style.display = "none"
        }
    }

    if (buttonText.innerHTML == "BROWSE ALL") {
        buttonText.innerHTML = "COLLAPSE"
    } else {
        buttonText.innerHTML = "BROWSE ALL"
    }
}
