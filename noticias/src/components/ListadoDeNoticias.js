import React from "react";
import Noticia from "./Noticia";

const ListadoDeNoticias = ({ noticias }) => {
  return (
    <div className="row">
      {noticias.map((noticia) => (
        <Noticia key={noticia.url} noticia={noticia} />
      ))}
    </div>
  );
};

export default ListadoDeNoticias;
