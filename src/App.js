import './App.css'
import AppRouter from "./components/AppRouter";
import {store} from "./data/store";
import {Provider} from "react-redux";



function App() {


    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>

    );
}

export default App
