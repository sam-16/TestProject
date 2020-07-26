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
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="/infogenie/user/home">Infogenie</a>
    </div>
    <ul class="nav navbar-nav">
      <li><a href="/infogenie/user/home">Home</a></li>
      <li><a href="/infogenie/user/accountDetails">Account Details</a></li>
      <li><a href="/infogenie/user/contactDetails">Contact Details</a></li>
    </ul>
  </div>
</nav>
<h3 class="maintitle"><b>IG Contact List</b></h3>
<div class="container" id="maindiv">
	<hr class="hrcss">
	<div class="row headrow">
		<div class="col-md-6 col-sm-6">
			<h4 id="heading"></h4>
		</div>
		<div class="col-md-6 col-sm-6 btndiv">
			<input type="text" placeholder="Search by name, job title" id="searchInput">
			<span class="glyphicon glyphicon-filter"></span>
			<button type="button" class="btn feddbtn">Feedback</button>
		</div>
	</div>
	
	<div class="row mainrow"></div>
	<div class="pagination pull-right"></div>
</div>
</body>
</html>