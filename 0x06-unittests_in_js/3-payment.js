const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {

    const totalCost = calculateNumber("SUM", totalAmount + totalShipping);
    console.log(`The total is: ${totalCost}`);
})

module.export = sendPaymentRequestToApi;
