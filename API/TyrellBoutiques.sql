-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Ven 09 Décembre 2016 à 17:49
-- Version du serveur :  5.7.16-0ubuntu0.16.04.1
-- Version de PHP :  7.0.8-0ubuntu0.16.04.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `TyrellBoutiques`
--

-- --------------------------------------------------------

--
-- Structure de la table `Boutique`
--

CREATE TABLE `Boutique` (
  `idBoutique` int(11) NOT NULL,
  `nomBoutique` varchar(50) NOT NULL,
  `urlBoutique` varchar(100) NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Boutique`
--

INSERT INTO `Boutique` (`idBoutique`, `nomBoutique`, `urlBoutique`, `latitude`, `longitude`) VALUES
(1, 'Tyrell Reims', 'tyrell.tk/reims', 49.2534, 4.033),
(2, 'Tyrell Paris 1', '', 48.852727, 2.315514),
(3, 'Tyrell Paris 2', '', 48.86704, 2.37854),
(4, 'Tyrell Lyon', '', 45.761748, 4.833643);

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
(24, 'Joffrey', 'Joffrey', 'joffrey', 'toto@mail.fr', '12345', NULL),
(43, 'toto', 'toto', 'toto', 'toto', 'toto', NULL),
(44, 'Bourgeois', 'Guillaume', '7 grande rue', 'guigui@mail.fr', 'coucou', NULL),
(59, 'Lafontaine', 'Virgil', '46 rue des boulets', 'coucou@tuveuxvoir.bite', 'mdpfdp', NULL),
(60, 'tata', 'tata', 'tata', 'tata', 'tata', NULL),
(64, 'test', 'jeanmichmich', 'mich.jaime', 'mich@test.fr', 'toto', NULL);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `Boutique`
--
ALTER TABLE `Boutique`
  ADD PRIMARY KEY (`idBoutique`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`idClient`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `Boutique`
--
ALTER TABLE `Boutique`
  MODIFY `idBoutique` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `idClient` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
