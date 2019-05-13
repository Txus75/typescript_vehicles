var car;
function createCar(plate, brand, color) {
    car = new Car(plate, brand, color);
    var returnJSON = car.showCar();
    return JSON.stringify(returnJSON);
}
function addWheel(wheelBrand, diameter) {
    car.addWheel(new Wheel(diameter, wheelBrand));
}
function returnWheels() {
    return car.showWheels();
}
