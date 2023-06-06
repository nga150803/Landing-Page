import React from 'react'
import ReactDOM from 'react-dom/client'
import { Container } from './app/Container.tsx'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>,
)
