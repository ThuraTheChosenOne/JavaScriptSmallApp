//UI
const getbox = document.querySelector('.box');
const getbtns = document.querySelector('.btns');

getbox.addEventListener('click',function(e){
    // console.log("hey");
    getbtns.classList.add('show');

    smallmenu(e.target);
});

getbox.addEventListener('dblclick',function(){
    getbtns.classList.remove('show');
});

function smallmenu(ele){
    // console.log(iconbox);
    if(ele.classList.contains('btn-icon') ){
        // console.log("yes");

        const geturl = ele.getAttribute('data-link');
        // console.log(geturl);

        window.location.href = geturl;

    }else if(ele.classList.contains('icn')){
        const geturl = ele.parentElement.getAttribute('data-link');
        window.location.href = geturl;
    }else{
        console.log('no');
    }
};

dragme(getbox);

function dragme(box){
    // console.log(box);
    console.log("i am main drag me function");

    function mousedown(){
        console.log("i am main  mousedown function");
    }

    function dragnow(){
        console.log("i am main dragnow function");
    }

    function stopdrag(){
        console.log("i am main stopdrag function");
    }
}

