// import logo from './logo.svg';
import './App.css';
import Coursesales from './components/Coursesales';

function App() {

  var courses = [
    {name:'autocar', price:'99' },
    {name:'autocar132', price:'799' },
    {name:'autocar341', price:'599' },
    {name:'autocar23', price:'499' },
    {name:'autocar13241', price:'199' },
  ]
  return (
    <div className="App">

      <Coursesales items={courses}/>
    </div>
  );
}

export default App;
