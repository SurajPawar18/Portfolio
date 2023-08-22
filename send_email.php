<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $to = 'suraj.mpawar18@gmail.com';  // Replace with your email address
  $subject = 'New message from your website';
  
  // Get form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];
  
  // Compose email body
  $email_body = "Name: $name\n\n";
  $email_body .= "Email: $email\n\n";
  $email_body .= "Phone: $phone\n\n";
  $email_body .= "Message:\n$message\n";
  
  // Set email headers
  $headers = "From: $name <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";
  
  // Send email
  $success = mail($to, $subject, $email_body, $headers);
  
  // // Redirect after sending the email
  // if ($success) {
  //   header('Location: thank_you.html');  // Replace with the URL of your thank you page
  // } else {
  //   header('Location: error.html');      // Replace with the URL of your error page
  // }
}
?>
