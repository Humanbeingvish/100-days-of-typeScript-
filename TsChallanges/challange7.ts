enum Directions{
    North,
    South,
    East,
    West
}

function move(direction:Directions){
    switch (direction) {
        case Directions.North:
        console.log('This is for north')
        break;
        case Directions.South:
            console.log('This is for north');
            break;

            case Directions.East:
                console.log('This is for north');
                break;

                case Directions.West:
                    console.log('This is for north');
                    break;

    
        default:
            break;
    }
}

move(Directions.North);


