<?php
header("Access-Control-Allow-Origin: *");
$mysqli = new mysqli("localhost", "root", "malla", "bimnote");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
    exit();
} else if (htmlspecialchars($_GET["data"]) != "") {
    $x = htmlspecialchars($_GET["data"]);
    $query = "SELECT * from words WHERE word='$x'";
    $result = $mysqli->query($query);
    $points = 0;
    if ($result->num_rows > 0) {
        if (strlen($x) == 3 or strlen($x) == 4) {
            $points = 1;
        } elseif (strlen($x) == 5) {
            $points = 2;
        } elseif (strlen($x) == 6) {
            $points = 3;
        } elseif (strlen($x) == 7) {
            $points = 4;
        } else {
            $points = 11;
        }
        echo json_encode(["status" => "ok", "point" => $points]);
    } else {
        echo json_encode(["status" => "not found", "point" => $points]);
    }
} else {
    echo json_encode([
        "status" => "Error while send checking. Please send again",
        "point" => $points
    ]);
}
$mysqli->close();
