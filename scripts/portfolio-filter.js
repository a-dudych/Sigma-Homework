let json = '{"socialmedia": ["instagram", "facebook", "linkedin"], "newsmedia": ["bloomberg", "reuters", "nyt"], "searchengines": ["google", "yahoo", "ddg"]}'
let obj = JSON.parse(json);
let portfolioItems = document.querySelectorAll('.portfolio-item');
let filterTags = document.querySelectorAll('.filter-tag');
let browseAll = document.querySelector('.browse-all');
let browseAllText = document.querySelector('.browse-all__text');

function filter() {
    let filterName = this.getAttribute('id');

    if(this.dataset.active == "no") {
        this.dataset.active = "yes";

        obj[filterName].forEach(showById);

        this.firstElementChild.style.borderRight = "15px solid #7ababa"
        this.lastElementChild.style.backgroundColor = "#7ababa"

        for (let tag of filterTags) {
            if(tag.dataset.active == "yes") continue;
            if(tag.dataset.active == "no") {
                let id = tag.getAttribute('id');
                obj[id].forEach(hideByID);
            }
        }

        if (browseAllText.innerHTML == "COLLAPSE") {
            browseAllText.innerHTML = "BROWSE ALL"
        }

        return;
    }

    if(this.dataset.active == "yes") {
        this.dataset.active = "no";

        this.firstElementChild.style.borderRight = "15px solid #f6edd8";
        this.lastElementChild.style.backgroundColor = "#f6edd8";

        for (let tag of filterTags) {
            if (tag.dataset.active == "yes") {
                obj[filterName].forEach(hideByID);
                return;
            }  
        }

        for (let i = 0; i < 6; i++) {
            portfolioItems[i].style.display = "block";
        }
        for (let i = 6; i < portfolioItems.length; i++) {
            portfolioItems[i].style.display = "none";
        }
        return;
    }
}

function browsePortfolioItems() {
    if (browseAllText.innerHTML == "BROWSE ALL") {
        for (let tag of filterTags) {
            tag.dataset.active = "no";
            tag.firstElementChild.style.borderRight = "15px solid #f6edd8";
            tag.lastElementChild.style.backgroundColor = "#f6edd8";
        }

        for (let item of portfolioItems) {
            item.style.display = "block"
        }

        browseAllText.innerHTML = "COLLAPSE"
    } else {
        for (let i = 6; i < portfolioItems.length; i++) {
            portfolioItems[i].style.display = "none";
        }

        browseAllText.innerHTML = "BROWSE ALL"
    }
}

function hideByID(item) {
    document.getElementById(item).style.display = "none";
}

function showById(item) {
    document.getElementById(item).style.display = "block";
}

for (let tag of filterTags) {
    tag.onclick = filter
}
browseAll.onclick = browsePortfolioItems

window.addEventListener('DOMContentLoaded', hidePortfolioItems);

function hidePortfolioItems() {
    const portfolioContainer = document.querySelector('.portfolio-container');
    
    for (let i = 6; i < portfolioContainer.children.length; i++) {
        portfolioContainer.children[i].style.display = "none";
    }
}