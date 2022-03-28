interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function print(animal: Animal): void {
  switch (animal.type) {
    case 'bird':
      console.log(animal.flyingSpeed);
      break;

    case 'horse':
      console.log(animal.runningSpeed);
      break;
  }
}

const bird: Bird = {
  type: 'bird',
  flyingSpeed: 2,
};

print(bird);
