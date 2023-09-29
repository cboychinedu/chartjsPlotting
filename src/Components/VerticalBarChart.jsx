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
import { Bar } from 'react-chartjs-2'; 
import faker from 'faker'; 

// Register the modules 
ChartJS.register(
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend
); 

// Setting the options 
const options = {
    responsive: true, 
    plugins: {
        legend: {
            position: 'top'
        }, 
        title: {
            display: true, 
            text: "Vertical Bar Chart", 
        }
    }
}

// Setting the labels 
const labels = ['January', 'February', 'March', 'April']

// Setting the data 
const data = {
    labels, 
    datasets: [
        {
            label: 'Dataset 1', 
            data: labels.map(() => faker.datatype.number({min: 0, max: 1000})), 
            backgroundColor: 'rgba(255, 99, 132, 0.5)', 
        }
    ]
}

// Creating the class based component 
class VerticalBarChart extends Component {
    // Setting the state 
    state = {} 

    // Rendering the component, and 
    // return the jsx component 
    render() {
        return(
            <Fragment> 
                <section className="verticalBarChartDiv"> 
                    <Bar option={options} data={data} /> 
                </section>
            </Fragment>
        ); 
    }
}

// Exporting the vertical bar chart 
export default VerticalBarChart; 