// const AGES = [27, 29, 31];
// console.log(AGES);

var button = document.querySelector('button');

var fn2 = () => console.log(this);


button.addEventListener('click', fn2);