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


import About from './components/About'
import TeamsList from './components/TeamsList'
import ChartCtn from './components/ChartCtn'
import Footer from './components/Footer'



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
      <div className="flex flex-row pb-1">
        <TeamsList handleTeams={ handleTeams } teams={ teams } />
        <div className="w-5/6">
          <About />
          <ChartCtn handleTeams={ handleTeams } teams={ teams } />
        </div>
      </div>
    </>
  )
}

export default App
