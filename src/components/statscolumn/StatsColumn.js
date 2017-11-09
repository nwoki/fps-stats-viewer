import React, { Component } from 'react';
import './StatsColumn.css';
import '../../pure-release-1.0.0/pure.css'

// <h1>hEllo {this.props.name} </h1>
// StatTitle
// PlayerName
// Value

class StatsColumn extends Component {
    render() {
        return (
            <div>
                <div class="pure-u-1 pure-u-md-1-3">
                    <div class="pricing-table pricing-table-free">
                        <div class="pricing-table-header">
                            <h2>{this.props.statTitle}</h2>

                            <span class="pricing-table-price">
                                {this.props.name} <span>{this.props.value}</span>
                            </span>
                        </div>

                        <ul class="pricing-table-list">
                            <li>2nd Place</li>
                            <li>3rd Place</li>
                            <li>5th Place</li>
                            <li>6th Place</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default StatsColumn;
