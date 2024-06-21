<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $firstName = htmlspecialchars(trim($_POST["first-name"]));
    $lastName = htmlspecialchars(trim($_POST["last-name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST["message"]));

    // Validate the data
    if (!empty($email) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Prepare the email
        $to = "manishenterprises.neemuch@gmail.com";  // Replace with your email address
        $subject = "New Contact Us Message from $firstName $lastName";
        $emailContent = "Name: $firstName $lastName\n";
        $emailContent .= "Email: $email\n\n";
        $emailContent .= "Message:\n$message\n";

        $headers = "From: $firstName $lastName <$email>";

        // Send the email
        if (mail($to, $subject, $emailContent, $headers)) {
            // Redirect to a thank-you page
            header("Location: thank-you.html");
            exit;
        } else {
            echo "Sorry, something went wrong. Please try again.";
        }
    } else {
        echo "Please fill in all required fields with valid information.";
    }
} else {
    echo "Invalid request.";
}
?>
