// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js
fetch(url)
  .then(response => response.json())
  .then(data => {
    const userNameInput = document.querySelector('#userNameInput');
    const getUserButton = document.querySelector('#getUserButton');
    const userCity = document.querySelector('#userCity');

    getUserButton.addEventListener('click', () => {
      const enteredName = userNameInput.value;
      const user = data.find(u => u.name === enteredName);

      if (user) {
        userCity.textContent = user.address.city;
      } else {
        userCity.textContent = 'Користувача з таким іменем не знайдено';
      }
    });
  })
  .catch(error => {
    console.error('Помилка при отриманні даних:', error);
  });
