const TeamsList = ({ handleTeams, teams }) => {
  const teamNames = [
    "Atlanta Hawks", 
    "Boston Celtics", 
    "Brooklyn Nets",
    "Charlotte Hornets",
    "Chicago Bulls", 
    "Cleveland Cavaliers", 
    "Dallas Mavericks", 
    "Denver Nuggets", 
    "Detroit Pistons", 
    "Golden State Warriors", 
    "Houston Rockets", 
    "Indiana Pacers", 
    "LA Clippers", 
    "Los Angeles Lakers", 
    "Memphis Grizzlies", 
    "Miami Heat", 
    "Milwaukee Bucks", 
    "Minnesota Timberwolves", 
    "New Orleans Pelicans", 
    "New York Knicks", 
    "Oklahoma City Thunder", 
    "Orlando Magic", 
    "Philadelphia 76ers", 
    "Phoenix Suns", 
    "Portland Trail Blazers", 
    "Sacramento Kings", 
    "San Antonio Spurs", 
    "Toronto Raptors", 
    "Utah Jazz", 
    "Washington Wizards"
  ]
    return (
      <ul className="menu menu-horizontal text-center self-center xl:w-1/6 xl:menu-lg">
        <li className="w-full bg-secondary">
          <details open>
            <summary>Select Teams</summary>
            <ul>
              {teamNames.map((team, i) => 
                <li key={i} >
                  <a onClick={(e) => handleTeams(team)}>
                    {team}
                  </a>
                </li>
              )}
            </ul>
          </details>
        </li>
      </ul>
    )
  }
  
  export default TeamsList