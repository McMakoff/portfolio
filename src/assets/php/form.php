<?php
$post = $_POST ?? [];

if ($post) {
  $subject = "Новая заявка c портфолио";
  $message = "\n\nИмя: " . ($_POST['name'] ?? 'нет имени') . "\n\nТелефон: " . ($_POST['contact'] ?? 'нет контакта') . "\n\nСообщение: " . ($_POST['message'] ?? 'нет сообщения') . "\n\n";
  $mail = mail("twopapavers@gmail.com", $subject, $message);

  if ($mail) {
    echo json_encode(['status' => 'success']);
  } else {
    echo json_encode(['status' => 'error']);
  }
} else {
  echo json_encode(['status' => 'undefined']);
}