<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil Voyage</title>

    <!-- CDN CSS BS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

</head>
<body>

    <main>
        <h1 class="text-center my-5"><a href='voyage.php' class='text-decoration-none text-dark'>Votre voyage</a></h1>

        <!-- pour faire disparaitre les boutons une fois une destination choisie -->
        <?php if(!$_GET){ ?>
        <h2 class='ms-5 mb-5'>Choisissez</h2>

        <div class='ms-5 mb-5'>
            <button type="button" class="btn btn-primary"><a href='?destination=Rennes&formule=Demie pension&tarif=120' class='text-light text-decoration-none h3 p-3'>Formule Rennes</a></button>
        </div>

        <div class='ms-5 mb-5'>
            <button type="button" class="btn btn-secondary"><a href='?destination=Strasbourg&formule=Pension complète&tarif=180' class='text-light text-decoration-none h3 p-3'>Formule Strasbourg</a></button>
        </div>

        <div class='ms-5 mb-5'>
            <button type="button" class="btn btn-success"><a href='?destination=Nice&formule=All inclusive&tarif=250' class='text-light text-decoration-none h3 p-3'>Formule Nice</a></button>
        </div>
        <?php } ?>

        <!-- pour éviter les erreur PHP au premier chargement de la page -->
        <?php if($_GET){ ?>
        <h2 class='ms-5 mb-5'>Vous avez choisi</h2>

        <p class='ms-5 mb-2'>La destination de <?= $_GET['destination'] ?>, avec en option la formule <?= $_GET['formule'] ?></p>
        <p class='ms-5'>Cela vous coutera <span class='h2 text-primary'><?= $_GET['tarif'] ?> €</span></p>
        <?php } ?>
    </main>

    <!-- CDN Bundle BS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

</body>
</html>