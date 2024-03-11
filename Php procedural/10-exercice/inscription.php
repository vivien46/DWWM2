<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire d'inscription</title>

    <!-- CDN CSS BS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

</head>
<body>

    <main>
        <h1 class="text-center my-5">Formulaire d'inscription</h1>

        <!-- attribut method renseigné de POST obligatoire -->
        <!-- action devra envoyer les infos vers la page de connexion -->
        <form class='col-3 ms-5' method='POST' action='connexion.php'>
            <!-- identifiant -->
            <div class="mb-3">
                <label for="identifiant" class="form-label">Identifiant</label>
                <!-- chaque input devra avoir son name -->
                <input type="text" class="form-control" name='identifiant' id="identifiant" placeholder="Votre identifiant">
            </div>
            <!-- email -->
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" name='email' id="email" placeholder="Votre adresse email">
            </div>
            <!-- mdp -->
            <div class="mb-3">
                <label for="mdp" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" name='mdp' id="mdp">
            </div>
            <button type="submit" class="btn btn-primary">Envoyer</button>
            <!-- bouton de réinitialisation -->
            <button type="reset" class="btn btn-primary">Réinitialiser</button>
        </form>

    </main>

    <!-- CDN Bundle BS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

</body>
</html>