class Formatter {
  //add static methods here
  static capitalize(string) {
    const firstLetter = string[0].toUpperCase()
    return string.replace(string[0], firstLetter);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9\-\'\ ]/g,"")
  }

  static titleize(string) {
    const array = string.split(" ")
    const arrayCap = array.map(input => {
      const word = input.toLowerCase()
      let changeCase
      if(word !== "the" && word !== "a" && word !== "an" && word !== "but" && word !== "of" && word !== "and" && word !== "for" && word !== "at" && word !== "by" && word !== "from") {
        changeCase = word.replace(word.charAt(0), word.charAt(0).toUpperCase())
      }else{
          changeCase = word
      }
      return changeCase
    })
    let initialCharacter = arrayCap.join(" ")
    initialCharacter = initialCharacter.replace(initialCharacter.charAt(0), initialCharacter.charAt(0).toUpperCase())
    return initialCharacter
  }
}