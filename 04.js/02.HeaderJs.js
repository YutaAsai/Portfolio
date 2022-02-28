let HeaderSizeSmallFlag = false;//各コンテナデバッグ時はtrueにする

const HeaderContainer = document.getElementById("HeaderContainer");
const HeaderTitle = document.getElementById("HeaderTitle");
const HeaderNavContainer = document.getElementById("HeaderNavContainer");
const HeaderNavText = document.getElementsByClassName("HeaderNavText");
const About = document.getElementById("About");
const Skill = document.getElementById("Skill");
const Works = document.getElementById("Works");
const Contact = document.getElementById("Contact");

// 背景ID取得
const IMGTop = document.getElementById("IMGTop");
const IMGAbout = document.getElementById("IMGAbout");
const IMGSkill = document.getElementById("IMGSkill");
const IMGWorks = document.getElementById("IMGWorks");
const IMGContact = document.getElementById("IMGContact");

// 要素取得
const AboutContentContainer = document.getElementById("AboutContentContainer");
const SkillContainer = document.getElementById("SkillContainer");
const WorksContainer = document.getElementById("WorksContainer");
const ContactContainer = document.getElementById("ContactContainer");

window.addEventListener('load', ()=>{
    HeaderSize();
});
window.addEventListener('resize', ()=>{
    HeaderSize();
});

function HeaderSize(){
    if(HeaderSizeSmallFlag == false){
        if(WidthBigFlag == true){
            HeaderTitle.style.fontSize = 100/2*0.2 + 'vh';
            HeaderNavContainer.style.fontSize = 100/2*0.2 + 'vh';
            HeaderNavContainer.style.width = 100*0.75 + 'vh';
            for(i=0; i<HeaderNavText.length; i++){
                HeaderNavText[i].style.fontSize = 100/2*0.06 + 'vh';
            }
        }
        else{
            HeaderTitle.style.fontSize = 100/2*0.2 + 'vw';
            HeaderNavContainer.style.fontSize = 100/2*0.2 + 'vw';
            HeaderNavContainer.style.width = 100*0.75 + 'vw';
            for(i=0; i<HeaderNavText.length; i++){
                HeaderNavText[i].style.fontSize = 100/2*0.06 + 'vw';
            }
        }
    }
    else{
        HeaderContainer.style.height = 150+ 'px';
        HeaderTitle.style.fontSize = 40 + 'px';
        HeaderNavContainer.style.fontSize = 40 + 'px';
        HeaderNavContainer.style.width = 300 + 'px';
        for(i=0; i<HeaderNavText.length; i++){
            HeaderNavText[i].style.fontSize = 15 + 'px';
        }
    }
};

About.addEventListener('click', ()=>{
    HeaderSizeSmallFlag = true;
    HeaderSize();
    IconStyleReset();
    About.style.borderBottom = "2px Solid white";
    IMGAbout.style.opacity = 0.3;
    AboutContainer.style.left = 0 + 'px';
    AboutContainer.style.opacity = 1;
});
Skill.addEventListener('click', ()=>{
    HeaderSizeSmallFlag = true;
    HeaderSize();
    IconStyleReset();
    Skill.style.borderBottom = "2px Solid white";
    IMGSkill.style.opacity = 0.4;
    SkillContainer.style.top = 0;
    SkillContainer.style.left = 0;
});
Works.addEventListener('click', ()=>{
    HeaderSizeSmallFlag = true;
    HeaderSize();
    IconStyleReset();
    Works.style.borderBottom = "2px Solid white";
    IMGWorks.style.opacity = 0.4;
    WorksContainer.style.left = 0;
});
Contact.addEventListener('click', ()=>{
    HeaderSizeSmallFlag = true;
    HeaderSize();
    IconStyleReset();
    Contact.style.borderBottom = "2px Solid white";
    IMGContact.style.opacity = 0.4;
    ContactContainer.style.left = 0;
    ContactContainer.style.top = 0;
});

function IconStyleReset(){
    About.style.borderBottom = "0px";
    Skill.style.borderBottom = "0px";
    Works.style.borderBottom = "0px";
    Contact.style.borderBottom = "0px";
    IMGTop.style.opacity = 0;
    IMGAbout.style.opacity = 0;
    IMGSkill.style.opacity = 0;
    IMGWorks.style.opacity = 0;
    IMGContact.style.opacity = 0;
    AboutContainer.style.left = 100 + 'vw';
    ContactContainer.style.left = 100 + 'vw';
    ContactContainer.style.top = 100 + 'vh';
    SkillContainer.style.left = -100 + 'vw';
    SkillContainer.style.top = -100 + 'vh';
    WorksContainer.style.left = -100 + 'vw';
};