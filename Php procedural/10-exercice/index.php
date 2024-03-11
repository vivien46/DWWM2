<?php
/*---
Créer un formulaire d'inscription avec trois inputs (identifiant/pseudo + email + mot de passe)
Sur une autre page; connexion; récupérer les informations de l'inscription pour que l'utilisateur puisse se connecter ensuite */

?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Formulaire de Contact</title>
    <link rel="stylesheet" href="">
</head>

<body>
 <main class="ms-5 container">
        <h1 class="text-center my-5">Formulaire de Connexion
        </h1>
        <!-- Pour que le formulaire passe de static à dynamique il faut ajouter dans la balise form l'attribut method, renseigné de post (c'est la méthode post issue de la superglobale $_post) -->
        <form class="col-3 ms-5" method="post" action="connexion.php">
            <div class="mb-3">
                <label for="pseudo" class="form-label">Identifiant / Pseudo</label>
                <input type="text" class="form-control" id="pseudo" name="pseudo">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" name="email">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" name="password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
            <header>

            </header>



<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>

</html>