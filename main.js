//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name) {
  this.name = name;
  this.status = "normal";
  this.hungry = true;
};

let sadie = new Dog("Sadie");
sadie.color = "black"
sadie.hungry = false
let moonshine = new Dog("Moonshine");
let atticus = new Dog("Atticus");

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name, status) {
  this.name = name;
  this.status = status;
  this.cool = false;
  this.pet = function(dog){
    dog.status = "happy";
  }
  this.feed = function(dog){
    dog.hungry = false;
  }
}

let mason = new Human("Mason", "cool");
let julia = new Human("Julia");
julia.cool = true

// Instances of Human
// Needed: mason, julia
