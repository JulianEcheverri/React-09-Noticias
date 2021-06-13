import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoDeNoticias from "./components/ListadoDeNoticias";

function App() {
  // Definir la categoria y noticias
  const [categoria, guardarCategoria] = useState("technology");
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const apiKey = "e08a406edb954b47b53ef91b609850ec";
      const url = `http://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=${apiKey}`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    };
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header titulo="Noticias" />
      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria} />
        <ListadoDeNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
