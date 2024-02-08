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


import Header from './components/Head'
import TeamsList from './components/TeamsList'
import ChartCtn from './components/ChartCtn'


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
      setTeams([team, ...teams])
    }
  }

  return (
    <>
      {/* <Header /> */}
      <div className="flex flex-row">
        <TeamsList handleTeams={ handleTeams } teams={ teams } />
        <ChartCtn handleTeams={ handleTeams } teams={ teams } />
      </div>
    </>
  )
}

export default App
