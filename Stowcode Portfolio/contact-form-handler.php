<?php
    $name - $_Post['name'];
    $visitor_email = $_Post['email'];
    $message = $_Post['message'];

    $email_form = 'mitchellstowman@gmail.com';

    $email_subject = "New Form Submission";

    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Message: $message.\n".

    $to = "mitchellstowman@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to, $email_subject,$email_body,$headers);

    header("Location: index.html");

?>      

<!--

<div class="contact-form">
        <form id="contact-form" method="post" action="contact-form-handler.php">
            <input name="name" type="text" class="form-control" placeholder="Your Name" required>
            <br>
            <input name="email" type="text" class="form-control" placeholder="Your Email" required>
            <br>
            <textarea name="message" class="form-control" placeholder="Message" row="4" required></textarea>
            <br>
            <input type="submit" class="form-control submit" value="SEND MESSAGE">
        </form>
    </div>

-->