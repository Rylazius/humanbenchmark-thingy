const e = document.getElementsByClassName("letters notranslate")[0];

Array.from(e.querySelectorAll("span")).forEach(letter => {
  const l = letter.innerText;
  e.dispatchEvent(new KeyboardEvent('keydown', {
    key: l,
    code: 'KeyL',
    bubbles: true,
    cancelable: true
  }))
})
