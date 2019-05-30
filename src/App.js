import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMobileAlt, faHeadphones, faCompactDisc, faPlay, faPause, faForward, faBackward, faVolumeDown, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

library.add(faMobileAlt, faHeadphones, faCompactDisc, faPlay, faPause, faForward, faBackward, faVolumeDown, faVolumeUp);
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <Link to='/' className="nav-style">Home</Link>
            <Link to='/library' className="nav-style"> Library</Link>
          </nav>
          <h1 className="top-hero-title">Rhythm Radio</h1>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
