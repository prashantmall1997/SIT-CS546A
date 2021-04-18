let myForm = document.getElementById("myForm");
let numberInput = document.getElementById("number_input");
let frmLabel = document.getElementById("formLabel");
let myUl = document.getElementById("results");
let listHeading = document.getElementById("listHeading");
let errorDiv = document.getElementById("error");

function fibonacci(num) {
  if (num < 1) return 0;
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}

if (myForm) {
  myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    var index = parseInt(numberInput.value.trim());
    if (
      !numberInput.value.trim() ||
      isNaN(numberInput.value.trim()) ||
      !Number.isInteger(parseFloat(numberInput.value.trim()))
    ) {
      numberInput.value = "";
      errorDiv.hidden = false;
      errorDiv.innerHTML = "You must enter a positive whole number!";
      frmLabel.className = "error";
      numberInput.focus();
      numberInput.className = "inputClass";
    } else if (numberInput.value.trim()) {
      myUl.hidden = false;
      listHeading.hidden = false;
      numberInput.classList.remove("inputClass");
      errorDiv.hidden = true;
      frmLabel.classList.remove("error");

      var index = parseInt(numberInput.value.trim());
      var fibonacciValue = fibonacci(index);
      var isFibonacciValuePrime = isPrime(fibonacciValue);

      let li = document.createElement("li");
      li.innerHTML = `The Fibonacci of ${index} is ${fibonacciValue}.`;
      if (isFibonacciValuePrime) {
        li.classList.add("is-prime");
      } else {
        li.classList.add("not-prime");
      }

      myUl.appendChild(li);
      myForm.reset();
      numberInput.focus();
    }
  });
}
