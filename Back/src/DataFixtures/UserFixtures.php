<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Persistence\ObjectManager;

class UserFixtures extends AbstractFixtures
{
    public function load(ObjectManager $manager)
    {
        for ($i = 0; $i < 5; $i++) {
            $user = new User();
            $user->setLastName($this->faker->lastName);
            $user->setFirstName($this->faker->firstName);
            $user->setTel($this->faker->phoneNumber);

            $this->addReference("user_$i", $user);

            $manager->persist($user);
        }

        $manager->flush();
    }
}
