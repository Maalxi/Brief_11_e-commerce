-- Vide les tables de leurs data
DELETE FROM product_reservation;
DELETE FROM reservation;
DELETE FROM product;
DELETE FROM category;
DELETE FROM user;
DELETE FROM promotion;

-- Ajout de données dans la table `category`
INSERT INTO `category` (`id`, `name`,`image`) VALUES
(1, 'Fruits', 'Fruit.png'),
(2, 'Légumes', 'Legume.png'),
(3, 'Laitage', 'Laitage.png'),
(4, 'Boulangerie', 'Boulangerie.png'),
(5, 'Viandes', 'Viande.png'),
(6, 'Pâtes', 'Pate.png'),
(7, 'Céréales', 'Cereale.png'),
(8, 'Conserves', 'Conserve.png'),
(9, 'Boissons', 'Boisson.png'),
(10, 'Hygiène', 'Hygiene.png'),
(11, 'Ménager', 'Menager.png');

-- Ajout de données dans la table `product`
INSERT INTO `product` (`id`, `cat_id`, `name`, `description`, `price`, `inventory`, `image`) VALUES
-- Fruits
(1, 1, 'Pomme Gala', 'Pomme gala fraîche et juteuse', 1.99, 100, 'pomme_gala.jpg'),
(2, 1, 'Banane', 'Bananes mûres et délicieuses', 1.49, 80, 'banane.jpg'),
(3, 1, 'Orange', 'Oranges juteuses riches en vitamine C', 1.29, 90, 'orange.jpg'),

-- Légumes
(4, 2, 'Carotte', 'Carottes croquantes et riches en vitamines', 0.99, 120, 'carotte.jpg'),
(5, 2, 'Tomate', 'Tomates rouges et savoureuses', 1.29, 90, 'tomate.jpg'),

-- Laitage
(6, 3, 'Yaourt Nature', 'Yaourt nature crémeux', 0.79, 50, 'yaourt_nature.jpg'),
(7, 3, 'Fromage Emmental', 'Fromage emmental à pâte pressée', 2.49, 40, 'fromage_emmental.jpg'),

-- Boulangerie
(8, 4, 'Baguette Tradition', 'Baguette tradition française', 0.99, 60, 'baguette_tradition.jpg'),
(9, 4, 'Croissant', 'Croissant beurré et croustillant', 1.49, 30, 'croissant.jpg'),

-- Viandes
(10, 5, 'Steak de Bœuf', 'Steak de bœuf tendre et juteux', 5.99, 20, 'steak_boeuf.jpg'),

-- Pâtes
(11, 6, 'Spaghetti', 'Pâtes spaghetti de qualité supérieure', 1.19, 100, 'spaghetti.jpg'),
(12, 6, 'Tortellini au Fromage', 'Pâtes tortellini farcies au fromage', 2.79, 40, 'tortellini_fromage.jpg'),

-- Céréales
(13, 7, 'Flocons d\'Avoine', 'Flocons d\'avoine pour le petit-déjeuner', 2.99, 80, 'flocons_avoine.jpg'),

-- Conserves
(14, 8, 'Haricots Verts', 'Haricots verts frais et croquants', 1.89, 50, 'haricots_verts.jpg'),

-- Boissons
(15, 9, 'Eau Minérale', 'Eau minérale naturelle', 0.89, 200, 'eau_minerale.jpg'),

-- Hygiène
(16, 10, 'Savon Liquide', 'Savon liquide doux pour les mains', 1.49, 60, 'savon_liquide.jpg'),

-- Ménager
(17, 11, 'Produit vaiselle', 'Produit vaiselle doux pour les mains', 3.00, 30, 'produit_vaiselle.jpg'),
(18, 11, 'Détergent à lessive', 'Détergent à lessive efficace pour tout type de vêtement', 5.50, 50, 'detergent.jpg');

-- Ajout de données dans la table `promotion`
INSERT INTO `promotion` (`id`, `code`, `reduction`, `image`) VALUES
(1, 'SUMMER10', 10, 'summer_promo.jpg'),
(2, 'SALE20', 20, 'sale_promo.jpg'),
(3, 'FREESHIP', 100, 'freeship_promo.jpg'),
(4, 'FLASH50', 50, 'flash_promo.jpg'),
(5, 'WLCM15', 15, 'welcome_promo.jpg'),
(6, 'EASTER25', 25, 'easter_promo.jpg'),
(7, 'B2SCHOOL', 30, 'school_promo.jpg'),
(8, 'WINTER20', 20, 'winter_promo.jpg'),
(9, 'GIFT10', 10, 'gift_promo.jpg'),
(10, 'SPRING5', 5, 'spring_promo.jpg');

-- Ajout de données dans la table `user`
INSERT INTO `user` (`id`, `last`, `first`, `email`) VALUES
(1, 'Dupont', 'Jean', 'jean.dupont@example.com'),
(2, 'Martin', 'Sophie', 'sophie.martin@example.com'),
(3, 'Garcia', 'Pierre', 'pierre.garcia@example.com'),
(4, 'Leclerc', 'Marie', 'marie.leclerc@example.com'),
(5, 'Fournier', 'Thomas', 'thomas.fournier@example.com'),
(6, 'Dumont', 'Emma', 'emma.dumont@example.com'),
(7, 'Bernard', 'Lucas', 'lucas.bernard@example.com'),
(8, 'Lambert', 'Camille', 'camille.lambert@example.com'),
(9, 'Robert', 'Manon', 'manon.robert@example.com'),
(10, 'Moreau', 'Hugo', 'hugo.moreau@example.com');


-- Ajout de données dans la table `reservation`
INSERT INTO `reservation` (`id`, `promotion_id`, `price`, `validation`, `user_id`) VALUES
(1, 1, 1.99, 1, 1),
(2, 2, 1.49, 1, 2),
(3, 3, 1.99, 3, 3),
(4, 4, 1.49, 1, 4),
(5, NULL, 3.99, 1, 5),
(6, 6, 2.49,1, 6),
(7, 7, 0.99,1, 7),
(8, 8, 2.19,1, 8),
(9, 9, 1.19,1, 9),
(10, 10, 2.49, 1, 10);

-- Ajout de données dans la table `product_reservation`
INSERT INTO `product_reservation` (`product_id`, `reservation_id`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 1),
(12, 2),
(13, 3),
(14, 4),
(15, 5),
(16, 6);
