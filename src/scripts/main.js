import { UniversalFunction } from './UniversalFunction';
import { ShowCard } from './ShowCard';

UniversalFunction('https://tanuhaua.github.io/datas-file-json/github_users.json')
  .then(response => {
    const users = JSON.parse(response);
    return users;
  })
  .then(users => {
    const cards = document.querySelector('.js-cards');
    users
      .forEach(user => {
        UniversalFunction(`https://api.github.com/users/${user.githubName}`)
          .then(response => {
            const userInfo = JSON.parse(response);
            ShowCard(cards, userInfo, user);
          })
          .catch(error => {
            console.log(`Rejected: ${error}`);
          });
      })
      .catch(error => {
        console.log(`Rejected: ${error}`);
      });
  });

fetch('https://tanuhaua.github.io/datas-file-json/github_users.json')
  .then(response => {
    const users = response.json();
    return users;
  })
  .then(users => {
    const usersBlock = document.createElement('section');
    document.body.appendChild(usersBlock);
    const sectionTitle = document.createElement('h1');
    sectionTitle.className = 'section-title';
    sectionTitle.innerText = 'Users with fetch';
    usersBlock.appendChild(sectionTitle);
    const cards = document.createElement('div');
    cards.className = 'cards';
    usersBlock.appendChild(cards);
    users
      .forEach(user => {
        fetch(`https://api.github.com/users/${user.githubName}`)
          .then(response => {
            const userInfo = response.json();
            return userInfo;
          })
          .then(userInfo => {
            ShowCard(cards, userInfo, user);
          })
          .catch(error => {
            console.log(`Rejected: ${error}`);
          });
      })
      .catch(error => {
        console.log(`Rejected: ${error}`);
      });
  });
