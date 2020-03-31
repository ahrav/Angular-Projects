const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return this.name;
  }
};

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
