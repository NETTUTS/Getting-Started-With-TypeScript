class Shape {

	// members
	area: number;
	private color: string;

	// constructor
	constructor ( public name: string, width: number, height: number ) {
		this.area = width * height;
		this.color = "pink";
	};

	// methods
	shoutout() {
		return "I'm " + this.color + " " + this.name +  " with an area of " + this.area + " cm squared.";
	}
}

var square = new Shape("square", 30, 30);

console.log( square.shoutout() );
console.log( 'Area of Shape: ' + square.area );
console.log( 'Name of Shape: ' + square.name );
console.log( 'Color of Shape: ' + square.color ); // warning is raised from compiler if it is private
console.log( 'Width of Shape: ' + square.width ); // undefined and warning is raised from compiler
console.log( 'Height of Shape: ' + square.height ); // undefined and warning is raised from compiler


class Shape3D extends Shape {

	volume: number;

	constructor ( public name: string, width: number, height: number, length: number ) {
		super( name, width, height ); // calls the contructor of the base class
		this.volume = length * this.area;
	};

	// method shoutout() from base class is overriden here
	shoutout() {
		return "I'm " + this.name +  " with a volume of " + this.volume + " cm cube.";
	}

	// additional method superShout() is calling the base class' method shoutout()
	superShout() {
		return super.shoutout();
	}
}

var cube = new Shape3D("cube", 30, 30, 30);
console.log( cube.shoutout() );
console.log( cube.superShout() );