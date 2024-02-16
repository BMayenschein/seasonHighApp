import { Line } from 'react-chartjs-2';
import { TeamInfo } from '../../utils/TeamInfo'
import { TeamInfo2 } from '../../utils/TeamInfo2'

function chartOptions(team) {
    return {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: `${team}`
        },
        layout: {
          padding: {
            left: 20,
            right: 20
          }
        },
        elements: {
          point: {
            radius: 15,
            pointStyle: TeamInfo2[team].players.map((data) => {
              const pointImage = new Image(85, 60);
              pointImage.src = `https://cdn.nba.com/headshots/nba/latest/1040x760/${data.id}.png`
              pointImage.onerror = function() {
                pointImage.src = "https://cdn.nba.com/headshots/nba/latest/1040x760/fallback.png"
              }
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
                color: '#9EA2A2',
                tickColor: '#9EA2A2',
                drawTicks: true,
              },
              ticks: {
                backdropColor: '#9EA2A2'
              }
            },
          x: {
            grid: {
              color: '#9EA2A2'
            }
          }
        }
  }
}

function chartData(team) {
    return {
        labels: TeamInfo2[team].players.map((data) => `${data.name}`),
        datasets: [
            {
            label: `Season high scoring vs the ${team}`,
            data: TeamInfo2[team].players.map((data) => data.pts),
            showLine: false,
            borderColor: TeamInfo2[team].colors.color1,
            backgroundColor: TeamInfo2[team].colors.color2
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
                  <div key={i} className="p-8 h-96 flex flex-col items-center">
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