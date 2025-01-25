function changeText(event){
    //console.log(event);
    
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Hello Me!"
}
let fpara = document.getElementById('fpara');
fpara.addEventListener('click',changeText);

//fpara.removeEventListener('click',changeText)



let ele = document.getElementById('ele');

ele.addEventListener('click',function(event){
    event.preventDefault();
    ele.textContent="prevented"
});