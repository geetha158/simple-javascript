let speech = new SpeechSynthesisUtterance();
console.log(speech);

let voices = [];

let voiceselect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  console.log(voices);

  speech.voice = voices[0];
  voices.forEach(
    (voice, i) => (voiceselect.options[i] = new Option(voice.name, i))
  );
};

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  console.log(speech);
  window.speechSynthesis.speak(speech);
});

voiceselect.addEventListener("change", () => {
  speech.voice = voices[voiceselect.value];
});
