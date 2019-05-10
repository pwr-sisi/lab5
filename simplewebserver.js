// Załadowanie modułu http
var http = require("http");

// Utworzenie serwera - definicja funkcji odpowiadającej na zapytania HTTP
var server = http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hello World\n');
})

// Uruchomienie serwera na porcie 3000
server.listen(3000);

console.log('Server running at http://127.0.0.1:3000/');