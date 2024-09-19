enum Directions{
    North='north',
    South='south',
    East='east',
    West='west'
}

function Move(direction:Directions){
    console.log(`You are moviing in ${direction}`)
}

Move(Directions.North)