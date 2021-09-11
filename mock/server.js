//uchuchamiac przez: node nazwaskryptu.js

const http = require('http');
const port = 3200;

const server = http.createServer( (req, res) => {
  console.log('Przyszlo zapytanie ');
  res.setHeader('Content-type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

  if (req.method === 'GET' && req.url === '/api/lista') {
    res.end(`
  [
    {
      "imie": "Janek",
      "nazwisko": "Kowalski",
      "haslo": "",
      "plec": "m",
      "szczepionka": "1",
      "zyczenia": {
        "x": true,
        "y": false
      },
      "uwagi": ""
    },
      {
      "imie": "Anna",
      "nazwisko": "Nowak",
      "haslo": "",
      "plec": "k",
      "szczepionka": "2",
      "zyczenia": {
        "x": true,
        "y": true
      },
      "uwagi": ""
    },
      {
      "imie": "Anna",
      "nazwisko": "Nowak",
      "haslo": "",
      "plec": "k",
      "szczepionka": "3",
      "zyczenia": {
        "x": true,
        "y": true
      },
      "uwagi": ""
    }
  ]
  `);
  } else if (req.method === 'POST' && req.url === '/api/osoba') {
    res.end();
  } else {
    res.end();
  }
  console.log('Odpowiedzielismy');
}   );

server.listen(port, '127.0.0.1', () => {
  console.log('Rozpoczelismy nasluchiwanie na porcie ' + port);
})
