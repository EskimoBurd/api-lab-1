"use strict";

$(document).ready( () => {

    $.get("https://www.reddit.com/r/aww/.json").then((response) => {    
        const sweethangs = response.data.children
        // console.log(sweethangs.children)
        for (let i = 0; i < sweethangs.length; i++) {
            console.log(sweethangs[i]);
            $("body").append(`
            <section>
            <h3 class= "title">Title: ${sweethangs[i].data.title}</h3>
            <p class = "author">Author: ${sweethangs[i].data.author}</p>
            <p class = "ups">Ups: ${sweethangs[i].data.ups}</p>
            <img src="${sweethangs[i].data.thumbnail}">
            <a href="http://www.reddit.com${sweethangs[i].data.permalink}">Link it up</a>
            </section>
            `)
            // can add styles into the DOM just like this
        }
    })
});