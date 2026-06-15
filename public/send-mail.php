<?php
// public/send-mail.php
// Minimal PHPMailer SMTP endpoint. Configure the $cfg values below.
// Install PHPMailer: run `composer require phpmailer/phpmailer` in your PHP project root.

header('Content-Type: application/json; charset=utf-8');

$cfg = [
    'smtp_host' => 'smtp.hostinger.com',
    'smtp_port' => 587,
    'smtp_user' => 'fawad@ufstudio.shop',
    'smtp_pass' => 'Fawad@ufstudio771',
    'smtp_secure' => 'tls',
    'from_email' => 'fawad@ufstudio.shop',
    'from_name' => 'Uf Studio',
    'to_email' => 'esharibmlk190@gmail.com',
];

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$type = trim($_POST['type'] ?? '');
$budget = trim($_POST['budget'] ?? '');
$message = trim($_POST['message'] ?? '');

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
    exit;
}

// Try to load PHPMailer
if (!file_exists(__DIR__ . '/../vendor/autoload.php') && !file_exists(__DIR__ . '/vendor/autoload.php')) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'PHPMailer not installed. Run composer require phpmailer/phpmailer']);
    exit;
}

require_once __DIR__ . '/../vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = $cfg['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = $cfg['smtp_user'];
    $mail->Password = $cfg['smtp_pass'];
    if (!empty($cfg['smtp_secure'])) {
        $mail->SMTPSecure = $cfg['smtp_secure'];
    }
    $mail->Port = $cfg['smtp_port'];

    $mail->setFrom($cfg['from_email'], $cfg['from_name']);
    $mail->addAddress($cfg['to_email']);
    $mail->addReplyTo($email, $name);

    $mail->Subject = "New inquiry from {$name}";
    $body = "Name: {$name}\nEmail: {$email}\nProject Type: {$type}\nBudget: {$budget}\n\nMessage:\n{$message}";
    $mail->Body = $body;

    $mail->send();
    echo json_encode(['ok' => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => $mail->ErrorInfo ?: $e->getMessage()]);
}

?>
