const album = document.getElementById('solth park');
const site = document.getElementById('chaves');
const port = document.getElementById('HE-MAN');

const videoSolthpark = document.querySelector('.videoSolthpark');
const videoChaves = document.querySelector('.videoChaves');
const HEMAN = document.querySelector('.videoHEMAN');

//
album.addEventListener('click',()=>{
    album.classList.toggle('active');
    videoSolthpark.classList.toggle('active');
})
