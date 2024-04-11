const http = require('http'),
  fs = require('fs'),
  port = 3001

const server = http.createServer(function (request, response) {
  switch (request.url) {
    case '/':
      sendFile(response, 'index.html')
      break
    case '/index.html':
      sendFile(response, 'index.html')
      break
    case '/explanation.html':
      sendFile(response, 'explanation.html')
      break
    case '/index.js':
      sendFile(response, 'index.js')
      break
    case '/game.js':
      sendFile(response, 'game.js')
      break
    default:
      response.end('404 Error: File Not Found')
  }
})

server.listen(process.env.PORT || port)

const sendFile = function (response, filename) {
  fs.readFile(filename, function (err, content) {
    response.end(content, 'utf-8')
  })
}
