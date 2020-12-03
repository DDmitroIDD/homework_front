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
const image = document.getElementById('img');
const filmName = document.getElementById('filNa');

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
                if (item[i].show.name === inp.value) {
                    filmName.innerHTML =`${item[i].show.name}`;
                    filmName.style.border = 'medium groove black';
                    filmName.style.backgroundColor = 'orange';
                    image.style.width = '600px';
                    image.style.height = '800px';
                    image.setAttribute('src', `${item[i].show.image.original}`)
                }

            }

    })

})
