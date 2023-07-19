<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Faker\Factory;
use Faker\Generator;
use Doctrine\Persistence\ObjectManager;

abstract class AbstractFixtures extends Fixture
{
    protected Generator $faker;

    public function __construct()
    {
        $this->faker = Factory::create('fr_FR');
    }

    protected function loadFixtures(array $fixtureClasses, ObjectManager $manager)
    {
        foreach ($fixtureClasses as $fixtureClass) {
            $fixture = new $fixtureClass();
            $fixture->load($manager);
        }
    }

    protected function getAllReferences(string $referencePrefix): array
    {
        $references = [];
        $i = 0;
        while ($this->hasReference($referencePrefix . $i)) {
            $references[] = $this->getReference($referencePrefix . $i);
            $i++;
        }
        return $references;
    }
}
