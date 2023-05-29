# calculator-v2

BUTTONS BEHAVIVOR:
-operator buttons
    when pressing one of the operators button
    if num1/op/num2 -complete equation
        then calculate the current equation
        and set result to num 1 then set new operator
        keep display1 to num2 
        update display2 to num1 with the new operator
            *if pressed operator again and again, keep num2 the same 
            *but change num1 to new result calculated with the pressed operator
    else if num1/op/!num2
        set new operator,
        update display with new operator
            *should only update the operator on display and internal
            *not calculate anything
    else if num1/!op/!num2
        then set operator 
        push to display1
        clear display2
            *update the equation with an operator for the first time
            
-digit buttons
    if num1/op/num2
    	Add number to num2
    	update display2 with num2
    else if num1/op/!num2
    	Add number to num2
    	update display2 with num2
    else if num1/!op/!num2
    	keep adding number to num1
    	update display2 with num1
    else if !num1/!op/!num2
    	add number to num1
    	update display2 with num1
    *should always target display2
    *reset display if last button was the equal button
    *only care if number1 and operator has been assigned
MIGHT HAVE TO ADD A secondary tracker for edge case
    	
-equal button
    if num1/op/num2
    	run operate()
    	update display
    else num1/operate
