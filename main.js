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


// parallax effects 

const title = document.querySelector('#introtitles');
const bio = document.querySelector('.bio');
const smallProjects = document.querySelector('#smallProjects');
const largeProjects = document.querySelector('#largeprojectheader');
const clickExplore = document.querySelector('#clicktoexplore');
const getInTouch = document.querySelector('#getInTouch');

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    //title.style.marginTop = value * .4 + 'px';
    //bio.style.marginTop = value * .2 + 'px';
    smallProjects.style.marginLeft = value * .3 + 'px';
    largeProjects.style.marginRight = value * .15 + 'px';
    clickExplore.style.marginRight = value * .15 + 'px';
    getInTouch.style.marginLeft = value * .1 + 'px';
})

