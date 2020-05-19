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
```
