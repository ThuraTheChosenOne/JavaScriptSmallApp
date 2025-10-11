//UI
const getboxes = document.querySelectorAll(".boxes");
console.log(getboxes);//array

for(var x =0; x < getboxes.length ; x++){
	console.log(x);//0 to 5
	getboxes[x].addEventListener('mouseenter',function(){
		// console.log(this);

		if(this.classList.contains("left")){
			this.classList.remove("left");
			this.classList.add("right");
		}else{
			this.classList.remove("right");
			this.classList.add("left");
		}
	})
}