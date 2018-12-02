function BoardMember(name, homeState, training) {
  this.name = name
  this.homestate = homestate
  this.traning = training
}

this.veto = function() {
return "No, I must disagree";
}

function approve() {
return "You can do that!";
  
}

function doCharity() {
return "I like to help people.";
}

function releasePressStatement() {
return "You will see great things from Scuber.";
}

function sayHi() {
return "Hi, my name is ${this.name}. I am from ${this.homestate}, and I was trained in ${this.training}.";
}

