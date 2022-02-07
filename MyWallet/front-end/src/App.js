import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './routes/landing_page';
import RegisterPage from './routes/register_page';

function App() {
  return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />}></Route>
				<Route path="/register" element={<RegisterPage />}></Route>
			</Routes>
		</BrowserRouter>
  );
}

export default App;
