import { useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Data2 } from '../utils/Data2'
import { Data } from '../utils/Data'
import { LineChart } from './components/LineChart';


import Teams from './components/Teams'


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

function App() {
  const [teams, setTeams] = useState([])

  const handleTeams = (team) => {
    if (teams.includes(team)) {
      const newTeams = teams.filter(x => x !== team)
      setTeams(newTeams)
    }
    else {
      setTeams([...teams, team])
    }
  }

  // const [options, setOptions] = useState(
  //   {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   title: {
  //     display: true,
  //     text: `Season High Scoring vs the ${team}`
  //   },
  //   elements: {
  //     point: {
  //       radius: 15,
  //       pointStyle: Data[team].map((data) => {
  //         const pointImage = new Image(35, 50);
  //         const last = data.player.last_name.length > 5 ? data.player.last_name.slice(0, 5).toLowerCase() : data.player.last_name.toLowerCase() 
  //         const first = data.player.first_name.slice(0,2).toLowerCase()
  //         pointImage.src = `https://www.basketball-reference.com/req/202106291/images/headshots/jordami01.jpg`
  //         return pointImage
  //       })
  //     }
  //   },
  //   scales: {
  //     y: 
  //       {
  //         suggestedMin: 0,
  //         suggestedMax: 80,
  //         grid: {
  //           color: '#ffc0cb',
  //           tickColor: '#ffc0cb',
  //           drawTicks: true,
  //         },
  //         ticks: {
  //           backdropColor: '#ffc0cb'
  //         }
  //       },
  //     x: {
  //       grid: {
  //         color: '#ffc0cb'
  //       }
  //     }
  //   }
  // })
  
  // const [chartData, setChartData] = useState({
  //   labels: Data[team].map((data) => `${data.player.first_name}  ${data.player.last_name}`),
  //   datasets: [
  //     {
  //       label: `Season high scoring vs the ${team}`,
  //       data: Data[team].map((data) => data.pts),
  //       showLine: false,
  //       backgroundColor: 'pink',
  //       color: 'green',
  //     }
  //   ]
  // })

  return (
    // <LineChart chartData={chartData} options={options}/>
    <Teams handleTeams={ handleTeams } teams={ teams } />
  )
}

export default App
