const Team = ({team}) => {
    return (
      <>
        {team.map((x) => 
        <h1>{x.id}</h1>
        )}
      </>
    )
  }
  
  export default Team