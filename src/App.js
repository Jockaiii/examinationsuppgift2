import { Routing } from './routes/Routing'
import { NavigationBar } from './components/navigationbar/NavigationBar'
import './shared/global/Global.css'
import { APIProvider } from './shared/global/provider/APIProvider'

function App() {
  return ( 
    <APIProvider>  
      <Routing> 
        <NavigationBar />
      </Routing>
    </APIProvider> 
  )
}

export default App
