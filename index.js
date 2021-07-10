const returnFirstTwoDrivers = function(duo) {
    return duo.slice(0,2);
};

const returnLastTwoDrivers = function(duo) {
    return duo.slice(-2);
};// Code your solution in this file!

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (fareMultiply) {
    return function (worth) {
        return fareMultiply * worth;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (duo, returnDrivers) {
    return returnDrivers (duo);
};


