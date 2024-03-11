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
    <title>connexion</title>
    <link rel="stylesheet" href="">
</head>

<body>
    <header>
        
        </header>
        <h1>Bienvenue <?php if($_POST){?>
    <span><?php echo $_POST['pseudo'];?> </span>
        <?php } ?></h1>
        <p>votre E-mail <?php echo $_POST['email']; ?> </p>
        


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>

</html>