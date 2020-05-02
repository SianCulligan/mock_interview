## Problem Domain
- Write a ``getMax()`` function which returns the ‘biggest’ element in the Stack.

### Edge cases
- Stack of non-number nodes
- Stack of one
- Empty stack
- Nested values in a stack

## Algorithm 
- A for loop that check the length of the given stack & traverses the value setting the value of a variable if that spot at ``[i]`` is greater than the digit before it. 

## Sudo code 
- Write a function that takes in a stack of numbers
- create an variable, we'll call it ``max``, set to 0 before the for loop
- for loop runs while i is less than stack length
- if the value at ``i`` is greater than ``max``, reset the variable ``max`` to the new value, otherwise continue to traverse the stack.
- Once loop concludes, return the ``max`` value, which should be set as the maximum value.

## Big O
- O(n) / linear time, the loop will run for the number of items in the input. 
- O(n) space, the size of getMax scales with the size of the input.