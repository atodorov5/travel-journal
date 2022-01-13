
import './App.css';
import NavBar from './Components/NavBar';
import Card from './Components/Card';
import data from './data';

function App() {
  const cards = data.map(item =>{
    return (
      <Card 
        key={item.id}
        {...item}
        />
    )
  })

  return (
    <div className="App">
      <NavBar />
      <section className='cards-list'>
        {cards}
      </section>
      
    </div>
  );
}

export default App;
