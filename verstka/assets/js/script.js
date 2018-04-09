$(function(){
	
	var note = $('#note'),
		ts = new Date(2012, 0, 1),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 169650*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			// message += days + " days" + ( days==1 ? '':'s' ) + ", ";
			// message += hours + " hours" + ( hours==1 ? '':'s' ) + ", ";
			// message += minutes + " minutes" + ( minutes==1 ? '':'s' ) + " and ";
			// message += seconds + " seconds" + ( seconds==1 ? '':'s' ) + " <br />";
			
			if(newYear){
				message += "";
			}
			else {
				message += "";
			}
			
			note.html(message);
		}
	});
	
});
