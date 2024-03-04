<?php

namespace App\Controller;

use App\Entity\Article;
use App\Entity\Category;
use App\Entity\Comment;
use App\Entity\User;
use App\Form\ArticleType;
use App\Form\CategoryType;
use App\Form\CommentType;
use App\Form\RegistrationFormType;
use App\Form\UserType;
use App\Repository\ArticleRepository;
use App\Repository\CategoryRepository;
use App\Repository\CommentRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasher;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Validator\Constraints\UserPassword;

class AdminController extends AbstractController
{
//     #[Route('/admin', name: 'admin')]
//     public function index(): Response
//     {
//         return $this->render('admin/index.html.twig', []);
//     }

//     #[Route('/admin/articles', name: 'admin_articles')]
//     public function adminArticles(ArticleRepository $repo, EntityManagerInterface $em)
//     {
//         // récupération des nom des colonnes SQL
//         $colonnes = $em->getClassMetadata(Article::class)->getFieldNames();
//         dump($colonnes);
//         // récupérations de tout les articles
//         $articles = $repo->findAll();
//         dump($articles);
        
//         return $this->render('admin/admin_articles.html.twig', [
//             'articles' => $articles,
//             'colonnes' => $colonnes
//         ]);
//     }
    
//     #[Route('/admin/article/new', name: 'admin_new_article')]
//     #[Route('/admin/{id}/edit-article', name: 'admin_edit_article')]
//     public function editArticle(Request $request, EntityManagerInterface $manager, Article $article = null)
//     {
//         // dump($article);
//         // la classe Request contient les données véhiculées par les superglobales ($_POST, $_GET ...)
//         // $article = new Article; // je crée un objet Article vide prêt à être rempli
//         if(!$article)
//         {
//             $article = new Article;
//             $article->setCreatedAt(new \DateTime()); // ajout de la date à l'insertion de l'article
//         }
//         $form = $this->createForm(ArticleType::class, $article);
//         // createForm() permet de récupérer un formulaire
//         dump($request); // permet d'afficher les données de l'objet $request
//         $form->handleRequest($request);
//         // handleRequest() permet d'insérer les données du formulaire dans l'objet $article
//         // Pour pouvoir insérer les données en BDD, on récupère le manager et on ajoute le code d'insertion
//         if($form->isSubmitted() && $form->isValid())
//         {
//             $manager->persist($article); // prépare l'insertion de l'article
//             $manager->flush(); // on exécute la requête d'insertion 
//             // cette méthode permet de nous rediriger vers la page de notre article nouvellement crée
//             $this->addFlash('success', "💾 Article mis à jour avec succès");
//             return $this->redirectToRoute('admin_articles', [
//                 'id' => $article->getId()
//             ]);
//         }
//         return $this->render('blog/form.html.twig', [
//             'formArticle' => $form->createView(),
//             // createView() renvoie un objet représentant l'affichage du formulaire
//             'editMode' => $article->getId() !== NULL 
//             // si nous sommes sur la route /new : editMode = 0
//             // sinon, editMode = 1
//         ]);
//     }

//     #[Route('/admin/{id}/delete-article', name: 'admin_delete_article')]
//     public function deleteArticle(Article $article, EntityManagerInterface $manager)
//     {
//         $manager->remove($article);
//         $manager->flush();

//         $this->addFlash('success', "✅ Article supprimé avec succès");
//         return $this->redirectToRoute('admin_articles');
//     }

//     #[Route('/admin/categories', name: 'admin_categories')]
//     public function adminCategories(CategoryRepository $repo, EntityManagerInterface $em)
//     {
//         // récupération des nom des colonnes SQL
//         $colonnes = $em->getClassMetadata(Category::class)->getFieldNames();
//         // dump($colonnes);
//         // récupérations de tout les articles
//         $categories = $repo->findAll();
//         // dump($categories);
        
//         return $this->render('admin/admin_categories.html.twig', [
//             'categories' => $categories,
//             'colonnes' => $colonnes
//         ]);
//     }

//     #[Route('/admin/categories/new', name: 'admin_new_category')]
//     #[Route('/admin/{id}/edit-category', name: 'admin_edit_category')]
//     public function editCategory(Request $request, EntityManagerInterface $manager, Category $category = null)
//     {
//         // dump($article);
//         // la classe Request contient les données véhiculées par les superglobales ($_POST, $_GET ...)
//         // $article = new Article; // je crée un objet Article vide prêt à être rempli
//         if(!$category)
//         {
//             $category = new Category;
//             // $category->setCreatedAt(new \DateTime()); // ajout de la date à l'insertion de l'article
//         }
//         $form = $this->createForm(CategoryType::class, $category);
//         // createForm() permet de récupérer un formulaire
//         // dump($request); // permet d'afficher les données de l'objet $request
//         $form->handleRequest($request);
//         // handleRequest() permet d'insérer les données du formulaire dans l'objet $article
//         // Pour pouvoir insérer les données en BDD, on récupère le manager et on ajoute le code d'insertion
//         if($form->isSubmitted() && $form->isValid())
//         {
//             $manager->persist($category); // prépare l'insertion de l'article
//             $manager->flush(); // on exécute la requête d'insertion 
//             // cette méthode permet de nous rediriger vers la page de notre article nouvellement crée
//             $this->addFlash('success', "💾 Categorie mis à jour avec succès");
//             return $this->redirectToRoute('admin_categories', [
//                 'id' => $category->getId()
//             ]);
//         }
//         return $this->render('blog/category.html.twig', [
//             'formCategory' => $form->createView(),
//             // createView() renvoie un objet représentant l'affichage du formulaire
//             'editMode' => $category->getId() !== NULL 
//             // si nous sommes sur la route /new : editMode = 0
//             // sinon, editMode = 1
//         ]);
//     }

//     #[Route('/admin/{id}/delete-category', name: 'admin_delete_category')]
//     public function deleteCategory(Category $category, EntityManagerInterface $manager)
//     {
//         $manager->remove($category);
//         $manager->flush();

//         $this->addFlash('success', "✅ Categorie supprimée avec succès");
//         return $this->redirectToRoute('admin_categories');
//     }

//     #[Route('/admin/users', name: 'admin_users')]
//     public function adminUsers(UserRepository $repo, EntityManagerInterface $em)
//     {
//         // récupération des nom des colonnes SQL
//         $colonnes = $em->getClassMetadata(User::class)->getFieldNames();
//         // dump($colonnes);
//         // récupérations de tout les articles
//         $users = $repo->findAll();
//         // dump($categories);
        
//         return $this->render('admin/admin_users.html.twig', [
//             'users' => $users,
//             'colonnes' => $colonnes
//         ]);
//     }

//     // #[Route('/admin/users/new', name: 'admin_new_user')]
//     #[Route('/admin/users/{id}/edit-user', name: 'admin_edit_user')]
//     public function editUSer(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $manager, User $user = null)
//     {
//         // dump($article);
//         // la classe Request contient les données véhiculées par les superglobales ($_POST, $_GET ...)
//         // $article = new Article; // je crée un objet Article vide prêt à être rempli
//         if(!$user)
//         {
//             $user = new User;
//             // $category->setCreatedAt(new \DateTime()); // ajout de la date à l'insertion de l'article
//         }
//         $form = $this->createForm(RegistrationFormType::class, $user, [
//             'editMode'=> $user->getId() ? true : false
//         ]);
//         // createForm() permet de récupérer un formulaire
//         // dump($request); // permet d'afficher les données de l'objet $request
//         $form->handleRequest($request);
//         // handleRequest() permet d'insérer les données du formulaire dans l'objet $article
//         // Pour pouvoir insérer les données en BDD, on récupère le manager et on ajoute le code d'insertion
//         if($form->isSubmitted() && $form->isValid())
//         {
//             if (!$userPasswordHasher) {
//                 $user->setPassword(
//                 $userPasswordHasher->hashPassword(
//                     $user,
//                     $form->get('password')->getData()
//                 )
//                 );
//             }
            
//             $manager->persist($user); // prépare l'insertion de l'article
//             $manager->flush(); // on exécute la requête d'insertion 
//             // cette méthode permet de nous rediriger vers la page de notre article nouvellement crée
//             $this->addFlash('success', "💾 Membre mis à jour avec succès");
//             return $this->redirectToRoute('admin_users', [
//                 'id' => $user->getId()
//             ]);
//         }
//         return $this->render('blog/user.html.twig', [
//             'formUser' => $form->createView(),
//             // createView() renvoie un objet représentant l'affichage du formulaire
//             // 'editMode' => $user->getId() !== NULL 
//             // si nous sommes sur la route /new : editMode = 0
//             // sinon, editMode = 1
//         ]);
//     }

//     #[Route('/admin/users/{id}/delete-user', name: 'admin_delete_user')]
//     public function deleteUser(User $user, EntityManagerInterface $manager)
//     {
//         $manager->remove($user);
//         $manager->flush();

//         $this->addFlash('success', "✅ Membre supprimé avec succès");
//         return $this->redirectToRoute('admin_users');
//     }

//     #[Route('/admin/comments', name: 'admin_comments')]
//     public function adminCommentss(CommentRepository $repo, EntityManagerInterface $em)
//     {
//         // récupération des nom des colonnes SQL
//         $colonnes = $em->getClassMetadata(Comment::class)->getFieldNames();
        
//         // récupérations de tout les articles
//         $comments = $repo->findAll();
        
        
//         return $this->render('admin/admin_comments.html.twig', [
//             'comments' => $comments,
//             'colonnes' => $colonnes
//         ]);
//     }
    
//     #[Route('/admin/comments/{id}/edit-comment', name: 'admin_edit_comment')]
//     public function editComment(Request $request, EntityManagerInterface $manager, Comment $comment = null)
//     {
//         // dump($article);
//         // la classe Request contient les données véhiculées par les superglobales ($_POST, $_GET ...)
//         // $article = new Article; // je crée un objet Article vide prêt à être rempli
//         if(!$comment)
//         {
//             $comment = new Comment;
//             $comment->setCreatedAt(new \DateTime()); // ajout de la date à l'insertion de l'article
//         }
//         $form = $this->createForm(CommentType::class, $comment);
//         // createForm() permet de récupérer un formulaire
        
//         $form->handleRequest($request);
//         // handleRequest() permet d'insérer les données du formulaire dans l'objet $article
//         // Pour pouvoir insérer les données en BDD, on récupère le manager et on ajoute le code d'insertion
//         if($form->isSubmitted() && $form->isValid())
//         {
//             $manager->persist($comment); // prépare l'insertion de l'article
//             $manager->flush(); // on exécute la requête d'insertion 
//             // cette méthode permet de nous rediriger vers la page de notre article nouvellement crée
//             $this->addFlash('success', "💾 Commentaire mis à jour avec succès");
//             return $this->redirectToRoute('admin_comments', [
//                 'id' => $comment->getId()
//             ]);
//         }
//         return $this->render('blog/comment.html.twig', [
//             'formComment' => $form->createView(),
//             // createView() renvoie un objet représentant l'affichage du formulaire
//             'editMode' => $comment->getId() !== NULL 
//             // si nous sommes sur la route /new : editMode = 0
//             // sinon, editMode = 1
//         ]);
//     }

//     #[Route('/admin/comments/{id}/delete-comment', name: 'admin_delete_comment')]
//     public function deleteComment(Comment $comment, EntityManagerInterface $manager)
//     {
//         $manager->remove($comment);
//         $manager->flush();

//         $this->addFlash('success', "✅ Commentaire supprimé avec succès");
//         return $this->redirectToRoute('admin_comments');
//     }

}
