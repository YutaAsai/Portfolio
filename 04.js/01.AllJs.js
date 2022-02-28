//グローバル変数
let winW; //ウィンドウ横幅
let winH; //ウィンドウ縦幅
let WidthBigFlag; //ウィンドウ横幅の方が縦幅より大きい場合にtrueになるフラグ

window.addEventListener('load', ()=>{
    WidthBigFlagFunc();
});
window.addEventListener('resize', ()=>{
    WidthBigFlagFunc();
});

function WidthBigFlagFunc(){
    winW = window.innerWidth;
    winH = window.innerHeight;
    if(winW > winH){
        WidthBigFlag = true;
    }
    else{
        WidthBigFlag = false;
    }
};