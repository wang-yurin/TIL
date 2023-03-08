import React from 'react';
import './Example.scss';

export default function Example() {
  return (
    <div>
      <p>Example</p>
      <p className="font">Example</p>

      <nav>
        <ul>
          <li>nesting O</li>
          <li>
            <a href="www.google.com">www.google.com</a>
          </li>
        </ul>
      </nav>
      <ul>
        <li>nesting X</li>
        <li>
          <a href="www.google.com">www.google.com</a>
        </li>
      </ul>

      <h1>Modules</h1>
      <p className="base">Modules</p>
      <p className="inverse">Modules</p>

      <h1>mixins</h1>
      <p className="info">mixins</p>
      <p className="alert">mixins</p>
      <p className="success">mixins</p>

      <h1>Extend/Inheritance</h1>
      <p className="message">Extend/Inheritance</p>
      <p className="success2">Extend/Inheritance</p>
      <p className="error">Extend/Inheritance</p>
      <p className="warning">Extend/Inheritance</p>

      <div className="square-av"></div>
      <div className="circle-av"></div>

      <div className="sidebar">sidebar</div>

      <div className="gray">gray</div>
      <button className="button">Button</button>

      <div className="pulse">pulse</div>
    </div>
  );
}
