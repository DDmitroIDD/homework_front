// hw1


// let filmSearch = prompt('what movie are you looking for?');
// let promise = fetch(`http://api.tvmaze.com/search/shows?q=${filmSearch}`);
//
// promise
//     .then((data) => {
//         return data.json();
//
//     })
//
//     .then((item) => {
//         console.log('item: ', item);
//
//     })


// hw2

// const inp = document.getElementById('inp');
// const butt = document.getElementById('butt');
//
// butt.addEventListener('click', ev => {
//     let promise = fetch(`http://api.tvmaze.com/search/shows?q=${inp.value}`);
//
//     promise
//         .then((data) => {
//             return data.json();
//
//     })
//
//         .then((item) => {
//             console.log('item: ', item);
//
//     })
//
// })


// hv3


const inp = document.getElementById('inp');
const butt = document.getElementById('butt');
const film = document.getElementById('film');

butt.addEventListener('click', (event) => {
    let promise = fetch(`http://api.tvmaze.com/search/shows?q=${inp.value}`);
    console.log(inp.value);


    promise
        .then((data) => {
            return data.json();

    })

        .then((item) => {
            console.log('item: ', item);
            for (let i in item) {
                const span = document.createElement('span');
                span.innerHTML = `${item[i].show.name}`;
                span.style.border = 'medium groove black';
                span.style.backgroundColor = 'orange';
                span.style.position = 'relative';
                span.style.right = '250px';
                span.style.padding = '5px';
                span.style.fontSize = '200%';
                const image = document.createElement('img');
                image.setAttribute('src', `${item[i].show.image.medium}`)
                image.setAttribute('alt', `${item[i].show.name}`)
                image.style.margin = '2% 0 2% 60%';
                film.appendChild(image);
                film.appendChild(span);


            }

    })

})
