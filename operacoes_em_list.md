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
