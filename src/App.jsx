// Importing the necessary modules 
import React, { Component, Fragment } from 'react'
import './App.css';
import LinePlot from './Components/LinePlot';
import VerticalBarChart from './Components/VerticalBarChart';
import ScatterPlot from './Components/ScatterChart';

class App extends Component {
  // Setting the state 
  state = {} 

  // Rendering the component 
  render() {
    // Returning the jsx component 
    return(
      <div> 
        <div className="headerDiv"> 
          <h3> Chart JS Testing </h3>
        </div>

        {/* Adding the line plot Component */}
        <LinePlot /> 

        {/* Adding the Vertical Line bar chart  */}
        <VerticalBarChart /> 

        {/* Adding the Scatter plot chart  */}
        <ScatterPlot /> 

      </div>
    )
  }
}

// Exporting the app 
export default App;
