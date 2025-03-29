interface Bike {
  year: number;
  model: string;
}

interface Scooter extends Bike {
  cc: number;
}

const Honda: Scooter = {
  year: 2016,
  model: "Grazia",
  cc: 125,
};

console.log(Honda);
