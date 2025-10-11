//Get UI
const getcurrmonth = document.getElementById("curmonth");
const getcuryear = document.getElementById("curyear");
const getunimonth = document.getElementById("months");
const getuiyear = document.getElementById("years");
const getcaldays = document.getElementById('caldays');
const getmonthtbn = document.querySelector(".month-btn");
const getyearbtn =document.querySelector(".year-btn");


const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let startyear = 2020;
let endyear  = 2030;

let month,year;

window.addEventListener("load",function(){

    // console.log("Hay I am working");
    let getday = new Date();
    month = getday.getMonth();
    year = getday.getFullYear();

    // console.log(getday);
    // console.log(month);//4
    // console.log(year);//2025


    getcurrmonth.textContent = months[month];
    getcuryear.textContent = year;

    initmonths();
    inityears();
    initdays();
});

function initmonths() {
    // console.log("month");

    getunimonth.innerHTML = "";
    // <div class="dropdown-item">Jan</div>
    for(let x = 0; x < months.length; x++){
        // console.log(x);0 to 11
        const newdiv = document.createElement("div");
        newdiv.textContent = months[x];
        newdiv.classList.add("dropdown-item");


        // once change month it show days corrrectly
        // newdiv.addEventListener('click',function(){
           

        //    //=>Method 1
        //    //console.log(x); //current month index
        //      month = x
        //    //getcurrmonth.textContent = months[x];
        //    //initdays();

        //    //=>Method2
        //     // console.log(this);
        //     // console.log(this.textContent);//May div htae ka sr ko yu
        //     // month = months.indexOf(this.textContent);
        //     // //console.log(month);
        //     // getcurrmonth.textContent = months[month];


        //    initdays();
        // });

        newdiv.onclick = updatedays(x);

        // console.log(newdiv);
        getunimonth.appendChild(newdiv);


    }
}

//method 3
function updatedays(idx){
    // console.log(idx);//0 to 11

    let selectmonth = idx;
    // console.log(selectmonth);

    //NOTE
    return function(){
        month = selectmonth;
        // console.log(month);//got waht u click
        getcurrmonth.textContent = months[month];
        initdays();
    }
}







function inityears() {
    // console.log("years");
    // <div className="dropdown-item">2000</div>
    getuiyear.innerHTML = "";

    for(let x = startyear;x  <= endyear; x++){
        // console.log(x);//2020 to 2030
        const newdiv = document.createElement("div");
        newdiv.textContent = x;
        newdiv.classList.add("dropdown-item");

        
        // newdiv.addEventListener('click',function(){
        //     // =>Method 1
        //     // console.log(x); //2020 ... 2030
        //     // year = x;
            

        //     // =>Method2
        //     // console.log(this);
        //     // console.log(this.textContent);//2020 ... 2030
        //     year = this.textContent;

        //     getcuryear.textContent = year;
        //     initdays();
        // });

        //method3
        // newdiv.onclick = updatemonths(x);



        // //method 4
        // newdiv.onclick =()=>{
        //     // console.log(x);//2020 ... 2030

        //     year = x;
        //     getcuryear.textContent = year;
        //     initdays();
        // }

        //Method5
        // self invokeing function
        newdiv.onclick = (function(){
            // console.log(x);//2020 to 2030
            let selectyear = x;
            // console.log(selectyear);//2020 to 2030

            return function(){
                year = selectyear;
                getcuryear.textContent = year;
                initdays();
            }
        })();

        // console.log(newdiv);
        getuiyear.appendChild(newdiv);

    }
}

// //method 3
// function updatemonths(idx){
//     // console.log(idx);//2020 to 2030

//     let selectyear = idx;

//     return function(){
//         year = selectyear;
//         getcuryear.textContent = year;
//         initdays();
//     }
// }

function initdays() {
    // console.log("days");
    getcaldays.innerHTML = "";
    //2025 4
    let tmpday = new Date(year, month, 0);
    // console.log(tmpday);//Wed Apr 30 2025 00:00:00 GMT+0630 (Myanmar Time)
    let getallday = alldays(year, month);
    // console.log(getallday);//31
    let getprevendday = tmpday.getDay();
    // console.log(getprevendday);//3
    // <label className="day"></label>

    for (let x = 0; x <= getprevendday; x++) {
        // console.log(x);//0 to 3

        let newlabel = document.createElement("label");
        newlabel.className = "day blank";
        // console.log(newlabel);

        getcaldays.appendChild(newlabel);

    }

    for (let y = 0; y < getallday; y++) {
        // console.log(y);//0 to 31

        let eachday = y + 1;
        // <label className="day"></label>

        let newlabel = document.createElement("label");
        newlabel.textContent = eachday;
        newlabel.classList.add("day");
        // console.log(newlabel);

        getcaldays.appendChild(newlabel);

    }
}

function alldays(year, month) {
    // console.log(year,month);//2025 4

    //NOTES:::new Date(year,month,0)=>Akhu month so yin a yin month ya, akhu month loz chin yin one month ahead ko yu month +1

    let curalldays = new Date(year,month+1,0);
     // console.log(curalldays);//curr month ya Sat May 31 2025 00:00:00 GMT+0630 (Myanmar Time)
    curalldays = curalldays.getDate();
    // console.log(curalldays);//31

    return curalldays;
}


// getmonthtbn.addEventListener("click", function(){
//     if(this.lastElementChild.classList.contains("show")){
//         this.lastElementChild.classList.remove("show");
//     }else{
//         this.lastElementChild.classList.add("show");
//     }
//
// });


getyearbtn.addEventListener("click", function(){
    if(this.lastElementChild.classList.contains("show")){
        this.lastElementChild.classList.remove("show");
    }else{
        this.lastElementChild.classList.add("show");
    }

});










// console.log(new Date());//Mon May 19 2025 10:13:45 GMT+0630 (Myanmar Time)
//                     //year month day
// console.log(new Date(2023,1,20));//Mon Feb 20 2023 00:00:00 GMT+0630 (Myanmar Time)
// console.log(new Date(2023,1,30));

