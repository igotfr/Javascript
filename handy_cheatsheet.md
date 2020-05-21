## Array

- pode conter somente um tipo de dado (contem, por exemplo, ou int ou String, não pode conter int e String simultaneamente)

```rust
let mut arr: [i8; 4] = [1, 2, 3.8, 4];

print!("{:?}", arr); // expected `i8`, found floating-point number
```

- tamanho definido na definição 

```rust
let mut arr: [i8; 4] = [1, 2, 3, 4];

print!("{:?}", arr);
```

```rust
let mut arr: [i8; 4] = [1, 2, 3];

print!("{:?}", arr); // expected an array with a fixed size of 4 elements, found one with 3 elements
```

```rust
let mut arr: [i8; 4] = [1, 2, 3, 4, 5];

print!("{:?}", arr); // expected an array with a fixed size of 4 elements, found one with 5 elements
```

## Vetor

- pode conter somente um tipo de dado (contem, por exemplo, ou int ou String, não pode conter int e String simultaneamente)

- não possui tamanho, podem ser removidos ou adicionados elementos sem problema

```rust
let mut vet: Vec<i8> = vec![1, 2, 3];
```

## Lista

- pode conter quaisqer tipos de dados, não limitado a somente 1

- não possui tamanho, podem ser removidos ou adicionados elementos sem problema

```javascript
let lista = [4, 5.9, "palavra", true];

console.log(lista[2]) // palavra
```

## Javascript Object

- à esquera a chave (key), à direita o valor (value)

```javascript
let javascript_object = {
  nome: "Diego",
  5: "normal",
  6.7: 9,
  false: "não"
}

console.log(javascript_object.nome); // "Diego"

console.log(javascript_object["nome"]); // "Diego"

console.log(javascript_object[5]); // "normal"

console.log(javascript_object["5"]); // "normal"

console.log(javascript_object[6.7]); // 9

console.log(javascript_object["6.7"]); // 9

console.log(javascript_object.false); // "não"

console.log(javascript_object[false]); // "não"

console.log(javascript_object["false"]); // "não"
```

## while

```javascript
let i = 1;

while ( i < 11 )
{
  console.log(i);

  i++;
}
```

## for

```javascript
for ( let i = 1, j = 3; i < 11; i++, j += 2 )
{
  console.log(i, j);
}
```

```javascript
let arr = ["salada", "tomate", "batata", "beterraba", "cenoura"];

for ( let i = 0; i < arr.length; i++ )
{
  console.log(arr[i]);
}
```

```javascript
let arr = ["salada", "tomate", "batata", "beterraba", "cenoura"];

for ( let i in arr )
{
  console.log(i);
}
```

```javascript
let arr = ["salada", "tomate", "batata", "beterraba", "cenoura"];

for ( let valor of arr )
{
  console.log(valor);
}
```

```javascript
let obj = { nome: "Sabrina", idade: 23, peso: 62 };

for ( let key in obj )
{
  console.log(key);
}
```

```javascript
let obj = { nome: "Sabrina", idade: 23, peso: 62 };

for ( let key of Object.keys(obj) )
{
  console.log(key);
}
```

```javascript
let obj = { nome: "Sabrina", idade: 23, peso: 62 };

for ( let value of Object.values(obj) )
{
  console.log(value);
}
```

```javascript
let obj = { nome: "Sabrina", idade: 23, peso: 62 };

for ( let [key, value] of Object.entries(obj) )
{
  console.log(key, value);
}
```

```javascript
for ( let i of Array(5).fill(null) )
{
  console.log("unicórnio");
}
```

## operador ternário

```javascript
let tern = false ? "batata" :
           true ? "tomate" :
           "beterraba";

console.log(tern); // "tomate"
```

## short-circuit evaluation

```javascript
false || console.log("algo") // "algo"

true || console.log("algo") // nada

true && console.log("algo") // "algo"

false && console.log("algo") // nada
```

## null evaluation

```javascript
undefined ?? console.log("algo") // "algo"
null ?? console.log("algo") // "algo"

8 ?? console.log("algo") // nada
```javascript
