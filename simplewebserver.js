// Import modułu http
var http = require("http");

http.createServer(function (req, res) {
   // Wysłanie nagłówka HTTP
   res.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Wysłanie danych (tekstu)
   res.end('Hello World\n');
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');