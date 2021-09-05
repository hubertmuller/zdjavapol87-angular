const http = require('http');
const port = 3200;

const server = http.createServer( (req, res) => {
  console.log('PRzyszlo zapytanie ');
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
    }
  ]
  `);
  console.log('Odpowiedzielismy ');
}   );

server.listen(port, '127.0.0.1', () => {
  console.log('Rozpoczelismy nasluchiwanie na porcie ' + port);
})
