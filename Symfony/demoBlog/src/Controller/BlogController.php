<?php

namespace App\Controller;

use App\Entity\Article;
use App\Form\ArticleType;
use App\Repository\ArticleRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BlogController extends AbstractController
{
    #[Route('/blog', name: 'app_blog')]
    public function index(ArticleRepository $repo): Response
    {
        //pour récupérer le repository je le passe en paramètre de la méthode index()
        //cela s'appelle un injection de dépendance

        $articles = $repo->findAll();
        return $this->render('blog/index.html.twig', [
            'articles' => $articles //j'envoi les articles vers le template
        ]);
    }

    #[Route('/blog/show/{id}', name: 'blog_show')]
    public function show(ArticleRepository $repo, $id){
        
        /* Pour sélectionner un article dans la BDD, nous utilisons le principe de route paramètrée.
           Dans la route, on défini un paramètre de type {id}
           Lorsque nous transmettons dans l'URL par un exemple de route '/blog/9', on envoie un id comme en BDD dans l'url
           symfony
        */
        $article = $repo->find($id);
        return $this->render('blog/show.html.twig', [
            'article' => $article
        ]);
    }

    #[Route('/blog/new', name: 'blog_create')]
    #[Route('/blog/edit/{id}', name: 'blog_edit')]

    public function form(Request $request, EntityManagerInterface $manager, Article $article = NULL){
        //la classe request contient les données véhiculées par les superglobales ($_POST et $_GET)

        if(!$article){
            $article = new Article;
            $article->setCreatedAt(new \DateTime());
        }

        // $article = new Article;
        $form = $this->createForm(ArticleType::class, $article);//lie le formulaire a l'objet article
        //create form nous permet de récupérer un formulaire

       $form->handleRequest($request);
       //permet d'inserer les données du formulaire dans l'objet $article

       if($form->isSubmitted() && $form->isValid()){
        $article->setCreatedAt(new \DateTime());
        $manager->persist($article);
        $manager->flush();
        return $this->redirectToRoute('blog_show', [
            'id' => $article->getId()
        ]);
       }

        return $this->render('blog/form.html.twig', [
            'formArticle'=> $form->createView(),//renvoie un objet repr"sentant l'affichage du formulaire
            'editMode' => $article->getId() !== NULL
        ]);
    }
}
