let json = '{"socialmedia": ["instagram", "facebook", "linkedin"], "newsmedia": ["bloomberg", "reuters", "nyt"], "searchengines": ["google", "yahoo", "ddg"]}'

function filter() {
    let category = this.getAttribute('id');
    let obj = JSON.parse(json);
    let portfolioItems = document.querySelectorAll('.portfolio-item');

    // если фильтр активный на момент клика: 
    // активирую первые 6 элементов,
    // возвращаю кнопку показать все
    // убираю активную метку
    if (this.dataset.active == "yes") {
        for (let i = 0; i < 6; i++) {
            portfolioItems[i].style.display = "block";
        }
        for (let i = 6; i < portfolioItems.length; i++) {
            portfolioItems[i].style.display = "none";
        }
        document.querySelector('.browse-all').style.display = "block";
        this.dataset.active = "no";
        
        this.firstElementChild.style.borderRight = "15px solid #f6edd8"
        this.lastElementChild.style.backgroundColor = "#f6edd8"
        return; 
    }

    // если фильтр неактивный на момент клика
    // меняем bg двух элементов
    this.dataset.active = "yes";
    for (let key in obj) {
        if(key == category) {
            obj[key].forEach(showById)
        } else {
            obj[key].forEach(hideByID);
            document.getElementById(key).firstElementChild.style.borderRight = "15px solid #f6edd8";
            document.getElementById(key).lastElementChild.style.backgroundColor = "#f6edd8";
            document.getElementById(key).dataset.active = "no";
        }
    }
    document.querySelector('.browse-all').style.display = "none";
    this.firstElementChild.style.borderRight = "15px solid #7ababa"
    this.lastElementChild.style.backgroundColor = "#7ababa"
}

function hideByID(item) {
    document.getElementById(item).style.display = "none";
}

function showById(item) {
    document.getElementById(item).style.display = "block";
}

document.getElementById('socialmedia').onclick = filter;
document.getElementById('newsmedia').onclick = filter;
document.getElementById('searchengines').onclick = filter;

/* backup 

function filter() {
    let category = this.getAttribute('id');
    let obj = JSON.parse(json);
    for (let key in obj) {
        if(key == category) {
            obj[key].forEach(showById)
        } else {
            obj[key].forEach(hideByID)
        }
    }
    document.body.querySelector('.browse-all').style.display = "none";
}

*/