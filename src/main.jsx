import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/Common/Theme/ThemeContext.jsx'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/pioneer-coaching-lauriya">
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)