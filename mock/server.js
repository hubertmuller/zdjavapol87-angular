//uchuchamiac przez: node nazwaskryptu.js

const http = require('http');
const port = 3200;

const server = http.createServer( (req, res) => {
  console.log('Przyszlo zapytanie ');
  res.setHeader('Content-type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.end(`
  [
    {
      "imie": "Janek",
      "nazwisko": "Kowalski",
      "plec": "m",
      "szczepionka": "p",
      "zyczenia": {
        "a": true,
        "b": false
      }
    },
      {
      "imie": "Anna",
      "nazwisko": "Nowak",
      "plec": "k",
      "szczepionka": "a",
      "zyczenia": {
        "a": true,
        "b": true
      }
    },
      {
      "imie": "Anna",
      "nazwisko": "Nowak",
      "plec": "k",
      "szczepionka": "a",
      "zyczenia": {
        "a": true,
        "b": true
      }
    },
      {
      "imie": "Anna",
      "nazwisko": "Nowak",
      "plec": "k",
      "szczepionka": "a",
      "zyczenia": {
        "a": true,
        "b": true
      }
    },
      {
      "imie": "Anna",
      "nazwisko": "Nowak",
      "plec": "k",
      "szczepionka": "a",
      "zyczenia": {
        "a": true,
        "b": true
      }
    },
      {
      "imie": "Anna",
      "nazwisko": "Nowak",
      "plec": "k",
      "szczepionka": "a",
      "zyczenia": {
        "a": true,
        "b": true
      }
    },
      {
      "imie": "Anna",
      "nazwisko": "Nowak",
      "plec": "k",
      "szczepionka": "a",
      "zyczenia": {
        "a": true,
        "b": true
      }
    },
      {
      "imie": "Anna",
      "nazwisko": "Nowak",
      "plec": "k",
      "szczepionka": "a",
      "zyczenia": {
        "a": true,
        "b": true
      }
    },
      {
      "imie": "Anna",
      "nazwisko": "Nowak",
      "plec": "k",
      "szczepionka": "a",
      "zyczenia": {
        "a": true,
        "b": true
      }
    },
      {
      "imie": "Anna",
      "nazwisko": "Nowak",
      "plec": "k",
      "szczepionka": "a",
      "zyczenia": {
        "a": true,
        "b": true
      }
    },
      {
      "imie": "Anna",
      "nazwisko": "Nowak",
      "plec": "k",
      "szczepionka": "a",
      "zyczenia": {
        "a": true,
        "b": true
      }
    },
      {
      "imie": "Anna",
      "nazwisko": "Nowak",
      "plec": "k",
      "szczepionka": "a",
      "zyczenia": {
        "a": true,
        "b": true
      }
    },
      {
      "imie": "Anna",
      "nazwisko": "Nowak",
      "plec": "k",
      "szczepionka": "a",
      "zyczenia": {
        "a": true,
        "b": true
      }
    },
      {
      "imie": "Anna",
      "nazwisko": "Nowak",
      "plec": "k",
      "szczepionka": "a",
      "zyczenia": {
        "a": true,
        "b": true
      }
    },
      {
      "imie": "Anna",
      "nazwisko": "Nowak",
      "plec": "k",
      "szczepionka": "a",
      "zyczenia": {
        "a": true,
        "b": true
      }
    },
      {
      "imie": "Anna",
      "nazwisko": "Nowak",
      "plec": "k",
      "szczepionka": "a",
      "zyczenia": {
        "a": true,
        "b": true
      }
    },
      {
      "imie": "Anna",
      "nazwisko": "Nowak",
      "plec": "k",
      "szczepionka": "a",
      "zyczenia": {
        "a": true,
        "b": true
      }
    },
      {
      "imie": "Anna",
      "nazwisko": "Nowak",
      "plec": "k",
      "szczepionka": "a",
      "zyczenia": {
        "a": true,
        "b": true
      }
    }
  ]
  `);
  console.log('Odpowiedzielismy');
}   );

server.listen(port, '127.0.0.1', () => {
  console.log('Rozpoczelismy nasluchiwanie na porcie ' + port);
})
