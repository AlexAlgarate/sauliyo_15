import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(props) {
    return(
        <div className="centered-content3">
          <img src="/imagenes/letra_s.png" alt="Copyright"></img>
          <Link className="link" to="https://github.com/sauliyo15/sauliyo_15" target='_blank'>
          <p>© 2024 sauliyo15.web.app by Saúl García v1.</p>
          </Link>
        </div>
    );
}