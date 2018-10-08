for (let i = 1; i <= 10; i++) {

    let div = document.createElement('div');
    div.innerHTML = 'Таблиця множення для ' + i + ': ';

    for (let j = 1; j <= 10; j++) {

        let result = i*j;
        let res = document.createElement('p');
        res.innerHTML = i + ' * ' + j + ' = ' + result;
        div.appendChild(res);

    }
    document.body.appendChild(div);

}