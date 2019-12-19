<!DOCTYPE html>
<html>
<head>
	<title>CESI - TP Js Gallery</title>
	<style>
		#listeXML {height: 200px; width: 500px; display: flex; flex-flow: row; flex-wrap: wrap; margin: auto;}
		.center {position: absolute;top:0;bottom: 0;left: 0;right: 0;margin: auto;}
		#listeXML img {flex: 1; height: 100px; width: 100px; cursor: pointer;}
		.lightbox {cursor: pointer; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.4); display: none; align-items: center; justify-content: center;}
		.lightbox img {width: 40%; border: 4px white solid; border-radius: 5px;}
	</style>
</head>
<body>
	<div id="listeXML" class="center"></div>
	<div class="lightbox"></div>
	<script src="js/jquery-3.2.1.min.js"></script>
	<script src="js/main.js"></script>
</body>
</html>