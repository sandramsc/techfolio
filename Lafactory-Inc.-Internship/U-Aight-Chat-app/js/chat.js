	//making chat section dynamic
	const form = document.querySelector(".typing-area"),
	inputField = form.querySelector(".input-field"),
	sendBtn = form.querySelector("button"),
	chatContainer = document.querySelector(".chat-box");

	form.onsubmit = (e)=>{
		e.preventDefault();
	}

	//activate button
	sendBtn.onclick = ()=>{
			//AJAX starts here
		let xhr = new XMLHttpRequest(); //creates XML Object
		//we need to send data, so we use the POST method
		xhr.open("POST","php/insert-chat.php", true);
		xhr.onload = ()=>{
			//gives response of entered url
			if(xhr.readyState === XMLHttpRequest.DONE){
				if(xhr.status === 200){
					//leaves the input field empty once message is sent
					inputField.value = "";
					scrollToBottom();
				}
				
			}
			
		}
		//sending login form data to PHP through AJAX
		let formData = new FormData(form); //creates new formData object
		xhr.send(formData); //sending form data to PHP
	}
chatContainer.onmouseenter = ()=>{
	chatContainer.classList.add("active")
}
chatContainer.onmouseleave = ()=>{
	chatContainer.classList.remove("active")
}
	
	setInterval(()=>{
		//AJAX starts here
		 //creates XML Object
		let xhr = new XMLHttpRequest();
		//these chat messages are from the database and are now dynamic
		xhr.open("POST","php/aquire-chat.php", true);
		xhr.onload = ()=>{
			//gives response of entered url
			if(xhr.readyState === XMLHttpRequest.DONE){
				if(xhr.status === 200){
					let data = xhr.response;
					chatContainer.innerHTML = data;
					if(!chatContainer.classList.contains("active")){
						scrollToBottom();
					}
				}
		    }
				
		}
		//sending login form data to PHP through AJAX
		let formData = new FormData(form); //creates new formData object
		xhr.send(formData); //sending form data to PHP
		//enables function to runfrequently after 500ms
	}, 500); 

	function scrollToBottom(){
		chatContainer.scrollTop = chatContainer.scrollHeight;
	}