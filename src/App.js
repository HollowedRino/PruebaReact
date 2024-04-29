import logo from './logo.svg';
import './App.css';

function MiBoton(){
  function handlerClick(){
    let nom = document.getElementById("nombres").value;
    let ape = document.getElementById("apellidos").value;
    let eda = document.getElementById("edad").value;
    alert("Hola " + nom + " " + ape + ", su edad es: " + eda);
  }
  return(
    <button type="button" onClick={handlerClick}>Hacer click</button>
  );
}

function ListaCompra(props){
  return(
    <>
    <h1>Hola {props.usuario}</h1>
    </>
  );
}

function App() {
  const productos = [
    {nombreProducto: 'Manzana', esFruta: true},
    {nombreProducto: 'Pera', esFruta: true},
    {nombreProducto: 'Apio', esFruta: false},
    {nombreProducto: 'Brocoli', esFruta: false},
    {nombreProducto: 'Chocolate', esFruta: false}
  ]
  return (
    <>
      <h1>Ejemplo de React</h1>
      <input type="text" id="nombres" placeholder="Ingrese nombres"></input> <br/>
      <input type="text" id="apellidos" placeholder="Ingrese apellidos"></input> <br/>
      <input type="number" id="edad" placeholder='Ingrese edad'></input> <br/>
      <MiBoton/>
      <ListaCompra usuario="Sebastian"/>
    </>
  );
}

export default App;
