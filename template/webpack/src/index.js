import '@/index.css'
import logo from '@/logo.png'
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://github.com/yukiyukixing/create-react-smth-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>Get Started</h1>
        </a>
        <h1 className="App-title">My react smth app!</h1>
      </header>
    </div>
  )
}

const root = document.getElementById('root')
createRoot(root).render(<App />)
