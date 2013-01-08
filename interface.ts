interface Shape {
	name: string;
	width: number;
	height: number;
	color?: string;
}

function area(shape : Shape) {
	var area = shape.width * shape.height;

	if (shape.color) {
		return "I'm " + shape.color + " " + shape.name + " with area " + area + " cm squared";
	}
	else {
		return "I'm " + shape.name + " with area " + area + " cm squared";
	}
}

// ok as color is optional
console.log( area( {name: "rectangle", width: 30, height: 15} ) );

// ok as optional color is also given
console.log( area( {name: "square", width: 30, height: 30, color: "blue"} ) );

// not ok as name is required
console.log( area( {width: 30, height: 15} ) );