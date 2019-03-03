const ShowCard = (block, userInfo, user) => {
  const cardsItem = document.createElement('div');
  cardsItem.className = 'cards__item';
  block.appendChild(cardsItem);

  const cardsTitle = document.createElement('h2');
  cardsTitle.innerText = '\u263a ' + user.fullName;
  cardsTitle.className = 'cards__title';
  cardsItem.appendChild(cardsTitle);

  const cardsImage = document.createElement('img');
  cardsImage.className = 'cards__image';
  cardsImage.setAttribute('src', userInfo.avatar_url);
  cardsImage.setAttribute('alt', userInfo.login);
  cardsItem.appendChild(cardsImage);
};

export { ShowCard };
