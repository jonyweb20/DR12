//Вывод #
function GetList() {
    let i = 1, userValue, sim = ``;
    let out = document.querySelector(`#out`);
    userValue = document.getElementById(`n1`).value;
    userValue = parseInt(userValue);
    while (i <= userValue) {
        sim += `# `;
        i++;
    }
    document.getElementById(`out`).innerHTML = sim;
}

//Задание №2 Вывод всех чисел от 0 до введеного
function GetListTwo() {
    let userValue, sim = ``;
    let out2 = document.querySelector(`#out2`);
    userValue = document.getElementById(`n2`).value;
    userValue = parseInt(userValue);
    while (0 <= userValue) {
        sim += ` ` + userValue;
        userValue--;
    }
    document.getElementById(`out2`).innerHTML = sim;
}


//Задание №3 Запросить число и степень
function GetListThree() {
    let userValue1, userValue2, sim = ``;
    let out3 = document.querySelector(`#out3`);
    userValue1 = document.getElementById(`n3`).value;
    userValue2 = document.getElementById(`n4`).value;
    userValue2 = parseInt(userValue2);
    userValue1 = parseInt(userValue1);
    while (0 <= userValue2 && userValue2 !== isNaN && userValue1 !== isNaN) {
        sim = ` ` + userValue1 ** userValue2;
        break;
    }
    document.getElementById(`out3`).innerHTML = sim;
}



//Задание №4 Найти общие делители чисел
function GetListFour() {
    let  i = 0, userValue1, userValue2, sim = ``, zel1, zel2;
    let out4 = document.querySelector(`#out4`);
    userValue1 = document.getElementById(`n5`).value;
    userValue2 = document.getElementById(`n6`).value;
     if (userValue1 === isNaN || userValue2 === isNaN){
         document.getElementById(`out4`).innerHTML = "нет решения";
}
     else {
        while (i <= userValue1 && i <= userValue2) {
         zel1 = userValue1 % i;
         zel2 = userValue2 % i;
         while (zel1 === 0 && zel2 === 0 ) {
             sim += ` ` + i;
             zel1++;
             zel2++;
         }
            i++;
     }
     }
    document.getElementById(`out4`).innerHTML = sim;
}

//Задание №5 Факториал заданного числа
function GetListFive() {
    let i = 1, userValue, sim = 1;
    let out5 = document.querySelector(`#out5`);
    userValue = document.getElementById(`n7`).value;
    while (i <= userValue) {
        sim *= i;
        i++;
    }
    document.getElementById(`out5`).innerHTML = sim;
}

//Задание №1 Решить пример 2+2*2
function GetListSix() {
    let userValue
    let out6 = document.querySelector(`#out6`);
    userValue = +document.getElementById(`n11`).value;
    do {
        if (userValue === (2 + 2 * 2)){
            document.querySelector(`#out6`).innerHTML =`Верное решение`
        }
        }
        while (userValue > (2 + 2 * 2) && userValue < (2 + 2 * 2)) {
       if (userValue > (2 + 2 * 2)) {
            document.querySelector(`#out6`).innerHTML =`Много`
        }
        if (userValue < (2 + 2 * 2)) {
            document.querySelector(`#out6`).innerHTML =`Мало`
        }
    }
    }
//Задание №1 Делить 1000 на 2 до значения менее 50

function GetListSeven() {
    let i = 0;
    let out7 = document.querySelector(`#out7`);
    let userValue = +document.getElementById(`n12`).value;
    if (userValue > 50)
    do {
        userValue /= 2;
        i++;
    }
    while (userValue >= 50)
    {
    }
    document.querySelector(`#out7`).innerHTML =`Количество операций ${i} Минимальное число ${userValue}`;
}

function GetListEight() {
    let userValue, sim = 1, sim2 = ``;
    let out8 = document.querySelector(`#out8`);
    userValue = document.getElementById(`n13`).value;
    for (let i = 1; sim <= 100 && userValue <= 100 &&userValue > 0; i++) {
        document.querySelector(`#out8`).innerHTML = `Числа кратные ${userValue} :` + sim2;
        sim = userValue * i;
        sim2 += ` ` + sim;
    }
}

function GetListNine() {
    let userValue1, userValue2, sim = ``, sim2 = ``;
    let out9 = document.querySelector(`#out9`);
    userValue1 = +document.getElementById(`n14`).value;
    userValue2 = +document.getElementById(`n15`).value;
    for (let i = 0; sim2 <= userValue2; i = i+4) {
        sim2 = userValue1 + i;
        document.querySelector(`#out9`).innerHTML = `Каждый 4-ый элемент:` + sim;
        sim += ` ` + sim2;
    }

}

