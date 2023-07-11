import { useState } from 'react'
import './form.scss'

function Form({addCarro}) {

  const [proprietario, setProprietario] = useState('')
  const [nomeCarro, setNomeCarro] = useState('')
  const [placa, setPlaca] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    if(!nomeCarro || !placa || !proprietario) return
    
    addCarro(nomeCarro, placa, proprietario)

    setNomeCarro('')
    setPlaca('')
    setProprietario('')
  }

  return (
    <div className='form'>

      <h3>Cadastre o veículo abaixo</h3>

      <form onSubmit={handleSubmit}>  
        <input type="text" placeholder='Nome do Proprietário...' value={proprietario} onChange={(e)=> setProprietario(e.target.value)} />
        <input type="text" placeholder='Nome do carro...' value={nomeCarro} onChange={(e)=> setNomeCarro(e.target.value)} />
        <input type="text" placeholder='Placa do veículo...' value={placa} onChange={(e)=> setPlaca(e.target.value)} />
        <button type='submit'>Cadastrar</button>
      </form>
    </div>
  )
}

export default Form