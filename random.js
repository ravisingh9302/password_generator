console.log('random  number genrator')

const cha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%&?0123456789';
const num = '1234567890';
const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';


let aa = document.getElementById('boxforlenth');
let bb = document.getElementById('btnsub')
bb.addEventListener('click', function () {
    localStorage.setItem('length', aa.value);
    location.reload();
})

aa.value = localStorage.getItem('length');

let cc = document.getElementById('output');
cc.innerText = random(aa.value);


function random(lengthofoutput) {
    if (lengthofoutput >20 || lengthofoutput < 2) {
        return 'Please! enter number in Range [2, 20]';
    } 

    else {
        let number = '';
        for (let index = 0; index < lengthofoutput; index++) {
            number += cha.charAt(Math.round(68 * Math.random()))
            // number += num.charAt(Math.round(10 * Math.random()))
            // number += alpha.charAt(Math.round(52 * Math.random()))
        }
        return number;
    }
};




