import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import App from './components/App.jsx';
import About from './routes/about.jsx';
import Contact from './routes/contact.jsx';
import Repertoire from './routes/repertoire.jsx';
import Media from './routes/media.jsx';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}> 
        <Route path="about" element={<About />} />
        <Route path="media" element={<Media />} />
        <Route path="repertoire" element={<Repertoire />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('page'),
);
