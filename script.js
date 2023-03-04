const Images=[
    {
        id:`puppy3.jpg`
    },
    {
        id:`puppy4.jpg`
    },
    {
        id:`puppy5.jpg`
    },
    {
        id:`puppy6.jpg`
    },
    {
        id:`puppy7.jpg`
    },
    {
        id:`puppy8.jpg`
    },
    {
        id:`puppy9.jpg`
    },
    {
        id:`puppy10.jpg`
    },
    {
        id:`puppy11.jpg`
    },
    {
        id:`puppy12.jpg`
    },
]
const DisplayElem=document.getElementById('image');
const Btn=document.getElementById('next');
const RandomImages=()=>{
    let index=Math.floor(Math.random()*(Images.length))
    DisplayElem.src=Images[index].id
}
Btn.addEventListener('click',RandomImages)