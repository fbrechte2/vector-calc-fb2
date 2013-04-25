var aa = new Array(3);
var bb = new Array(3);
var cc = new Array(3);
var s;
var precision=3;

function init0() {
	document.getElementById("button-dot").addEventListener("click",
		function(){calc("dot");}, false); 
	document.getElementById("button-cross").addEventListener("click",
		function(){calc("cross");}, false);
	document.getElementById("button-plus").addEventListener("click",
		function(){calc("plus");}, false); 
	document.getElementById("button-minus").addEventListener("click",
		function(){calc("minus");}, false);
}

function calc(operation) {
	getVectorComp();
	switch (operation) {
		case "dot":
			s = dotProd(aa, bb);
			break;
		case "cross":
			cc = crossProd(aa, bb);
			break;
		case "plus":
			cc = vecPlus(aa, bb);
			break;
		case "minus":
			cc = vecMinus(aa, bb);
			break;
	}
	switch (operation) {
		case "dot":
			writeResultScalar();
			$.mobile.changePage("#result-scalar-page");
			break;
		default:
			writeResultVector(operation);
			$.mobile.changePage("#result-vector-page");
	}
}

function writeResultScalar() {
	document.getElementById("out-scal-a0").innerHTML = aa[0];
	document.getElementById("out-scal-a1").innerHTML = aa[1];
	document.getElementById("out-scal-a2").innerHTML = aa[2];
	document.getElementById("out-scal-b0").innerHTML = bb[0];
	document.getElementById("out-scal-b1").innerHTML = bb[1];
	document.getElementById("out-scal-b2").innerHTML = bb[2];
	document.getElementById("out-scal-s").innerHTML = s.toPrecision(precision);
}

function writeResultVector(operation) {
	var operator;
	switch (operation) {
		case "cross":
			operator="x";
			break;
		case "plus":
			operator="+";
			break;
		case "minus":
			operator="-";
			break;
	}
	document.getElementById("out-operator").innerHTML = operator;
	document.getElementById("out-a0").innerHTML = aa[0];
	document.getElementById("out-a1").innerHTML = aa[1];
	document.getElementById("out-a2").innerHTML = aa[2];
	document.getElementById("out-b0").innerHTML = bb[0];
	document.getElementById("out-b1").innerHTML = bb[1];
	document.getElementById("out-b2").innerHTML = bb[2];
	document.getElementById("out-c0").innerHTML = cc[0].toPrecision(precision);
	document.getElementById("out-c1").innerHTML = cc[1].toPrecision(precision);
	document.getElementById("out-c2").innerHTML = cc[2].toPrecision(precision);
}

function getVectorComp() {
	aa[0] = parseFloat( document.getElementById("a0").value);
	aa[1] = parseFloat( document.getElementById("a1").value);
	aa[2] = parseFloat( document.getElementById("a2").value);
	bb[0] = parseFloat( document.getElementById("b0").value);
	bb[1] = parseFloat( document.getElementById("b1").value);
	bb[2] = parseFloat( document.getElementById("b2").value);
}