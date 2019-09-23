/* eslint-env browser */
import homeLoad from './modules/home';
import loadNavBar from './modules/navbar';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';

const content = document.getElementById('content');
function render(e) {
  content.innerHTML = "";
  content.appendChild(page);
  const body = document.querySelector('body');
  const navs = document.querySelectorAll('.right-align>span');
  const brand = document.querySelector('.brand');
  if (e.target.id == 'home') {
    body.style.backgroundImage = "url('imgs/about.jpg')";
    body.style.backgroundColor = 'none';
    content.appendChild(home);
    navs.forEach(n => n.style.color = 'rgb(238, 212, 109)');
    brand.style.color = 'rgb(253, 255, 116)';
  }
  else if (e.target.id == 'menu') {
    body.style.backgroundImage = 'none';
    body.style.backgroundColor = 'white';
    content.appendChild(menu);
    navs.forEach(n => n.style.color = 'black');
    brand.style.color = 'black';
  } else {
      body.style.backgroundImage = 'none';
      body.style.backgroundColor = '#8aace9';
      content.appendChild(contact);
      navs.forEach(n => n.style.color = 'black');
      brand.style.color = 'black'; 
    }
}


const page = loadNavBar();
const home = homeLoad();
const menu = loadMenu();
const contact = loadContact();


content.appendChild(page);
content.appendChild(home);

const navs = document.querySelectorAll('.right');
navs.forEach(nav => nav.addEventListener('click', render));


