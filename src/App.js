import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import StatsColumn from './components/statscolumn/StatsColumn.js';

class App extends Component {
    render() {
        return (
        <div>
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">FANA-STATS</h1>
                </header>
            </div>

            <div class="l-content">
                <div id="stats-container" class="pricing-tables pure-g">
                    <StatsColumn statTitle="Kills" name="Sbiego" value="135" />
                    <StatsColumn statTitle="Headshots" name="Tegamen" value="999" />
                    <StatsColumn statTitle="Deaths" name="Dog87" value="infinite" />
                </div>
            </div>
        </div>
    );
  }
}

export default App;
