
function wakeDog(dogName, dogBreed) { 
  console.log("Wake ${dogName} the ${dogBreed}");
  return `Wake ${dogName} the ${dogBreed}`
} 

function leashDog(dogName, dogBreed) { 
  console.log("Leash ${dogName} the ${dogBreed}");
  return ``
} 

function walkToPark(dogName, dogBreed) { 
  console.log("Walk to the park with ${dogName} the ${dogBreed}");
  return ``
}

function throwFrisbee(dogName, dogBreed) { 
  console.log("throw the frisbee for ${dogName} the ${dogBreed}");
  return ``
}

function walkHome(dogName, dogBreed) { 
  console.log("Walk home with ${dogName} the #{dogBreed}");
  return ``
}

function unleashDog(dogName, dogBreed) { 
  console.log("Unleash ${dogName} the ${dogBreed}");
  return ``
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) 