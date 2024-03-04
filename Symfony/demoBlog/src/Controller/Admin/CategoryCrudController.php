<?php

namespace App\Controller\Admin;

use App\Entity\Category;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class CategoryCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Category::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('title', 'Titre'),
            TextareaField::new('description', 'Description')->onlyOnForms(),
            DateTimeField::new('createdAt', 'Date de création')->setFormat("d/M/Y à H:m:s")->hideOnForm(),
            AssociationField::new('articles', "Nombre d'articles"),
            DateTimeField::new('updatedAt', 'Date de mise à jour')->setFormat("d/M/Y à H:m:s")->hideOnForm(),
            TextEditorField::new('description', 'Contenu'),
        ];
    }

    public function createEntity(string $entityFqcn)
    {
        $category = new Category;
        $category->set
                 ->setUpdatedAt(new \DateTime());
        return $category;
    }

    // public function updateEntity(EntityManagerInterface $entityManager, $entityInstance):void
    // {
    //      // updateEntity() est exécutée lors de la soumission du formulaire de mise à jour
       

    //     $entityInstance->setTitle($title);
    //     $entityInstance->setDescription();
    //     $entityInstance->setUpdatedAt(new \DateTime());
    //     $entityManager->persist($entityInstance);
    //     $entityManager->flush();
        
    // }
}
