import './App.css';
import {useState,useEffect} from 'react'
function App() {

  const soundfirstgroup = [
    {
      keyCode: 81,
      key: 'Q',
      id : 'heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      key: 'W',
      id : 'heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      key: 'E',
      id : 'heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      key: 'A',
      id : 'heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      key: 'S',
      id : 'clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      key: 'D',
      id : 'open-hh',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      key: 'Z',
      id : 'kick-n-hat',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      key: 'X',
      id : 'kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      key: 'C',
      id : 'closed-hh',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }


   
  ]

  const soundsecondgroup = [


    {
      keyCode: 89,
      key: 'Y',
      id : 'chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      keyCode: 85,
      key: 'U',
      id : 'chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      keyCode: 73,
      key: 'I',
      id : 'chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      keyCode: 71,
      key: 'G',
      id : 'shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      keyCode: 72,
      key: 'H',
      id : 'open-hh',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      keyCode: 74,
      key: 'J',
      id : 'closed-hh',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      keyCode: 86,
      key: 'V',
      id : 'punchy-kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      keyCode: 66,
      key: 'B',
      id : 'side-stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      keyCode: 78,
      key: 'N',
      id : 'snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ]

 

  const [power, setPower] = useState(true)
  const [soundname,setSoundName] =useState("")


  const stop = () =>{
    setPower(!power);

  }

 


  const plays = (keyCode) => {
    const sound1 = soundfirstgroup.find((s) => s.keyCode === keyCode);
    const sound2 = soundsecondgroup.find((s) => s.keyCode === keyCode);



    if (sound1) {
      const audio = new Audio(sound1.url); 

      if (power) {

        audio.play();
        setSoundName(sound1.id)

        
      } else {
        audio.pause();
        audio.currentTime = 0;
        setSoundName(sound1.id)
      }
    }


    if (sound2) {
      const audio = new Audio(sound2.url); 

      if (power) {
        audio.play();
        setSoundName(sound2.id)
       
      } else {
        audio.pause();
        audio.currentTime = 0;
        setSoundName(sound2.id)
      }
    }


  };

  const changecolor = (keyCode) => {
    const sound11 = soundfirstgroup.find((s) => s.keyCode === keyCode);
    const sound22 = soundsecondgroup.find((s) => s.keyCode === keyCode);
  
    if (sound11) {
      const button = document.getElementById(sound11.key);
      const parentElement = button.parentNode;
  
      button.classList.add('highlight');
      parentElement.classList.add('parent-highlight');
  
      setTimeout(() => {
        button.classList.remove('highlight');
        parentElement.classList.remove('parent-highlight');
      }, 300);
    }
  
    if (sound22) {
      const button = document.getElementById(sound22.key);
      const parentElement = button.parentNode;
  
      button.classList.add('highlight');
      parentElement.classList.add('parent-highlight');
  
      setTimeout(() => {
        button.classList.remove('highlight');
        parentElement.classList.remove('parent-highlight');
      }, 300);
    }
  }
  
  const handleKeyDown = (event) => {
    plays(event.keyCode);
    changecolor(event.keyCode);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [power]);
  
  
  

  const keyboard = (play,groupname) => {
    return groupname.map((sound) => (
      <button
        key={sound.key}
        className="drum-pad"
        onClick={() => play(sound,power)}
      >
        <audio className="clip" id={sound.key} src={sound.url} />
        {sound.key}
      </button>
      
    ));
  };

  const play = (sound,power) => {
    const audio = document.getElementById(sound.key);
    audio.currentTime = 0;
    if (power){
      audio.play();
      setSoundName(sound.id)
    }
    else{
      audio.pause();
      audio.currentTime = 0;
      setSoundName(sound.id)
    }
    
  };




  

 
  
  return (
    <div className="" id="drum-machine">

      <div className="controls-and-div">

        <div className="controls">
          <button onClick={stop}>Turn the Power {power? "Off" : "On"}</button>
          <p>{soundname}</p>
        </div>

        <div className="displays">

        

          <div className="display-btn">
            {keyboard(play,soundfirstgroup)} 
          </div>
        
        

        <div className="display-btn">
            {keyboard(play,soundsecondgroup)} 
          </div>

        </div>

      </div>
      
    </div>
  );
}

export default App;
