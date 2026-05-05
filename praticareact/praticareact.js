const root = ReactDOM.createRoot(document.getElementById('root'))

function App() {
  return (
  <>
  <Usuario nome="Yan" idade={19} />
  <Texto />
  </>
  )
}

function Usuario({ nome, idade }) {
  return (
    <h1 
    style={{ fontFamily: 'Poppins, sans-serif', color: '#333', 
        textAlign: 'center', marginTop: '50px',
        fontSize: '3rem', }}>
      Olá, meu nome é {nome} e tenho {idade} anos.
    </h1>
  )
}

function Texto () {
  return <Paragrafo para={`Este texto está sendo escrito usando React.js,
    é apenas uma breve demonstração de como criar componentes
    e passar props.`} />  
}

const Paragrafo = ({ para }) => {
  return <p style={{ fontFamily: 'Poppins, sans-serif', color: '#555', 
    textAlign: 'center', marginTop: '50px',
    fontSize: '1.5rem', }}>{para}</p>
}

root.render(<App />)