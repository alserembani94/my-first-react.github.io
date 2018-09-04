import React from 'react';
import ReactDOM from 'react-dom';

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

const ai1 = <p>Do me a favour</p>

ReactDOM.render(ai1, document.getElementById('firstPlace'));
