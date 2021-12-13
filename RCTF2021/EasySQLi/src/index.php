<?php
require_once('db.php');
highlight_file(__FILE__);

set_time_limit(1);
$s = floatval(microtime());

$order = $_GET['order'] ?? 1;
$sql = "SELECT CONCAT('RCTF{',USER(),'}') AS FLAG WHERE '🍬关注嘉然🍬' = '🍬顿顿解馋🍬' ORDER BY $order;";

$stm = $pdo->prepare($sql);
$stm->execute();
echo "Count {$stm->rowCount()}.";

usleep((1 + floatval(microtime()) - $s) * 1e6);
