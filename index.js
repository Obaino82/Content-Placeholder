const header = document.getElementById("header")
const title = document.getElementById("title")
const excerpt = document.getElementById("excerpt")
const profile_img = document.getElementById("profile_img")
const names = document.getElementById("name")
const dateEl = document.getElementById("date")

const animation_bgs = document.querySelectorAll(".animation-bg")
const animation_bg_texts = document.querySelectorAll(".animation-bg-text")

setTimeout(getData,2500)

function getData(){
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, soluta.'
    profile_img.innerHTML = '<img src="https://images.unsplash.com/photo-1603384699007-50799748fc45?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHBvcnRyYWl0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=40" alt="">'
    names.innerHTML = 'Austin Doe'
    dateEl.innerHTML = '20,july 2021'

    animation_bgs.forEach(bg => bg.classList.remove("animation-bg"))

    animation_bg_texts.forEach(bg => bg.classList.remove("animation-bg-text"))
}
