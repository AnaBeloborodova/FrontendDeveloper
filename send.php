<?php

$userName = $_POST['name'];
$userEmail = $_POST['email'];
$userPhone = $_POST['tel'];
$userMessage = $_POST['message'];

// Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth = true;                                   // Enable SMTP authentication
    $mail->Username = 'bel.ana.121418@gmail.com';                     // SMTP username
    $mail->Password = 'Putnik7531590$';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('bel.ana.121418@gmail.com', 'Anastasiya');
    $mail->addAddress('bel.ana.121418@gmail.com', 'Anastasiya');
    // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'New request from the site';
    $mail->Body = "Имя пользователя: ${userName}, его почта: ${userEmail}, телефон: ${userPhone}, сообщение: ${userMessage}";



    $mail->send();
    header('location: thanks.html');
} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}
