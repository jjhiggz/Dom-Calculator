document.addEventListener('DOMContentLoaded',() => {
  let total = 0
  let calculatorString = "0"
  let operatorButtonHit = false
  screen = document.querySelector('#screen')
  return refreshScreen(total,operatorButtonHit,calculatorString)
})
function refreshScreen(total,operatorButtonHit,calculatorString){
  screen.innerText = total.toString()
  buttons = document.querySelector('#buttons-container')
  return buttons.addEventListener('click', () => {
   isButton(event)
  })
}
function isButton(buttonEvent){
  const isButton = buttonEvent.target.tagName === 'SPAN'
  if(isButton){defineButtonType(buttonEvent.target)} 
}
function defineButtonType(button){
  let buttonType = "number"
  if(button.id === "clear"){buttonType = "clear"}
  if(button.id === "equals"){buttonType = "equals"}
  if(button.id === "zero"){ buttonType = "zero" }
  if(button.className === "operator"){buttonType = "operator"}
  console.log('cheese')
  return useButton(buttonType,button.innerText)
}

function useButton(buttonType,innerText){
  const options = {
    'clear': function() { return clearScreen()},
    'operator': function() { return operate()},
    'number': function() { return appendNumber()},
    'zero': function() { return appendNumber()}
  }
  let goToFunction = options[buttonType]
  return goToFunction(innerText)
}
function clearScreen(){
  return 'fucl'
}
function operate(){
  console.log('operate')
}
function appendNumber(){  
  console.log('appendNumber')
}

