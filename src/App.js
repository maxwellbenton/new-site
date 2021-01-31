import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {CSSTransition} from 'react-transition-group';
import React from 'react';
import self from './self.jpg';
import darkself from './darkself.jpg';

const styles = {
  light: {
    background: '#EEE'
  },
  dark: {
    background: '#444',
    color: '#EEE'
  },
  reallyDark: {
    background: '#000',
    color: '#CF7'
  }
}

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [reallyDarkMode, setReallyDarkMode] = useState(false)
  
  
  function handledarkModeToggle() {
    setDarkMode(prevState => !prevState)
    setReallyDarkMode(prevState => false)
  }

  function handleReallyDarkModeToggle() {
    setReallyDarkMode(prevState => !prevState)
  }

  function chooseStyle() {
    if (!darkMode) {
      return styles.light
    } else if (darkMode && !reallyDarkMode) {
      return styles.dark
    } else {
      return styles.reallyDark
    }
  }

  return (
    <div className="App" style={chooseStyle()}>
      <header>
        <span>
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="top"
                control={<Switch checked={darkMode} onChange={handledarkModeToggle} color="primary" />}
                label="Dark Mode"
                labelPlacement="top"
              />
            </FormGroup>
          </FormControl>
        </span>
        <span className="headerToggle" style={{
                                              position: darkMode ? 'relative': 'fixed',
                                              visibility: darkMode ? 'visible' : 'hidden', 
                                              opacity: darkMode ? '100%' : '0%'
                                            }}
        >
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="top"
                control={<Switch checked={reallyDarkMode} value={reallyDarkMode} onChange={handleReallyDarkModeToggle} color="primary" />}
                label="Darker Mode"
                labelPlacement="top"
              />
            </FormGroup>
          </FormControl>
        </span>
      </header>
      <main>
        <div id="image">
          <img className={reallyDarkMode ? "hidden" : darkMode ? "selfie dark" : "selfie"} src={self} alt="self" />
          <img className={reallyDarkMode ? "selfie": "hidden"} src={darkself}  alt="darkself" />
        </div>
        <h1>{reallyDarkMode ? "Ṃ̸̮̠̝͊͐͑͒͑̉͆̓̅̍͛͐̎̃͘á̶̧̙̝̹̭̱̖̻̝̹͓̤̎̍͂͆̍͊͜͝x̶̢̧̨̛̫̗̩̒̏̐͠w̷̛̙͑̔̇͑̑̉̇̈̅͂̏̚e̷͕̟͙̮̥̼̯̼̲̮͕͓̞̊̓́̽̇͋̽͘͠l̷̯͔̟̦̪͓̐̊̉̂̀̾̌̓̌̊̕̕͝l̷̨̧͓̤̣̚͠ ̴̪̜̮͚̮͍̙̙̺͔͉̜͂̋͂̊̒̈͘B̷̡̢̧̢̧̘̭͚̩̼͆́̌͋ͅe̴̡̛̹͍͉̪̥̳͓͈̺͖͈͈̗̤͛̈͒̓̌́̍̎̐n̵̨̧̢̡̢̦̙͈̺̲̟̰̥̹̎́͗̆̿̾͗͑̉̌̈́̑̾͘t̸̳̔̀͑̑̂̈́͐́̀̕o̶̓̀̓̑̿͆́̕͘͜n̸̢͍̼̩̣̾͑̽͝": "Maxwell Benton"}</h1>
      </main>
      
    </div>
  )
}



export default App;

// style={{position: reallyDarkMode ? 'relative': 'fixed'}}