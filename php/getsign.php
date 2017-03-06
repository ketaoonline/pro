<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wxd8654ff8e87d6d1b", "4a9edfda306efd8f3336854b8ada7de5");
$signPackage = $jssdk->GetSignPackage($_POST['url']);
echo json_encode($signPackage);
?>