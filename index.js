const readline = require("readline-sync")
function start(){
  const content = {}
  content.searchTerm = askAndReturnSearchTerm()
  content.prefix = askAndReturnPrefix()

  function askAndReturnSearchTerm(){
    return readline.question('Type a wikipedia search term: ')
  }
  function askAndReturnPrefix(){
    const prefixes = ["who is","what is","the history of"]
    const selectedPrefixIndex = readline.keyInSelect(prefixes, "Choose one option: ")
    const selectedPrefixText = prefixes[selectedPrefixIndex]    
    return selectedPrefixText
  }


  console.log(content)
	  
}
start()
