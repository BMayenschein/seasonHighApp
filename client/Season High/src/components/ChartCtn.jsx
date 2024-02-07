import { Line } from 'react-chartjs-2';
import { TeamInfo } from '../../utils/TeamInfo'

// const chartOptions = {
//       responsive: true,
//       maintainAspectRatio: false,
//       title: {
//         display: true,
//         text: `Season High Scoring vs the ${team}`
//       },
//       elements: {
//         point: {
//           radius: 15,
//           pointStyle: TeamInfo[team].map((data) => {
//             const pointImage = new Image(35, 50);
//             const last = data.player.last_name.length > 5 ? data.player.last_name.slice(0, 5).toLowerCase() : data.player.last_name.toLowerCase() 
//             const first = data.player.first_name.slice(0,2).toLowerCase()
//             pointImage.src = `https://www.basketball-reference.com/req/202106291/images/headshots/jordami01.jpg`
//             return pointImage
//           })
//         }
//       },
//       scales: {
//         y: 
//           {
//             suggestedMin: 0,
//             suggestedMax: 80,
//             grid: {
//               color: '#ffc0cb',
//               tickColor: '#ffc0cb',
//               drawTicks: true,
//             },
//             ticks: {
//               backdropColor: '#ffc0cb'
//             }
//           },
//         x: {
//           grid: {
//             color: '#ffc0cb'
//           }
//         }
//       }
// }

// const chartData = {
//       labels: Data[team].map((data) => `${data.player.first_name}  ${data.player.last_name}`),
//       datasets: [
//         {
//           label: `Season high scoring vs the ${team}`,
//           data: Data[team].map((data) => data.pts),
//           showLine: false,
//           backgroundColor: 'pink',
//           color: 'green',
//         }
//       ]
//     }

function chartOptions(team) {
    return {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: `Season High Scoring vs the ${team}`
        },
        elements: {
          point: {
            radius: 15,
            pointStyle: TeamInfo[team].map((data) => {
              const pointImage = new Image(35, 50);
              pointImage.src = `https://www.basketball-reference.com/req/202106291/images/headshots/jordami01.jpg`
              return pointImage
            })
          }
        },
        scales: {
          y: 
            {
              suggestedMin: 0,
              suggestedMax: 80,
              grid: {
                color: '#ffc0cb',
                tickColor: '#ffc0cb',
                drawTicks: true,
              },
              ticks: {
                backdropColor: '#ffc0cb'
              }
            },
          x: {
            grid: {
              color: '#ffc0cb'
            }
          }
        }
  }
}

function chartData(team) {
    return {
        labels: TeamInfo[team].map((data) => `${data.player.first_name}  ${data.player.last_name}`),
        datasets: [
            {
            label: `Season high scoring vs the ${team}`,
            data: TeamInfo[team].map((data) => data.pts),
            showLine: false,
            backgroundColor: 'pink',
            color: 'green',
            }
      ]
    }
}

const ChartCtn = ({ teams }) => {
    return (
        <div className="chartCtn">
            {teams.map((team, i) => (
                <div key={i} className="chart-container" style={{position: "relative", height: "40vh", width: "90vw" }}>
                    <Line
                        data={chartData(team)}
                        options={chartOptions(team)}
                    />
                </div>
            ))}
        </div>
    )


}
  
  
  export default ChartCtn