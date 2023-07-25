<?php

namespace App\Controller;

use App\Service\EmailHandler;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EmailController extends AbstractController
{
    private EmailHandler $messageHandler;

    public function __construct(EmailHandler $messageHandler)
    {
        $this->messageHandler = $messageHandler;
    }

    #[Route('/email', name: 'app_email')]
    public function index(): Response
    {
        $this->messageHandler->sendTemplateEmail(
            "quarter-backend@simplon.com",
            "Email de test",
            "email/emailTemplate.html.twig",
            []
        );

        return $this->render('email/index.html.twig', [
            'controller_name' => 'EmailController',
        ]);
    }
}