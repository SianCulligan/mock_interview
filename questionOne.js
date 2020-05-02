'use strict';

function getMax (stack) {
    let max = 0;
    for (let i = 0; i < stack.length; i++) {
        if (stack[i] > max) {
        max = stack[i];
        };
    }   
    return max;
};
