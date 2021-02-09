import { observer } from 'mobx-react';
import React from 'react';
import { colorpalette } from './../viewModels/PersonaViewModel';
import { messageFromChat } from './ChatComponent';
import { messageFromBot } from '././../viewModels/ChatViewModel';
var colors = [];
for(var i=0;i<colorpalette.length;i++){
	colors[i]="#"+colorpalette[i];
}

// overriding default colors
colors[1] = colors[0];
colors[2] = colors[0];
colors[3] = colors[0];
colors[4] = colors[0];
colors[5] = colors[0];

@observer
export default class PaiperComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  
  

  
  componentDidMount() {
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://alivemachine.io/paiper10/js/patch.js";
    document.body.appendChild(script1);
	
	
	var temp = messageFromBot;
		function listenToBot(){
			if(messageFromBot!=temp){
				CABLES.patch.setVariable("probe", messageFromBot);
				temp = messageFromBot;
			}
			setTimeout(function(){listenToBot();},500);
		}
		
	
	function showError(errId, errMsg) {
            alert('An error occured: ' + errId + ', ' + errMsg);
        }

        function patchInitialized(patch) {
            // You can now access the patch object (patch), register variable watchers and so on
        }
		
		
		
		var loaded = false;
        function patchFinishedLoading(patch) {
			
			
			listenToBot();
			var probe = CABLES.patch.getVar("probe");
			if(probe && loaded==false) {
			// will be called every time value changes
				probe.addListener(function(newValue) {
					if(newValue!=='' && newValue!==' '){
						//CONNECT TO CHAT INPUT
						//
						//
						//CABLES.patch.setVariable("probe", 'boop');
						//CHAT INPUT = newValue;
						//
						//
						//
						//
						//	
						//document.getElementById('chat-input').getElementsByTagName('textarea')[0].value = newValue;
						//document.getElementById('chat-button').click();
						//ChatComponent.submitActionButtons(newValue, text);
						//document.getElementById('chat-input').setState({value: newValue});
					}
				});
				//document.getElementById('glcanvas').style.width='50%';
				//document.getElementById('glcanvas').style.height='70%';
				//alert(colorpalette[0]);
				
				//alert(colors[0]);
				CABLES.patch.setVariable("colorpalette", colors);
				loaded=true;
			}
            // The patch is ready now, all assets have been loaded
        }
	
        document.addEventListener('CABLES.jsLoaded', function (event) {
            CABLES.patch = new CABLES.Patch({
                patch: CABLES.exportedPatch,
                prefixAssetPath: '',
                glCanvasId: 'glcanvas',
                glCanvasResizeToWindow: true,
                onError: showError,
                onPatchLoaded: patchInitialized,
                onFinishedLoading: patchFinishedLoading,
				canvas:{
					alpha:true,
					premultipliedAlpha:true
				},
				variables:{"colorpalette":colors}
            });
        });
		
  }
  



  render() {
    return (
	<div id={'glcontainer'}>
      <canvas id={`glcanvas`} tabindex="1"></canvas>
	  </div>
    );
  }
  
}
/*

export default PaiperComponent;
const paiper = props => {
	
	
	componentDidMount () {
    const script = document.createElement("script");
    script.src = "./../dependencies/paiper08/js/patch.js";
    script.async = true;
    this.canvas.appendChild(script);
	
	 script = document.createElement("script");
    script.src = "./../dependencies/paiper08/js/libs.core.min.js";
    script.async = true;
    document.body.appendChild(script);
	 script = document.createElement("script");
    script.src = "./../dependencies/paiper08/js/cables.min.js";
    script.async = true;
    document.body.appendChild(script);
	 script = document.createElement("script");
    script.src = "./../dependencies/paiper08/js/ops.js";
    script.async = true;
    document.body.appendChild(script);
	}
	
	
  
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //Our first draw
    context.fillStyle = '#000000'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  }, [])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default paiper
*/