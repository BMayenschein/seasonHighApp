
const TeamsList = ({ handleTeams, teams }) => {

  const teamNames = [
    "Atlanta Hawks", 
    "Boston Celtics", 
    "Brooklyn Nets",
    "Charlotte Bobcats",
    "Chicago Bulls", 
    "Cleveland Cavaliers", 
    "Dallas Mavericks", 
    "Denver Nuggets", 
    "Detroit Pistons", 
    "Golden State Warriors", 
    "Houston Rockets", 
    "Indiana Pacers", 
    "LA Clippers", 
    "LA Lakers", 
    "Memphis Grizzlies", 
    "Miami Heat", 
    "Milwaukee Bucks", 
    "Minnesota Timberwolves", 
    "New Orleans Hornets", 
    "New York Knicks", 
    "Oklahoma City Thunder", 
    "Orlando Magic", 
    "Philadelphia Sixers", 
    "Phoenix Suns", 
    "Portland Trail Blazers", 
    "Sacramento Kings", 
    "San Antonio Spurs", 
    "Toronto Raptors", 
    "Utah Jazz", 
    "Washington Wizards"
  ]
    return (
      <div className="teamsList">
        {teamNames.map((team, i) => 
          <div 
            key={i}
            onClick={(e) => handleTeams(team)}
          >{team}</div>
        )}
      </div>
    )
  }
  
  export default TeamsList