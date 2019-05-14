var car: Car;
function createCar(plate: string, brand: string, color: string): string | void {
    const PLATE = /^\d{4}([a-zA-Z]{3})$/;
    if (plate.length > 0 && brand.length > 0 && color.length > 0) {
        if (!PLATE.test(plate)) {
            alert("El campo Plate no es correcto, debe contar de 4 número y 3 letras.");
        } else {
            car = new Car(plate, brand, color);
            let returnJSON = car.showCar()
            return JSON.stringify(returnJSON);
        }
    } else {
        alert("Es necesario rellenar todos los campos.");
    }
}
function addWheel(wheelBrand: string, diameter: number, i: number): boolean {
    if (diameter > 0.4 && diameter < 2) {
        car.addWheel(new Wheel(diameter, wheelBrand));
        return true;
    } else {
        alert("El diámetro de la rueda " + i + " no es correcto.");
        car.deleteWheel();
        return false;
    }
}
function returnWheels(): Wheel[] {
    return car.showWheels();
}