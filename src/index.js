const messages = [
    "This is where it all begins...",
    "Commit committed",
    "Version control is awful",
    "COMMIT ALL THE FILES!",
    "The same thing we do every night, Pinky - try to take over the world!",
    "Lock S-foils in attack position",
    "This commit is a lie",
    "I'll explain when you're older!",
    "Here be Dragons",
    "Reinventing the wheel. Again.",
    "This is not the commit message you are looking for",
    "Batman! (this commit has no parents)",
    "Frodo!, come here with the ring!",
    "I'm sorry, Dave. I'm afraid I can't commit that.",
    "You shall not merge!",
    "May the commits be with you.",
    "Winter is coming...but first, let me commit this code.",
    "I have a dream...of perfect code.",
    "With great code comes great responsibility.",
    "Elementary, my dear Watson...this code needs more testing.",
    "Hasta la vista, bugs.",
    "I'm king of the world!...of version control.",
    "I'll be back...to fix this bug.",
    "This is where it all begins...",
    "Commit committed",
    "Version control is awful",
    "COMMIT ALL THE FILES!",
    "The same thing we do every night, Pinky - try to take over the world!",
    "Lock S-foils in attack position",
    "This commit is a lie",
    "I'll explain when you're older!",
    "Here be Dragons",
    "Reinventing the wheel. Again.",
    "This is not the commit message you are looking for",
    "Batman! (this commit has no parents)",
    "Frodo!, come here with the ring!",
    "It's not a bug, it's a feature,",
    "I feel the need... the need for merge speed!",
    "I have the code, I have the power!",
    "The cake is a lie!",
    "I'm not lazy, I'm just on GIT",
    "Winter is coming...but my code is ready",
    "Houston, we have merge-conflict",
    "I see dead code",
    "May the source be with you,",
    "I'm gonna make him a commit he can't refuse",
    "To code, or not to code: that is the question",
    "Do. Or do not. There is no try-catch",
    "There's no place like 127.0.0.1",
    "Git happens",
    "I find your lack of tests disturbing",
    "Commit like no one is watching",
    "Keep calm and commit",
    "You can't handle the commit!",
    "It's not just a commit, it's a lifestyle",
    "The code must flow",
    "Talk is cheap. Show me the code.",
    "Ctrl + C, Ctrl + V, Ctrl + Commit",
    "Code. Commit. Push. Repeat.",
    "One does not simply merge into master",
    "Coding is not just my job, it's my hobby",
    "I'm not a great programmer, I'm a lazy programmer",
    "Chaos is a ladder, but version control is a safety net",
    "Winter is coming... Better build my codebase",
    "Do what you love and the code will follow",
    "Commit early, commit often",
    "The first rule of GIT: You do not talk about GIT",
    "I am the one who commits",
    "Winter is coming...and so is my deadline",
    "Coding is my cardio",
    "I came, I saw, I committed",
    "There's no crying in programming",
    "All your merge conflicts are belong to us",
    "Code. Sleep. Commit. Repeat.",
    "A Lannister always merges his code",
    "You had me at 'Hello World'",
    "I solemnly swear that I am up to no good code",
    "Winter is coming... Better refactor my code",
    "The only thing we have to fear is a merge conflict",
    "You talking to me? I said, are you talking to me? Oh, you're just trying to merge",
    "Winter is coming... Better comment my code",
    "You can't stop the commit train!",
    "I find your lack of commits disturbing",
    "What happens in the commit, stays in the commit",
    "Et tu, commit?",
    "Winter is coming... Better optimize my code",
    "I have a dream, that one day my code will not be judged by the number of merge conflicts",
    "Commit now, cry later",
    "I'm too GIT to quit",
    "Winter is coming... Better test my codee",
  ];
  
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    funnyCommit
  };

  /* Explanation
  Claro, ¡con gusto! Esta parte del código define una función llamada "funnyCommit". Veamos cada una de las líneas en detalle:

const funnyCommit = () => { - Esto define una función llamada "funnyCommit". La sintaxis () => {} es una forma abreviada de definir una función de flecha en JavaScript.

const message = messages[Math.floor(Math.random() * messages.length)]; - Esta línea selecciona aleatoriamente un mensaje de la matriz "messages". Utiliza Math.random() para generar un número aleatorio entre 0 y 1, lo multiplica por el número de elementos en la matriz "messages", y luego utiliza Math.floor() para redondear el resultado al número entero más cercano. Esto da como resultado un índice aleatorio en la matriz "messages" que se utiliza para seleccionar un mensaje aleatorio.

console.log(`\x1b[34m${message}\x1b[89m`); - Esta línea imprime el mensaje seleccionado en la consola. El mensaje se formatea para que aparezca en azul en la consola mediante la inserción de \x1b[34m antes del mensaje y \x1b[89m después del mensaje.

En resumen, la función "funnyCommit" selecciona aleatoriamente un mensaje de la matriz "messages" y lo imprime en la consola con un formato de texto en azul. Esta función se puede utilizar en otros programas de JavaScript exportándola como un módulo.
*/