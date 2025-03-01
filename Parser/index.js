const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Секретный ключ для проверки запросов
const SECRET_KEY = 'mySecretKey';

// Токен для подтверждения сервера
const CONFIRMATION_TOKEN = '42b3cdf9';

app.use(bodyParser.json());

// Обработка входящих запросов
app.post('/callback', (req, res) => {
  const { body } = req;

  // Проверка секретного ключа
  if (body.secret !== SECRET_KEY) {
    return res.status(403).send('Invalid secret key');
  }

  // Обработка события подтверждения сервера
  if (body.type === 'confirmation') {
    return res.send(CONFIRMATION_TOKEN);
  }

  // Обработка других событий
  if (body.type === 'message_new') {
    const { message } = body.object;
    console.log('New message:', message.text);

    // Отправка ответа
    return res.send('ok');
  }

  // Ответ на другие типы событий
  res.send('ok');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});