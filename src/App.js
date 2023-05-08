import './App.css'
import AppRouter from "./components/AppRouter";
import {store} from "./data/store";


function App() {


    return (
        <AppRouter store={store}/>
    );
}

export default App
