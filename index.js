
function distanceFromHqInBlocks(street) {
    return Math.abs(street - 42);
}
    distanceFromHqInBlocks(street);


function distanceFromHqInFeet(feetDistance) {
    return Math.abs(distanceFromHqInBlocks(feetDistance) * 264);
}
    distanceFromHqInFeet(feetDistance);


function distanceTravelledInFeet(start, destination) {
    return Math.abs ((start - destination) * 264);
}
    distanceTravelledInFeet();


function calculatesFarePrice(a,b) {
    let distance = distanceTravelledInFeet(a, b);

    if (distance <= 400) {
        return 0;
    }
    if (distance > 400 && distance <= 2000) {
        return 2.56;
    }
    if (distance > 2500) {
        return 'cannot travel that far'
    }
    if (distance >= 2000) {
        return 25;
    }
}
    calculatesFarePrice();