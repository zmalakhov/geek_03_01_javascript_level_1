function getTempPrediction(firstDay, secondDay) {
    const nextDay = 0.5 * firstDay + 0.5 * secondDay;

    return nextDay;
}

const temp = getTempPrediction(40, 20);

console.log(temp);