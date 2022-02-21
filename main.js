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
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    }

    const bio = document.getElementById("biocontainer");
    const wtf = document.getElementById("wtf");
    const portfolio = document.getElementById("portfolio");
    const weather = document.getElementById("weather");
    const todo = document.getElementById("todolist");

    function IntersectionSlideUp(entries) {
        entries.map((entry) =>{
            if (entry.intersectionRatio > 0) {
                // Call this function only once per element
            if (entry.isIntersecting) {
                entry.target.classList.add('slideUp')
            } else {
                entry.target.classList.remove('slideUp')
            }
        }
    });
}

const observer = new IntersectionObserver(IntersectionSlideUp,options);

observer.observe(bio);
observer.observe(wtf);
observer.observe(portfolio);
observer.observe(weather);
observer.observe(todo);

/* parallax mouse move */

document.addEventListener("mousemove", parallax);
function parallax(e){
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}


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
