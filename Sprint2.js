fetch("./Sprint.json")
    .then((response) => response.json())
    .then((sprint2) => {
        let carInfo = "";
        sprint2.forEach((car) => {
            carInfo += getStatus(car) + "<br>";
            console.log(getStatus(car));
        });

        let carNames = getCarNames(sprint2);
        document.getElementById("car-names").innerHTML = carNames;

        console.log(getTotalHorses(sprint2));

        let totalHorses = getTotalHorses(sprint2);
        carInfo += totalHorses;

        document.getElementById("car-info").innerHTML = carInfo;
    })
    .catch((error) => {
        console.error(error);
    });

function getCarNames(cars) {
    let carNames = "A list of big car brands: ";
    cars.forEach(function (car, index) {
        carNames += car.name;
        if (index < cars.length - 1) {
            carNames += ", ";
        }
    });
    carNames += ".";
    console.log(carNames);
    return carNames;
}

function getStatus(car) {
    switch(car.status) {
        case "rare":
            return `The ${car.name} has a rare number left.`;
            break;
        case "unknown":
            return `The ${car.name} has an unknown number left.`;
            break;
        default:
            return `The ${car.name} has a none concerning rarety.`;
    }
}

function getTotalHorses(cars) {
    let totalHorses = 0;
    cars.forEach(function (car) {
        totalHorses += car.HorsePower;
    });
    return `${totalHorses} is the total hp of all the cars combined.`;
}
