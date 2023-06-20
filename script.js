function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
    }

//  Get the element with id="defaultOpen" and click on it 
document.getElementById("defaultOpen").click();

const scriptURL = 'https://script.google.com/macros/s/AKfycbwvtfVAOsl56Ks14AX0xSG-Oz3tk1OgK-4xzXAKfsfRXn6qR_E-bMzzp6J24pTlOKIE/exec'
	const form = document.forms['submit-to-google-sheet']
	const msg=document.getElementById("msg")
  
	form.addEventListener('submit', e => {
	  e.preventDefault()
	  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response =>{
			msg.innerHTML="Message sent successfully"
			setTimeout(function(){msg.innerHTML=""},5000)
			form.reset()
		})
		.catch(error => console.error('Error!', error.message))
	})