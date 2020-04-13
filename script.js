 do {
    var name = prompt('Какое имя противоположного пола тебе нравится?', 'Женя');
    var babies = prompt('Сколько бы тебе хотелось иметь детей?', '2');
    var city = prompt('Какой твой любимый город?', 'Сидней');
    var job = prompt('На какую работу ты мечтаешь устроиться?', 'Программист');
    var isTrue = confirm("Вы ответили на все вопросы?");
} while(isTrue==false)
alert(`Твоя половинка - ${name}! \n
У тебя будет ${babies + 2} детей \n
Ты переедешь в город ${city} \n
И ты будешь работать на должности ${job}`);


function pascalTriangle(){
    var arr =[50];
    var i, j;
    var size=10;
    //alert('Размер '+size+' штук =)')
 
    for(i = 1; i <= size ; i++)
    {
        arr[i] = 0;
    }
 
    arr[0] = 1;
    for(j = 1; j <= size; j++)
    {
        document.write ("<p>");
        for(i = j; i >= 1 ; i--)
        {
            document.write (arr[i-1] + "    ");
            arr[i] = arr[i-1] + arr[i];
        }
        document.write ("</p>");
    }
}

function fallingBottles() {
    var bottles = prompt('Сколько бутылок стоит?', 50);
    for(var i = 0; i < bottles; i++) {
        document.write ((bottles-i) + ' пляшок стоїть на стіні, одна упала і залишилось ' + (bottles-i-1) + '<br>');
    }
}


function workingWithArray() {
    var arr = [
        {value: 100, type: 'USD'},
        {value: 215, type: 'EUR'},
        {value: 7, type: 'EUR'},
        {value: 99, type: 'USD'},
        {value: 354, type: 'USD'},
        {value: 12, type: 'EUR'},
        {value: 77, type: 'USD'},
        ];


    let res1 = arr.filter(elem => elem.value < 100)
                  .filter(elem => elem.type === 'USD')
                  .reduce((acc, elem) => acc + elem.value , 0);
    document.write('<p> Сумма всіх USD = ' + res1 + '</p>');



    let res2 = arr.filter(elem => elem.type === 'EUR');

    let arrOfDoubles = res2.map(elem => elem.value * 2);

    for(let i = 0; i < res2.length; i++) {
        res2[i].value = arrOfDoubles[i];
        document.write('<p>'+res2[i].value+'</p>');
    }
}