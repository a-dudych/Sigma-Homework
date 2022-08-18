function fadein() {
    let element = document.body.querySelector('.blog-container');
    let op = 0;
    element.style.filter = 'opacity(' + op + '%)';
    let timer = setTimeout(function fade() {
        timer = setTimeout(fade, 60)

        if (op >= 100){
            clearTimeout(timer);
            element.style.filter = 'opacity(100%)'
            return;
        }

        element.style.filter = 'opacity(' + op + '%)';
        op = op + 2;
    }, 500);
}

let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.05
}

function callback(entries, observer) {
entries.forEach((entry) => {
if (entry.isIntersecting) {
    fadein();
}
})
};

let blogobserver = new IntersectionObserver(callback, options);

let blogSection = document.querySelector('.blog');
blogobserver.observe(blogSection);