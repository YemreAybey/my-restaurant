import homeLoad from "./modules/home";
import loadNavBar from "./modules/navbar";
import { brotliDecompressSync } from "zlib";

const content = document.getElementById('content');
function render(e) {
  content.innerHTML = "";
  content.appendChild(page);
  if (e.target.id == 'home')
  content.appendChild(home);
}


const page = loadNavBar();
const home = homeLoad();
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


