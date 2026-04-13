// The "Roulette wheel selection", also known as "Fitness proportionate selection", is a genetic operator used in genetic algorithms for selecting potentially useful solutions for recombination.

// Your task is to implement it.

// roulette

// You throw a coin in and has a chance to fall in one of the slots, the higher the fitness the higher the chance the element has to be selected.

// Given the population and fitnesses, your task is to run the roulette to return one element.

// Note: Some tests are random. If you think your algorithm is correct but the result fails, trying again should work.
const select = (population, fitnesses) => {
  const totalFitnesses=fitnesses.reduce((acc,cur)=>acc+cur,0)
  const theOdds=fitnesses.map(x=>(x/totalFitnesses))
  const randomWheelNum=Math.random()
  let current=0
  for(let i=0;i<theOdds.length;i++){
    current+=theOdds[i]
    if(current>randomWheelNum){
      return population[i]
    }
  }
};