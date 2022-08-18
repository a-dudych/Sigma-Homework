window.addEventListener('DOMContentLoaded', hideBlogPosts);

function hideBlogPosts() {
    const blogContainer = document.body.querySelector('.blog-container');
    const browseAll = document.body.querySelector('.blog__browse-all');
    
    for (let i = 3; i < blogContainer.children.length; i++) {
        blogContainer.children[i].style.display = "none";
    }

    browseAll.addEventListener('click', showBlogPosts)
}

function showBlogPosts() {
    const blogContainer = document.body.querySelector('.blog-container');
    const buttonText = document.body.querySelector('.blog__browse-all__text');

    if (blogContainer.children[3].style.display == "none") {
        let i = 3;

        for (; i < 6; i++) {
            blogContainer.children[i].style.display = ""
        }

        let options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        }
        
        function callback(entries, observer) {

            for (let k = 0; k < 3; k++) {
                blogContainer.children[i].style.display = "";
                i++;
            }
        };

        let observer = new IntersectionObserver(callback, options);
        let targetElem = blogContainer.children[i - 1];
        observer.observe(targetElem);

    } else {
        for (let i = 3; i < blogContainer.children.length; i++) {
            blogContainer.children[i].style.display = "none";
        }
    }

    if (buttonText.innerHTML == "SHOW ALL POSTS") {
        buttonText.innerHTML = "COLLAPSE"
    } else {
        buttonText.innerHTML = "SHOW ALL POSTS"
    }
}
