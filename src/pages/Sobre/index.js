import React from 'react';
import { Link } from 'react-router-dom';

function Sobre() {
  return (
    <div className="sobre container-text" >
      <div className="text">
        <h1>
          Cine <span className="text span">XV</span>
        </h1>
        <p>
          O CINE XV, em operação desde o ano de 2004, está em constante evolução para acompanhar o mercado. Atualmente reúne o que há de mais moderno em tecnologia com som digital EX em salas 2D e 3D.
          <br />
          Nossa trajetória com a experiência acumulada aliada à incessante busca por inovação, reflete na satisfação proporcionada aos nossos clientes do início ao fim do entretenimento, que experimenta um serviço diferenciado e de qualidade.
        </p>

        <div className="redes">
          <a href="a"><i className="fab fa-facebook"></i></a>
          <a href="a"><i className="fab fa-twitter"></i></a>
          <a href="a"><i className="fab fa-linkedin"></i></a>
          <a href="a"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
