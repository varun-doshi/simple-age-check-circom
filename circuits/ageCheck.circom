pragma circom 2.0.5;

include "../node_modules/circomlib/circuits/comparators.circom";

template AgeCheck(){

    signal input userAge;
    signal input ageLimit;
    signal output isAboveLimit;

    component greaterThan=GreaterEqThan(7);
    greaterThan.in[0] <== userAge;
    greaterThan.in[1] <== ageLimit;
    isAboveLimit <== greaterThan.out;   
}

component main=AgeCheck();