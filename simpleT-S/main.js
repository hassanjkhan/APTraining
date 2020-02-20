var synth;
var voiceSelect ;
var voices ;

function populateVoiceList() {
  voices = synth.getVoices();
  
  // for(i = 0; i < voices.length ; i++) {
  //   var option = document.createElement("option");
  //   option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    
  //   if(voices[i].default) {
  //     option.textContent += " -- DEFAULT";
  //   }

  //   option.setAttribute("data-lang", voices[i].lang);
  //   option.setAttribute("data-name", voices[i].name);
  //   voiceSelect.appendChild(option);
  // }
}

function myFunction(inputTxt) {
  var utterThis = new SpeechSynthesisUtterance();
  //var selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
  // for(i = 0; i < voices.length ; i++) {
  //   if(voices[i].name === selectedOption) {
  //     utterThis.voice = voices[i];
  //   }
  // }
  console.log("say voice!");
  utterThis.voice = voices[0];
  utterThis.pitch = 2.0;
  utterThis.rate = 1;
  utterThis.text = inputTxt;
  synth.speak(utterThis);

}

window.onload =function()
{
	synth  = window.speechSynthesis;
	voiceSelect = document.getElementById("voiceSelect");
	voices = [];
	
	populateVoiceList();
	if (speechSynthesis.onvoiceschanged !== undefined) {
	  speechSynthesis.onvoiceschanged = populateVoiceList;
	
	}
    this.myFunction("Usama is amazing");
}

function myMFunction(){ myFunction("Usama is idiot"); }

