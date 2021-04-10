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
  `productId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productId_idx` (`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=120 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image_product`
--

LOCK TABLES `image_product` WRITE;
/*!40000 ALTER TABLE `image_product` DISABLE KEYS */;
INSERT INTO `image_product` VALUES (1,'product_1.jpg',1),(2,'product_2.jpg',2),(3,'product_3.jpg',3),(4,'product_4.jpg',4),(5,'product_5.jpg',5),(6,'product_6.jpg',6),(7,'product_7.jpg',7),(8,'product_8.jpg',8),(9,'product_9.jpg',9),(10,'product_10.jpg',10),(11,'product_11.jpg',11),(12,'image-products-1616726645949.jpg',12),(13,'product_13.jpg',13),(14,'product_14.jpg',14),(15,'product_15.jpg',15),(101,'image-products-1616727387367.jpg',101),(102,'image-products-1616382145766.jpg',102),(103,'image-products-1616382216186.jpg',103),(104,'image-products-1616382350864.jpg',104),(105,'image-products-1616382408312.jpg',105),(106,'image-products-1616382662322.jpg',106),(110,'image-product-1616728863393.png',107),(111,'image-1617623827215.jpg',108),(112,'image-1617765939311.jpg',109),(113,'image-1617799000678.jpg',110),(114,'image-1617833638300.jpg',111),(115,'image-1617833726530.jpg',112),(117,'image-1617923877221.jpg',115),(118,'image-1617925921196.jpg',116),(119,'image-1617987778491.jpg',117);
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
  `ID_category` int NOT NULL,
  `color` varchar(45) DEFAULT NULL,
  `mark` varchar(45) DEFAULT NULL,
  `size` varchar(45) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `delibery` varchar(45) DEFAULT NULL,
  `discount` float DEFAULT NULL,
  `material` varchar(45) DEFAULT NULL,
  `origin` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ID_category_idx` (`ID_category`),
  CONSTRAINT `ID_category` FOREIGN KEY (`ID_category`) REFERENCES `category_product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=118 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Bolsa de dormir','Bolsa de dormir de super calidad ',6000,6,'Naranja','Cartres','L',9,'Si',25,'Nilon','q'),(2,'Carpa verde','Carpa individual, color verde',25000,2,'Verde','Adventure acampada','M',5,'Si',50,'Nilon','w'),(3,'Mochila Militar','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec ultrices turpis, vitae fringilla justo. Sed nec sagittis mauris, vitae congue augue. Ut volutpat rhoncus volutpat. Integer sodales, velit eget malesuada consequat, sapien nisi dictum erat, vitae luctus magna felis non justo. Fusce a nibh non velit porta mollis sit.',8500,1,'rojo','Adventure max','XL',9,'No',2,'s','e'),(4,'Mate Stanley','Mate Stanley de primera calidad, ideal para usar en el trabajo, mientras estudias o cuando salís a la naturaleza. Posee una resistencia y durabilidad únicos de nuestra marca',4000,5,'Verde','Stanley','S',8,'No',5,'a','r'),(5,'Anafe a gas portatil','Cocina anafe, Color azul, incluye una recarga de gas ',3000,5,'Azul','Nascetur','M',1,'Consultar al vendedor',5,'Acero inoxidable','Uruguay'),(6,'mochila national geogrphic toscana 32 litros','consequat varius integer ac leo pellentesque ultrices mattis odio',3,1,'Versatile','at','S',61,'Consultar al vendedor',NULL,'f','y'),(7,'mate stanley acero inoxidable 236 ml original','montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis',5,5,'web-enabled','et magnis dis parturient montes','XL',90,'Consultar al vendedor',NULL,'c','u'),(8,'anafe cocina portatil frontier ntk','eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse',3,5,'emulation','proin leo','S',18,'Si',NULL,'x','i'),(9,'bolsa de dormir coleman autumn glenn','morbi non quam nec dui luctus rutrum nulla',4,6,'standardization','mauris','XXL',27,'Consultar al vendedor',NULL,'z','o'),(10,'termo stabley clasico 1 l cebador acero inoxidable','sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et',1,5,'Proactive','libero','XL',74,'Si',NULL,'v','p'),(11,'carpa alta montaña himalaya doite alta montaña','tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla',4,2,'Vision-oriented','duis ac nibh fusce lacus','M',30,'Consultar al vendedor',NULL,'d','a'),(12,'Mochila','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ultrices massa. Quisque vestibulum purus sit amet libero finibus, eget ultricies elit consectetur. Curabitur augue metus, vestibulum at orci ultricies, congue consectetur justo. Ut ac purus sapien. Nunc tempor est et neque rhoncus sagittis. Aenean id vulputate mauris. Donec in.',6000,1,'Rojo','Bora','XL',10,'Si',42,'a','s'),(13,'carpa coleman instant gold 8 personas','proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis',2,2,'holistic','sapien cum sociis','M',69,'Consultar al vendedor',NULL,'d','s'),(14,'carpa iglu spinit camper 6 personas','dictumst aliquam augue quam sollicitudin vitae',1,2,'middleware','nulla ac enim in','M',71,'No',NULL,'a','d'),(15,'bolsa de dormir northland icebear duvet','id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi',2,6,'groupware','phasellus id sapien in sapien','M',53,'Consultar al vendedor',NULL,'d','f'),(101,'Bolsa de dormir','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ultrices massa. Quisque vestibulum purus sit amet libero finibus, eget ultricies elit consectetur. Curabitur augue metus, vestibulum at orci ultricies, congue consectetur justo. Ut ac purus sapien. Nunc tempor est et neque rhoncus sagittis. Aenean id vulputate mauris. Donec in.',8000,6,'Gris','Phanton','L',3,'No',50,'x','g'),(104,'Linterna militar','Linterna de primera generación, ideal para expediciones y noches de camping. Posee una batería de 84hs de duración, no necesita pilas ya que cuenta batería recargable',6000,3,'rojo','militaryarm','l',10,'No',50,'v','h'),(105,'Mate de madera recubierto de aluminio','Mate de madera, recubierto con alumnio',2000,5,'Gris','Lumilagro','M',7,'Consultar al vendedor',25,'d','j'),(106,'Cocina Anafe','Cocina Anafe ideal para utilizarla al aire libre',2500,5,'Blanco','Gas C','S',10,'Si',0,'a','k'),(108,'Cantimplora','\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',350,5,'Verde','Laken','S',8,'no',0,'q','l'),(109,'Balsa Inflable','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque libero dolor, non molestie quam ultricies euismod. Aenean in nisl et libero lacinia iaculis. Morbi fringilla leo vitae porta facilisis. Etiam sagittis, neque ut vestibulum feugiat, ex est finibus eros, in convallis leo massa ut erat. Fusce et ipsum tempor.',357989,6,'Naranja','KONDOR','L',9,'Si',32,'e','ñ'),(110,'Conservadora ','Heladera Portatil Garden Life. Conservadora para Camping con capacidad: 34 litros, tapa Porta Vasos. Las botellas entran verticalmente. Medidas: 0,40 x 0,45 x 0,30 M.',2359,5,'Rojo','Garden','S',6,'Consultar al vendedor',5,'r','z'),(115,'asxasasd','asdklnmasklmxslkamaxms',12123,5,'Rojo','Bora','M',7,'No',123123,'t','xc'),(117,'Mesa plegable','asldjasnlkdjasklmdpoasmdpasmdpasdas',5000,5,'Rojo','Nikon','l',6,'Si',25,'y','c');
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
  `telefono` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Sebastián','Lezcano','admin','sebastian.e.lezcano@gmail.com','$2b$12$9vEBLtdIjLXa4fjGFbmRaOH3cF9GC4eB6/olwlROPWrfno6/ish6u','avatar-1617970534003.jpg','42306849'),(28,'Cosme','Fulanito','user','cosme@fulanito.com','$2b$12$f8.UA6Q.urKC.4iBkUJW4evfuDB3c.SGke3tii/D5rbVmGGcfKDYq','image-1617232482378.jpg',NULL),(29,'Ejemplo','ejemplo','user','ejemplo@ejemplo.com','$2b$12$SMAk8bAawCfLEKogNreT0OV0IJa8zhz0COLrmrnJEVXgL3TGbiEJy','default.png',NULL),(30,'Usuario','Usuario','user','usuario@usuario.com','$2b$12$JkDonmtq5rhvGT0q6Oe1d.fNKPkYjB4zulMsF5vyvlIOe1SPihCz6','default.png','########'),(31,'Usuario de prueba','Prueba','user','correo@correo.com','$2b$12$H7Ktln.p1oa7qNEBXUsIR.p8SbTciwhGzx8g4coSifw8ps48KkdJy','default.png','########'),(32,'asdasdasd','asdasdasdas','user','asdas@asdasd.com','$2b$12$hHsxl5O1hA3nLjDTxILgn.omuNxKXLxZCi.3vgNqbIVnFq7tedw.G','default.png','########'),(33,'lalksmdklassa','asdasd','user','correo@cs.com','$2b$12$a5G7gcBDFqrOgdr2Py5U0upeOJbAvR9oflRTkWCi528w2ghvFMqsG','default.png','########');
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

-- Dump completed on 2021-04-09 22:21:42
