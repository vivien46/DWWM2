<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email')
            ->add('prenom')
            ->add('nom')
            ->add('adresse')
            ->add('ville')
            ->add('codePostal');
            // ->add('password', RepeatedType::class, [
            //     'type' => PasswordType::class,
            //     'first_options' => ['label' => 'Mot de passe'],
            //     'second_options'=> ['label' => 'Confirmez le mot de passe'],
            //     'mapped'=>false,// ne pas lier ce champs a l'entité formulaire
            //     'attr' => ['autocomplete' => 'new-password'],
            //     'constraints'=>[
            //         new NotBlank([
            //             'message' => 'Merci de bien vouloir entrer un mot de passe'
            //         ]),
            //         new Length([
            //             'min' => 6,
            //             'minMessage' => 'votre mot de passe doit être composé d\'au moins 6 caractères',
            //             'max' => 4096,
            //         ]),
            //     ],
            // ]);
            if ($options['editMode']==false) {
                $builder->add('password', RepeatedType::class, [
                    'type' => PasswordType::class,
                    'first_options' => ['label' => 'Mot de passe'],
                    'second_options'=> ['label' => 'Confirmez le mot de passe'],
                    'mapped'=>false,// ne pas lier ce champs a l'entité formulaire
                    'attr' => ['autocomplete' => 'new-password'],
                    'constraints'=>[
                        new NotBlank([
                            'message' => 'Merci de bien vouloir entrer un mot de passe'
                        ]),
                        new Length([
                            'min' => 6,
                            'minMessage' => 'votre mot de passe doit être composé d\'au moins 6 caractères',
                            'max' => 4096,
                        ]),
                    ],
                ]);
            }
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
            'editMode' => false
        ]);
    }
}
