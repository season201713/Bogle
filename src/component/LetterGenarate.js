const LetterGenerate = () => {
  const RandomLetter = () => {
    this.x = [
      [
        String.fromCharCode(Math.floor(Math.random() * Math.floor(27)) + 97),
        String.fromCharCode(Math.floor(Math.random() * Math.floor(27)) + 97),
        String.fromCharCode(Math.floor(Math.random() * Math.floor(27)) + 97),
        String.fromCharCode(Math.floor(Math.random() * Math.floor(27)) + 97)
      ],
      [
        String.fromCharCode(Math.floor(Math.random() * Math.floor(27)) + 97),
        String.fromCharCode(Math.floor(Math.random() * Math.floor(27)) + 97),
        String.fromCharCode(Math.floor(Math.random() * Math.floor(27)) + 97),
        String.fromCharCode(Math.floor(Math.random() * Math.floor(27)) + 97)
      ],
      [
        String.fromCharCode(Math.floor(Math.random() * Math.floor(27)) + 97),
        String.fromCharCode(Math.floor(Math.random() * Math.floor(27)) + 97),
        String.fromCharCode(Math.floor(Math.random() * Math.floor(27)) + 97),
        String.fromCharCode(Math.floor(Math.random() * Math.floor(27)) + 97)
      ],
      [
        String.fromCharCode(Math.floor(Math.random() * Math.floor(27)) + 97),
        String.fromCharCode(Math.floor(Math.random() * Math.floor(27)) + 97),
        String.fromCharCode(Math.floor(Math.random() * Math.floor(27)) + 97),
        String.fromCharCode(Math.floor(Math.random() * Math.floor(27)) + 97)
      ]
    ];
    //console.log(this.x);
  };
  return RandomLetter();
};

export default LetterGenerate;
