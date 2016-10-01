var count=0, timerId, go=false;
		text.innerHTML = '00:00:00:00'
		function start_click(){
			console.log("start");
			// text.innerHTML="start_click";
		  // document.getElementById('start').id = 'pause';
		  // pause.innerHTML = 'pause';
		  if (go==false){
			  timerId = setInterval(function() {
				  count++;
				  var msek=count%100;

				  if (msek<10) {msek = "0"+msek;}
				  if ((msek>=10)&&(msek<100)) {msek = ""+msek;}

				  var sek=Math.floor(count/100)%60;
				  if (sek<10) {sek = "0"+sek;}

				  var min = Math.floor(count/6000)%60;
				  if (min<10) {min = "0"+min;}

				  var hours = Math.floor(count/360000)%24;
				  if (hours<10) {hours = "0"+hours;}

				  var str = hours+":"+min+":"+sek+":"+msek;
				  text.innerHTML=str;
			  }, 10);
			go=true;
		  }
		}

		function pause_click(){
			clearInterval(timerId);
			go=false;
			// for_text.innerHTML="pause_click";
			console.log("pause");
		}

		function stop_click(){
			console.log("stop");
			clearInterval(timerId);
			go=false;
			count = 0;
			text.innerHTML='00:00:00:00';
			// for_text.innerHTML="stp_click";
		}

		start.addEventListener("click",start_click);
		pause.addEventListener("click",pause_click);
		stp.addEventListener("click",stop_click);