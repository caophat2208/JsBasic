console.log("Video27")

//Score: Gioi, kha, tb, yeu

// const score = 7
// switch (score) {
//     case 9:
//         console.log("Gioi");
//         break;
//     case 8:
//         console.log("kha");
//         break;
//     case 6:
//         console.log("tb");
//         break;
//     default:
//         console.log("yeu");
// }

const score = 7
switch (true) {
    case (score >= 8 && score <= 10):// true === true
        console.log("Gioi");
        break;

    case (score >= 6 && score < 8):
        console.log("kha");
        break;

    case (score >= 5 && score < 6):
        console.log("tb");
        break;

    default:
        console.log("yeu");
        break;
}