import FlagCountries from './components/FlagCountries';
import FlagDetails from './components/FlagDetails';
import Header from './components/Header';
import FilterAfrica from './Filter/FilterAfrica';
import FilterAmerica from './Filter/FilterAmerica';
import FilterAsia from './Filter/FilterAsia';
import FilterEurope from './Filter/FilterEurope';
import FilterOcenia from './Filter/FilterOcenia';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';


function App() {

  const [modeChange,setModeChange] = React.useState(false);

  const toggleMode = () => {
    setModeChange(!modeChange)
  }

  React.useEffect(()=>{
    document.body.className = modeChange ? 'darkmode' : 'lightmode';
  },[modeChange])
  
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Header modeChange={modeChange} toggleMode={toggleMode} />}>
          <Route path='/' element={<FlagCountries modeChange={modeChange}/>}/>
          <Route path='/africa' element={<FilterAfrica modeChange={modeChange}/>}/>
          <Route path='/asia' element={<FilterAsia modeChange={modeChange}/>}/>
          <Route path='/america' element={<FilterAmerica modeChange={modeChange}/>}/>
          <Route path='/europe' element={<FilterEurope modeChange={modeChange}/>}/>
          <Route path='/ocenia' element={<FilterOcenia modeChange={modeChange}/>}/>
          <Route path='/:id' element={<FlagDetails modeChange={modeChange}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
