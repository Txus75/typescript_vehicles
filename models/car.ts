class Car {
    private plate: string;
    private brand: string;
    private color: string;
    private wheels: Wheel[] = [];
    
    constructor(plate: string, brand:string, color: string) {
        this.plate = plate;
        this.brand = brand;
        this.color = color;
    }
    
    showCar(): object {
        return {
            "Plate": this.plate,
            "Brand": this.brand,
            "Color": this.color
        };
    }

    addWheel(wheel: Wheel): void {
        this.wheels.push(wheel);
    }

    showWheels(): Wheel[] {
        return this.wheels;
    }
}