import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

let edad = 10;
edad = 20;

console.log(edad);

const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

const user1 = { nombre: "Miguel", clave: "123" };
const user2 = { nombre: "se", clave: "1234" };

const users = { user1, user2 };
console.log(users);

const sumardos = (a, b) => a + b;

console.log(sumardos(10, 90));

const aplicarOperacion = (operacion) => {
  return operacion;
};
console.log(aplicarOperacion(sumardos(100, 200)));
const aplicarOperacion2 = (operacion1, operacion2) => {
  return operacion1 + operacion2;
};
console.log(aplicarOperacion2(sumardos(100, 200), sumardos(300, 200)));
