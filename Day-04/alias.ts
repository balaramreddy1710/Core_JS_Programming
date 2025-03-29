type CarType = string;
type CarYear = number;
type CarModel = string;

type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const carYear: CarYear = 2009;
const carType: CarType = "Sedan";
const carModel: CarModel = "Porche 3A";

const car: Car = {
  year: carYear,
  type: carType,
  model: carModel,
};

console.log(car);
