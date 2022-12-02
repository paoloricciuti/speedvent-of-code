import StackblitzSdk from "@stackblitz/sdk";

function indexHtml(today: Date) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Advent of Code - Day ${today.getDate()}</title>
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
      <h1>Powered by <img src="https://adventofcode.com/favicon.png" width="16" alt="advent of code logo"/><a href="https://speedvent-of-co.de" target="_blank" rel="noopener noreferre">speedvent-of-co.de</a></h1>
      <h2>This is an automatically generated Typescript project that let you code the #AdventOfCode without the hassle of downloading the input and spin up a new project. Type in the file and look at the console.</h2>
    </body>
    </html>`;
}

export function openStackBlitz(input: string) {
    const today = new Date();
    StackblitzSdk.openProject(
        // Payload
        {
            files: {
                "index.html": indexHtml(today),
                "index.ts": `import input from './input';`,
                "input.ts": `export default \`${input}\``,
            },
            template: "typescript",
            title: `Advent of Code ${today.getFullYear()} - Day ${today.getDate()}`,
            description: `Advent of Code - Day ${today.getDate()}`,
        },
        {
            newWindow: true,
            hideDevTools: false,
            devToolsHeight: 65,
        }
    );
}