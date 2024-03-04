<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Entity\Article;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function configureActions(Actions $actions): Actions
{
    return $actions
        // ...
        ->add(Crud::PAGE_INDEX, Action::DETAIL)
        ->update(Crud::PAGE_INDEX, Action::NEW, function (Action $action) {
            return $action->setIcon('fa fa-file-alt')->setLabel('Utilisateur');
        });
}

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('email', 'E-mail'),
            // ImageField::new('image')->setBasePath('images/articles')->setUploadedFileNamePattern('[slug]-[timestamp].[extension]')->setUploadDir('public\images\articles')->setRequired(false),
            TextField::new('nom', 'Nom'),
            TextField::new('prenom', 'Prénom'),
            TextField::new('adresse', 'Adresse'),
            NumberField::new('codePostal', 'Code Postal'),
            ArrayField::new('roles', 'Roles'),
            // DateTimeField::new('createdAt', "Date d'enregistrement")->setFormat("d/M/Y à H:m:s")->hideOnForm(),
            // DateTimeField::new('updatedAt', 'Date de mise à jour')->setFormat("d/M/Y à H:m:s")->hideOnForm(),
            // TextEditorField::new('content', 'Contenu'),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            // ...
            ->showEntityActionsInlined()
        ;
    }
}
