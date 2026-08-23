    const display = document.getElementById('display');

    function appendValue(value) 
    {
        display.value += value;
        text.append(value);
    }
    
    function appendValuePlus(value) 
    {
        display.value += value;
        text.append(value);
    }

    function appendValueMinus(value) 
    {
        display.value += value;
        text.append(value);
    }

    function appendValueMultiply(value) 
    {
        display.value += value;
        text.append(value);
    }

    function appendValueDivision(value) 
    {
        display.value += value;
        text.append(value);
    }

    function clearDisplay() 
    {
        display.value = '';
    }

    function clearSheet()
    {
        calculateJournal.value = '';
    }

    function calculateResult(value) 
    {   
        display.value = eval(display.value);
        text.append('=');
        text.append(display.value);
    } 

    let text = document.querySelector('textarea');
