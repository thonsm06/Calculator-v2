# calculator-v2

BUTTONS BEHAVIVOR:
-operator buttons
    when pressing one of the operators button
    if num1/operate/num2
        then calculate the current equation
        and set result to num 1 and set new operator
        keep display1 to num2 
        update display2 to num1 with the new operator
            *if pressed operator again and again, keep num2 the same 
            *but change num1 to new result calculated with the pressed operator
    else if num1/operate and not num2
        set new operator,
        update display with new operator
            *should only update the operator on display and internal
    else if num1
        then set operator 
        push to display1
        clear display2
