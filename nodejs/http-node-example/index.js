const http = require('http')

const server = http.createServer((request, response) => {
  response.end('hello milanojs')
})

server.listen(3000, () => {
  console.log('server listning at localhost:3000')
});
