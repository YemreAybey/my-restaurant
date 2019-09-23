import homeLoad from './modules/home';
import loadNavBar from './modules/navbar';
import loadMenu from './modules/menu';

const content = document.getElementById('content');
function render(e) {
  content.innerHTML = "";
  content.appendChild(page);
  const body = document.querySelector('body');
  const navs = document.querySelectorAll('.right-align>span');
  const brand = document.querySelector('.brand');
  if (e.target.id == 'home') {
    body.style.backgroundImage = "url('imgs/about.jpg')";
    content.appendChild(home);
    navs.forEach(n => n.style.color = 'rgb(238, 212, 109)');
    brand.style.color = 'rgb(253, 255, 116)';
  }
  else if (e.target.id == 'menu') {
    body.style.backgroundImage = 'none';
    content.appendChild(menu);
    navs.forEach(n => n.style.color = 'black');
    brand.style.color = 'black';
  } else {
    
  }
}


const page = loadNavBar();
const home = homeLoad();
const menu = loadMenu();
// const menu = menuLoad();
// const contact = contactLoad();

content.appendChild(page);
content.appendChild(home);

const homeContent = document.getElementById('home');
const menuContent = document.getElementById('menu');
const contactContent = document.getElementById('contact');

homeContent.addEventListener('click', render);
menuContent.addEventListener('click', render);
contactContent.addEventListener('click', render);


