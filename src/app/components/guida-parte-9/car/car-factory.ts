import { Engine, Tires, Car } from './car';

// BAD pattern! //NON SI USA IL FACTORY PATTERN IN ANGULAR 2
export class CarFactory {
  createCar() {
    let car = new Car(this.createEngine(), this.createTires());
    car.description = 'Factory';
    return car;
  }

  createEngine() {
    return new Engine();
  }

  createTires() {
    return new Tires();
  }
}
