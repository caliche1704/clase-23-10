const string ='textos';
const number = 123123;
const array = ['React','Vite','Sena','2694526'];
console.log(array);
const boolean = true;
const funcion = ()=> 2+2;
const objeto ={nombre:'Clase React', fecha:'23-10-2023'};
const fecha = new Date();

export const PrimerComponente = () => {
  return (
    <>
        <h2>Manejo de tipos de datos y variables</h2>
        <ol>
            <li>{string}</li>
            <li>{number}</li>
            <li>{array}</li>
            <li>{boolean}</li>
            {console.log(boolean)}
            <li>{funcion()}</li>
            <li>{JSON.stringify(objeto)}</li>
            <li>{JSON.stringify(fecha)}</li>
        </ol>
    </>
  )
}

export default PrimerComponente
