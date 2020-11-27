import React from 'react';
import "./styles/Badge.css";

import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src="https://static.platzi.com/media/avatars/avatars/_hhugom_06e4ec41-e943-43a3-87ba-3f8b894c4d0c.jpg" alt="Avatar" />
          <h1>
            Héctor <br /> Moreira
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Web Developer</h3>
          <div>@hectomoreira</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}
export default Badge;