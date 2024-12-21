class Animal {
	action() {
		console.log('animal action')
	}
}

class Dog extends Animal {
	action(): void {
		console.log('dog runing')
	}
}

class Fish extends Animal {
	action(): void {
		console.log('fish swiming')
	}
}

// 执行行为
function makeActions(actions: Animal[]) {
	actions.forEach(item => item.action())
}

const animals: Animal[] = [new Animal(), new Dog(), new Fish()]

makeActions(animals)

export {}
