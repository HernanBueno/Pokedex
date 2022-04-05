
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Principal from './pages/Principal'
function App() {
    return ( <>

    <h1 className='text-center my-3'>POKEDEX</h1> 
<BrowserRouter>

<Routes>

<Route path='/' element={<Principal/>}/>

</Routes>

</BrowserRouter>
        </>
    );
} 

export default App; 