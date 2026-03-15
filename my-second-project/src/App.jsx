import Counter from './component/Counter'
import './App.css'
import Card from './component/Card'

function App() {

  return (
    <div className='user-card'>
      <Card name="Priyanshu" desc="Singh Sahab the great"></Card>
      <Card name="Priyanshu Pratap"></Card>
      <Counter/>
    </div>
  )
}

export default App
