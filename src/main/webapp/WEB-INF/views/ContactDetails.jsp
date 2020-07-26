<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Infogenie</title>
<script src="../js/jquery.min.js"></script>
<script src="../js/script.js"></script>
<link rel="stylesheet" href="../css/bootstrap.min.css">
<script src="../js/bootstrap.min.js"></script>
<link rel="stylesheet" href="../css/style.css">
<link rel="stylesheet" href="../css/font-awesome.css">
</head>
<body>
<h3 class="maintitle"><b>IG Contact List</b></h3>
<div class="container" id="maindiv">
	<hr class="hrcss">
	<div class="row headrow">
		<div class="col-md-6 col-sm-6">
			<h4 id="heading"></h4>
		</div>
		<div class="col-md-6 col-sm-6 btndiv">
			<input type="text" placeholder="Search by name, job title">
			<span class="glyphicon glyphicon-filter"></span>
			<button type="button" class="btn feddbtn">Feedback</button>
		</div>
	</div>
	
	<div class="row mainrow">
		
	</div>
	
	<!-- <div class="row mainrow">
		<div class="col-md-4 col-sm-4 firstdiv">
			<div class="col-md-4 col-sm-4">
				<img src="../images/contact.png" />
			</div>
			<div class="col-md-8 col-sm-8">
				<p>Carsten Klein</p>
				<p><i class='fas fa-archive'></i>Senior Infrastructure Specialist</p>
				<p><i class="glyphicon glyphicon-envelope"></i> ---</p>
				<p><i class="glyphicon glyphicon-earphone"></i> +1215-674-6000</p>
			</div>	
		</div>
		<div class="col-md-4 col-sm-4 firstdiv">
			<div class="col-md-4 col-sm-4">
				<img src="../images/contact.png" />
			</div>
			<div class="col-md-8 col-sm-8">
				<p>Carsten Klein</p>
				<p><i class='fas fa-archive'></i>Senior Infrastructure Specialist</p>
				<p><a href=""><i class="fa fa-lock" aria-hidden="true"></i>   Reveal</a></p>
			</div>	
		</div>
		<div class="col-md-4 col-sm-4 firstdiv">
			<div class="col-md-4 col-sm-4">
				<img src="../images/contact.png" />
			</div>
			<div class="col-md-8 col-sm-8">
				<p>Carsten Klein</p>
				<p><i class='fas fa-archive'></i>Senior Infrastructure Specialist</p>
				<p><a href=""><i class="fa fa-lock" aria-hidden="true"></i>   Reveal</a></p>
			</div>	
		</div>
	</div> -->
	
</div>
<!-- Name is : <h3 id="name"></h3> -->
</body>
</html>