import React from 'react';
import PersonaViewModel from '../viewModels/PersonaViewModel';


export default class EnterComponent extends React.Component {
	constructor(props) {
    super(props);
    this.persona = PersonaViewModel;
  }

componentDidMount(){
	var logo = document.getElementById('logo');
	var chat = document.getElementById('chat');
	var paiper = document.getElementById('glcontainer');
	var background = document.getElementById('background');
	logo.style.display='none';
	chat.style.display='none';
	paiper.style.display='none';
	logo.style.opacity=0;
	chat.style.opacity=0;
	paiper.style.opacity=0;
	background.style.backgroundImage='url("https://alivemachine.io/nissa_keyfob_bg.png")';
	background.style.opacity=1;
	background.style.backgroundBlendMode='normal';
	background.style.backgroundPosition='center';
	persona.size = 10;
}

  render() {
  function handleClick(e) {
    e.preventDefault();
    var logo = document.getElementById('logo');
	var chat = document.getElementById('chat');
	var paiper = document.getElementById('glcontainer');
	var background = document.getElementById('background');
	var persona = document.getElementById('persona');
	logo.style.display='';
	chat.style.display='';
	paiper.style.display='';
	logo.style.opacity=1;
	chat.style.opacity=1;
	paiper.style.opacity='';
	background.style.backgroundImage='';
	background.style.opacity='';
	background.style.backgroundBlendMode='';
	background.style.backgroundPosition='';
	persona.classList.add("move-to-top");
	document.getElementById("enter").remove();
  }
    return (
      <div id="enter">
          <div>
            <button
              onClick={handleClick}
              className="filled">Get in!
            </button>
          </div>

      </div>
    );
  }
}
