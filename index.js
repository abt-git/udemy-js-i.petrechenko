// Callback Function

function learnJS(lang, callback) {
    console.log(`I'm learning ${lang}`);
    callback();
}

function done() {
    console.log(`I've finished this lesson.`);
}

learnJS('JavaScript', done);

// //-------------------------------------------------------------------

// Objects

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg:'red'
//     }
// };

// console.log(options);

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Property ${i} has value ${options[key][i]}`);
//         }        
//     } else {
//         console.log(`Property ${key} has value ${options[key]}`);        
//     }
// }
