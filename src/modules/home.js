/* eslint-env browser */
function homeLoad() {
  const div = document.createElement('div');
  const head1 = document.createElement('h1');
  const head2 = document.createElement('h3');

  head1.innerHTML = 'The best food in your dreams and the best view';
  head2.innerHTML = 'With a grat view of the Gotham City and warm atmosphere, we are waiting you to TheBFood.';

  div.classList.add('sp-content');

  div.appendChild(head1);
  div.appendChild(head2);

  return div;
}

export default homeLoad;