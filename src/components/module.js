import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,  Switch, NavLink } from "react-router-dom";

export default function Module(props)  {
  return (
    <NavLink to={"/play/" + props.ptSlug} className="block" activeClassName="activeActivity">
      <h2>{props.ptName}</h2>
      <h3>{props.ptTagline}</h3>
    </NavLink>
  );
}
