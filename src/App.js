import { useState } from "react";
import "./app.css";

function App() {
  //estado inicial é guardado no peso e estado final guardado setpeso 
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const[mensagem, setMensagem] = useState('');

  //funcao que calcula o imc pego em qualquer site que calcula o IMC
  function calcularIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    

    //se o imc estiver entre 18,5 ate 24,9 normal | entre 25,0 e 29,9 sobre peso | acima de 30,0 obesidade | maior que 40,0 obsidade grave
    if (imc < 18.5) {
      setMensagem("Está abaixo do Peso!!! seu IMC : " + imc.toFixed(2));
    } else if (imc >=18.5 && imc <24.9){
      setMensagem("Está com Peso ideal !!! seu IMC : " + imc.toFixed(2));
    }else if (imc >=25.0 && imc <29.9){
      setMensagem("Está com sobre Peso, Atenção!!! seu IMC : " + imc.toFixed(2));
    }else if (imc >=30.0 && imc <39.9){
      setMensagem("Está acima do Peso, Obesidade é coisa seria!!! seu IMC : " + imc.toFixed(2));
    }else if(imc>40.0 ){
      setMensagem("Obesidade grave, Alerta!!! seu IMC : " + imc.toFixed(2));
    };


  }

  return (
    <div className="app">
      <h1>CALCULADORA DE IMC</h1>
      <span>Calcule seu IMC</span>

      <div className="area-input">
        <h3>Peso</h3>
        <input
          title="text"
          placeholder="Peso em (kg) Ex: 90"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <h3>Altura</h3>
        <input
          title="text"
          placeholder="Altura em (cm) Ex: 180"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        
        <button onClick={calcularIMC}>Calcular</button>
      </div>
      {/* importa a mensagem que sera calculada pelo IMC */}
      <h2>{mensagem}</h2>
    </div>
  );
}

export default App;
