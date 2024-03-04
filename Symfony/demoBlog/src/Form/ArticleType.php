<?php

namespace App\Form;

use App\Entity\Article;
use App\Entity\Category;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ArticleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        //L'objet builder va nous permettre de créer un nouveau formulaire
        // La méthode add va permettre d'ajouter un champ au formulaire
        $builder
            ->add('title')
            ->add('category', EntityType::class, [
                'class'=> Category::class,
                'choice_label' => 'title'
            ])
            ->add('content')
            ->add('imageFile', FileType::class, [
                'required' => false
            ])
            // ->add('createdAt')
            // nous ne voulons pas que l'utilisateur entre lui même la date d'ajout.
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Article::class,
        ]);
    }
}
