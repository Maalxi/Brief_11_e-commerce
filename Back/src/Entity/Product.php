<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\ProductRepository;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Get;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProductRepository::class)]
#[ApiResource(
    operations: [
        new GetCollection(
            normalizationContext: ['groups' => ['products_read']]
        ),
        new Get(
            normalizationContext: ['groups' => ['product_read']]
        )
    ]
)]
class Product
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['products_read', 'product_read'])]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    #[Groups(['products_read', 'product_read'])]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    #[Groups(['products_read', 'product_read'])]
    private ?string $description = null;

    #[ORM\Column]
    #[Groups(['products_read', 'product_read'])]
    private ?float $price = null;

    #[ORM\Column]
    #[Groups(['products_read', 'product_read'])]
    private ?int $inventory = null;

    #[ORM\Column(length: 255)]
    #[Groups(['products_read', 'product_read'])]
    private ?string $image = null;

    #[ORM\ManyToOne(inversedBy: 'products')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['products_read', 'product_read'])]
    private ?Category $cat = null;

    #[ORM\ManyToMany(targetEntity: Reservation::class, inversedBy: 'products')]
    private Collection $reservation;

    public function __construct()
    {
        $this->reservation = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): static
    {
        $this->price = $price;

        return $this;
    }

    public function getInventory(): ?int
    {
        return $this->inventory;
    }

    public function setInventory(int $inventory): static
    {
        $this->inventory = $inventory;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): static
    {
        $this->image = $image;

        return $this;
    }

    public function getCat(): ?Category
    {
        return $this->cat;
    }

    public function setCat(?Category $cat): static
    {
        $this->cat = $cat;

        return $this;
    }

    /**
     * @return Collection<int, Reservation>
     */
    public function getReservation(): Collection
    {
        return $this->reservation;
    }

    public function addReservation(Reservation $reservation): static
    {
        if (!$this->reservation->contains($reservation)) {
            $this->reservation->add($reservation);
        }

        return $this;
    }

    public function removeReservation(Reservation $reservation): static
    {
        $this->reservation->removeElement($reservation);

        return $this;
    }
}
