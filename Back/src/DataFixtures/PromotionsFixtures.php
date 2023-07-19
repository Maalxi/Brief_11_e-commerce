<?php

namespace App\DataFixtures;

use App\Entity\Promotion;
use Doctrine\Persistence\ObjectManager;

class PromotionFixtures extends AbstractFixtures
{
    public function load(ObjectManager $manager)
    {
        for ($i = 0; $i < 5; $i++) {
            $promotion = new Promotion();
            $promotion->setCode($this->faker->unique()->randomNumber(6));
            $promotion->setReduction($this->faker->numberBetween(5, 50));
            $promotion->setImage($this->faker->imageUrl());

            $manager->persist($promotion);
        }

        $manager->flush();
    }
}
