<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
 

  <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>


 <link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  
  
  <title>Recycle-app</title>
</head>
<body>
  

<div id="wrapup">
  <div id="description">
    <h4>Nie wiesz jak posortować śmieci? Wpisz co chcesz wyrzucić i sprawdź, do którego śmietnika powinno to trafić! </h4>
  </div>

   <form autocomplete="off">
    <div class="autocomplete" style="width: 500px,;">
      <div class="input-group  mb-3">
        <input type="text" class="form-control" name="fname" placeholder="Co chcesz wyrzucić?" id="myInput"
        aria-label="Recipient's username" aria-describedby="button-addon2">
        <div class="input-group-append"></div>
    <div ><input id= "submit" type="button" class="btn btn-outline-primary" id="button-addon2" value="Wyszukaj"></div>
    </div>
    </div>
  </form>
  <div id="result" class="alert alert-success" role="alert">Wpisz w oknie wyszukiwania</div>


</div>  
<script src= "script.js"></script>
 
 
</body>
</html>
