import { createRoot } from 'react-dom/client'

function App() {
  return <div>Hello, my react smth app!</div>
}

const root = document.getElementById('root')
createRoot(root).render(<App />)
