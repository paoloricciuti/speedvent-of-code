
function getHref(input: string) {
    return `data:text/plain;charset=utf-8,${encodeURIComponent(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        *{
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-size: 1rem;
          font-weight: 400;
          font-family: sans-serif;
        }
        body{
          background: linear-gradient(45deg, #222, #444);
          color: white;
          text-align: center;
          padding: 1rem;
          height: 100vh;
        }
        h1{
          font-size: 1.1rem;
          font-weight: bold;
          margin: 1rem;
        }
        a{
          color: white;
          margin-left: .5ch;
        }
      </style>
    </head>
    <body>
      <script>
        const input = window.input;
      </script>
      <h1>Powered by <img src="https://adventofcode.com/favicon.png" width="16" alt="advent of code logo"/><a href="https://speedvent-of-co.de" target="_blank" rel="noopener noreferre">speedvent-of-co.de</a></h1>
      <h2>This is an automatically generated HTML file that let you code the #AdventOfCode without the hassle of downloading the input and spin up a new project. Type in the first script of the file and look at the console. (the input has been added to the last script to avoid cluttering your code)</h2>
      <script>
        window.input=\`${input}\`;
      </script>
    </body>
    </html>`)}`;
}

export function downloadSingleFile(input: string) {
    var element = document.createElement('a');
    const today = new Date();
    element.setAttribute('href', getHref(input));
    element.setAttribute('download', `aoc-${today.toISOString()}.html`);

    document.body.appendChild(element);
    element.click();
    element.remove();
}