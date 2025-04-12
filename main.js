const speakBtn = document.getElementById('speakBtn');
const inputText = document.getElementById('inputText');
const voiceLang = document.getElementById('voiceLang');

speakBtn.addEventListener('click', () => {
  const text = inputText.value.trim();
  if (!text) {
    alert("Iltimos, matn kiriting!");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = voiceLang.value;
  speechSynthesis.speak(utterance);
});
