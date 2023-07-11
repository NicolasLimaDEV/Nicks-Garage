import './garage.scss'

function Garage({ garage, removerCarro }) {
  return (
    <div className="main-garage">
      <div className="content">
        <span>{garage.proprietario}</span>
        <p className='carro'>{garage.carro}</p>
        <p className="placa">{garage.placa}</p>
      </div>
      <div>
        <button onClick={()=> removerCarro(garage.id)} className="complete">FINALIZADO</button>
      </div>
    </div>
  );
}

export default Garage