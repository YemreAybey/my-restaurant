function creatItems(name, price, dis) {
  const part = document.createElement('div');
  part.classList.add('menu_item');

  const food = document.createElement('h4');
  food.classList.add('name');
  food.innerHTML = name;

  const cost = document.createElement('span');
  cost.classList.add('price');
  cost.innerHTML = price;

  const what = document.createElement('p');
  what.classList.add('description');
  what.innerHTML = dis;

  const line = document.createElement('hr');

  part.appendChild(food);
  part.appendChild(cost);
  part.appendChild(what);
  part.appendChild(line);

  return part;
}

function createSection(header) {
  const part = document.createElement('div');
  part.classList.add('menu-section');
  const head = document.createElement('h3');
  head.innerHTML = header;
  part.appendChild(head);
  return part;
}

function loadMenu(){
  const section = document.createElement('section');
  section.classList.add('menu');

  const head1 = document.createElement('h1');
  head1.classList.add('menu_restName');
  const head2 = document.createElement('h2');
  head2.classList.add('menu-title');

  head1.innerHTML = 'TheBFood';
  head2.innerHTML = 'Menu';
  section.appendChild(head1);
  section.appendChild(head2);

  const sec1 = createSection('Meats');
  const items1 = creatItems('Salmon', '12.99 USD', 'Dry Aged for 48 hours');
  const items2 = creatItems('Steak', '11.99 USD', 'Dry Aged for 48 hours');
  sec1.appendChild(items1);
  sec1.appendChild(items2);
  section.appendChild(sec1);

  const sec2 = createSection('Desserts');
  const items3 = creatItems('Cupcake', '5.99 USD', 'Delicious');
  const items4 = creatItems('Penne Cotta', '6.99 USD', 'Suggested');
  sec2.appendChild(items3);
  sec2.appendChild(items4);
  section.appendChild(sec2);

  return section;
}

export default loadMenu