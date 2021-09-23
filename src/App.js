import React from 'react';
import MovikoApp from './MovikoApp';
import MovikoProvider from './contexts/moviko.context';
function App() {
  return (
    <MovikoProvider>    
      <MovikoApp />  
    </MovikoProvider>

  );
}

export default App;
