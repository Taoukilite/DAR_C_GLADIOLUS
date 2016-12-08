-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 08 Décembre 2016 à 12:15
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
(2, 1);

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
(10, 'Touriste');

-- --------------------------------------------------------

--
-- Structure de la table `professionnel`
--

CREATE TABLE `professionnel` (
  `idProfessionnel` int(11) NOT NULL,
  `nom` varchar(45) DEFAULT NULL,
  `adresse` varchar(45) DEFAULT NULL,
  `login` varchar(45) DEFAULT NULL,
  `mdp` varchar(45) DEFAULT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `professionnel`
--

INSERT INTO `professionnel` (`idProfessionnel`, `nom`, `adresse`, `login`, `mdp`, `latitude`, `longitude`) VALUES
(1, 'Pro 1 lolol', '3 rue de Tamayr', 'pro1', 'test', 49.250431, 4.031333);

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
(1, 1),
(2, 1),
(1, 2);

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
(1, 'Lollliture', NULL),
(2, 'aaaaalOllliture', 1),
(3, 'tamayr', NULL),
(4, 'reparation chauffage éléctrique', NULL),
(5, 'reparation chauffage gaz', NULL),
(6, 'Reparation tuyau', NULL),
(7, 'Réparation voiture', NULL),
(8, 'Livraison de sushi', NULL),
(9, 'Livraison Khebab', NULL),
(10, 'Transport ', NULL),
(11, 'Livraison', NULL),
(12, 'Dépannage', NULL),
(13, 'Dépannage Voiture', NULL),
(14, 'Dépannage Camion', NULL),
(15, 'Dépannage Bateau', NULL),
(16, 'Dépannage chaufferie', NULL),
(17, 'Réparation Apple', NULL),
(18, 'Réparation', NULL),
(19, 'Assistance', NULL),
(20, 'Assistance personnes agées', NULL),
(21, 'Assistance personnes mobilité réduite', NULL),
(22, 'Entretien ', NULL),
(23, 'Entretien de la maison ', NULL),
(24, 'Travaux', NULL),
(25, 'Travaux de jardinage', NULL),
(26, 'Travaux Bricolage', NULL),
(27, 'Soutien', NULL),
(28, 'Soutien Scolaire', NULL),
(29, 'Soutien Mathématique', NULL),
(30, 'Soutien Français', NULL),
(31, 'Soutien Anglais', NULL),
(32, 'Soutien Espagnol', NULL),
(33, 'Soutien Allemand', NULL),
(34, 'Soutien Musique', NULL),
(35, 'Activité Sportive', NULL),
(36, 'Repas a domicile', NULL),
(37, 'Course a Domicile', NULL),
(38, 'Garde d\'enfant ', NULL),
(40, 'Garde d\'enfant de plus de 3 ans', NULL),
(41, 'Soins esthétiques', NULL),
(42, 'Soins esthétiques a domicile', NULL),
(43, 'Soins esthétiques NOCIBE', NULL),
(44, 'Soins esthétiques Yves-Rocher', NULL),
(45, 'Collecte a domicile', NULL),
(46, 'Collecte de linge a domicile ', NULL),
(47, 'Assistance informatique', NULL),
(48, 'Assistance informatique a domicile ', NULL),
(49, 'Soins d\'animaux de compagnie', NULL),
(50, 'Promenade  d\'animaux de compagnie', NULL),
(51, 'Maintenance du domicile', NULL),
(52, 'Vigilance du domicile ', NULL),
(53, 'Interprète', NULL),
(54, 'Télé-assistance', NULL),
(55, 'Visio-assistance', NULL),
(56, 'Interprète en langue des signes', NULL),
(57, 'Traducteur en langue ', NULL),
(58, 'Traducteur en langue ', NULL),
(59, 'Traducteur en Anglais', NULL),
(60, 'Traducteur en Espagnol', NULL),
(61, 'Traducteur en Allemand', NULL),
(62, 'Traducteur en Japonais', NULL),
(63, 'Traducteur en Chinois', NULL),
(64, 'Traducteur en Mandarin', NULL),
(65, 'Traducteur en L33T ', NULL),
(66, 'Assistance Comptable', NULL),
(67, 'Assistance Notaire', NULL),
(68, 'Assistance juridique', NULL),
(69, 'Péripatéticienne', NULL),
(70, 'Avocat', NULL),
(71, 'Médecine', NULL),
(72, 'Médecin Généraliste', NULL),
(73, 'Orthodontiste ', NULL),
(74, 'Neuro-chirurgien', NULL);

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
(7),
(7),
(8);

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
  MODIFY `idProfession` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT pour la table `professionnel`
--
ALTER TABLE `professionnel`
  MODIFY `idProfessionnel` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
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
