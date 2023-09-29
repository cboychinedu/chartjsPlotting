// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import {
    Chart as ChartJS, 
    CategoryScale,
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend  
} from 'chart.js'; 
import { Scatter } from 'react-chartjs-2';
import faker from 'faker'; 

// Register the modules 
ChartJS.register(
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend
)

// Setting the options 
const options = {
    scales: {
        y: {
            beginAtZero: true, 
        }, 
    }, 
}; 

// Setting the labels 
const labels = ['January', 'February', 'March', 'April' ]; 

// Creating a fake data set 
const data =  {
    labels, 
    datasets: [
        {
            label: "Scatterplot data", 
            data: [
                {
                    x: 20,
                    y: 0.7,
                }, 
                {
                    x: 100, 
                    y: 300, 
                }, 
                {
                    x: 200, 
                    y: 400, 
                }, 
                {
                    x: 300, 
                    y: 145, 
                }

            ],
            backgroundColor: 'rgba(255, 99, 132, 1)', 
        }, 
    ], 
}; 

// Creating the class based component 
class ScatterPlot extends Component { 
    // Setting the state 
    state = {} 

    // Rendering the compnent, 
    render() {
        // Return 
        return(
            <Fragment> 
                <section className="scatterDiv">
                    <Scatter options={options} data={data} /> 
                </section>
            </Fragment>
        ); 
    }
}

// Exporting the default component 
export default ScatterPlot; 