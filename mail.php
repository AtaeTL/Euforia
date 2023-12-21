<?php
if($_POST){
  $name = $_POST['nom'];
  $firstname = $_POST['prénom'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
  $headers .= "From: $name <$email>\r\nReply-to : $name <$email>\nX-Mailer:PHP";

  $subject="$objet";
  $destinataire="ataetlidii@gmail.com";
  $body="$message";

  if(mail($destinataire,$subject,$body,$headers)) {
    $response['status'] = 'success';
    $response['msg'] = 'Votre mail est envoyé';
  } else {
    $response['status'] = 'error';
    $response['msg'] = 'Oups, quelque chose a mal tourné!';
  }

  echo json_encode($response);
}
?>