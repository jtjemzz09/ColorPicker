import { useState } from 'react';

// Write your Color component here
const Color = ({ color, selectedColor, setSelectedColor }) => {
  const handleClick = () => {
    setSelectedColor(color);
  };

  const classNames = 'color ' + color + (color === selectedColor ? ' selected' : '');

  return <div className={classNames} onClick={handleClick}></div>;
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={'color ' + selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="red" selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <Color color="blue" selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <Color color="green" selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App;