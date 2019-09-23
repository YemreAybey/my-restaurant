function loadNavBar() {
  const nav = document.createElement('nav');
  nav.classList.add('navigation');

  const brandDiv = document.createElement('div');
  const rightDiv = document.createElement('div');

  brandDiv.classList.add('brand');
  brandDiv.innerHTML = 'TheBFood';

  rightDiv.classList.add('right-align');

  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  const span3 = document.createElement('span');

  span1.id = 'home';
  span2.id = 'menu';
  span3.id = 'contact';

  span1.innerHTML = 'Home';
  span2.innerHTML = 'Menu';
  span3.innerHTML = 'Contact';

  rightDiv.appendChild(span1);
  rightDiv.appendChild(span2);
  rightDiv.appendChild(span3);

  nav.appendChild(brandDiv);
  nav.appendChild(rightDiv);

  return nav;

}

export default loadNavBar