
# Car Deformation Test 🚗💥

Car deformation is crucial in understanding the impact of collisions. It's calculated using the following formula:

**Deformation = 0.5 * weight * speed * speed / 22500**

or equivalently,

**Deformation = 0.5 * weight * speed^2 / 22500**

where:
- *weight* is the weight of the car (in kilograms).
- *speed* is the speed of the car (in meters per second).

Here, the symbol *x* represents multiplication.

The total deformation score is half of the product of the weight with the square of the speed, divided by 22500.

## Demonstration in JavaScript with **P5.js** and **Matter.js(*Physics Engine*)**

```javascript
let engine;
    let world;
    let cars = [];

    function setup() {
      createCanvas(800, 600);
      engine = Matter.Engine.create();
      world = engine.world;

      // Create cars with different weights and speeds
      cars.push(new Car(100, 2));
      cars.push(new Car(150, 3));
      cars.push(new Car(200, 4));
      cars.push(new Car(250, 5));
      cars.push(new Car(300, 6));
      
      Matter.Engine.run(engine);
    }

    function draw() {
      background(255);

      for (let car of cars) {
        car.display();
      }
    }

    class Car {
      constructor(weight, speed) {
        this.weight = weight;
        this.speed = speed;
        this.deformation = 0.5 * weight * speed * speed / 22500;
        this.x = random(width);
        this.y = random(height);
        this.width = 50;
        this.height = 20;
        this.color = color(0, 150, 255);
      }

      display() {
        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
        textAlign(CENTER);
        textSize(12);
        fill(0);
        text(`Weight: ${this.weight} kg\nSpeed: ${this.speed} m/s\nDeformation: ${this.deformation.toFixed(2)}`, this.x + this.width / 2, this.y + this.height + 20);
      }
    }
```

### Five Different Car Objects with Different Weights and Speeds:

1. Car 1:
   - **Weight:** 100 kg
   - **Speed:** 2 m/s

2. Car 2:
   - **Weight:** 150 kg
   - **Speed:** 3 m/s

3. Car 3:
   - **Weight:** 200 kg
   - **Speed:** 4 m/s

4. Car 4:
   - **Weight:** 250 kg
   - **Speed:** 5 m/s

5. Car 5:
   - **Weight:** 300 kg
   - **Speed:** 6 m/s

Stay tuned for the innovative demonstration using P5.js and Matter.js! ⚒️
> Source code may vary from the code given in Readme File as source code was written by in 2020 when I was a beginner <3