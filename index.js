// // const AGES = [27, 29, 31];
// // console.log(AGES);

// var button = document.querySelector('button');

// var fn2 = () => console.log(this);


// button.addEventListener('click', fn2); 

function sumUp(...toAdd) {
    let result = 0;
    for (let i = 0; i < toAdd.length; i++) {
        result += toAdd[i];
    }
    return result;
}

console.log(sumUp(100, 10, 20));