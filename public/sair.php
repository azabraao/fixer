<?php
session_start();
setcookie("id_usuario",$_SESSION['id_usuario'],time()-1,"/");
setcookie("nome",$_SESSION['nome'],time()-1,"/");
setcookie("email",$_SESSION['email'],time()-1,"/");
unset($_SESSION['id_usuario']);
unset($_SESSION['nome']);
unset($_SESSION['email']);
unset($_SESSION['senha']);
unset($_SESSION['disciplina']);
unset($_SESSION['ciclos']);

header("Location: login");