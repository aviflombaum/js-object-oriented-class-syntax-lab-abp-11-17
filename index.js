class BoardMember{
  constructor(name, homeState, training){
    this.name = name
    this.homeState = homeState
    this.training = training
  }
  veto(){
    return "No, I must disagree"
  }
  
  approve(){
    return `You can do that!`
  }
  
  
  sayHi(){
    return `Hi, my name is ${this.name}. I am from ${this.homestate}, and I was trained in ${this.training}.`
  }
}
