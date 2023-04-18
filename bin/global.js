#!/usr/bin/env node
let random = require('../src/index.js');

random.funnyCommit();

/*
Este código es un archivo de comando (command-line interface) escrito en JavaScript que utiliza la biblioteca "random" para generar y mostrar mensajes divertidos en la consola. La primera línea #!/usr/bin/env node le indica al sistema operativo que debe utilizar el intérprete de comandos "node" para ejecutar este archivo. La segunda línea importa la función "funnyCommit" desde el archivo "index.js" ubicado en la carpeta "src" utilizando la variable "random". La tercera línea llama a la función "funnyCommit", que selecciona aleatoriamente un mensaje divertido de una lista de mensajes y lo imprime en la consola.

En resumen, este código permite que el usuario ejecute la función "funnyCommit" desde la línea de comando utilizando el comando node random, que generará y mostrará un mensaje aleatorio en la consola.
*/