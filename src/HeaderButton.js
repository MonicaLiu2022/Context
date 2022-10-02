import React from 'react';
import ThemeContext from './ThemeContext';

function HeaderButton() {
  const buttonContext = React.useContext(ThemeContext)
  return (
    <div>
      <button
        style={buttonContext}>Press me</button>
    </div>
  );
}

export default HeaderButton;
