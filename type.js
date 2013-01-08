function area(shape, width, height) {
    var area = width * height;
    return "I'm a " + shape + " with an area of " + area + " cm squared.";
}
document.body.innerHTML = area("rectangle", "width", 15);
