// Mobile Navbar

function mobileMenu() {
    if (document.getElementById('mobilenavlinkcontainer').style.display ==  'block') {
        document.getElementById('mobilenavlinkcontainer').style.display = 'none';
    } else {
        document.getElementById('mobilenavlinkcontainer').style.display = 'block';
    } 
}
document.getElementById('hamburger').addEventListener('click', mobileMenu);


function mobileLinkClick() {
    document.getElementById('mobilenavlinkcontainer').style.display = 'none';
}


// Intersection Observer 1


const smallProjects = document.getElementById('smallProjects');
const myStoryBadge = document.getElementById('mystory');
const getInTouch = document.getElementById('getInTouch');

function IntersectionSlideIn(entries) {
    entries.map((entry) =>{
        if (entry.intersectionRatio > 0) {
            // Call this function only once per element
        if (entry.isIntersecting) {
            entry.target.classList.add('slideIn')
        } else {
            entry.target.classList.remove('slideIn')
        }
    }
});
}

const observer = new IntersectionObserver(IntersectionSlideIn);

observer.observe(smallProjects);
observer.observe(myStoryBadge);
observer.observe(getInTouch);


// Intersection Observer 2

const wtf = document.getElementById("wtf");
const weather = document.getElementById("weather");
const todo = document.getElementById("todolist");

function IntersectionSlideIn2(entries) {
    entries.map((entry) =>{
        if (entry.intersectionRatio > 0) {
            // Call this function only once per element
        if (entry.isIntersecting) {
            entry.target.classList.add('slideIn2')
        } else {
            entry.target.classList.remove('slideIn2')
        }
    }
})
}

const observer2 = new IntersectionObserver(IntersectionSlideIn2);

observer2.observe(wtf);
observer2.observe(weather);
observer2.observe(todo);

// Intersection Observer 3

const bio = document.getElementById('bio');

function IntersectionSlideIn3(entries) {
    entries.map((entry) => {
        if (entry.intersectionRatio > 0) {
            if (entry.isIntersecting) {
                entry.target.classList.add('slideIn3')
            } else {
                entry.target.classList.remove('slideIn3')
            }
        }
    })
}

const observer3 = new IntersectionObserver(IntersectionSlideIn3)

observer3.observe(bio);


/* parallax effects 

const title = document.querySelector('#introtitles');
const bio = document.querySelector('.bio');
const smallProjects = document.querySelector('#smallProjects');
const largeProjects = document.querySelector('#largeprojectheader');
const clickExplore = document.querySelector('#clicktoexplore');
const getInTouch = document.querySelector('#getInTouch');

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    title.style.marginTop = value * .4 + 'px';
    bio.style.marginTop = value * .2 + 'px';
    smallProjects.style.marginLeft = value * .3 + 'px';
    largeProjects.style.marginRight = value * .15 + 'px';
    clickExplore.style.marginRight = value * .15 + 'px';
    getInTouch.style.marginLeft = value * .1 + 'px';
})

*/
