const userCardsWrapper = document.querySelector('.user-cards');
const userCardTemplate = document.querySelector('[data-user-template]') as HTMLTemplateElement;
const searchInput = document.getElementById('search');
let usersData = [];

const filterUsersBounced = debounce(filterUsers, 500);

searchInput?.addEventListener('input', event => {
  const target = event.target as HTMLInputElement;
  const value = target.value.toLowerCase();
  filterUsersBounced(value);
});

function debounce(cb: (...args: any[]) => void, delay = 1000) {
  let timeout: number;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  }
}

function filterUsers(value: string) {
  // Hide elements from DOM
  usersData.forEach(user => {
    const isVisible = user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value);
    user.element.classList.toggle('hide', !isVisible);
  });
}

function createUserCards(users) {
  console.dir(userCardTemplate?.content.cloneNode(true))
  return users.map(user => {
    const userEl = (userCardTemplate?.content.cloneNode(true) as HTMLElement).children[0];
    if (userEl) {
      userEl.querySelector('.name')!.textContent = user.name;
      userEl.querySelector('.email')!.textContent = user.email;
      userCardsWrapper?.append(userEl);

      return {
        name: user.name,
        email: user.email,
        element: userEl
      }
    }
  });
}

function getAllUsers() {
  return fetch('data/users.json')
    .then(res => res.json())
    .then(createUserCards);
}

const showUsers = async () => {
  usersData = await getAllUsers();
}

showUsers();

