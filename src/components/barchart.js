import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend

} from "chart.js"

import{Bar} from "react-chartjs-2"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend

)
const option = {
    responsive:true,
    plugins:{
        legend:{
            position:'bottom'
        },
        title:{
            display:true,
            text:"ARKM Dairy Manager"
        }
    }
}
 const data = {
    labels:['Jan','Feb','Mar','May','Jun','July','Aus','Sep','Oct','Nov'],
    datasets:[
        {
            label:"products",
            data:[11,15,22],
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
        },
        {
            label: 'old products',
            data:[7,9,15],
        
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
    ]
 }

function Bhar() {
  return (
    <div style={{width:800,height:400}}>
          <Bar options={option} data={data}/>
    </div>
  
  )
}

export default Bhar
