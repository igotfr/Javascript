const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(dados => dados.json());
//const data = await response.json();

console.log(response);

console.log();

const decoder = new TextDecoder("utf-8");
const data = await Deno.readFile("./instagram.json");
const dataObject = JSON.parse(decoder.decode(data));

console.log(typeof(dataObject));
console.log(dataObject);
