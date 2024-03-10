type car ={
    manufacture : string ;
    model : number ;
}

function cars(manufacture: string, model: number) : car {
  return {
    manufacture,
    model,
  }
}
let object : car = cars("KIA", 2024)
console.log(object);