/* eslint-env browser */
function loadContact(){
  const contArea = document.createElement('div');
  contArea.classList.add('contact');

  const phoneArea = document.createElement('div');
  phoneArea.classList.add('phone');
  const num = document.createElement('span');
  num.innerHTML = 'Our Phone Number is<br>+90 0795 976 34 45'
  phoneArea.appendChild(num);

  const chatAra = document.createElement('div');
  chatAra.classList.add('live');
  const sent = document.createElement('span');
  sent.innerHTML = 'Just Click To Button To Start A chat';
  const but = document.createElement('button');
  but.innerHTML = 'Start Conversation';
  but.classList.add('chat');
  chatAra.appendChild(sent);
  chatAra.appendChild(but);

  contArea.appendChild(phoneArea);
  contArea.appendChild(chatAra);

  return contArea;
}

export default loadContact