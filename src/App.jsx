import Nav from './Nav'
import './App.css'
import Card from './Card'
import item from './Data'

function App() {
 const data = item.map(item => {
  return (
    <Card
    key= {item.key}
    {...item}
    />
  )
})

  return (
    <>
    <Nav />
    <body>
    <div className="main-container">
    {data}
    </div>
    </body>
    </>
  )
}

export default App
