<?php
  $subject = $_REQUEST['subject'] ;
  $message = $_REQUEST['photo'] ;
  $message = "[status pending]" . $_REQUEST['message'] ;
  mail("wole840foqo@post.wordpress.com", $subject,
  $message, "From:" . $email);
  $messageBody = "Thank you for using our mail form";
?>
<!DOCTYPE html>
<html>
<head>
<title>Send Email</title>
<script src="jquery-1.6.4.min.js"></script>
</head>
<body onload="redirectForm();">
<h2><?php echo($messageBody); ?></h2>
<p><a href="http://imd495.alexsablan.info/projects/index.html">If not redirected click here.</a></p>
<form id="thisForm" name="thisForm" action="http://imd495.alexsablan.info/projects/index.html" method="get">
</form>
<script>
function redirectForm() {
	document.getElementById("thisForm").submit();
	window.location.assign("http://imd495.alexsablan.info/projects/index.html");
}
$(document).ready( function() {
	$.mobile.changePage("http://imd495.alexsablan.info/projects/index.html");
});
</script>
</body>
</html>