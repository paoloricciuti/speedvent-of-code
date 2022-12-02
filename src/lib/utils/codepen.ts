export function openCodepen(input: string) {
    const form = document.createElement("form");
    form.setAttribute("action", "https://codepen.io/pen/define");
    form.setAttribute("method", "POST");
    form.setAttribute("target", "_blank");
    const today = new Date();
    const data = {
        html: `<script>window.input=\`${input}\`</script>      <h1>Powered by <img src="https://adventofcode.com/favicon.png" width="16" alt="advent of code logo"/><a href="https://speedvent-of-co.de" target="_blank" rel="noopener noreferre">speedvent-of-co.de</a></h1>
        <h2>This is an automatically generated HTML file that let you code the #AdventOfCode without the hassle of downloading the input and spin up a new project. Type in js part of the codepen and look at the console. (the input has been added to the html to avoid cluttering your code)</h2>`,
        js: `const {input} = window;`,
        css: `*{
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
          }`,
        title: "Advent of code 2022 - Day " + today.getDate(),
        layout: "left",
        js_pre_processor: "typescript",
        editors: "0011",
    };
    const JSONstring = JSON.stringify(data).replace(/"/g, "&quot;").replace(/'/g, "&apos;");
    const button = document.createElement("button");
    const formHTML = `<input type="hidden" name="data" value='${JSONstring}'>`;
    form.innerHTML = formHTML;
    form.append(button);
    form.submit();
    document.body.append(form);
    button.click();
    form.remove();
}