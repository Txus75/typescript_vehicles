//Listeners
var createCarClick = document.querySelector("#createCar");
createCarClick.addEventListener("click", getCar);
//Función de recogida y envío de datos del coche al controlador y muestra de datos
function getCar() {
    const PLATE = /^\d{4}([a-zA-Z]{3})$/;
    let plate = $("#plate").val();
    let brand = $("#brand").val();
    let color = $("#color").val();
    if (plate.length > 0 && brand.length > 0 && color.length > 0) {
        if (!PLATE.test(plate)) {
            alert("El campo Plate no es correcto, debe contar de 4 número y 3 letras.");
        } else {
            let vehicle = createCar(plate, brand, color);
            let textCar = "";
            formZone();
            vehicle = JSON.parse(vehicle);
            textCar += "<div class='col-12'><h4>Car:</h4></div>";
            textCar += "<div class='col-md-3'><p>Plate: " + vehicle["Plate"] + "</p></div>";
            textCar += "<div class='col-md-3'><p>Brand: " + vehicle["Brand"] + "</p></div>";
            textCar += "<div class='col-md-3'><p>Color: " + vehicle["Color"] + "</p></div>";
            $("#carInfo").html(textCar);
        }
    } else {
        alert("Es necesario rellenar todos los campos.");
    }
}
//Función de cambio de formulario
function formZone() {
    let wheelsForm = "";
    wheelsForm += "<form class='form row' name='wheelsForm' id='wheelsForm'>";
    for (let i = 1; i <= 4; i++) {
        wheelsForm += "<div class='col-md-3'>";
        wheelsForm += "<label for='wheel" + i + "' class='d-block'>Marca Rueda " + i + "</label>";
        wheelsForm += "<input type='text' class='form-control mb-2 mr-sm-2' id='wheel" + i + "' name='wheel" + i + "'>";
        wheelsForm += "</div><!-- col -->";
        wheelsForm += "<div class='col-md-3'>";
        wheelsForm += "<label for='diameter" + i + "' class='d-block'>Diámetro Rueda " + i + "</label>";
        wheelsForm += "<input type='number' class='form-control mb-2 mr-sm-2' id='diameter" + i + "' name='diameter" + i + "'>";
        wheelsForm += "</div><!-- col -->";
    }
    wheelsForm += "</form>";
    wheelsForm += "<button type='submit' class='btn btn-primary my-3' id='addWheels'>Add Wheels</button>";
    $("#formZone").html(wheelsForm);
    let addWheelsClick = document.querySelector("#addWheels");
    addWheelsClick.addEventListener("click", getWheels);
}
//Función de recogida y envío de datos de las ruedas al controlador y muestra de datos
function getWheels() {
    let wheelBrand;
    let diameter;
    let wheels;
    let textWheels = "";
    let oka = true;
    for (let i = 1; i <= 4; i++) {
        wheelBrand = $("#wheel" + i).val();
        diameter = $("#diameter" + i).val();
        diameter = Number(diameter);
        if (diameter > 0.4 && diameter < 2) {
            addWheel(wheelBrand, diameter);
        } else {
            alert("El diámetro de la rueda " + i + " no es correcto.");
            oka = false;
            break;
        }
    }
    if (oka) {
        wheels = returnWheels();
        textWheels += "<div class='col-12'><h4>Wheels:</h4></div>";
        for (let i = 1; i <= 4; i++) {
            textWheels += "<div class='col-md-3'><p>Wheel " + i + "</p><p>Brand: " + wheels[(i - 1)].brand + "</p><p>Diameter: " + wheels[(i - 1)].diameter + "</p></div>";
        }
        $("#carInfo").append(textWheels);
    }
}