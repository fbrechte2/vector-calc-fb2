function crossProd(a, b) {
	var c = new Array(3);
	c[0] = a[1]*b[2] - a[2]*b[1];
	c[1] = a[2]*b[0] - a[0]*b[2];
	c[2] = a[0]*b[1] - a[1]*b[0];
	return c; 
}

function dotProd(a, b) {
	return a[0]*b[0]+a[1]*b[1]+a[2]*b[2];
}

function vecPlus(a, b) {
	var c = new Array(3);
	c[0] = a[0]+b[0];
	c[1] = a[1]+b[1];
	c[2] = a[2]+b[2];
	return c; 
}

function vecMinus(a, b) {
	var c = new Array(3);
	c[0] = a[0]-b[0];
	c[1] = a[1]-b[1];
	c[2] = a[2]-b[2];
	return c; 
}