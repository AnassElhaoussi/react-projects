
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../index.css'
import Login from "./Login";
import { Navigate } from 'react-router-dom'
import { AuthProvider } from "../contexts/AuthContext";
import Chat from "./Chat";
import { useAuthContext } from "../contexts/AuthContext";
import Loading from "./Loading";


const App = () => {
    

    return (
        <div className=''>
            <Router>
                <AuthProvider>
                        <Routes>
                            <Route path="/" element= {<Login/>} />
                            <Route path="/chat" element={<Chat />}/>
                        </Routes>
                </AuthProvider>
            </Router>
        </div>
    )
}

export default App