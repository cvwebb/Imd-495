<?php
  $subject = $_REQUEST['subject'] ;
  $message = $_REQUEST['photo'] ;
  $message = "[status pending]" . $_REQUEST['message'] ;
  mail("buri403puhe@post.wordpress.com", $subject,
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
<p><a href="./index.html">If not redirected click here.</a></p>
<form id="thisForm" name="thisForm" action="./index.html" method="get">
</form>
<script>
function redirectForm() {
	document.getElementById("thisForm").submit();
	window.location.assign("./index.html");
}
$(document).ready( function() {
	$.mobile.changePage("./index.html");
});
</script>
</body>
</html>