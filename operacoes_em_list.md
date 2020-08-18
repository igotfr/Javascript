```javascript
let users = [
  { id: 1, nome: "Evandro" },
  { id: 2, nome: "Luisa" },
  { id: 3, nome: "Renata" },
  { id: 4, nome: "Aderbal" }
];
```

## Deletar elemento da lista

```javascript
users.splice(users.findIndex(user => user.id === 2), 1);
```

## Retornar nova lista com elemento deletado

```javascript
const newUsers = users.filter(user => user.id !== 2);
```

## Atualizar elemento da lista

```javascript
```

## Retornar nova lista com elemento atualizado

```javascript
const newUsers = users.map(user => user.id === 3 ? { ...user, favorite: true } : user);
```
