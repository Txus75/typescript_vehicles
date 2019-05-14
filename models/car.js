var Car = /** @class */ (function () {
    function Car(plate, brand, color) {
        this.wheels = [];
        this.plate = plate;
        this.brand = brand;
        this.color = color;
    }
    Car.prototype.showCar = function () {
        return {
            "Plate": this.plate,
            "Brand": this.brand,
            "Color": this.color
        };
    };
    Car.prototype.addWheel = function (wheel) {
        this.wheels.push(wheel);
    };
    Car.prototype.deleteWheel = function () {
        this.wheels = [];
    };
    Car.prototype.showWheels = function () {
        return this.wheels;
    };
    return Car;
}());
