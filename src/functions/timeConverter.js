export function timeConverter(UNIX_timestamp) {
	var a = new Date(UNIX_timestamp);
	var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	var date = a.getDate();
	var hour = a.getHours();
	var min = a.getMinutes();
	var sec = a.getSeconds();

	if (hour < 10) hour = `0${hour}`;
	if (min < 10) min = `0${min}`;
	if (sec < 10) sec = `0${sec}`;
	if (date < 10) date = `0${date}`;

	var time = hour + ":" + min + ":" + sec + " | " + date + " " + month + " " + year + " ";
	return time;
}
