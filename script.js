function $(selector) {
    return document.querySelector(selector);
  }
  
  function $$(selector) {
    return document.querySelectorAll(selector);
  }
  
  function printHello() {
    console.log("Hello!");
  }
  
  $$("button").forEach(button => button.addEventListener('click', printHello));
  