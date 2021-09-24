function onSearch() {
    let searchText = document.getElementById('searchText').value;

    fetch("https://api.giphy.com/v1/gifs/search?api_key=ZWl51yCUESbqbQgJPz60kGcusXvcmFBn&q=" + searchText + "&limit=5&offset=0&rating=g&lang=ru")
        .then(response => response.json())
        .then(gifs => {
                console.dir(gifs); //это массив картинок, результат поиска
                let gifPic = "";
                //проверка вывода одной картинки (работает)
                // gifPic += `<img class="img" src="${gifs.data[1].images.original.url}">`;
                // document.getElementById("result").innerHTML = gifPic;

                // ВАРИАНТ 1 (НЕ РАБОТАЕТ) почему не работает? сделано по аналогии с карточками супергероев
            //     gifs.data.map(function (gif) {
            //         gifPic += `<img class="img" src="${gif.data.images.original.url}">`;
            //     })
            //     document.getElementById("result").innerHTML = gifPic;
            // })

                // ВАРИАНТ 2 (НЕ РАБОТАЕТ)
                //     gifs.data.forEach(function (gif,i) {
                //         gifPic += `<img class="img" src="${gif.data[i].images.original.url}">`;
                //     })
                //     document.getElementById("result").innerHTML = gifPic;
                //     console.log(document.getElementById("result"))
                // })


                //ВАРИАНТ 3 РАБОТАЕТ
                for (let i=0; i<gifs.data.length; i++) {
                        gifPic += `<img class="img" src="${gifs.data[i].images.original.url}">`;
                }
                document.getElementById("result").innerHTML = gifPic;
                console.dir(document.getElementById("result"))
                        })

                .catch(error => console.log(error));
            }; console.dir(document.getElementById("result"))