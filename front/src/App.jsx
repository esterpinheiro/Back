import { useState } from 'react'
import './App.css'

function App() {
  const [usuario,setUsuario] = useState("")

  return (
    <>
      <header>
        <h1>Login</h1>
      </header>

      <main>
        <form action="">
          <div>
            <label htmlFor="nome">Usuário</label>
            <input type="text" id='nome' placeholder='Escreva seu nome' />
          </div>

          <div>
            <label htmlFor="sobrenome">Senha</label>
            <input type="password" id='sobrenome' placeholder='Escreva sua senha' />
          </div>

          <button>Entrar</button>
        </form>
      </main>
    </>
  )
}

export default App
