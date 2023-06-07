import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {Provider} from "react-redux";
import {setupStore} from "./data/store/Store";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//     apiKey: "AIzaSyB79W2f3kiyoqPNJHkbIlTqJvVXn5yyZ74",
//     authDomain: "prombez-e677b.firebaseapp.com",
//     projectId: "prombez-e677b",
//     storageBucket: "prombez-e677b.appspot.com",
//     messagingSenderId: "113420918638",
//     appId: "1:113420918638:web:852171feebcaf53216ab7f",
//     measurementId: "G-F321EV99F7"
// };
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
    )
