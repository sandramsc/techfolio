const searchBar = document.querySelector(".users .search input"),
searchBtn = document.querySelector(".users .search button"),
usersList = document.querySelector(".users .users-list");

searchBtn.onclick = () =>{
    searchBar.classList.toggle("active");
    searchBar.focus();
    searchBtn.classList.toggle("active");
	searchBar.value = ""; 
}

/*activates search bar*/
searchBar.onkeyup = ()=>{
	/*gets user search value*/
	let searchTerm = searchBar.value;
	if(searchTerm != ""){
		searchBar.classList.add("active");
	}else{
		searchBar.classList.remove("active");
	}
			//AJAX starts here
		 //creates XML Object
		 let xhr = new XMLHttpRequest();
		 //now that we need to receive data we use the GET method
		 xhr.open("POST","php/search.php", true);
		 xhr.onload = ()=>{
			 //gives response of entered url
			 if(xhr.readyState === XMLHttpRequest.DONE){
				 if(xhr.status === 200){
					 let data = xhr.response;
						usersList.innerHTML = data;
			 
				 }
				 
			 }
			 
		 }
		 xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		 xhr.send("searchTerm=" + searchTerm);
}

	setInterval(()=>{
		//AJAX starts here
		 //creates XML Object
		let xhr = new XMLHttpRequest();
		//now that we need to receive data we use the GET method
		xhr.open("GET","php/users.php", true);
		xhr.onload = ()=>{
			//gives response of entered url
			if(xhr.readyState === XMLHttpRequest.DONE){
				if(xhr.status === 200){
					let data = xhr.response;
					if(!searchBar.classList.contains("active")){
					usersList.innerHTML = data;
			
				}
			 }
				
			}
			
		}
		xhr.send();
		//enables function to runfrequently after 500ms
	}, 500); 