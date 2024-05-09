import { useState } from "react";
import "./App.css";
import html2canvas from "html2canvas";

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value);
  };

  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value);
  };

  const onChangeImagen = function (evento) {
    setImagen(evento.target.value);
  };

  const onClickExportar = function (evento) {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      let img = canvas.toDataURL("image/png");
      let link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  };

  return (
    <div className="App">
      {
        // Select picker de memes
      }

      <select onChange={onChangeImagen}>
        <option value="princesa">Princesa</option>
        <option value="abuela">Abuela</option>
        <option value="actor">Actor</option>
        <option value="picardia">Picardia</option>
        <option value="recalculando">Recalculando</option>
      </select>
      <br />

      {
        // Input text - Primer Linea
      }
      <input onChange={onChangeLinea1} type="text" placeholder="Linea 1" />
      <br />
      <input onChange={onChangeLinea2} type="text" placeholder="Linea 2" />
      <br />
      <button onClick={onClickExportar}>Export</button>

      {
        // Input text - Segunda Linea
      }
      <div className="meme" id="meme">
        <span>{linea1}</span><br/>
        <span>{linea2}</span><br/>

        <img src={"/img/" + imagen + ".jpg"} />
      </div>

      {
        // Boton exportar
      }
    </div>
  );
}

export default App;
