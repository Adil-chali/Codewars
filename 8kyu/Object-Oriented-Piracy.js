class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }
  //YOUR CODE HERE...
  isWorthIt(){
    let totalDraft=this.draft-this.crew*1.5
    if(totalDraft>20){
      return true
    }else{
      return false
    }
  }
  
  
}