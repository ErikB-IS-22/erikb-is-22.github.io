window.onload = function(){ 

    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null
  
    outputElement = document.getElementById("result")
    
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
  
    function onDigitButtonClicked(digit) {
      if (!selectedOperation) {
          if (a === '' && digit === '0') return
          if (outputElement.innerHTML.length === 24) return
          if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
              a += digit
          }
          outputElement.innerHTML = a
      } else {
        if (b === '' && digit === '0') return
        if (outputElement.innerHTML.length === 24) return
          if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
              b += digit
              outputElement.innerHTML = a + selectedOperation + b        
          }
      }
  }
  
  digitButtons.forEach(button => {
    button.onclick = function() {
        const digitValue = button.innerHTML
        onDigitButtonClicked(digitValue)
    }
  });
  
  document.getElementById("btn_op_mult").onclick = function() {
    let lastCharacter = outputElement.innerHTML[outputElement.innerHTML.length - 1]
    if (a === '' || 
      lastCharacter === 'x' || lastCharacter === '+' ||
      lastCharacter === '-' || lastCharacter === '/') return
    selectedOperation = 'x'
    outputElement.innerHTML += 'x'
    b = ''
  }
  document.getElementById("btn_op_plus").onclick = function() { 
    let lastCharacter = outputElement.innerHTML[outputElement.innerHTML.length - 1]
    if (a === '' || 
      lastCharacter === 'x' || lastCharacter === '+' ||
      lastCharacter === '-' || lastCharacter === '/') return
    selectedOperation = '+'
    outputElement.innerHTML += '+'
    b = ''
  }
  document.getElementById("btn_op_minus").onclick = function() { 
    let lastCharacter = outputElement.innerHTML[outputElement.innerHTML.length - 1]
    if (a === '' || 
      lastCharacter === 'x' || lastCharacter === '+' ||
      lastCharacter === '-' || lastCharacter === '/') return
    selectedOperation = '-'
    outputElement.innerHTML += '-'
    b = ''
  }
  document.getElementById("btn_op_div").onclick = function() { 
    let lastCharacter = outputElement.innerHTML[outputElement.innerHTML.length - 1]
    if (a === '' || 
      lastCharacter === 'x' || lastCharacter === '+' ||
      lastCharacter === '-' || lastCharacter === '/') return
    selectedOperation = '/'
    outputElement.innerHTML += '/'
    b = ''
  }
  
  document.getElementById("btn_op_backspace").onclick = function() {
    let updatedElement = outputElement.innerHTML
    updatedElement = updatedElement.substring(0, updatedElement.length - 1)
    outputElement.innerHTML = updatedElement
  
    if (!selectedOperation) {
      a = updatedElement
    } else {
      b = updatedElement
    }
  }
  
  document.getElementById("btn_op_sign").onclick = function() {
    if (!selectedOperation) {
      a = (+a) * -1
      outputElement.innerHTML = a
    } else {
      b = (+b) * -1
      outputElement.innerHTML = b
    }
  }
  
  document.getElementById("btn_op_percent").onclick = function() {
    if (!selectedOperation) {
      a = (+a) / 100
      outputElement.innerHTML = a
    } else {
      b = (+b) / 100
      outputElement.innerHTML = b
    }
  }
  
  document.getElementById("btn_op_sqrt").onclick = function() {
    if (!selectedOperation) {
      a = Math.sqrt(+a)
      outputElement.innerHTML = a
    } else {
      b = Math.sqrt(+b)
      outputElement.innerHTML = b
    }
  }
  
  document.getElementById("btn_op_pow").onclick = function() {
    if (!selectedOperation) {
      a = (+a) * (+a)
      outputElement.innerHTML = a
    } else {
      b = (+b) * (+b)
      outputElement.innerHTML = b
    }
  }
  
  document.getElementById("btn_op_factorial").onclick = function() {
    if (!selectedOperation) {
      let result = 1
      for (let i = 2; i <= (+a); i++) {
        result *= i
      }
      a = result
      outputElement.innerHTML = a
    } else {
      let result = 1
      for (let i = 2; i <= (+b); i++) {
        result *= i
      }
      b = result
      outputElement.innerHTML = b
    }
  }
  
  document.getElementById("btn_op_k").onclick = function() {
    if (!selectedOperation) {
      a = (+a) * 1000
      outputElement.innerHTML = a
    } else {
      b = (+b) * 1000
      outputElement.innerHTML = b
    }
  }
  
  document.getElementById('btn_op_resultcolorchange').onclick = function() {
    if (document.getElementById('result').style.background === 'gray') {
        document.getElementById('result').style.background = 'white'
        document.getElementById('result').style.color = 'black'
    } else {
        document.getElementById('result').style.background = 'gray'
        document.getElementById('result').style.color = 'white'
    }
  };
  
  document.getElementById("btn_op_clear").onclick = function() { 
    a = ''
    b = ''
    selectedOperation = ''
    expressionResult = ''
    outputElement.innerHTML = 0
  }
  
  document.getElementById("btn_op_equal").onclick = function() { 
    if (a === '' || b === '' || !selectedOperation)
        return
        
    switch(selectedOperation) { 
        case 'x':
            expressionResult = (+a) * (+b)
            break;
        case '+':
            expressionResult = (+a) + (+b)
            break;
        case '-':
            expressionResult = (+a) - (+b)
            break;
        case '/':
            expressionResult = (+a) / (+b)
            break;
    }
    
    a = expressionResult.toString()
    
    outputElement.innerHTML = a
  }
  
  document.getElementById('theme').addEventListener('click', function() {
    const currentTheme = document.body.className;
    if (currentTheme === 'light-theme') {
        document.body.className = 'dark-theme';
    } else {
        document.body.className = 'light-theme';
    }
  });
  
  };
  