import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useColorObjects } from '../.';

const App = () => {
  const colors = useColorObjects();
  return (
    <div>
      {colors.map((color, index) => (
        <div key={index}>
          <span>
            {color.name}
            <div
              style={{
                backgroundColor: `#${color.hex}`,
                width: '20px',
                height: '20px',
                margin: '5px',
                border: '1px solid rgba(0, 0, 0, .2)',
              }}
            ></div>
          </span>
        </div>
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
