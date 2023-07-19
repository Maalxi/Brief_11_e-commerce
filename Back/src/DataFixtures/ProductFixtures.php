<?php

namespace App\DataFixtures;

use App\Entity\Product;
use Doctrine\Persistence\ObjectManager;

class ProductFixtures extends AbstractFixtures
{
    public function load(ObjectManager $manager)
    {
        for ($i = 0; $i < 20; $i++) {
            $product = new Product();
            $product->setName($this->faker->word);
            $product->setDescription($this->faker->sentence);
            $product->setPrice($this->faker->randomFloat(2, 10, 100));
            $product->setInventory($this->faker->numberBetween(10, 100));
            $product->setImage($this->faker->imageUrl());
            $product->setCat($this->getReference("category_" . $this->faker->numberBetween(0, 9)));

            $manager->persist($product);
        }

        $manager->flush();
    }
}
