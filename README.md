# Brief E-commerce
___

## Installation

Cloner le projet en local

```shell
git clone git@github.com:Maalxi/Brief_11_e-commerce.git
cd Brief_11_e-commerce
```

Installer les librairies Nextjs

```shell
cd front
npm install
```

Installer les librairies Symfony

```shell
cd Back
composer install
```

## Configuration de la base de données (dossier Back)

Commencer par dupliquer et renommer le fichier .env.exemple en .env.   
Dans le fichier .env modifier les paramètres de votre bases de données. 

```
DATABASE_URL="mysql://DB_USER:DB_PASS@127.0.0.1:3306/brief_11?serverVersion=8.0.32&charset=utf8mb4"
```

Créer la base de données et réaliser la migration de la base : 

```shell
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
```

Vérifier que la base est créer dans phpMyAdmin.  
En étant situé sur votre base fraichement créée, copié le contenu de fake_data.sql depuis votre IDE et le coller dans l'onglet SQL de phpMyAdmin.  
Puis exécuter la requête pour alimenter la base avec des fake data.    

