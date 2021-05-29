-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: b3s4c5xqbwd3jdxc07ws-mysql.services.clever-cloud.com:3306
-- Generation Time: May 08, 2021 at 02:27 AM
-- Server version: 8.0.22-13
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `b3s4c5xqbwd3jdxc07ws`
--

-- --------------------------------------------------------

--
-- Table structure for table `AQuestionResult`
--

CREATE TABLE `AQuestionResult` (
  `AE_id` bigint NOT NULL,
  `AM_id` bigint NOT NULL,
  `AQ_id` bigint NOT NULL,
  `AE_Result` int NOT NULL,
  `ST_id` int NOT NULL,
  `CH_id` int NOT NULL,
  `CO_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Assessment`
--

CREATE TABLE `Assessment` (
  `AM_id` bigint NOT NULL,
  `AM_Name` text NOT NULL,
  `AM_Duration` int NOT NULL,
  `AM_DateInserted` int NOT NULL,
  `CO_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `AssessmentQuestion`
--

CREATE TABLE `AssessmentQuestion` (
  `AQ_id` bigint NOT NULL,
  `AQ_SeqNum` int NOT NULL,
  `AQ_Question` text NOT NULL,
  `AQ_Type` varchar(1) NOT NULL,
  `AQ_Option1` text NOT NULL,
  `AQ_Option2` text NOT NULL,
  `AQ_Option3` text NOT NULL,
  `AQ_Option4` text NOT NULL,
  `AQ_AnswerText` text NOT NULL,
  `CO_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `AssessmentResult`
--

CREATE TABLE `AssessmentResult` (
  `AR_id` bigint NOT NULL,
  `AM_id` bigint NOT NULL,
  `ST_id` bigint NOT NULL,
  `CH_id` bigint NOT NULL,
  `AR_Result` int NOT NULL,
  `CO_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Cities`
--

CREATE TABLE `Cities` (
  `CY_id` mediumint UNSIGNED NOT NULL,
  `CY_Name` varchar(50) NOT NULL,
  `ST_id` smallint UNSIGNED NOT NULL DEFAULT '0',
  `CT_id` varchar(3) NOT NULL DEFAULT '',
  `CY_latitude` double NOT NULL DEFAULT '0',
  `CY_longitude` double NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `Cities`
--

INSERT INTO `Cities` (`CY_id`, `CY_Name`, `ST_id`, `CT_id`, `CY_latitude`, `CY_longitude`) VALUES
(7, 'Mountain View', 5, 'USA', 37.42, -122.06),
(8, 'Beijing', 6, 'CHN', 39.93, 116.39),
(11, 'Ackworth', 9, 'USA', 41.36, -93.43),
(13, 'Far Rockaway', 10, 'USA', 40.61, -73.79),
(14, 'Hebei', 11, 'CHN', 39.89, 115.28),
(15, 'Los Angeles', 5, 'USA', 34.04, -118.25),
(16, 'Nanjing', 12, 'CHN', 32.06, 118.78),
(18, 'Sunnyvale', 5, 'USA', 37.42, -122.01),
(20, 'Newark', 14, 'USA', 40.74, -74.17),
(21, 'Malden', 15, 'USA', 42.43, -71.05),
(22, 'Trumbull', 16, 'USA', 41.26, -73.21),
(23, 'Guangzhou', 17, 'CHN', 23.12, 113.25),
(25, 'Cupertino', 5, 'USA', 37.3, -122.09),
(26, 'Fort Lauderdale', 19, 'USA', 26.1, -80.27),
(27, 'South Amboy', 14, 'USA', 40.48, -74.29),
(33, 'Keller', 24, 'USA', 32.93, -97.25),
(34, 'Long Island City', 10, 'USA', 40.74, -73.94),
(38, 'Brooklyn', 10, 'USA', 40.69, -73.99),
(39, 'Army Post Office', 28, 'USA', 56, -100),
(42, 'Mesquite', 24, 'USA', 32.76, -96.61),
(44, 'Mc Minnville', 32, 'USA', 35.65, -85.73),
(45, 'Flatwoods', 33, 'USA', 38.5, -82.73),
(46, 'Saint-maur-des-fossés', 34, 'FRA', 48.8, 2.5),
(47, 'Bogart', 35, 'USA', 33.91, -83.52),
(48, 'Cedar Hill', 24, 'USA', 32.59, -96.97),
(50, 'São Gonçalo', 37, 'BRA', -22.8, -43.03),
(51, 'Levittown', 10, 'USA', 40.72, -73.52),
(53, 'Cornelia', 35, 'USA', 34.5, -83.58),
(61, 'Des Plaines', 44, 'USA', 42, -87.9),
(63, 'Fortaleza', 46, 'BRA', -3.32, -41.42),
(64, 'Denver', 47, 'USA', 39.75, -105),
(65, 'Shenzhen', 17, 'CHN', 22.53, 114.13),
(66, 'Wenzhou', 48, 'CHN', 28.02, 120.65),
(67, 'Riverton', 49, 'USA', 40.48, -112.01),
(72, 'Shenyang', 52, 'CHN', 41.79, 123.43),
(77, 'Gurgaon', 56, 'IND', 28.47, 77.03),
(78, 'Glen Burnie', 57, 'USA', 39.16, -76.6),
(81, 'Miami', 19, 'USA', 25.81, -80.24),
(83, 'Chicago', 44, 'USA', 41.88, -87.63),
(87, 'Shanghai', 62, 'CHN', 31, 121.41),
(90, 'Tianjin', 64, 'CHN', 39.14, 117.18),
(99, 'Evansdale', 9, 'USA', 42.49, -92.29),
(102, 'Houston', 24, 'USA', 29.8, -95.42),
(106, 'Dongguan', 17, 'CHN', 23.05, 113.74),
(107, 'Anderson', 72, 'USA', 34.48, -82.68),
(108, 'Bozeman', 73, 'USA', 45.71, -111.06),
(112, 'Marksville', 76, 'USA', 31.18, -92.02),
(113, 'Xiamen', 77, 'CHN', 24.47, 118.09),
(114, 'Billerica', 15, 'USA', 42.55, -71.26),
(116, 'Florianópolis', 78, 'BRA', -27.58, -48.57),
(118, 'Vitória', 80, 'BRA', -20.32, -40.35),
(121, 'Memphis', 32, 'USA', 35.03, -89.78),
(125, 'Seattle', 84, 'USA', 47.58, -122.3),
(126, 'Hyderabad', 85, 'IND', 17.38, 78.47),
(128, 'Prospect', 87, 'USA', 40.9, -80.08),
(132, 'Nanning', 90, 'CHN', 22.82, 108.32),
(133, 'Bellevue', 84, 'USA', 47.6, -122.16),
(135, 'Apollo Beach', 19, 'USA', 27.77, -82.41),
(138, 'Elgin', 44, 'USA', 42.03, -88.3),
(139, 'Cherryville', 93, 'USA', 35.39, -81.39),
(141, 'Jiazhuang', 94, 'CHN', 37.26, 117.08),
(144, 'Chongqing', 97, 'CHN', 29.56, 106.55),
(145, 'Jinan', 94, 'CHN', 36.67, 117),
(146, 'Grand Blanc', 98, 'USA', 42.92, -83.65),
(147, 'Indiana', 87, 'USA', 40.62, -79.15),
(148, 'Wuhan', 99, 'CHN', 30.58, 114.27),
(149, 'Delhi', 100, 'IND', 28.67, 77.22),
(150, 'Morrilton', 101, 'USA', 35.17, -92.74),
(154, 'Sharon', 15, 'USA', 42.11, -71.18),
(155, 'Pompton Lakes', 14, 'USA', 41, -74.28),
(158, 'Eau Claire', 107, 'USA', 44.79, -91.54),
(160, 'Saint Petersburg', 19, 'USA', 27.63, -82.7),
(162, 'Hangzhou', 48, 'CHN', 30.26, 120.17),
(165, 'Mount Holly', 14, 'USA', 39.99, -74.79),
(166, 'Gindou', 112, 'FRA', 44.63, 1.27),
(167, 'Chaoyang', 52, 'CHN', 41.57, 120.46),
(174, 'Daqing', 52, 'CHN', 41.72, 123.2),
(176, 'Meulan', 116, 'FRA', 49.02, 1.9),
(184, 'Salvador', 121, 'BRA', -12.98, -38.52),
(187, 'Atlanta', 35, 'USA', 33.8, -84.39),
(188, 'Harbin', 123, 'CHN', 45.75, 126.65),
(190, 'Hopkins', 72, 'USA', 33.91, -80.83),
(197, 'Paris', 101, 'USA', 35.28, -93.72),
(198, 'Cary', 93, 'USA', 35.78, -78.82),
(200, 'Southgate', 98, 'USA', 42.21, -83.21),
(201, 'Madras', 128, 'IND', 13.08, 80.28),
(202, 'Viola', 101, 'USA', 36.38, -92),
(203, 'Euclid', 129, 'USA', 41.57, -81.53),
(204, 'Benton', 101, 'USA', 34.59, -92.67),
(208, 'Rio Rancho', 132, 'USA', 35.25, -106.72),
(210, 'Hutchinson', 133, 'USA', 38.13, -97.93),
(212, 'Montgomery', 87, 'USA', 41.18, -76.95),
(213, 'Colorado Springs', 47, 'USA', 38.83, -104.74),
(214, 'Moriarty', 132, 'USA', 34.96, -106),
(218, 'Vail', 47, 'USA', 39.64, -106.32),
(221, 'Sandy', 136, 'USA', 45.38, -122.18),
(223, 'Fennville', 98, 'USA', 42.57, -86.11),
(224, 'Agra', 138, 'IND', 27.18, 78.02),
(227, 'Kearney', 140, 'USA', 40.76, -99.02),
(230, 'Kittanning', 87, 'USA', 40.81, -79.42),
(233, 'Ripley', 143, 'USA', 38.79, -81.68),
(234, 'Norwood', 15, 'USA', 42.18, -71.2),
(238, 'Alexandria', 144, 'USA', 38.81, -77.13),
(244, 'Richmond', 144, 'USA', 37.54, -77.48),
(245, 'Belton', 145, 'USA', 38.78, -94.55),
(250, 'Laurel', 148, 'USA', 31.7, -89.11),
(252, 'Lolo', 73, 'USA', 46.73, -114.36),
(253, 'Peoria', 44, 'USA', 40.69, -89.59),
(257, 'Iowa City', 9, 'USA', 41.64, -91.46),
(258, 'Pawtucket', 151, 'USA', 41.87, -71.39),
(259, 'Madison', 107, 'USA', 43.07, -89.39),
(260, 'Toledo', 129, 'USA', 41.71, -83.54),
(269, 'Woodbridge', 144, 'USA', 38.65, -77.31),
(270, 'Suzhou', 12, 'CHN', 31.31, 120.62),
(272, 'São Paulo', 155, 'BRA', -23.53, -46.62),
(273, 'Henan', 156, 'CHN', 37.9, 112.19),
(276, 'Lishui', 48, 'CHN', 28.11, 119.56),
(278, 'Bangalore', 160, 'IND', 12.98, 77.58),
(280, 'Zhongxin', 161, 'CHN', 26.97, 109.77),
(283, 'Rolla', 145, 'USA', 37.93, -91.78),
(285, 'Shelby', 93, 'USA', 35.36, -81.57),
(286, 'Carbondale', 47, 'USA', 39.18, -107.23),
(287, 'Decatur', 35, 'USA', 33.69, -84.25),
(290, 'Baltimore', 57, 'USA', 39.34, -76.69),
(291, 'Kokomo', 163, 'USA', 40.44, -86.09),
(296, 'Broken Arrow', 164, 'USA', 36.06, -95.81),
(300, 'Taiyüan', 156, 'CHN', 37.73, 112.47),
(312, 'Raleigh', 93, 'USA', 35.93, -78.72),
(313, 'Greenville', 72, 'USA', 34.86, -82.25),
(317, 'Saint Paul', 175, 'USA', 45.07, -93.19),
(318, 'Fort Mitchell', 176, 'USA', 32.29, -84.97),
(319, 'Akron', 129, 'USA', 41.07, -81.54),
(321, 'Zhongyuan', 178, 'CHN', 19.14, 110.48),
(327, 'Stamford', 16, 'USA', 41.08, -73.54),
(328, 'Phoenix', 181, 'USA', 33.43, -112.2),
(330, 'Viroflay', 34, 'FRA', 48.8, 2.17),
(331, 'Chengdu', 182, 'CHN', 30.67, 104.07),
(332, 'Putian', 77, 'CHN', 25.44, 119.01),
(334, 'New Palestine', 163, 'USA', 39.73, -85.89),
(336, 'Caldwell', 129, 'USA', 39.73, -81.51),
(337, 'Dundalk', 57, 'USA', 39.26, -76.5),
(340, 'Minneapolis', 175, 'USA', 45.03, -93.3),
(344, 'Brookings', 186, 'USA', 44.33, -96.81),
(348, 'Las Cruces', 132, 'USA', 32.35, -106.77),
(349, 'Mumbai', 187, 'IND', 18.98, 72.83),
(362, 'Las Vegas', 192, 'USA', 36.08, -115.09),
(366, 'Fuzhou', 77, 'CHN', 26.06, 119.31),
(367, 'Hazelwood', 145, 'USA', 38.79, -90.38),
(368, 'Moncks Corner', 72, 'USA', 33.12, -80.04),
(372, 'Xian', 11, 'CHN', 40.29, 117.65),
(374, 'Bothell', 84, 'USA', 47.84, -122.2),
(376, 'Changge', 196, 'CHN', 34.22, 113.77),
(378, 'Qingdao', 94, 'CHN', 36.1, 120.37),
(379, 'Gilbert', 181, 'USA', 33.32, -111.76),
(392, 'Sioux Falls', 186, 'USA', 43.52, -96.73),
(398, 'Jinhua', 48, 'CHN', 29.11, 119.65),
(400, 'Richmond', 33, 'USA', 37.77, -84.3),
(404, 'Thana', 187, 'IND', 19.2, 72.97),
(405, 'Thiruvananthapuram', 206, 'IND', 8.51, 76.96),
(408, 'Huntsville', 176, 'USA', 34.64, -86.75),
(410, 'Carter Lake', 9, 'USA', 41.29, -95.92),
(411, 'Tupelo', 148, 'USA', 34.22, -88.77),
(413, 'Menomonie', 107, 'USA', 44.85, -92),
(422, 'Weare', 215, 'USA', 43.08, -71.72),
(427, 'Amite', 76, 'USA', 30.73, -90.61),
(428, 'Norfolk', 144, 'USA', 36.89, -76.27),
(432, 'Portland', 218, 'USA', 43.69, -70.29),
(439, 'Honolulu', 220, 'USA', 21.3, -157.79),
(443, 'Overland Park', 133, 'USA', 38.92, -94.7),
(452, 'Durg', 225, 'IND', 21.18, 81.28),
(456, 'Williamston', 98, 'USA', 42.68, -84.27),
(459, 'Tempe', 181, 'USA', 33.44, -111.92),
(460, 'Kennewick', 84, 'USA', 46.08, -119.09),
(463, 'Birmingham', 176, 'USA', 33.51, -86.8),
(477, 'Coquille', 136, 'USA', 43.2, -124.12),
(479, 'Hefei', 236, 'CHN', 31.86, 117.28),
(480, 'Gardnerville', 192, 'USA', 38.92, -119.8),
(483, 'Changsha', 161, 'CHN', 28.18, 113.11),
(485, 'Salt Lake City', 49, 'USA', 40.71, -111.86),
(491, 'Quitman', 76, 'USA', 32.35, -92.72),
(493, 'Windsor', 16, 'USA', 41.86, -72.68),
(498, 'Paris', 34, 'FRA', 48.87, 2.33),
(503, 'Fort Wayne', 163, 'USA', 40.98, -85.12),
(505, 'Moulton', 176, 'USA', 34.46, -87.3),
(510, 'Sierra Vista', 181, 'USA', 31.59, -110.17),
(511, 'Valparaiso', 163, 'USA', 41.46, -87.14),
(518, 'Washington', 249, 'USA', 38.91, -77.08),
(527, 'Gatlinburg', 32, 'USA', 35.67, -83.46),
(530, 'Dover', 254, 'USA', 39.16, -75.49),
(533, 'Lexington', 33, 'USA', 37.99, -84.49),
(536, 'Olney', 57, 'USA', 39.15, -77.08),
(548, 'Calcutta', 258, 'IND', 22.57, 88.37),
(551, 'Knoxville', 32, 'USA', 36.06, -83.91),
(567, 'Nasik', 187, 'IND', 19.98, 73.8),
(578, 'New Delhi', 100, 'IND', 28.6, 77.2),
(582, 'Xian', 268, 'CHN', 34.26, 108.94),
(597, 'Fraziers Bottom', 143, 'USA', 38.6, -82.03),
(599, 'Pune', 187, 'IND', 18.53, 73.87),
(601, 'Indore', 274, 'IND', 22.72, 75.83),
(622, 'Foshan', 17, 'CHN', 23.03, 113.12),
(625, 'Ahmadabad', 284, 'IND', 23.03, 72.62),
(631, 'Lawrence', 133, 'USA', 39.04, -95.21),
(642, 'New Orleans', 76, 'USA', 29.96, -90.08),
(647, 'Columbia', 145, 'USA', 39.04, -92.27),
(655, 'Lucknow', 138, 'IND', 26.85, 80.92),
(660, 'Waukesha', 107, 'USA', 42.94, -88.3),
(667, 'Belfort', 296, 'FRA', 47.63, 6.87),
(683, 'Bhopal', 274, 'IND', 23.27, 77.4),
(690, 'Middleton', 305, 'USA', 43.74, -116.58),
(691, 'Jaipur', 306, 'IND', 26.92, 75.82),
(692, 'Tiruchchirappalli', 128, 'IND', 10.81, 78.69),
(695, 'Lenexa', 133, 'USA', 38.95, -94.75),
(696, 'Hulun', 307, 'CHN', 49.2, 119.7),
(711, 'Strasbourg', 315, 'FRA', 48.58, 7.75),
(712, 'Pahala', 220, 'USA', 19.2, -155.5),
(718, 'Cuttack', 317, 'IND', 20.5, 85.83),
(722, 'Visakhapatnam', 85, 'IND', 17.7, 83.3),
(723, 'Pocatello', 305, 'USA', 42.91, -112.4),
(735, 'Vanceburg', 33, 'USA', 38.51, -83.41),
(739, 'Bristol', 16, 'USA', 41.68, -72.94),
(748, 'Rajkot', 284, 'IND', 22.3, 70.78),
(752, 'Meerut', 138, 'IND', 28.98, 77.7),
(771, 'Muzaffarnagar', 138, 'IND', 29.47, 77.68),
(776, 'Changchun', 334, 'CHN', 43.88, 125.32),
(780, 'Suri', 258, 'IND', 23.92, 87.53),
(784, 'Vijayawada', 85, 'IND', 16.52, 80.62),
(788, 'Saint Cloud', 175, 'USA', 45.49, -94.23),
(801, 'Madurai', 128, 'IND', 9.93, 78.12),
(803, 'Ewa Beach', 220, 'USA', 21.35, -158.02),
(811, 'Vadodara', 284, 'IND', 22.3, 73.2),
(830, 'Ranchi', 355, 'IND', 23.35, 85.33),
(848, 'Chandigarh', 363, 'IND', 30.74, 76.79),
(858, 'Montrouge', 34, 'FRA', 48.82, 2.32),
(861, 'Tulsa', 164, 'USA', 36.14, -95.94),
(867, 'Newalla', 164, 'USA', 35.35, -97.2),
(878, 'Ludhiana', 377, 'IND', 30.9, 75.85),
(907, 'Surat', 284, 'IND', 20.97, 72.9),
(909, 'Karimnagar', 85, 'IND', 18.43, 79.15),
(923, 'Hillsboro', 136, 'USA', 45.51, -122.94),
(930, 'Thanjavur', 128, 'IND', 10.8, 79.15),
(947, 'Sète', 409, 'FRA', 43.4, 3.68),
(952, 'Kapurthala', 377, 'IND', 31.38, 75.38),
(960, 'Silchar', 416, 'IND', 24.82, 92.8),
(987, 'Bourges', 431, 'FRA', 47.08, 2.4),
(988, 'Zhengzhou', 196, 'CHN', 34.68, 113.53),
(994, 'Portland', 136, 'USA', 45.59, -122.71),
(1018, 'Bhubaneswar', 317, 'IND', 20.23, 85.83),
(1044, 'Keaau', 220, 'USA', 19.58, -155.02),
(1047, 'Tours', 431, 'FRA', 47.38, 0.68),
(1060, 'Faridabad', 56, 'IND', 28.43, 77.32),
(1063, 'Jacareí', 155, 'BRA', -23.32, -45.97),
(1068, 'Celles-sur-ource', 469, 'FRA', 48.08, 4.4),
(1072, 'Trébeurden', 471, 'FRA', 48.77, -3.57),
(1088, 'Haora', 258, 'IND', 22.59, 88.31),
(1121, 'Sacy-le-grand', 116, 'FRA', 49.35, 2.55),
(1126, 'Langfang', 11, 'CHN', 39.51, 116.69),
(1157, 'Lamorlaye', 116, 'FRA', 49.15, 2.43),
(1163, 'Brewer', 218, 'USA', 44.78, -68.74),
(1197, 'Niederroedern', 315, 'FRA', 48.9, 8.05),
(1214, 'Beauvais', 116, 'FRA', 49.43, 2.08),
(1221, 'Kolkata', 258, 'IND', 22.57, 88.37),
(1242, 'Lyon', 544, 'FRA', 45.75, 4.85),
(1257, 'Henderson', 192, 'USA', 36.03, -115.07),
(1258, 'Coursan', 409, 'FRA', 43.23, 3.07),
(1275, 'Zudausques', 555, 'FRA', 50.75, 2.15),
(1279, 'Nancy', 556, 'FRA', 48.68, 6.2),
(1288, 'Piracicaba', 155, 'BRA', -22.72, -47.63),
(1291, 'Porto Alegre', 561, 'BRA', -30.03, -51.2),
(1293, 'Nogent-le-roi', 431, 'FRA', 48.65, 1.53),
(1297, 'Grillon', 563, 'FRA', 44.4, 4.93),
(1300, 'Haryana', 56, 'IND', 29.62, 76.98),
(1345, 'Rennes', 471, 'FRA', 48.08, -1.68),
(1353, 'Cuzieu', 544, 'FRA', 45.62, 4.27),
(1361, 'Haikou', 178, 'CHN', 20.05, 110.34),
(1364, 'Tassin-la-demi-lune', 544, 'FRA', 45.77, 4.78),
(1372, 'Cuers', 563, 'FRA', 43.23, 6.07),
(1374, 'Belo Horizonte', 586, 'BRA', -19.92, -43.93),
(1376, 'Kota', 306, 'IND', 25.18, 75.83),
(1380, 'Mieussy', 544, 'FRA', 46.15, 6.53),
(1390, 'Amritsar', 377, 'IND', 31.63, 74.87),
(1393, 'Kochi', 206, 'IND', 9.97, 76.23),
(1410, 'Bauru', 155, 'BRA', -22.32, -49.07),
(1418, 'Circle Pines', 175, 'USA', 45.17, -93.12),
(1423, 'Limoges', 598, 'FRA', 45.85, 1.25),
(1432, 'Guiyang', 600, 'CHN', 26.58, 106.72),
(1479, 'Lille', 555, 'FRA', 50.63, 3.07),
(1506, 'Martigues', 563, 'FRA', 43.4, 5.05),
(1507, 'Fleury-les-aubrais', 431, 'FRA', 47.93, 1.92),
(1523, 'Aubevoye', 635, 'FRA', 49.15, 1.33),
(1533, 'Thalassery', 206, 'IND', 11.75, 75.49),
(1575, 'Angoulême', 649, 'FRA', 45.65, 0.15),
(1584, 'Guwahati', 416, 'IND', 26.18, 91.73),
(1611, 'Kannur', 206, 'IND', 11.87, 75.37),
(1618, 'Pauvres', 469, 'FRA', 49.42, 4.5),
(1627, 'Dubois', 667, 'USA', 43.49, -109.64),
(1641, 'Mangaluru', 160, 'IND', 12.86, 74.84),
(1659, 'Wilmington', 254, 'USA', 39.72, -75.53),
(1662, 'Beausoleil', 563, 'FRA', 43.75, 7.43),
(1663, 'Vapi', 676, 'IND', 20.37, 72.9),
(1686, 'Bruguières', 112, 'FRA', 43.73, 1.42),
(1687, 'Olive Branch', 148, 'USA', 34.92, -89.82),
(1713, 'Wheeling', 143, 'USA', 40.06, -80.64),
(1758, 'Joinville', 78, 'BRA', -26.3, -48.83),
(1760, 'Raymond', 215, 'USA', 43.03, -71.2),
(1761, 'Altamira', 701, 'BRA', -3.2, -52.2),
(1763, 'Nashua', 215, 'USA', 42.73, -71.46),
(1770, 'Valady', 112, 'FRA', 44.45, 2.43),
(1778, 'Taizhou', 12, 'CHN', 32.49, 119.91),
(1786, 'Lisieux', 708, 'FRA', 49.15, 0.23),
(1789, 'Hampstead', 215, 'USA', 42.88, -71.17),
(1822, 'Sigean', 409, 'FRA', 43.03, 2.98),
(1851, 'Rio De Janeiro', 37, 'BRA', -22.9, -43.23),
(1856, 'Patna', 728, 'IND', 25.6, 85.12),
(1857, 'Laruscade', 729, 'FRA', 45.12, -0.33),
(1867, 'Niterói', 37, 'BRA', -22.88, -43.09),
(1899, 'São Leopoldo', 561, 'BRA', -29.77, -51.15),
(1902, 'Biddeford', 218, 'USA', 43.5, -70.49),
(1906, 'Balma', 112, 'FRA', 43.62, 1.5),
(1908, 'Le Recoux', 409, 'FRA', 44.33, 3.15),
(1917, 'Dewas', 274, 'IND', 22.97, 76.07),
(1939, 'La Chapelle', 469, 'FRA', 48.33, 4.05),
(1976, 'Fernley', 192, 'USA', 39.67, -119.07),
(1982, 'Camps', 598, 'FRA', 44.98, 2),
(2003, 'Delhi Paharganj', 100, 'IND', 28.62, 77.22),
(2007, 'Lambersart', 555, 'FRA', 50.65, 3.03),
(2022, 'Dole', 296, 'FRA', 47.1, 5.5),
(2026, 'Irati', 773, 'BRA', -25.48, -50.65),
(2067, 'Arras', 555, 'FRA', 50.28, 2.78),
(2103, 'Brive-la-gaillarde', 598, 'FRA', 45.15, 1.53),
(2133, 'Servilly', 798, 'FRA', 46.28, 3.6),
(2182, 'Baltic', 186, 'USA', 43.74, -96.76),
(2188, 'Olinda', 808, 'BRA', -8.02, -34.85),
(2194, 'Yellapur', 160, 'IND', 14.97, 74.72),
(2209, 'Berwick', 218, 'USA', 43.3, -70.84),
(2221, 'Norman', 164, 'USA', 35.25, -97.46),
(2235, 'Metzeral', 315, 'FRA', 48.02, 7.07),
(2240, 'Claymont', 254, 'USA', 39.8, -75.46),
(2274, 'Angers', 822, 'FRA', 47.47, -0.55),
(2285, 'Sandpoint', 305, 'USA', 48.34, -116.45),
(2290, 'Uberlândia', 586, 'BRA', -18.92, -48.3),
(2338, 'Boise', 305, 'USA', 43.55, -116.29),
(2372, 'Manaus', 838, 'BRA', -3.11, -60.03),
(2374, 'Sonipat', 56, 'IND', 28.98, 77.02),
(2385, 'Laramie', 667, 'USA', 41.43, -105.52),
(2395, 'Besançon', 296, 'FRA', 47.25, 6.03),
(2400, 'Brasília', 842, 'BRA', -15.78, -47.92),
(2456, 'São José', 78, 'BRA', -27.63, -48.65),
(2526, 'Jackson', 148, 'USA', 32.33, -90.2),
(2568, 'Santa Fe', 132, 'USA', 35.68, -105.96),
(2681, 'Rezonville', 556, 'FRA', 49.1, 6),
(2725, 'Ogden', 49, 'USA', 41.22, -111.97),
(2741, 'Fleet Post Office', 28, 'USA', 57, -100),
(2766, 'Orem', 49, 'USA', 40.29, -111.72),
(2864, 'Jandun', 469, 'FRA', 49.65, 4.55),
(2908, 'Blumenau', 78, 'BRA', -26.93, -49.05),
(2973, 'Bismarck', 924, 'USA', 46.82, -100.71),
(2990, 'Prigonrieux', 729, 'FRA', 44.85, 0.4),
(3024, 'Bédée', 471, 'FRA', 48.18, -1.95),
(3029, 'Clermont-ferrand', 798, 'FRA', 45.78, 3.08),
(3045, 'Lincoln', 140, 'USA', 40.83, -96.67),
(3057, 'Woonsocket', 186, 'USA', 44.05, -98.3),
(3071, 'Guérande', 822, 'FRA', 47.33, -2.43),
(3073, 'Curitiba', 773, 'BRA', -25.42, -49.25),
(3079, 'Recife', 808, 'BRA', -8.05, -34.9),
(3082, 'Auxerre', 937, 'FRA', 47.8, 3.57),
(3093, 'Jaboatão', 808, 'BRA', -8.12, -35.02),
(3104, 'Omaha', 140, 'USA', 41.29, -96.17),
(3107, 'Cariacica', 80, 'BRA', -20.27, -40.42),
(3122, 'Anshan', 52, 'CHN', 41.12, 122.99),
(3145, 'Metz', 556, 'FRA', 49.13, 6.17),
(3162, 'Belém', 701, 'BRA', -1.45, -48.48),
(3202, 'Zaozhuang', 94, 'CHN', 34.86, 117.55),
(3239, 'Kalispell', 73, 'USA', 48.2, -114.39),
(3253, 'Beatrice', 140, 'USA', 40.26, -96.71),
(3275, 'Jackson', 667, 'USA', 43.46, -110.51),
(3281, 'Ferrisburg', 959, 'USA', 44.21, -73.22),
(3324, 'Scott Depot', 143, 'USA', 38.45, -81.89),
(3397, 'Westerly', 151, 'USA', 41.36, -71.8),
(3400, 'Goiânia', 970, 'BRA', -16.67, -49.27),
(3416, 'Jalandhar', 377, 'IND', 31.33, 75.58),
(3514, 'Mulhouse', 315, 'FRA', 47.75, 7.33),
(3568, 'Jilin', 334, 'CHN', 43.85, 126.56),
(3620, 'Valdoie', 296, 'FRA', 47.67, 6.85),
(3668, 'Shimla', 1008, 'IND', 31.1, 77.17),
(3682, 'Nagar', 306, 'IND', 27.43, 77.1),
(3685, 'Aracaju', 1011, 'BRA', -10.92, -37.07),
(3778, 'Itaboraí', 37, 'BRA', -22.75, -42.87),
(3792, 'Guipavas', 471, 'FRA', 48.43, -4.4),
(3893, 'Daman', 676, 'IND', 20.42, 72.85),
(3897, 'Camden Wyoming', 254, 'USA', 39.08, -75.61),
(3991, 'Nantes', 822, 'FRA', 47.22, -1.55),
(4008, 'Eagle River', 1061, 'USA', 61.21, -149.26),
(4017, 'Montreuil-bellay', 822, 'FRA', 47.13, -0.15),
(4046, 'Juziers', 635, 'FRA', 49, 1.85),
(4071, 'Flers', 708, 'FRA', 48.75, -0.57),
(4087, 'Raipur', 225, 'IND', 21.23, 81.63),
(4103, 'Viamão', 561, 'BRA', -30.08, -51.03),
(4116, 'Saint-pierre-du-palais', 649, 'FRA', 45.17, -0.15),
(4158, 'Chalon-sur-saône', 937, 'FRA', 46.78, 4.85),
(4166, 'Hebei', 6, 'CHN', 39.82, 115.94),
(4219, 'Woonsocket', 151, 'USA', 42, -71.49),
(4274, 'Rouen', 635, 'FRA', 49.43, 1.08),
(4282, 'Gillette', 667, 'USA', 43.9, -105.55),
(4290, 'Rai', 708, 'FRA', 48.75, 0.58),
(4324, 'Ponta Porã', 1102, 'BRA', -22.53, -55.72),
(4331, 'Bellême', 708, 'FRA', 48.37, 0.57),
(4370, 'Le Havre', 635, 'FRA', 49.5, 0.13),
(4384, 'Beawar', 306, 'IND', 26.1, 74.32),
(4435, 'Hombourg-haut', 556, 'FRA', 49.13, 6.77),
(4446, 'Dijon', 937, 'FRA', 47.32, 5.02),
(4490, 'Lamarche-sur-saône', 937, 'FRA', 47.27, 5.38),
(4533, 'Gulbarga', 160, 'IND', 17.33, 76.83),
(4674, 'Lajeado', 561, 'BRA', -29.45, -51.97),
(4717, 'Livingston', 73, 'USA', 45.71, -110.54),
(4795, 'Seward', 1061, 'USA', 60.06, -149.34),
(4810, 'Providence', 151, 'USA', 41.83, -71.4),
(4820, 'Caruaru', 808, 'BRA', -8.28, -35.97),
(4827, 'Castelo', 80, 'BRA', -20.6, -41.2),
(4894, 'Ychoux', 729, 'FRA', 44.33, -0.95),
(4912, 'Marsac', 729, 'FRA', 45.05, -0.68),
(4958, 'Juneau', 1061, 'USA', 58.58, -134.77),
(4977, 'Paranoá', 842, 'BRA', -15.83, -47.82),
(4978, 'Perpezac-le-noir', 598, 'FRA', 45.32, 1.55),
(5012, 'Issoire', 798, 'FRA', 45.55, 3.25),
(5119, 'Thouars', 649, 'FRA', 46.97, -0.22),
(5152, 'Kunming', 1178, 'CHN', 25.04, 102.72),
(5273, 'Beihai', 90, 'CHN', 21.48, 109.1),
(5436, 'Fairbanks', 1061, 'USA', 64.82, -147.72),
(5483, 'Saint-julien-l\'ars', 649, 'FRA', 46.55, 0.5),
(5496, 'Wuxi', 12, 'CHN', 31.58, 120.29),
(5510, 'Dehra Dun', 1200, 'IND', 30.32, 78.03),
(5537, 'Shillong', 1203, 'IND', 25.58, 91.87),
(5602, 'Chambre', 798, 'FRA', 45.2, 2.37),
(5713, 'Cachoeiro De Itapemirim', 80, 'BRA', -20.85, -41.1),
(5809, 'Nanchang', 1231, 'CHN', 28.55, 115.93),
(5936, 'Londrina', 773, 'BRA', -23.3, -51.15),
(6013, 'Lyndonville', 959, 'USA', 44.53, -72.05),
(6122, 'Sibsagar', 416, 'IND', 26.98, 94.63),
(6246, 'Barre', 959, 'USA', 44.18, -72.47),
(6325, 'Natal', 1269, 'BRA', -5.78, -35.22),
(6409, 'Kumar', 1008, 'IND', 33.03, 76.45),
(6537, 'Contagem', 586, 'BRA', -19.92, -44.1),
(6724, 'Cajàzeiras', 1293, 'BRA', -6.9, -38.57),
(6780, 'Simões', 1297, 'BRA', -7.6, -40.82),
(6781, 'Qinghai', 600, 'CHN', 25.81, 106.07),
(6868, 'Shangdi', 77, 'CHN', 26.13, 117.98),
(6906, 'Devils Lake', 924, 'USA', 48.14, -98.89),
(6988, 'Lanzhou', 1310, 'CHN', 36.06, 103.79),
(7006, 'Jatni', 317, 'IND', 20.17, 85.7),
(7024, 'Kundan', 1312, 'IND', 33.8, 74.26),
(7055, 'Hubei', 1231, 'CHN', 26.89, 114.53),
(7105, 'Jamshedpur', 355, 'IND', 22.8, 86.18),
(7235, 'Teresina', 1297, 'BRA', -5.08, -42.82),
(7251, 'Colva', 1334, 'IND', 15.27, 73.92),
(7311, 'São Luís', 1335, 'BRA', -2.52, -44.27),
(7349, 'Itabira', 586, 'BRA', -19.62, -43.22),
(7496, 'Shelburne', 959, 'USA', 44.4, -73.21),
(7688, 'West Fargo', 924, 'USA', 46.89, -96.93),
(7720, 'Fargo', 924, 'USA', 46.93, -96.83),
(7747, 'União Da Victoria', 773, 'BRA', -26.22, -51.08),
(8089, 'Pôrto Seguro', 121, 'BRA', -16.43, -39.08),
(8200, 'Barpeta', 416, 'IND', 26.32, 91),
(8304, 'Solon', 1008, 'IND', 30.92, 77.12),
(8479, 'Haldwani', 1200, 'IND', 29.22, 79.52),
(8747, 'Campina Grande', 1293, 'BRA', -7.22, -35.88),
(8828, 'João Pessoa', 1293, 'BRA', -7.12, -34.87),
(8881, 'Campo Grande', 1102, 'BRA', -20.45, -54.62),
(9077, 'Jiaozuo', 196, 'CHN', 35.24, 113.23),
(9299, 'Tongzhou', 6, 'CHN', 39.91, 116.6),
(9322, 'Udhampur', 1312, 'IND', 32.93, 75.13),
(9417, 'Panaji', 1334, 'IND', 15.48, 73.83),
(9446, 'Muzaffarpur', 728, 'IND', 26.12, 85.4),
(9548, 'Rondonópolis', 1457, 'BRA', -16.47, -54.63),
(10162, 'Ajaccio', 1483, 'FRA', 41.92, 8.73),
(10196, 'Itanagar', 1334, 'IND', 27.1, 93.62),
(10354, 'Begusarai', 728, 'IND', 25.42, 86.13),
(10358, 'Jaypur', 317, 'IND', 18.85, 82.58),
(10739, 'Crato', 46, 'BRA', -7.23, -39.38),
(10936, 'Guarabira', 1293, 'BRA', -6.85, -35.48),
(11046, 'Biguglia', 1483, 'FRA', 42.62, 9.42),
(11180, 'Tabuleiro Do Norte', 46, 'BRA', -5.25, -38.12),
(12462, 'Jiujiang', 1231, 'CHN', 29.62, 115.88),
(12661, 'Madgaon', 1334, 'IND', 15.3, 73.95),
(12805, 'Maceió', 1568, 'BRA', -9.67, -35.72),
(13310, 'Bhilai', 225, 'IND', 21.22, 81.43),
(13326, 'Rishikesh', 1200, 'IND', 30.12, 78.32),
(13333, 'Haridwar', 1200, 'IND', 29.97, 78.17),
(13413, 'Murici', 1568, 'BRA', -9.32, -35.93),
(13597, 'Pondicherry', 1596, 'IND', 11.93, 79.83),
(13652, 'Anápolis', 970, 'BRA', -16.33, -48.97),
(13669, 'Lichuan', 99, 'CHN', 30.3, 108.85),
(13687, 'Juazeiro Do Norte', 46, 'BRA', -7.2, -39.33),
(13749, 'Furiani', 1483, 'FRA', 42.65, 9.42),
(13880, 'Macau', 1269, 'BRA', -5.12, -36.63),
(13884, 'Xianyang', 268, 'CHN', 34.34, 108.71),
(14005, 'Hunyuan', 156, 'CHN', 39.7, 113.68),
(14628, 'Speloncato', 1483, 'FRA', 42.57, 8.97),
(15367, 'Imphal', 1654, 'IND', 24.82, 93.95),
(15812, 'Jammu', 1312, 'IND', 32.73, 74.87),
(15961, 'Salvador', 1673, 'BRA', -10.17, -48.87),
(16094, 'Ananindeua', 701, 'BRA', -1.37, -48.38),
(16190, 'Fengtai', 6, 'CHN', 39.85, 116.27),
(16259, 'Hengyang', 161, 'CHN', 26.89, 112.61),
(16264, 'Ujjain', 274, 'IND', 23.18, 75.77),
(16275, 'Dhanbad', 355, 'IND', 23.8, 86.45),
(16378, 'Itabuna', 121, 'BRA', -14.8, -39.27),
(17611, 'Nossa Senhora Do Socorro', 1011, 'BRA', -10.87, -37.12),
(17737, 'Bonfim', 1714, 'BRA', 3.08, -59.95),
(17979, 'Yalongwan', 178, 'CHN', 18.23, 109.7),
(18098, 'Luziânia', 970, 'BRA', -16.25, -47.93),
(18197, 'Ji-paraná', 1723, 'BRA', -10.83, -61.97),
(18611, 'Bokaro', 355, 'IND', 23.78, 85.97),
(18695, 'Liaohe', 307, 'CHN', 43.73, 122.3),
(18796, 'Lhasa', 1736, 'CHN', 29.65, 91.1),
(18997, 'Yuzhou', 196, 'CHN', 34.16, 113.46),
(19012, 'Yinchuan', 1741, 'CHN', 38.47, 106.27),
(19021, 'Tongji', 182, 'CHN', 31.18, 103.5),
(19030, 'Jingzhou', 99, 'CHN', 30.35, 112.19),
(19032, 'Camaçari', 121, 'BRA', -12.48, -38.22),
(19039, 'Enshi', 99, 'CHN', 30.3, 109.48),
(19061, 'Kaitai', 600, 'CHN', 26.23, 109.13),
(19239, 'Ürümqi', 1751, 'CHN', 43.8, 87.58),
(19263, 'Delhi Sabzimandi', 100, 'IND', 28.68, 77.2),
(19269, 'Huangzhong', 1753, 'CHN', 36.5, 101.6),
(19498, 'Liaoyüan', 334, 'CHN', 43.51, 123.51),
(19523, 'Yünnan', 1178, 'CHN', 25.48, 100.58),
(19552, 'Brazlândia', 842, 'BRA', -15.68, -48.2),
(19955, 'Samastipur', 728, 'IND', 25.85, 85.78),
(20013, 'Fortaleza', 1673, 'BRA', -5.98, -48.13),
(20245, 'Baotou', 178, 'CHN', 18.33, 109.53),
(20337, 'Nanping', 97, 'CHN', 29.09, 106.99),
(20370, 'Jiahe', 161, 'CHN', 25.55, 112.25),
(20435, 'Ning', 1310, 'CHN', 35.5, 107.92),
(20537, 'Mandi', 1008, 'IND', 31.72, 76.92),
(20756, 'Mudanjiang', 123, 'CHN', 44.58, 129.6),
(20908, 'Chüan', 90, 'CHN', 25.95, 111.07),
(20937, 'Baodi', 64, 'CHN', 39.72, 117.3),
(21166, 'Aizawl', 1791, 'IND', 23.72, 92.72),
(21220, 'Srinagar', 1312, 'IND', 34.09, 74.8),
(21470, 'Kashi', 1751, 'CHN', 39.45, 75.98),
(21536, 'Japoatã', 1011, 'BRA', -10.33, -36.8),
(21544, 'Itumbiara', 970, 'BRA', -18.42, -49.22),
(21578, 'Youyi', 123, 'CHN', 46.78, 131.81),
(21700, 'Mianyang', 182, 'CHN', 31.47, 104.77),
(21729, 'Longnan', 1231, 'CHN', 24.9, 114.78),
(22243, 'Shannan', 268, 'CHN', 33.53, 110.87),
(22740, 'São Bernardo', 1335, 'BRA', -3.37, -42.4),
(22772, 'Fenghua', 334, 'CHN', 43.3, 124.33),
(22793, 'Yongkang', 156, 'CHN', 37.63, 112.59),
(23243, 'Tianheng', 90, 'CHN', 22.49, 110.04),
(23889, 'Wuwei', 1310, 'CHN', 37.93, 102.64),
(24182, 'Palmas', 1673, 'BRA', -10.22, -48.28),
(24533, 'Baoding', 11, 'CHN', 38.85, 115.49),
(24777, 'Tefé', 838, 'BRA', -3.37, -64.7),
(24819, 'Xiangshan', 182, 'CHN', 31.04, 105.19),
(25071, 'Haiyan', 1753, 'CHN', 36.89, 101),
(25097, 'Nova Olímpia', 1457, 'BRA', -14.82, -57.33),
(25359, 'Silvassa', 1846, 'IND', 20.27, 73.02),
(25466, 'Lasa', 1736, 'CHN', 29.65, 91.1),
(25778, 'Huhehot', 307, 'CHN', 40.81, 111.65),
(25784, 'Karaikal', 1596, 'IND', 10.92, 79.83),
(25786, 'Korba', 225, 'IND', 22.35, 82.68),
(26150, 'Santo Antônio', 1269, 'BRA', -6.3, -35.45),
(26530, 'Shizuishan', 1741, 'CHN', 39.04, 106.4),
(26916, 'Xining', 1753, 'CHN', 36.62, 101.77),
(26930, 'Xinyuan', 1751, 'CHN', 43.45, 83.15),
(26936, 'Fengxiang', 268, 'CHN', 34.52, 107.39),
(28156, 'Hong', 1874, 'IND', 27.57, 93.85),
(28562, 'Gannan', 123, 'CHN', 47.91, 123.5),
(29140, 'Dong', 1178, 'CHN', 28.5, 98.87),
(29678, 'Santa Isabel Do Pará', 701, 'BRA', -1.27, -48.18),
(29818, 'Cuiabá', 1457, 'BRA', -15.58, -56.08),
(30811, 'Jiayuguan', 1310, 'CHN', 39.82, 98.3),
(31103, 'Parnaíba', 1297, 'BRA', -2.91, -41.77),
(32167, 'Pudong', 62, 'CHN', 31.24, 121.5),
(32668, 'Agartala', 1918, 'IND', 23.84, 91.28),
(33109, 'São José De Ribamar', 1335, 'BRA', -2.55, -44.05),
(33154, 'Ceilândia', 842, 'BRA', -15.82, -48.12),
(34046, 'Marechal Deodoro', 1568, 'BRA', -9.72, -35.9),
(34232, 'Kaiyuan', 1178, 'CHN', 23.71, 103.25),
(34757, 'Taiping', 97, 'CHN', 29.9, 106.04),
(35007, 'Eldorado', 1102, 'BRA', -23.78, -54.32),
(35293, 'Wuma', 600, 'CHN', 27.64, 106.25),
(35792, 'Pôrto Velho', 1723, 'BRA', -8.77, -63.9),
(37024, 'Jing', 1751, 'CHN', 44.65, 82.83),
(37198, 'Daan', 97, 'CHN', 29.38, 106.01),
(41443, 'Huochezhan', 1741, 'CHN', 38.96, 106.47),
(41456, 'Zhangpu', 236, 'CHN', 32.76, 118.79),
(41651, 'Shou', 236, 'CHN', 32.57, 116.77),
(41664, 'Xiangyang', 236, 'CHN', 29.93, 117.94),
(41822, 'Kecheng', 1753, 'CHN', 37.08, 97.69),
(41856, 'Lang', 1736, 'CHN', 29.05, 93.2),
(41872, 'Putuo', 62, 'CHN', 31.24, 121.42),
(41885, 'Yuan', 62, 'CHN', 31.53, 121.84),
(41907, 'Jianming', 64, 'CHN', 39, 117.31),
(47012, 'Tanggu', 64, 'CHN', 39.02, 117.65),
(62773, 'Tongliao', 307, 'CHN', 43.61, 122.27),
(62786, 'Huibei', 1741, 'CHN', 38.98, 106.65),
(63095, 'Nima', 1736, 'CHN', 31.92, 87.88),
(63323, 'Lagarto', 1011, 'BRA', -10.9, -37.68),
(63341, 'Rio Verde De Mato Grosso', 1102, 'BRA', -18.93, -54.87),
(64681, 'São Miguel Dos Campos', 1568, 'BRA', -9.78, -36.08),
(66383, 'São Paulo', 2113, 'BRA', -23.53, -46.62),
(66490, 'Mercês', 2116, 'BRA', -9.52, -68.7),
(66621, 'Cacoal', 1723, 'BRA', -11.5, -61.42),
(66622, 'Rio Branco', 2116, 'BRA', -9.97, -67.8),
(66623, 'Ariquemes', 1723, 'BRA', -9.93, -63.07),
(66654, 'Imperatriz', 1335, 'BRA', -5.53, -47.48),
(66696, 'Barra Do Garças', 1457, 'BRA', -15.88, -52.25),
(66701, 'Mossoró', 1269, 'BRA', -5.19, -37.34),
(66702, 'Macapá', 2113, 'BRA', 0.03, -51.05),
(66713, 'Pádua', 838, 'BRA', -7.33, -62.92),
(66726, 'Caracaraí', 1714, 'BRA', 1.83, -61.13),
(66727, 'Boa Vista', 1714, 'BRA', 2.82, -60.67),
(66739, 'Araguaína', 1673, 'BRA', -7.16, -48.06),
(66741, 'Cocal', 1297, 'BRA', -3.47, -41.57),
(66752, 'Júlia', 838, 'BRA', -1.62, -67.98),
(66936, 'Oiapoque', 2113, 'BRA', 3.83, -51.83),
(67011, 'Consolação', 1714, 'BRA', 3.93, -60.98),
(75883, 'Gangtok', 2320, 'IND', 27.33, 88.62),
(77715, 'Kohima', 2370, 'IND', 25.67, 94.12),
(79131, 'Minas Gerais', 2116, 'BRA', -8.97, -72.78),
(79674, 'Washington D.c', 249, 'USA', 38.9, -77.04);

-- --------------------------------------------------------

--
-- Table structure for table `Cohort`
--

CREATE TABLE `Cohort` (
  `CH_id` int NOT NULL,
  `CH_Name` text NOT NULL,
  `TC_id` int NOT NULL,
  `CU_id` int NOT NULL,
  `TP_id` int NOT NULL,
  `CH_Semester` int NOT NULL,
  `CH_InsertDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Cohort`
--

INSERT INTO `Cohort` (`CH_id`, `CH_Name`, `TC_id`, `CU_id`, `TP_id`, `CH_Semester`) VALUES
(1, '2020 Batch', 1, 1, 1, 0),
(2, '2022-Batch', 1, 6, 1, 2020);

-- --------------------------------------------------------

--
-- Table structure for table `CohortStudent`
--

CREATE TABLE `CohortStudent` (
  `CH_id` bigint NOT NULL,
  `ST_id` bigint NOT NULL,
  `ST_SeqNo` int NOT NULL,
  `ST_Rollid` int NOT NULL,
  `TC_id` bigint NOT NULL,
  `TP_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `CohortStudent`
--

INSERT INTO `CohortStudent` (`CH_id`, `ST_id`, `ST_SeqNo`, `ST_Rollid`, `TC_id`, `TP_id`) VALUES
(1, 1, 1, 1, 1, 1),
(1, 2, 2, 2, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `CompletedContent`
--

CREATE TABLE `CompletedContent` (
  `TC_id` int NOT NULL,
  `SS_id` int NOT NULL,
  `SP_id` int NOT NULL,
  `CompleteDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



-- --------------------------------------------------------

--
-- Table structure for table `CompletedSession`
--

CREATE TABLE `CompletedSession` (
  `CH_id` bigint NOT NULL,
  `SP_id` bigint NOT NULL,
  `CS_CompletionDate` datetime NOT NULL,
  `CS_StartDate` datetime NOT NULL,
  `CO_id` int NOT NULL,
  `TC_id` int NOT NULL,
  `TP_id` int NOT NULL,
  `STATUS` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



-- --------------------------------------------------------

--
-- Table structure for table `ConceptFAQ`
--

CREATE TABLE `ConceptFAQ` (
  `CF_id` bigint NOT NULL,
  `CF_Question` text NOT NULL,
  `CF_Answer` text NOT NULL,
  `CF_InsertDate` bigint NOT NULL,
  `SP_id` int NOT NULL,
  `CO_id` int NOT NULL,
  `CF_Keyword1` text NOT NULL,
  `CF_Keyword2` text NOT NULL,
  `CF_Keyword3` text NOT NULL,
  `CF_Keyword4` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ConceptFAQ`
--

INSERT INTO `ConceptFAQ` (`CF_id`, `CF_Question`, `CF_Answer`, `CF_InsertDate`, `SP_id`, `CO_id`, `CF_Keyword1`, `CF_Keyword2`, `CF_Keyword3`, `CF_Keyword4`) VALUES
(1, 'What is Cloud Computing?', 'Cloud computing consists of server and client.', 20201116, 1, 1, 'cloud', 'computing', 'what', ''),
(2, 'What is Mobile Computing?', 'It is a mobile', 20201116, 1, 1, 'computing', 'mobile', 'what', '');

-- --------------------------------------------------------

--
-- Table structure for table `Content`
--

CREATE TABLE `Content` (
  `CT_id` bigint NOT NULL,
  `CT_Name` text NOT NULL,
  `CT_Type` varchar(1) NOT NULL,
  `CT_ContentLink` text NOT NULL,
  `CT_Duration` int NOT NULL,
  `CT_InsertDate` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Content`
--

INSERT INTO `Content` (`CT_id`, `CT_Name`, `CT_Type`, `CT_ContentLink`, `CT_Duration`, `CT_InsertDate`) VALUES
(1, 'Content 1', 'V', 'https://www.w3schools.com/TAgs/movie.mp4', 10, 2020),
(2, 'Content 2', 'V', 'https://www.youtube.com/watch?v=jssO8-5qmag', 10, 2020),
(3, 'Content 3', 'P', 'http://africau.edu/images/default/sample.pdf', 10, 2020),
(4, 'Content 4', 'V', 'https://www.youtube.com/watch?v=jssO8-5qmag', 10, 2020),
(5, 'Content 5', 'V', 'https://www.w3schools.com/TAgs/movie.mp4', 10, 2020),
(6, 'Content 6', 'P', 'https://www.cisco.com/c/en/us/td/docs/voice_ip_comm/hucs/7-1a/user/getstart7-1a/bom.pdf', 10, 2020),
(7, 'Content 7', 'V', 'https://www.w3schools.com/TAgs/movie.mp4', 10, 2020),
(8, 'Content 8', 'V', 'https://www.youtube.com/watch?v=jssO8-5qmag', 10, 2020);

-- --------------------------------------------------------

--
-- Table structure for table `Countries`
--

CREATE TABLE `Countries` (
  `CT_id` varchar(3) NOT NULL DEFAULT '',
  `CT_Name` varchar(52) NOT NULL DEFAULT '',
  `CT_localName` varchar(45) NOT NULL,
  `CT_webCode` varchar(2) NOT NULL,
  `CT_region` varchar(26) NOT NULL,
  `CT_continent` enum('Asia','Europe','North America','Africa','Oceania','Antarctica','South America') NOT NULL,
  `CT_latitude` double NOT NULL DEFAULT '0',
  `CT_longitude` double NOT NULL DEFAULT '0',
  `CT_surfaceArea` float(10,2) NOT NULL DEFAULT '0.00',
  `CT_population` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `Countries`
--

INSERT INTO `Countries` (`CT_id`, `CT_Name`, `CT_localName`, `CT_webCode`, `CT_region`, `CT_continent`, `CT_latitude`, `CT_longitude`, `CT_surfaceArea`, `CT_population`) VALUES
('BRA', 'Brazil', 'Brasil', 'BR', 'South America', 'South America', -10, -55, 8547403.00, 170115000),
('CHN', 'China', 'Zhongquo', 'CN', 'Eastern Asia', 'Asia', 35, 105, 9572900.00, 1277558000),
('FRA', 'France', '', 'FR', 'Western Europe', 'Europe', 47, 2, 551500.00, 59225700),
('IND', 'India', 'Bharat/India', 'IN', 'Southern and Central Asia', 'Asia', 28.47, 77.03, 3287263.00, 1013662000),
('USA', 'USA', 'United States', 'US', 'North America', 'North America', 38, -97, 9363520.00, 278357000);

-- --------------------------------------------------------

--
-- Table structure for table `Course`
--

CREATE TABLE `Course` (
  `CO_id` bigint NOT NULL,
  `CO_Name` text,
  `CO_Desc` text,
  `CO_Duration` bigint DEFAULT NULL,
  `CO_Image` text,
  `CO_Insertdate` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Course`
--

INSERT INTO `Course` (`CO_id`, `CO_Name`, `CO_Desc`, `CO_Duration`, `CO_Image`, `CO_Insertdate`) VALUES
(1, 'Mobile Development', NULL, NULL, NULL, NULL),
(2, 'Cloud Implementation', NULL, NULL, NULL, NULL),
(3, 'Cyber Security', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Curriculum`
--

CREATE TABLE `Curriculum` (
  `CU_id` bigint NOT NULL,
  `CU_Name` text,
  `CU_Desc` text,
  `CU_Image` blob,
  `CU_Insertdate` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Curriculum`
--

INSERT INTO `Curriculum` (`CU_id`, `CU_Name`, `CU_Desc`, `CU_Image`, `CU_Insertdate`) VALUES
(1, 'BE Computer Science', NULL, NULL, 2020),
(2, 'BE Mechanical', NULL, NULL, 2020);

-- --------------------------------------------------------

--
-- Table structure for table `CurriculumDetails`
--

CREATE TABLE `CurriculumDetails` (
  `CU_id` bigint NOT NULL,
  `CO_id` bigint NOT NULL,
  `CO_SeqNo` int NOT NULL,
  `CO_Semester` int NOT NULL,
  `CO_Year` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `CurriculumDetails`
--

INSERT INTO `CurriculumDetails` (`CU_id`, `CO_id`, `CO_SeqNo`, `CO_Semester`, `CO_Year`) VALUES
(1, 1, 0, 1, 0),
(1, 2, 0, 1, 0),
(2, 1, 0, 1, 0),
(2, 2, 0, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `Entertainment`
--

CREATE TABLE `Entertainment` (
  `EN_id` bigint NOT NULL,
  `EN_Name` text,
  `EN_Type` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `EntertainmentVideo`
--

CREATE TABLE `EntertainmentVideo` (
  `EV_id` bigint NOT NULL,
  `EV_Name` text,
  `EV_Link` text,
  `EV_Content` blob,
  `EV_Insertdate` bigint DEFAULT NULL,
  `EN_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ExtraContent`
--

CREATE TABLE `ExtraContent` (
  `EC_id` bigint NOT NULL,
  `EC_Content` text,
  `EC_Link` text NOT NULL,
  `SC_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Joke`
--

CREATE TABLE `Joke` (
  `JK_id` bigint NOT NULL,
  `JK_Text` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `SessionPlan`
--

CREATE TABLE `SessionPlan` (
  `SP_id` bigint NOT NULL,
  `SP_Name` text NOT NULL,
  `SP_Duration` bigint DEFAULT NULL,
  `SP_Sequence` bigint DEFAULT NULL,
  `CO_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `SessionPlan`
--

INSERT INTO `SessionPlan` (`SP_id`, `SP_Name`, `SP_Duration`, `SP_Sequence`, `CO_id`) VALUES
(1, 'Session 1', NULL, 1, 1),
(2, 'Session 2', NULL, 2, 1),
(3, 'Session 1', NULL, 1, 2),
(4, 'Session 22', NULL, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `SessionQuestion`
--

CREATE TABLE `SessionQuestion` (
  `SZ_id` bigint NOT NULL,
  `SZ_SeqNum` int NOT NULL,
  `SZ_Question` text NOT NULL,
  `SZ_Type` varchar(1) NOT NULL,
  `SZ_Option1` text NOT NULL,
  `SZ_Option2` text NOT NULL,
  `SZ_Option3` text NOT NULL,
  `SZ_Option4` text NOT NULL,
  `SZ_AnswerText` text NOT NULL,
  `SC_id` bigint NOT NULL,
  `SQ_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `SessionQuiz`
--

CREATE TABLE `SessionQuiz` (
  `SQ_id` bigint NOT NULL,
  `SQ_Name` text NOT NULL,
  `SQ_Duration` int NOT NULL,
  `SQ_InsertDate` bigint NOT NULL,
  `SC_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `SessionSect`
--

CREATE TABLE `SessionSect` (
  `SS_id` int NOT NULL,
  `SS_Name` text NOT NULL,
  `SS_Duration` int NOT NULL,
  `SS_Type` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `SessionSect`
--

INSERT INTO `SessionSect` (`SS_id`, `SS_Name`, `SS_Duration`, `SS_Type`) VALUES
(1001, 'Session1', 112, 'V'),
(1002, 'Session2', 60, 'V'),
(1003, 'Session3', 15, 'P'),
(1004, 'Session4', 120, 'V'),
(1005, 'Session5', 15, 'P');

-- --------------------------------------------------------

--
-- Table structure for table `SessionSection`
--

CREATE TABLE `SessionSection` (
  `SS_id` bigint NOT NULL,
  `SS_Content` text NOT NULL,
  `SS_ContentType` varchar(1) NOT NULL,
  `SS_Type` varchar(1) NOT NULL,
  `SS_Seqnum` bigint DEFAULT NULL,
  `SS_Duration` bigint DEFAULT NULL,
  `SP_id` bigint NOT NULL,
  `CO_id` bigint NOT NULL,
  `CT_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `SessionSection`
--

INSERT INTO `SessionSection` (`SS_id`, `SS_Content`, `SS_ContentType`, `SS_Type`, `SS_Seqnum`, `SS_Duration`, `SP_id`, `CO_id`, `CT_id`) VALUES
(1, 'Introduction', 'V', 'G', 1, 10, 1, 1, 1),
(2, 'Next Video', 'V', 'H', 2, 10, 1, 1, 2),
(3, 'Pdf View', 'P', 'G', 3, 10, 2, 1, 3),
(4, 'Video', 'V', 'H', 4, 10, 2, 1, 4),
(5, 'Introduction', 'V', 'G', 1, 10, 3, 2, 5),
(6, 'PdfView', 'P', 'G', 2, 10, 3, 2, 6),
(7, 'Recap', 'V', 'H', 3, 10, 4, 2, 7),
(8, 'Video', 'V', 'H', 4, 10, 4, 2, 8);

-- --------------------------------------------------------

--
-- Table structure for table `SQuizResult`
--

CREATE TABLE `SQuizResult` (
  `SQ_id` int NOT NULL,
  `FQ_id` int NOT NULL,
  `SQ_Result` int NOT NULL,
  `ST_id` int NOT NULL,
  `SQ_DateAnswered` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `States`
--

CREATE TABLE `States` (
  `ST_id` smallint UNSIGNED NOT NULL,
  `ST_Name` varchar(50) NOT NULL DEFAULT '',
  `CT_id` varchar(3) NOT NULL,
  `ST_latitude` double NOT NULL DEFAULT '0',
  `ST_longitude` double NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `States`
--

INSERT INTO `States` (`ST_id`, `ST_Name`, `CT_id`, `ST_latitude`, `ST_longitude`) VALUES
(5, 'California', 'USA', 37.42, -122.06),
(6, 'Beijing', 'CHN', 39.93, 116.39),
(9, 'Iowa', 'USA', 43.03, -96.09),
(10, 'New York', 'USA', 40.76, -73.97),
(11, 'Hebei', 'CHN', 39.89, 115.28),
(12, 'Jiangsu', 'CHN', 32.06, 118.78),
(14, 'New Jersey', 'USA', 39.82, -75.13),
(15, 'Massachusetts', 'USA', 42.56, -72.18),
(16, 'Connecticut', 'USA', 41.14, -73.26),
(17, 'Guangdong', 'CHN', 23.12, 113.25),
(19, 'Florida', 'USA', 28.05, -82.36),
(24, 'Texas', 'USA', 30.27, -97.74),
(28, 'Armed Forces US', 'USA', 60, -100),
(32, 'Tennessee', 'USA', 35.04, -89.93),
(33, 'Kentucky', 'USA', 39.02, -84.56),
(34, 'Ile-de-France', 'FRA', 48.8, 2.5),
(35, 'Georgia', 'USA', 33.84, -84.38),
(37, 'Rio de Janeiro', 'BRA', -22.9, -43.23),
(44, 'Illinois', 'USA', 42.05, -88.05),
(46, 'Ceara', 'BRA', -3.32, -41.42),
(47, 'Colorado', 'USA', 39.74, -104.98),
(48, 'Zhejiang', 'CHN', 28.02, 120.65),
(49, 'Utah', 'USA', 40.76, -111.89),
(52, 'Liaoning', 'CHN', 41.79, 123.43),
(56, 'Haryana', 'IND', 28.47, 77.03),
(57, 'Maryland', 'USA', 39.1, -76.88),
(62, 'Shanghai', 'CHN', 31, 121.41),
(64, 'Tianjin', 'CHN', 39.14, 117.18),
(72, 'South Carolina', 'USA', 33.92, -80.34),
(73, 'Montana', 'USA', 45.77, -110.93),
(76, 'Louisiana', 'USA', 29.91, -90.05),
(77, 'Fujian', 'CHN', 24.47, 118.09),
(78, 'Santa Catarina', 'BRA', -26.48, -49.07),
(80, 'Espirito Santo', 'BRA', -20.12, -40.3),
(84, 'Washington', 'USA', 47.09, -122.65),
(85, 'Andhra Pradesh', 'IND', 17.38, 78.47),
(87, 'Pennsylvania', 'USA', 40.45, -79.99),
(90, 'Guangxi', 'CHN', 22.82, 108.32),
(93, 'North Carolina', 'USA', 35.75, -78.72),
(94, 'Shandong', 'CHN', 37.26, 117.08),
(97, 'Chongqing', 'CHN', 29.56, 106.55),
(98, 'Michigan', 'USA', 43.93, -86.26),
(99, 'Hubei', 'CHN', 30.58, 114.27),
(100, 'Delhi', 'IND', 28.67, 77.22),
(101, 'Arkansas', 'USA', 36.19, -94.24),
(107, 'Wisconsin', 'USA', 44.63, -90.2),
(112, 'Midi-Pyrenees', 'FRA', 43.73, 1.42),
(116, 'Picardie', 'FRA', 49.02, 1.9),
(121, 'Bahia', 'BRA', -12.98, -38.52),
(123, 'Heilongjiang', 'CHN', 45.75, 126.65),
(128, 'Tamil Nadu', 'IND', 13.08, 80.28),
(129, 'Ohio', 'USA', 39.11, -84.5),
(132, 'New Mexico', 'USA', 35.78, -105.87),
(133, 'Kansas', 'USA', 37.69, -97.34),
(136, 'Oregon', 'USA', 45.44, -122.97),
(138, 'Uttar Pradesh', 'IND', 27.18, 78.02),
(140, 'Nebraska', 'USA', 41.11, -95.93),
(143, 'West Virginia', 'USA', 39.46, -77.95),
(144, 'Virginia', 'USA', 37.13, -76.45),
(145, 'Missouri', 'USA', 38.25, -94.31),
(148, 'Mississippi', 'USA', 32.37, -90.11),
(151, 'Rhode Island', 'USA', 41.82, -71.41),
(155, 'Sao Paulo', 'BRA', -23.95, -46.33),
(156, 'Shanxi', 'CHN', 37.9, 112.19),
(160, 'Karnataka', 'IND', 12.98, 77.58),
(161, 'Hunan', 'CHN', 26.97, 109.77),
(163, 'Indiana', 'USA', 39.79, -86.17),
(164, 'Oklahoma', 'USA', 34.66, -98.48),
(175, 'Minnesota', 'USA', 44.98, -93.27),
(176, 'Alabama', 'USA', 33.8, -87.28),
(178, 'Hainan', 'CHN', 19.14, 110.48),
(181, 'Arizona', 'USA', 33.46, -111.99),
(182, 'Sichuan', 'CHN', 30.67, 104.07),
(186, 'South Dakota', 'USA', 43.72, -98.03),
(187, 'Maharashtra', 'IND', 18.98, 72.83),
(192, 'Nevada', 'USA', 36.17, -115.28),
(196, 'Henan', 'CHN', 34.22, 113.77),
(206, 'Kerala', 'IND', 8.51, 76.96),
(215, 'New Hampshire', 'USA', 42.87, -71.39),
(218, 'Maine', 'USA', 44.08, -70.17),
(220, 'Hawaii', 'USA', 21.3, -157.79),
(225, 'Chhattisgarh', 'IND', 21.18, 81.28),
(236, 'Anhui', 'CHN', 31.86, 117.28),
(249, 'District of Columbia', 'USA', 38.9, -77.04),
(254, 'Delaware', 'USA', 39.62, -75.7),
(258, 'West Bengal', 'IND', 22.57, 88.37),
(268, 'Shaanxi', 'CHN', 34.26, 108.94),
(274, 'Madhya Pradesh', 'IND', 22.72, 75.83),
(284, 'Gujarat', 'IND', 23.03, 72.62),
(296, 'Franche-Comte', 'FRA', 47.63, 6.87),
(305, 'Idaho', 'USA', 48.39, -116.89),
(306, 'Rajasthan', 'IND', 26.92, 75.82),
(307, 'Nei Mongol', 'CHN', 49.2, 119.7),
(315, 'Alsace', 'FRA', 48.58, 7.75),
(317, 'Orissa', 'IND', 20.5, 85.83),
(334, 'Jilin', 'CHN', 43.88, 125.32),
(355, 'Jharkhand', 'IND', 23.35, 85.33),
(363, 'Chandigarh', 'IND', 30.74, 76.79),
(377, 'Punjab', 'IND', 30.9, 75.85),
(409, 'Languedoc-Roussillon', 'FRA', 43.4, 3.68),
(416, 'Assam', 'IND', 24.82, 92.8),
(431, 'Centre', 'FRA', 47.08, 2.4),
(469, 'Champagne-Ardenne', 'FRA', 49.42, 4.5),
(471, 'Bretagne', 'FRA', 48.77, 2.3),
(544, 'Rhone-Alpes', 'FRA', 45.75, 4.85),
(555, 'Nord-Pas-de-Calais', 'FRA', 50.75, 2.15),
(556, 'Lorraine', 'FRA', 48.68, 6.2),
(561, 'Rio Grande do Sul', 'BRA', -30.03, -51.2),
(563, 'Provence-Alpes-Cote d\'Azur', 'FRA', 44.4, 4.93),
(586, 'Minas Gerais', 'BRA', -19.92, -43.93),
(598, 'Limousin', 'FRA', 45.85, 1.25),
(600, 'Guizhou', 'CHN', 26.58, 106.72),
(635, 'Haute-Normandie', 'FRA', 49.15, 1.33),
(649, 'Poitou-Charentes', 'FRA', 45.65, 0.15),
(667, 'Wyoming', 'USA', 44.78, -107.55),
(676, 'Daman and Diu', 'IND', 20.37, 72.9),
(701, 'Para', 'BRA', -1.27, -48.18),
(708, 'Basse-Normandie', 'FRA', 49.15, 0.23),
(728, 'Bihar', 'IND', 25.6, 85.12),
(729, 'Aquitaine', 'FRA', 45.12, 0.4),
(773, 'Parana', 'BRA', -25.42, -49.25),
(798, 'Auvergne', 'FRA', 46.28, 3.6),
(808, 'Pernambuco', 'BRA', -8.05, -34.9),
(822, 'Pays de la Loire', 'FRA', 47.47, 0.2),
(838, 'Amazonas', 'BRA', -3.11, -60.03),
(842, 'Distrito Federal', 'BRA', -15.78, -47.92),
(924, 'North Dakota', 'USA', 46.96, -97.68),
(937, 'Bourgogne', 'FRA', 47.8, 3.57),
(959, 'Vermont', 'USA', 44.49, -73.23),
(970, 'Goias', 'BRA', -15.93, -50.13),
(1008, 'Himachal Pradesh', 'IND', 31.1, 77.17),
(1011, 'Sergipe', 'BRA', -11.27, -37.43),
(1061, 'Alaska', 'USA', 61.52, -149.57),
(1102, 'Mato Grosso do Sul', 'BRA', -22.22, -54.8),
(1178, 'Yunnan', 'CHN', 25.04, 102.72),
(1200, 'Uttarakhand', 'IND', 30.32, 78.03),
(1203, 'Meghalaya', 'IND', 25.58, 91.87),
(1231, 'Jiangxi', 'CHN', 28.55, 115.93),
(1269, 'Rio Grande do Norte', 'BRA', -5.78, -35.22),
(1293, 'Paraiba', 'BRA', -7.22, -35.88),
(1297, 'Piaui', 'BRA', -5.08, -42.82),
(1310, 'Gansu', 'CHN', 36.06, 103.79),
(1312, 'Jammu and Kashmir', 'IND', 33.8, 74.26),
(1334, 'Goa', 'IND', 15.27, 73.92),
(1335, 'Maranhao', 'BRA', -2.52, -44.27),
(1457, 'Mato Grosso', 'BRA', -15.58, -56.08),
(1483, 'Corse', 'FRA', 41.92, 8.73),
(1568, 'Alagoas', 'BRA', -9.67, -35.72),
(1596, 'Puducherry', 'IND', 11.93, 79.83),
(1654, 'Manipur', 'IND', 24.82, 93.95),
(1673, 'Tocantins', 'BRA', -10.22, -48.28),
(1714, 'Roraima', 'BRA', 3.83, -60.22),
(1723, 'Rondonia', 'BRA', -10.67, -62.3),
(1736, 'Xizang', 'CHN', 29.65, 91.1),
(1741, 'Ningxia', 'CHN', 38.47, 106.27),
(1751, 'Xinjiang', 'CHN', 43.8, 87.58),
(1753, 'Qinghai', 'CHN', 36.5, 101.6),
(1791, 'Mizoram', 'IND', 23.72, 92.72),
(1846, 'Dadra and Nagar Haveli', 'IND', 20.27, 73.02),
(1874, 'Arunachal Pradesh', 'IND', 27.57, 93.85),
(1918, 'Tripura', 'IND', 23.84, 91.28),
(2113, 'Amapa', 'BRA', 0.03, -51.05),
(2116, 'Acre', 'BRA', -9.97, -67.8),
(2320, 'Sikkim', 'IND', 27.33, 88.62),
(2370, 'Nagaland', 'IND', 25.67, 94.12);

-- --------------------------------------------------------

--
-- Table structure for table `Student`
--

CREATE TABLE `Student` (
  `ST_id` bigint NOT NULL,
  `ST_Username` text,
  `ST_Salutation` text,
  `ST_Firstname` text,
  `ST_Lastname` text,
  `ST_Password` text,
  `ST_Dob` bigint DEFAULT NULL,
  `ST_Address` text,
  `ST_Insertdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `CY_id` bigint NOT NULL,
  `ST_Registrationstatus` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Student`
--

INSERT INTO `Student` (`ST_id`, `ST_Username`, `ST_Salutation`, `ST_Firstname`, `ST_Lastname`, `ST_Password`, `ST_Dob`, `ST_Address`, `CY_id`, `ST_Registrationstatus`) VALUES
(1, 'student1@test.com', 'Mr', 'Student 1', NULL, 'test', NULL, NULL, 1, 'C'),
(2, 'student2@test.com', 'Mr', 'Student 2', NULL, 'test', NULL, NULL, 1, 'C');

-- --------------------------------------------------------

--
-- Table structure for table `Teacher`
--

CREATE TABLE `Teacher` (
  `TE_id` bigint NOT NULL,
  `TE_Emailid` text,
  `TE_Password` text,
  `TE_FirstName` text,
  `TE_LastName` text,
  `TE_Address` text,
  `TE_InsertDate` bigint DEFAULT NULL,
  `CY_id` int NOT NULL,
  `TC_id` int NOT NULL,
  `TE_RegistrationStatus` varchar(1) NOT NULL,
  `TP_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Teacher`
--

INSERT INTO `Teacher` (`TE_id`, `TE_Emailid`, `TE_Password`, `TE_FirstName`, `TE_LastName`, `TE_Address`, `TE_InsertDate`, `CY_id`, `TC_id`, `TE_RegistrationStatus`, `TP_id`) VALUES
(1, 'teacher@gmail.com', 'teacher', 'Teacher', NULL, NULL, NULL, 0, 1, 'C', 1);

-- --------------------------------------------------------

--
-- Table structure for table `TrainingCenter`
--

CREATE TABLE `TrainingCenter` (
  `TC_id` int NOT NULL,
  `TC_Name` text NOT NULL,
  `TC_SPOCName` text NOT NULL,
  `TC_SPOCEmail` text NOT NULL,
  `TC_SPOCPassword` text NOT NULL,
  `TC_SPOCPHNo` text NOT NULL,
  `TC_City` int NOT NULL,
  `TC_Address` varchar(200) NOT NULL,
  `TC_InsertDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `TP_id` int NOT NULL,
  `TC_RegistrationStatus` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `TrainingCenter`
--

INSERT INTO `TrainingCenter` (`TC_id`, `TC_Name`, `TC_SPOCName`, `TC_SPOCEmail`, `TC_SPOCPassword`, `TC_SPOCPHNo`, `TC_City`, `TC_Address`, `TP_id`, `TC_RegistrationStatus`) VALUES
(1, 'Training Center 1', '', 'test@test.com', 'test', '', 0, '', 1, 'C');

-- --------------------------------------------------------

--
-- Table structure for table `TrainingCenterCurriculum`
--

CREATE TABLE `TrainingCenterCurriculum` (
  `TP_id` int NOT NULL,
  `TC_id` int NOT NULL,
  `CU_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `TrainingCenterCurriculum`
--

INSERT INTO `TrainingCenterCurriculum` (`TP_id`, `TC_id`, `CU_id`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `TrainingPartner`
--

CREATE TABLE `TrainingPartner` (
  `TP_id` smallint NOT NULL,
  `TP_Name` text,
  `TP_SPOCName` text NOT NULL,
  `TP_SPOCPHNo` text NOT NULL,
  `TP_SPOCEmail` text NOT NULL,
  `TP_SPOCPassword` text NOT NULL,
  `TP_Address` text,
  `TP_InsertDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `TP_RegistrationStatus` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `TrainingPartner`
--

INSERT INTO `TrainingPartner` (`TP_id`, `TP_Name`, `TP_SPOCName`, `TP_SPOCPHNo`, `TP_SPOCEmail`, `TP_SPOCPassword`, `TP_Address`, `TP_RegistrationStatus`) VALUES
(1, 'Training Partner 1', '', '', '', '', NULL, 'C');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Assessment`
--
ALTER TABLE `Assessment`
  ADD PRIMARY KEY (`AM_id`);

--
-- Indexes for table `AssessmentQuestion`
--
ALTER TABLE `AssessmentQuestion`
  ADD PRIMARY KEY (`AQ_id`);

--
-- Indexes for table `Cities`
--
ALTER TABLE `Cities`
  ADD PRIMARY KEY (`CY_id`);

--
-- Indexes for table `ConceptFAQ`
--
ALTER TABLE `ConceptFAQ`
  ADD PRIMARY KEY (`CF_id`);

--
-- Indexes for table `Content`
--
ALTER TABLE `Content`
  ADD PRIMARY KEY (`CT_id`);

--
-- Indexes for table `Countries`
--
ALTER TABLE `Countries`
  ADD PRIMARY KEY (`CT_id`);

--
-- Indexes for table `Course`
--
ALTER TABLE `Course`
  ADD PRIMARY KEY (`CO_id`);

--
-- Indexes for table `Curriculum`
--
ALTER TABLE `Curriculum`
  ADD PRIMARY KEY (`CU_id`);

--
-- Indexes for table `CurriculumDetails`
--
ALTER TABLE `CurriculumDetails`
  ADD PRIMARY KEY (`CU_id`,`CO_id`);

--
-- Indexes for table `Entertainment`
--
ALTER TABLE `Entertainment`
  ADD PRIMARY KEY (`EN_id`);

--
-- Indexes for table `EntertainmentVideo`
--
ALTER TABLE `EntertainmentVideo`
  ADD PRIMARY KEY (`EV_id`);

--
-- Indexes for table `ExtraContent`
--
ALTER TABLE `ExtraContent`
  ADD PRIMARY KEY (`EC_id`);

--
-- Indexes for table `Joke`
--
ALTER TABLE `Joke`
  ADD PRIMARY KEY (`JK_id`);

--
-- Indexes for table `SessionPlan`
--
ALTER TABLE `SessionPlan`
  ADD PRIMARY KEY (`SP_id`);

--
-- Indexes for table `SessionSect`
--
ALTER TABLE `SessionSect`
  ADD PRIMARY KEY (`SS_id`);

--
-- Indexes for table `SessionSection`
--
ALTER TABLE `SessionSection`
  ADD PRIMARY KEY (`SS_id`,`SP_id`,`CO_id`,`CT_id`);

--
-- Indexes for table `States`
--
ALTER TABLE `States`
  ADD PRIMARY KEY (`ST_id`);

--
-- Indexes for table `Student`
--
ALTER TABLE `Student`
  ADD PRIMARY KEY (`ST_id`);

--
-- Indexes for table `Teacher`
--
ALTER TABLE `Teacher`
  ADD PRIMARY KEY (`TE_id`);

--
-- Indexes for table `TrainingCenter`
--
ALTER TABLE `TrainingCenter`
  ADD PRIMARY KEY (`TC_id`,`TP_id`);

--
-- Indexes for table `TrainingCenterCurriculum`
--
ALTER TABLE `TrainingCenterCurriculum`
  ADD PRIMARY KEY (`TP_id`,`TC_id`,`CU_id`);

--
-- Indexes for table `TrainingPartner`
--
ALTER TABLE `TrainingPartner`
  ADD PRIMARY KEY (`TP_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
