(function () {

  var input = document.getElementById("iris-input")
      submit= document.getElementById("iris-submit")
      message=document.getElementById("iris-message")
      validInputs = [
        "What's your favorite food?",
        "Can I be the President of the United States?",
        "How many licks does it take to get to the center of a Tootsie Pop?",
        "Is God real?",
        "Tell me a joke.",
        "What's the meaning of life?",
        "When will the world end?"],
      responses = [
        "Electrons are life.",
        "If Trump can do it, anyone can.",
        "On average, 364.",
        "As real as you want him to be.",
        "You LMAO!",
        "This is a simulation; nothing is real",
        "The year 2019, hide yo kids, hide yo wife"];

 var string=validInputs[6];
 console.log(string)


var index= validInputs.indexOf(string)
  // Add event listeners to text input and submit button below
   input.addEventListener("keyPressed", checkKey);
  submit.addEventListener("click", processInput);


  

  // This function checks if the user has pressed "ENTER" on their keyboard.
 
var nums = [1,1,2,3,4,5,6]
var index3 = nums.indexOf(1);
console.log (index3);
// will give out 0 because it looks for the first one and it was in the 0 place
  // This function checks if the user has pressed "ENTER" on their keyboard.
  function checkKey(event) {
    var keyCode = event.which || event.keyCode;
    if(keyCode == "13") {
      processInput();
    }
  }

  /*
   * processInput()
   * This function does the following (in order):
   * -Set a new variable, "currentInput", to the text in the text area.
   * -Clear the text area.
   * -If currentInput is NOT contained in the array of validInputs, set
   *  the innerHTML of the message element to something like "Sorry, I don't
   *  understand you."
   * -Otherwise, set the innerHTML of the message element to the valid
   *  response. Hint: Each response has the same index as its valid input.
   *  So if the user enters "What is the meaning of life" (index 3 in the
   *  validInputs array), the response would be "42. Duh" (index 3 in the
   *  responses array).
   */


   function processInput(){
var currentInput = input.value;
  input.value = "";

  if(validInputs.indexOf(currentInput) == -1 ) {
    message.innerHTML = "Aw try again";
  }
  else {
    responses [validInputs.indexOf(currentInput)];
    message.innerHTML = responses [validInputs.indexOf(currentInput)];
  }
}

  
 
})();
