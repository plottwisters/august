import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link,  Switch, NavLink } from "react-router-dom";

import Playbook from './components/playbook';

function App() {
  return (
    <div>
      <Link to="/" className="back">Back</Link>
      <Playbook />
    </div>
  );
}

export default App;
