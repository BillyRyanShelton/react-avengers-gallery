import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      pics: [];
      loading: true;
    }
  }

}