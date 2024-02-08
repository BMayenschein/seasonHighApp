import { Line } from 'react-chartjs-2';
import { TeamInfo } from '../../utils/TeamInfo'

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

const ChartCtn = ({ teams, handleTeams }) => {
    return (
        <div className="w-5/6 flex flex-col items-center">
          <h1 className="py-5 text-2xl font-bold">Season High Charts</h1>
          <div className="chartCtn w-full">
              {teams.map((team, i) => (
                  <div key={i} className="p-8 h-80 flex flex-col items-center">
                      <Line
                        className="flex-1 w-64"
                        data={chartData(team)}
                        options={chartOptions(team)}
                      />
                      <button onClick={ (e) => handleTeams(team) } className="btn">Remove {team}</button>
                  </div>
              ))}
          </div>
        </div>
    )


}
  
  
  export default ChartCtn