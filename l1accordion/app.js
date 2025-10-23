//UI

const getacctitles = document.getElementsByClassName('acctitle');
const getaccontents = document.querySelectorAll('.acccontent');
// console.log(getacctitles); html collection
// console.log(getaccontents); node list

// console.log(getaccontents.length); //4
// console.log(getaccontents[0]);


for(let x = 0; x < getacctitles.length; x++){
    // console.log(x);//0 to 3

    getacctitles[x].addEventListener('click',function(e){
        // console.log(x);// clicked element index

        // console.log(getacctitles[x]);

        // console.log(e.target);
        // console.log(this);

        // e.target.classList.toggle('active');
        this.classList.toggle('active');
                            // acctitle   acccontent
        const getcontent = this.nextElementSibling;
        // console.log(getcontent);
        // console.log(getcontent.scrollHeight+"px");// paragraph height

        // getcontent.style.height = getcontent.scrollHeight+"px";

        if(getcontent.style.height){
            getcontent.style.height = null;//beware can't set 0
        }else{
            getcontent.style.height = getcontent.scrollHeight+"px";
        }



    });

    if(getacctitles[x].classList.contains('active')){
        getaccontents[x].style.height = getaccontents[x].scrollHeight+ "px";
    }


}