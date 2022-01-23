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