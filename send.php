<?php
  $subject = $_REQUEST['subject'] ;
  $message = $_REQUEST['photo'] ;
  $message = $_REQUEST['message'] ;
  mail("wole840foqo@post.wordpress.com", $subject,
  $message, "From:" . $email);
  echo "Thank you for using our mail form";
  
  /* Redirect browser */
header("Location: http://imd495.alexsablan.info");
/* Make sure that code below does not get executed when we redirect. */
exit;
?>