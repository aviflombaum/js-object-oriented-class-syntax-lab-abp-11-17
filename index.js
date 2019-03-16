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
    returns `You can do that!`
  }
  
  
  sayHi(){
    returns `Hi, my name is $this.name. I am from <homestate>, and I was trained in <training>.`
  }
}
