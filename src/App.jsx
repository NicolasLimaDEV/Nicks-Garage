import { useState } from 'react'
import './global.scss'


import Form from './components/Form'
import Header from './components/Header'
import Garage from './components/Garage'

function App() {
  const [garage, setGarage] = useState([])

  const addCarro = (carro, placa, proprietario) => {
    const newCarro = [...garage, {
      id: Math.floor(Math.random() * 1000),
      proprietario,
      carro,
      placa,
    }]

    setGarage(newCarro)
  }

  const removerCarro = (id)=> {
    const newTodos = [...garage]
    const filteredTodos = newTodos.filter(garage => garage.id !== id ? garage : null)
    setGarage(filteredTodos)
  }

  return (
    <main className='main'>
      <Header />
      <div className='garage-list'>
        {garage.map( (garage) => (
          <Garage key={garage.id} garage={garage} removerCarro={removerCarro} />
        ))}
      </div>
      <Form addCarro={addCarro} />
    </main>
  )
}

export default App
