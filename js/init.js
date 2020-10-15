(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
function test (){

  const input = document.getElementById('userInput').value;

  console.log(input);

  const output = document.getElementById('output');

  output.innerHTML = input;
}

document.getElementById('userInput').addEventListener('keyup', test);