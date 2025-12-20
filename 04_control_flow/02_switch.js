// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3 // agr 3 ke jgh ("jan") hota

switch (month) {
    case "jan":
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;// case match hone prr agr break nhi hota to wo next case ko check hi nhi krta direct execute krta except default
    case 4:   // so we use break because its break the control flow
        console.log("april");
        break;

    default:
        console.log("default case");
        break;
}