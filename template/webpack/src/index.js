import { createRoot } from 'react-dom/client'

function App() {
  return <div>Hello, world!</div>
}

const root = document.getElementById('root')
createRoot(root).render(<App />)
