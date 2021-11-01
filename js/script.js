const nav = document.querySelector("nav");
const kategori = document.querySelector(".kategori");
const category = document.querySelector(".category");

window.onscroll = function(){
	if(window.pageYOffset > 20){
      nav.style.opacity = '0.8';
	}else{
	  nav.style.opacity = '1';
	}
}

kategori.addEventListener('click', function(){
     category.classList.toggle('show');
});