const http = require('http');
const fs = require('fs');
const PORT = 8000;
const Host = '127.0.0.1';

const server = http.createServer((req, res) => {

    const HandleReadFile = (statusCode, FileLoc) => {
        fs.readFile(FileLoc, (err, data) => {
            res.writeHead(statusCode, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        });
    }
    if (req.url === '/') {
        HandleReadFile(200, "./home.html");
    }
    else if (req.url === '/about') {
        HandleReadFile(200, "./about.html");
    }
    else if (req.url === '/contact') {
        HandleReadFile(200, "./contact.html");
    }
    else {
        HandleReadFile(403, "./error.html");
    }
});

server.listen(PORT, Host, () => {
    console.log(`Server is running at http:\\${Host}:${PORT}`);
})