var http = require('http');

const tasaDeCambio = 0.85;

var manejador = function(solicitud, respuesta){
    const urlParams = new URLSearchParams(solicitud.url.substring(1));
    const dolares = parseFloat(urlParams.get('dolares'));

    if (isNaN(dolares)) {
        respuesta.writeHead(400, {'Content-Type': 'text/plain'});
        respuesta.end('Por favor, proporcione una cantidad válida.');
    } else {
        const euros = dolares * tasaDeCambio;
        respuesta.writeHead(200, {'Content-Type': 'text/plain'});
        respuesta.end(`${dolares} dólares equivalen a ${euros} euros.`);
    }
};

var servidor = http.createServer(manejador);

servidor.listen(8000);


