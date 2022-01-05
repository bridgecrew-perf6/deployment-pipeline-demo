import React from 'react';
import './App.css';
import { Stepper } from 'react-form-stepper';

function App() {
  return (
    <div className="App">
          <Stepper
              connectorStateColors
              steps={[{ label: 'local' }, { label: 'development' }, { label: 'staging' }, {label: 'production'}]}
              activeStep={0}
          />
        <p>
            We're currently on the {process.env.REACT_APP_ENVIRONMENT} environment!
        </p>
    </div>
  );
}

export default App;
