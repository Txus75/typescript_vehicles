var car: Car;
function createCar(plate: string, brand: string, color: string): string {
    car = new Car(plate, brand, color);
    let returnJSON = car.showCar()
    return JSON.stringify(returnJSON);
}
function addWheel(wheelBrand: string, diameter: number): void {
    car.addWheel(new Wheel(diameter, wheelBrand));
}
function returnWheels(): Wheel[] {
    return car.showWheels();
}