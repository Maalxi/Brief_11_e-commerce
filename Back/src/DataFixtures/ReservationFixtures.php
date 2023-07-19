<?php

namespace App\DataFixtures;

use App\Entity\Reservation;
use Doctrine\Persistence\ObjectManager;
use App\DataFixtures\AbstractFixtures;


class ReservationFixtures extends AbstractFixtures
{
    public function load(ObjectManager $manager)
    {
        $users = $this->getAllReferences("user_");
        $promotions = $this->getAllReferences("promotion_");
        $products = $this->getAllReferences("product_");

        for ($i = 0; $i < 15; $i++) {
            $reservation = new Reservation();
            $reservation->setPromotion($this->faker->randomElement($promotions));
            $reservation->setPrice($this->faker->randomFloat(2, 100, 500));
            $reservation->setPriceFinal($reservation->getPrice() * (100 - $reservation->getPromotion()->getReduction()) / 100);
            $reservation->setValidation($this->faker->boolean);
            $user = $this->faker->randomElement($users);
            $user->addReservation($reservation);
            $reservation->setUser($user);

            // Add some random products to the reservation
            for ($j = 0; $j < $this->faker->numberBetween(1, 5); $j++) {
                $product = $this->faker->randomElement($products);
                $reservation->addProduct($product);
            }

            $manager->persist($reservation);
        }

        $manager->flush();
    }
}
