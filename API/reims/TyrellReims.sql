-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Ven 09 Décembre 2016 à 17:48
-- Version du serveur :  5.7.16-0ubuntu0.16.04.1
-- Version de PHP :  7.0.8-0ubuntu0.16.04.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `TyrellReims`
--

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `idClient` int(11) NOT NULL,
  `nom` varchar(45) DEFAULT NULL,
  `prenom` varchar(45) DEFAULT NULL,
  `adresse` varchar(100) DEFAULT NULL,
  `mail` varchar(45) DEFAULT NULL,
  `mdp` varchar(45) DEFAULT NULL,
  `perimetre` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `client`
--

INSERT INTO `client` (`idClient`, `nom`, `prenom`, `adresse`, `mail`, `mdp`, `perimetre`) VALUES
(1, 'JARRE', 'Jean-Michel', '5 rue de la mort', 'jean.jarre@gmail.com', 'totoletoto', 5),
(2, 'Lannister', 'Tyrion', '5 rue de Castral Rock', 'tyrion.lannister@lion.com', 'tyrion', 10),
(3, 'Jaime', 'Lannister', '10 rue du régicide', 'regicide@hotmail.com', 'regicide', 5),
(6, 'Lanniser', 'Cersei', '5 rue de Port réal', 'cersei@baratheon.com', 'jaimejaimy', NULL),
(8, 'Targaryen', 'Daenerys', '8 rue de ta vu mon dragon', 'grosDragon@khaleesi.com', 'drogon', NULL),
(24, 'Joffrey', 'Joffrey', 'joffrey', 'toto@mail.fr', '12345', NULL),
(43, 'toto', 'toto', 'toto', 'toto', 'toto', NULL),
(44, 'Bourgeois', 'Guillaume', '7 grande rue', 'guigui@mail.fr', 'coucou', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `exercer`
--

CREATE TABLE `exercer` (
  `idProfession` int(11) NOT NULL,
  `idProfessionnel` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `exercer`
--

INSERT INTO `exercer` (`idProfession`, `idProfessionnel`) VALUES
(1, 2),
(2, 2),
(3, 2),
(4, 2),
(5, 2),
(6, 2),
(7, 2),
(8, 2),
(9, 2),
(10, 2),
(11, 2),
(13, 2),
(14, 2),
(15, 2),
(16, 2),
(17, 2),
(18, 2),
(19, 2),
(21, 2),
(22, 2),
(23, 2),
(24, 2),
(25, 2),
(26, 2),
(27, 2),
(28, 2),
(29, 2),
(30, 2),
(31, 2),
(1, 3),
(2, 3),
(3, 3),
(4, 3),
(5, 3),
(6, 3),
(7, 3),
(8, 3),
(9, 3),
(10, 3),
(11, 3),
(1, 4),
(2, 4),
(3, 4),
(4, 4),
(5, 4),
(6, 4),
(7, 4),
(8, 4),
(9, 4),
(10, 4),
(11, 4),
(13, 4),
(14, 4),
(15, 4),
(16, 4),
(17, 4),
(18, 4),
(19, 4),
(21, 4),
(22, 4),
(23, 4),
(24, 4),
(25, 4),
(26, 4),
(27, 4),
(28, 4),
(29, 4),
(30, 4),
(31, 4),
(1, 5),
(2, 5),
(3, 5),
(4, 5),
(1, 8),
(2, 8),
(3, 8),
(4, 8),
(5, 8),
(6, 8),
(7, 8),
(8, 8),
(9, 8),
(10, 8),
(11, 8),
(13, 8),
(14, 8),
(15, 8),
(16, 8),
(17, 8),
(18, 8),
(19, 8),
(21, 8),
(22, 8),
(23, 8),
(24, 8),
(25, 8),
(26, 8),
(27, 8),
(28, 8),
(29, 8),
(30, 8),
(31, 8),
(1, 9),
(2, 9),
(3, 9),
(4, 9),
(5, 9),
(6, 9),
(7, 9),
(8, 9),
(9, 9),
(10, 9),
(11, 9),
(13, 9),
(14, 9),
(15, 9),
(16, 9),
(17, 9),
(18, 9),
(19, 9),
(21, 9),
(22, 9),
(23, 9),
(24, 9),
(25, 9),
(26, 9),
(27, 9),
(28, 9),
(29, 9),
(30, 9),
(31, 9);

-- --------------------------------------------------------

--
-- Structure de la table `facture`
--

CREATE TABLE `facture` (
  `idFacture` int(11) NOT NULL,
  `tarif` double DEFAULT NULL,
  `idProfessionnel` int(11) NOT NULL,
  `idService` int(11) NOT NULL,
  `idClient` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `profession`
--

CREATE TABLE `profession` (
  `idProfession` int(11) NOT NULL,
  `nomProfession` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `profession`
--

INSERT INTO `profession` (`idProfession`, `nomProfession`) VALUES
(1, 'Chauffagiste'),
(2, 'Peintre'),
(3, 'Plombier'),
(4, 'Electricien'),
(5, 'Traiteur'),
(6, 'Chauffeur de taxi'),
(7, 'Infirmier à domicile '),
(8, 'Carreleur'),
(9, 'Charpentier'),
(10, 'Touriste'),
(11, 'Livreur'),
(13, 'Mécanicien'),
(14, 'Jardinier'),
(15, 'Bricoleur'),
(16, 'Jardinier'),
(17, 'Bricoleur'),
(18, 'Professeur mathématiques'),
(19, 'Professeur français'),
(21, 'Professeur français'),
(22, 'Professeur d\'anglais'),
(23, 'Professeur d\'espagnol'),
(24, 'Professeur d\'allemand'),
(25, 'Professeur de musique'),
(26, 'Coach sportif'),
(27, 'Chauffeur'),
(28, 'Dépanneur'),
(29, 'Maçon'),
(30, 'Babysitter'),
(31, 'Informaticien');

-- --------------------------------------------------------

--
-- Structure de la table `professionnel`
--

CREATE TABLE `professionnel` (
  `idProfessionnel` int(11) NOT NULL,
  `nom` varchar(45) DEFAULT NULL,
  `adresse` varchar(45) DEFAULT NULL,
  `mail` varchar(45) DEFAULT NULL,
  `mdp` varchar(45) DEFAULT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `professionnel`
--

INSERT INTO `professionnel` (`idProfessionnel`, `nom`, `adresse`, `mail`, `mdp`, `latitude`, `longitude`) VALUES
(2, 'Jean-Michel sait tout faire', '42 rue de la polyvalence 51100 Reims', 'JMCTOUTFAIRE', 'coucou', 49.2534, 4.033),
(3, 'Huguette sait tout faire', '35 rue du coucou 51100 Reims', 'superhuguette', 'coucou', 49.227978, 4.038093),
(4, 'Maurice le poisson rouge', '3 rue du bocale', 'Maurice', 'memoire3s', 49.238608, 4.014841),
(5, 'Bob les ponges', '35 rue de la savonette', 'eponge', 'eponge', 49.278576, 4.024285),
(8, 'Hubert Beber', '92 rue du Ber', 'hubert', 'hubert', 49.266362, 4.051378),
(9, 'Power Ranger Rouge', 'Partout', 'PRR', 'prr', 49.232519, 4.024408),
(10, 'Zuckerberg', ' 5 rue du bouc', 'marckinou@fb.com', 'dtc', 49.232519, 4.024408);

-- --------------------------------------------------------

--
-- Structure de la table `proposer`
--

CREATE TABLE `proposer` (
  `idService` int(11) NOT NULL,
  `idProfession` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `proposer`
--

INSERT INTO `proposer` (`idService`, `idProfession`) VALUES
(4, 1),
(5, 1),
(6, 3),
(8, 11),
(9, 11),
(7, 13),
(25, 14),
(26, 15),
(29, 18),
(30, 21),
(31, 22),
(32, 23),
(33, 24),
(34, 25),
(35, 26),
(10, 27),
(13, 28),
(14, 28),
(15, 28),
(16, 28),
(40, 30),
(47, 31);

-- --------------------------------------------------------

--
-- Structure de la table `service`
--

CREATE TABLE `service` (
  `idService` int(11) NOT NULL,
  `nomService` varchar(45) DEFAULT NULL,
  `pere` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `service`
--

INSERT INTO `service` (`idService`, `nomService`, `pere`) VALUES
(4, 'Réparation chauffage éléctrique', 18),
(5, 'Réparation chauffage gaz', 18),
(6, 'Reparation tuyau', 18),
(7, 'Réparation voiture', 18),
(8, 'Livraison de sushi', 11),
(9, 'Livraison Khebab', 11),
(10, 'Transport ', NULL),
(11, 'Livraison', NULL),
(12, 'Dépannage', NULL),
(13, 'Dépannage Voiture', 12),
(14, 'Dépannage Camion', 12),
(15, 'Dépannage Bateau', 12),
(16, 'Dépannage chaufferie', 12),
(17, 'Réparation Apple', 18),
(18, 'Réparation', NULL),
(19, 'Assistance', NULL),
(20, 'Assistance personnes agées', 19),
(21, 'Assistance personnes mobilité réduite', 19),
(22, 'Entretien ', NULL),
(23, 'Entretien de la maison ', 22),
(24, 'Travaux', NULL),
(25, 'Travaux de jardinage', 24),
(26, 'Travaux Bricolage', 24),
(27, 'Soutien', NULL),
(28, 'Soutien Scolaire', 27),
(29, 'Soutien Mathématique', 28),
(30, 'Soutien Français', 28),
(31, 'Soutien Anglais', 28),
(32, 'Soutien Espagnol', 28),
(33, 'Soutien Allemand', 28),
(34, 'Soutien Musique', 28),
(35, 'Activité Sportive', NULL),
(36, 'Repas a domicile', NULL),
(37, 'Course a Domicile', NULL),
(38, 'Garde d\'enfant ', NULL),
(40, 'Garde d\'enfant de plus de 3 ans', 38),
(41, 'Soins esthétiques', NULL),
(42, 'Soins esthétiques a domicile', 41),
(43, 'Soins esthétiques NOCIBE', 41),
(44, 'Soins esthétiques Yves-Rocher', 41),
(45, 'Collecte a domicile', NULL),
(46, 'Collecte de linge a domicile ', 45),
(47, 'Assistance informatique', NULL),
(48, 'Assistance informatique a domicile ', 47),
(49, 'Soins d\'animaux de compagnie', NULL),
(50, 'Promenade  d\'animaux de compagnie', NULL),
(51, 'Maintenance du domicile', NULL),
(52, 'Vigilance du domicile ', NULL),
(53, 'Interprète', NULL),
(54, 'Télé-assistance', 19),
(55, 'Visio-assistance', 19),
(56, 'Interprète en langue des signes', 53),
(58, 'Traducteur', NULL),
(59, 'Traducteur en Anglais', 58),
(60, 'Traducteur en Espagnol', 58),
(61, 'Traducteur en Allemand', 58),
(62, 'Traducteur en Japonais', 58),
(63, 'Traducteur en Chinois', 58),
(64, 'Traducteur en Mandarin', 58),
(65, 'Traducteur en L33T ', 58),
(66, 'Assistance Comptable', 19),
(67, 'Assistance Notaire', 19),
(68, 'Assistance juridique', 19),
(69, 'Péripatéticienne', NULL),
(70, 'Avocat', NULL),
(71, 'Médecine', NULL),
(72, 'Médecin Généraliste', 71),
(73, 'Orthodontiste ', 71),
(74, 'Neuro-chirurgien', 71);

-- --------------------------------------------------------

--
-- Structure de la table `version`
--

CREATE TABLE `version` (
  `version` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `version`
--

INSERT INTO `version` (`version`) VALUES
(13);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`idClient`);

--
-- Index pour la table `exercer`
--
ALTER TABLE `exercer`
  ADD PRIMARY KEY (`idProfession`,`idProfessionnel`),
  ADD KEY `fk_profession_has_Professionnel_Professionnel1_idx` (`idProfessionnel`),
  ADD KEY `fk_profession_has_Professionnel_profession1_idx` (`idProfession`);

--
-- Index pour la table `facture`
--
ALTER TABLE `facture`
  ADD PRIMARY KEY (`idFacture`),
  ADD KEY `fk_Facture_Professionnel1_idx` (`idProfessionnel`),
  ADD KEY `fk_Facture_service1_idx` (`idService`),
  ADD KEY `fk_Facture_Client1_idx` (`idClient`);

--
-- Index pour la table `profession`
--
ALTER TABLE `profession`
  ADD PRIMARY KEY (`idProfession`);

--
-- Index pour la table `professionnel`
--
ALTER TABLE `professionnel`
  ADD PRIMARY KEY (`idProfessionnel`);

--
-- Index pour la table `proposer`
--
ALTER TABLE `proposer`
  ADD PRIMARY KEY (`idService`,`idProfession`),
  ADD KEY `fk_Service_has_Profession_Profession1_idx` (`idProfession`),
  ADD KEY `fk_Service_has_Profession_Service1_idx` (`idService`);

--
-- Index pour la table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`idService`),
  ADD KEY `fk_Service_Service_idx` (`pere`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `idClient` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
--
-- AUTO_INCREMENT pour la table `facture`
--
ALTER TABLE `facture`
  MODIFY `idFacture` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `profession`
--
ALTER TABLE `profession`
  MODIFY `idProfession` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT pour la table `professionnel`
--
ALTER TABLE `professionnel`
  MODIFY `idProfessionnel` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT pour la table `service`
--
ALTER TABLE `service`
  MODIFY `idService` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `exercer`
--
ALTER TABLE `exercer`
  ADD CONSTRAINT `fk_profession_has_Professionnel_Professionnel1` FOREIGN KEY (`idProfessionnel`) REFERENCES `professionnel` (`idProfessionnel`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_profession_has_Professionnel_profession1` FOREIGN KEY (`idProfession`) REFERENCES `profession` (`idProfession`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `facture`
--
ALTER TABLE `facture`
  ADD CONSTRAINT `fk_Facture_Client1` FOREIGN KEY (`idClient`) REFERENCES `client` (`idClient`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Facture_Professionnel1` FOREIGN KEY (`idProfessionnel`) REFERENCES `professionnel` (`idProfessionnel`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Facture_service1` FOREIGN KEY (`idService`) REFERENCES `service` (`idService`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `proposer`
--
ALTER TABLE `proposer`
  ADD CONSTRAINT `fk_Service_has_Profession_Profession1` FOREIGN KEY (`idProfession`) REFERENCES `profession` (`idProfession`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Service_has_Profession_Service1` FOREIGN KEY (`idService`) REFERENCES `service` (`idService`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `service`
--
ALTER TABLE `service`
  ADD CONSTRAINT `fk_Service_Service` FOREIGN KEY (`pere`) REFERENCES `service` (`idService`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
