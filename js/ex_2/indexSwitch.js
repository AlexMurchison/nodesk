const weekdayNumber = 6;
let message = null


switch (weekdayNumber) {
    case 1:
        message = "The day today is Monday."
        break;
    case 2:
        message = "The day today is Tuesday."
        break;
    case 3:
        message = "The day today is Wednesday."
        break;
    case 4:
        message = "The day today is Thursday."
        break;
    case 5:
        message = "The day today is Friday."
        break;
    case 6:
        message = "The day today is Saturday."
        break;
    case 7:
        message = "The day today is Sunday."
        break;
    default:
        message = "Please enter a valid number."
}


console.log(message)