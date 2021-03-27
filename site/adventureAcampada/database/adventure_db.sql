-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: adventure_db
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carrito`
--

DROP TABLE IF EXISTS `carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrito` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ID_user` int NOT NULL,
  `ID_product` int NOT NULL,
  `fecha` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ID_product_idx` (`ID_product`),
  KEY `ID_user_idx` (`ID_user`),
  CONSTRAINT `ID_product` FOREIGN KEY (`ID_product`) REFERENCES `product` (`id`),
  CONSTRAINT `ID_user` FOREIGN KEY (`ID_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito`
--

LOCK TABLES `carrito` WRITE;
/*!40000 ALTER TABLE `carrito` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_product`
--

DROP TABLE IF EXISTS `category_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category_product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_product`
--

LOCK TABLES `category_product` WRITE;
/*!40000 ALTER TABLE `category_product` DISABLE KEYS */;
INSERT INTO `category_product` VALUES (1,'mochilas'),(2,'carpas'),(3,'iluminarias'),(4,'herramientas'),(5,'cocina'),(6,'colchones');
/*!40000 ALTER TABLE `category_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image_product`
--

DROP TABLE IF EXISTS `image_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image_product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(100) NOT NULL,
  `product_id` int DEFAULT NULL,
  `productId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productId_idx` (`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image_product`
--

LOCK TABLES `image_product` WRITE;
/*!40000 ALTER TABLE `image_product` DISABLE KEYS */;
INSERT INTO `image_product` VALUES (1,'product_1.jpg',1,1),(2,'product_2.jpg',2,2),(3,'product_3.jpg',3,3),(4,'product_4.jpg',4,4),(5,'product_5.jpg',5,5),(6,'product_6.jpg',6,6),(7,'product_7.jpg',7,7),(8,'product_8.jpg',8,8),(9,'product_9.jpg',9,9),(10,'product_10.jpg',10,10),(11,'product_11.jpg',11,11),(12,'image-products-1616726645949.jpg',12,12),(13,'product_13.jpg',1,13),(14,'product_14.jpg',2,14),(15,'product_15.jpg',3,15),(101,'image-products-1616727387367.jpg',NULL,101),(102,'image-products-1616382145766.jpg',NULL,102),(103,'image-products-1616382216186.jpg',NULL,103),(104,'image-products-1616382350864.jpg',NULL,104),(105,'image-products-1616382408312.jpg',NULL,105),(106,'image-products-1616382662322.jpg',NULL,106),(110,'image-product-1616728863393.png',NULL,107);
/*!40000 ALTER TABLE `image_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `price` float NOT NULL,
  `ID_imageP` int DEFAULT NULL,
  `ID_category` int NOT NULL,
  `color` varchar(45) DEFAULT NULL,
  `mark` varchar(45) DEFAULT NULL,
  `size` varchar(45) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `delibery` varchar(45) DEFAULT NULL,
  `i_d_image_p` varchar(45) DEFAULT NULL,
  `i_d_category` varchar(45) DEFAULT NULL,
  `discount` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ID_imageP_idx` (`ID_imageP`),
  KEY `ID_category_idx` (`ID_category`),
  CONSTRAINT `ID_category` FOREIGN KEY (`ID_category`) REFERENCES `category_product` (`id`),
  CONSTRAINT `ID_imageP` FOREIGN KEY (`ID_imageP`) REFERENCES `image_product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Reverse-engineered','sed tristique in tempus sit amet',3,1,1,'pricing structure','curabitur convallis','odio',1,'platea dictumst',NULL,NULL,NULL),(2,'Bolsa de dormir reforzada','Bolsa de dormir ideal para acampar',25000,2,2,'rojo','Adventure acampada','XL',7,'1',NULL,NULL,25),(3,'Extended','faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui',3,3,3,'matrices','non mauris morbi non','imperdiet et commodo',69,'id luctus',NULL,NULL,NULL),(4,'hardware','adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec',5,4,4,'ability','dui luctus','consectetuer adipiscing elit',18,'luctus tincidunt',NULL,NULL,NULL),(5,'bolsa de dormir coleman oak','morbi vel lectus in quam fringilla rhoncus mauris enim leo',3,5,6,'Synchronised','nascetur ridiculus mus vivamus','justo in hac habitasse platea',22,'maecenas leo',NULL,NULL,NULL),(6,'mochila national geogrphic toscana 32 litros','consequat varius integer ac leo pellentesque ultrices mattis odio',3,6,1,'Versatile','at','magna bibendum imperdiet',61,'sapien cursus',NULL,NULL,NULL),(7,'mate stanley acero inoxidable 236 ml original','montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis',5,7,5,'web-enabled','et magnis dis parturient montes','mi sit amet lobortis sapien',90,'libero nullam',NULL,NULL,NULL),(8,'anafe cocina portatil frontier ntk','eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse',3,8,5,'emulation','proin leo','ut',18,'id luctus',NULL,NULL,NULL),(9,'bolsa de dormir coleman autumn glenn','morbi non quam nec dui luctus rutrum nulla',4,9,6,'standardization','mauris','tortor',27,'nulla nunc',NULL,NULL,NULL),(10,'termo stabley clasico 1 l cebador acero inoxidable','sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et',1,10,5,'Proactive','libero','ac diam cras pellentesque volutpat',74,'egestas metus',NULL,NULL,NULL),(11,'carpa alta montaña himalaya doite alta montaña','tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla',4,11,2,'Vision-oriented','duis ac nibh fusce lacus','placerat ante',30,'urna pretium',NULL,NULL,NULL),(12,'Mochila','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ultrices massa. Quisque vestibulum purus sit amet libero finibus, eget ultricies elit consectetur. Curabitur augue metus, vestibulum at orci ultricies, congue consectetur justo. Ut ac purus sapien. Nunc tempor est et neque rhoncus sagittis. Aenean id vulputate mauris. Donec in.',6000,12,1,'Rojo','Bora','XL',10,'2',NULL,NULL,42),(13,'carpa coleman instant gold 8 personas','proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis',2,13,2,'holistic','sapien cum sociis','est donec odio justo sollicitudin',69,'aenean fermentum',NULL,NULL,NULL),(14,'carpa iglu spinit camper 6 personas','dictumst aliquam augue quam sollicitudin vitae',1,14,2,'middleware','nulla ac enim in','vel ipsum praesent blandit lacinia',71,'convallis morbi',NULL,NULL,NULL),(15,'bolsa de dormir northland icebear duvet','id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi',2,15,6,'groupware','phasellus id sapien in sapien','sed tristique in tempus',53,'sapien dignissim',NULL,NULL,NULL),(101,'Bolsa de dormir','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ultrices massa. Quisque vestibulum purus sit amet libero finibus, eget ultricies elit consectetur. Curabitur augue metus, vestibulum at orci ultricies, congue consectetur justo. Ut ac purus sapien. Nunc tempor est et neque rhoncus sagittis. Aenean id vulputate mauris. Donec in.',8000,NULL,6,'Gris','Phanton','L',3,'1',NULL,NULL,50),(104,'Linterna militar','Linterna de primera generación, ideal para expediciones y noches de camping. Posee una batería de 84hs de duración, no necesita pilas ya que cuenta batería recargable',6000,NULL,3,'rojo','militaryarm','l',10,'1',NULL,'2',50),(105,'Matede madera recubierto de aluminio','Mate artesanal de madera, recubierto de aluminio',2000,NULL,5,'Gris','Lumilagro','M',10,'1',NULL,NULL,25),(106,'Cocina Anafe','Cocina Anafe ideal para utilizarla al aire libre',2500,NULL,5,'Blanco','Gas C','S',10,'1',NULL,NULL,0);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(60) NOT NULL,
  `lastName` varchar(60) NOT NULL,
  `rol` varchar(10) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'sebastian','lezcano','admin','sebastian.e.lezcano','123456789',NULL),(24,'sebastian','lezcano','admin','sebastianlezcano@gmail.com','$2b$12$FKCZETE1PZ3msEjls457zej8G6lexchC7bYfQ518SN7WdyOcIytAe',NULL),(25,'cosme','fulanit','user','cosme@fulanito.com','$2b$12$rsDQsFg8DZSyfcV/SFXXEu.NgG6ljSU3LLwlcbs924HUxr85wA5Oi',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-26 23:41:43
