document.getElementById("id_beta").innerHtml = Math.round(e.beta * 100)/100;
document.getElementById("id_gamma").innerHtml = Math.round(e.gamma * 100)/100;

window.addEventListener("deviceorientation", on_orientation_uab);
window.addEventListener("devicemotion", on_motion_uab);
function desenare (bata, gamma);
{
	var canvas = document.getElementById("id_canvas");
	var context = canvas.getContext("2d");
	
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	context.beginPath();
	varx = beta;
	var y = gamma;
	context.arc( , , 10, 0, 2 * Math.PI);
	context.stroke();
}

function on_orientation_uab (e)
{
	document.getElementById("id_alpha").innerHTML = Math.round(e.alpha * 100)/100;
	document.getElementById("id_beta").innerHTML = Math.round(e.beta * 100)/100;
	document.getElementById("id_gamma").innerHTML = Math.round(e.gamma * 100)/100;
	
}
function on_motion_uab (e)
	document.getElementById("id_acc_z").innerHTML = Math.round(acc.z * 100)/100;
	document.getElementById("id_acc_x").innerHTML = Math.round(acc.x * 100)/100;
	document.getElementById("id_acc_y").innerHTML = Math.round(acc.y * 100)/100;
	
	var beta = Math.atan(acc.y/acc.z)/Math.PI * 180;
	var beta = Math.atan(acc.x/acc.z)/Math.PI * 180;
	
	document.getElementById("id_beta_acc").innerHTML = -Math.round(Math.atan (acc.x/acc.z/Math.PI*180*100)/100;
	document.getElementById("id_gamma_acc").innerHTML = -Math.round(Math.atan (acc.y/acc.z/Math.PI*180*100)/100;
	}