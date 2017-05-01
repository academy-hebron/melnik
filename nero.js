
/*

============================
	NERO by Ihor-fox
============================

Nero(function, LinkToNeroObject)
Methods:
	mget() -- get's data
	mset(n) -- set's data
	seto(link) -- set output link
	do(n) -- run!!





function in nero must be like this:
	function fun(obj, num){
		console.log(num);
		obj.mset(num+1);
		return obj.mget();
	}


EXAMPLE:
	function __i(obj,num){
		console.log(num);
		obj.mset(num+1);
		return num+1;
	}
	var a3 = new Nero(__i);
	var a2 = new Nero(__i,a3);
	var a1 = new Nero(__i,a2);
	var a0 = new Nero(__i,a1);
	var a  = new Nero(__i,a0);
	a.do(0);





*/




class Nero{
	// Constructor (Function, OUTPUT NERO)
	constructor(f,o){
		this.f = f;
		if (o) this.o = o;
	}

	// Run!! (Number)
	do(i){
		var r = this.f(this,i);
		if (this.o || r != 0 || r) {
			this.o.do(r);
		}
		return r;
	}


	// Set output! (NERO OBJ)
	seto(o){
		this.o = o;
	}

	// Set in memory
	mset(b){
		this.b = b;
	}

	// Get From Memory
	mget(){
		if (this.b) return this.b;
		return 0;
	}
}





function __i(obj,a){
	return a - 1;
}

var a = new Nero(__i);
var b = new Nero(__i,a);

a.do(0);