import './App.css';

function App() {
  const cinemas = [
    { nayok: 'Kasdoober', nayika: 'kopiasdla' },
    { nayok: 'Rubasdel', nayika: 'Moushasdumi' },
    { nayok: 'Razzasdak', nayika: 'Shabaasdna' },
    { nayok: 'Jasasdhaz', nayika: 'Sucasdrita' },
    { nayok: 'Jashaasds', nayika: 'Suchorasdaita' },
    { nayok: 'Jaasasdim', nayika: 'Suchorasdita' },
    { nayok: 'Jffasim', nayika: 'Suchoasdrita' },
    { nayok: 'Jaehiasm', nayika: 'Suchoriasdata' },

  ]
  const players = [
    { name: 'Koober', job: 'AA' },
    { name: 'Kber', job: 'AdA' },
    { name: 'Koer', job: 'AAc' },

  ]

  return (
    <div className="App">
      <ul>
        {
          cinemas.map(cinema => <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
        }
        {
          players.map(player => <Player name={player.name} job={player.job}></Player>)
        }
      </ul>
    </div>
  );
}

function Cinema(props) {
  const cinemaColor = {
    backgroundColor: 'skyblue',
    border: '3px solid lightsalmon',
    margin: '20px',
    borderRadius: '10px'
  }
  return (
    <div  style={cinemaColor}>
      <h2>Nayok: {props.nayok}</h2>
      <h4>Nayika: {props.nayika}</h4>
    </div>
  )
}

function Player(props){
  const playerColor = {
    backgroundColor: 'skyblue',
    border: '3px solid lightsalmon',
    margin: '20px',
    borderRadius: '10px'
  }
  return(
    <div style={playerColor}>
      <h2>Name : {props.name}</h2>
      <h3>Job : {props.job}</h3>
    </div>
  )
}

export default App;
