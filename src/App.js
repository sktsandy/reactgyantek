import React from "react";
import User from './User';

const App = () => {
  function perentAlert(data){
    console.log(data);
    alert(data.name);
} 

  return (
    <>
      <h2> Lefting state up </h2>
          <User alert = { perentAlert } />
    </>
  );
};

export default App;
