<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\PromotionRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PromotionRepository::class)]
#[ApiResource]
class Promotion
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 10)]
    private ?string $code = null;

    #[ORM\Column]
    private ?int $reduction = null;

    #[ORM\Column(length: 255)]
    private ?string $image = null;

    #[ORM\OneToOne(mappedBy: 'promotion', cascade: ['persist', 'remove'])]
    private ?Reservation $reservation = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): static
    {
        $this->code = $code;

        return $this;
    }

    public function getReduction(): ?int
    {
        return $this->reduction;
    }

    public function setReduction(int $reduction): static
    {
        $this->reduction = $reduction;

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

    public function getReservation(): ?Reservation
    {
        return $this->reservation;
    }

    public function setReservation(?Reservation $reservation): static
    {
        // unset the owning side of the relation if necessary
        if ($reservation === null && $this->reservation !== null) {
            $this->reservation->setPromotion(null);
        }

        // set the owning side of the relation if necessary
        if ($reservation !== null && $reservation->getPromotion() !== $this) {
            $reservation->setPromotion($this);
        }

        $this->reservation = $reservation;

        return $this;
    }
}
