<?php

namespace App\Controller;

use App\Service\EmailHandler;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment;

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

    #[Route('/sendEmail', name: 'app_send_email', methods: ['POST'])]
    public function sendEmail(Request $request, MailerInterface $mailer, Environment $twig): Response
    {
        $data = json_decode($request->getContent(), true);
    
        // Construire le contenu du mail avec Twig
        $body = $twig->render(
            "email/sendEmailTemplate.html.twig",
            [
                'first' => $data['first'],
                'last' => $data['last'],
                'phone' => $data['phone'],
                'message' => $data['message'],
            ]
        );
    
        // Créer le message avec Symfony Mailer
        $email = (new Email())
            ->from('send@example.com')
            ->to($data['email'])
            ->subject($data['subject'])
            ->html($body);
    
        // Envoyer le message
        $mailer->send($email);
    
        return new Response('Email envoyé', Response::HTTP_OK);
    }
    
}
