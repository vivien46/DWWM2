<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire de connexion</title>

    <!-- CDN CSS BS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

</head>
<body>

    <main>
        <h1 class="text-center my-5">Formulaire de connexion</h1>

        <form class='col-3 ms-5' method='POST'>
            <!-- identifiant -->
            <div class="mb-3">
                <label for="identifiant" class="form-label">Identifiant</label>
                <!-- ternaire dans la value qui ne récupère les infos que si elles ont été envoyées du formulaire d'inscription, sinon, l'input restera vide -->
                <input type="text" class="form-control" name='identifiant' id="identifiant" placeholder="Votre identifiant" value="<?= ($_POST) ? $_POST['identifiant'] : '' ?>">
            </div>
            <!-- email -->
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" name='email' id="email" placeholder="Votre adresse email" value="<?= ($_POST) ? $_POST['email'] : '' ?>">
            </div>
            <!-- mdp -->
            <div class="mb-3">
                <label for="mdp" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" name='mdp' id="mdp" value="<?= ($_POST) ? $_POST['mdp'] : '' ?>">
            </div>
            <button type="submit" class="btn btn-primary">Envoyer</button>
            <button type="reset" class="btn btn-primary">Réinitialiser</button>
        </form>

    </main>

    <!-- CDN Bundle BS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

</body>
</html>