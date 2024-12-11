import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/templates/Layout';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Experiences from './components/pages/Experiences';
import Skills from './components/pages/Skills';
import Interests from './components/pages/Interests';
import Awards from './components/pages/Awards';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/experiences' element={<Experiences />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/interests' element={<Interests />} />
            <Route path='/awards' element={<Awards />} />
          </Routes>
        </Layout>
      </Router>
    );
  }
}

export default App;
