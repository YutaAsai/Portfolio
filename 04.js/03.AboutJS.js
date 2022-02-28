const AboutContentContainer = document.getElementById("AboutContentContainer");
const IconPerson = document.getElementById("IconPerson");
const AboutText = document.getElementById("AboutText");
const AboutTextName = document.getElementById("AboutTextName");


window.addEventListener('load', ()=>{
    AboutSize();
});
window.addEventListener('resize', ()=>{
    AboutSize();
});

function AboutSize(){
    if(WidthBigFlag == true){
        AboutContentContainer.style.flexDirection = "row";
        AboutText.style.width = 45 + 'vw';
        AboutText.style.height = 22 + 'vw';
        AboutTextName.style.fontSize = 2.8 + 'vw';
        IconPerson.style.fontSize = 22 + 'vw';
    }
    else{
        AboutContentContainer.style.flexDirection = "column";
        AboutText.style.width = 85 + 'vw';
        AboutText.style.height = 40 + 'vh';
        AboutTextName.style.fontSize = 2.8 + 'vh';
        IconPerson.style.fontSize = 22 + 'vh';
    }
};