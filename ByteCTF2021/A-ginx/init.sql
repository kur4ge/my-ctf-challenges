SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for articles
-- ----------------------------
DROP TABLE IF EXISTS `articles`;
CREATE TABLE `articles`  (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `html_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `plain_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `submission_time` bigint NULL DEFAULT NULL,
  `is_public` tinyint(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of articles
-- ----------------------------
INSERT INTO `articles` VALUES ('00000000-0000-0000-0000-000000000000', '【原创音乐】《超级敏感》A-SOUL全新团曲MV', 'admin', '<iframe src=\"//player.bilibili.com/player.html?aid=715292002&bvid=BV1vQ4y1Z7C2&cid=331045702&page=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\" width=\"1080\" height=\"720\"> </iframe>', '【原创音乐】《超级敏感》A-SOUL全新团曲MV', 0, 1);
INSERT INTO `articles` VALUES ('00000000-0000-0000-0000-000000000001', '【原创音乐】《Quiet》 A-SOUL首个单曲发表~PV付', 'admin', '<iframe src=\"//player.bilibili.com/player.html?aid=500420046&bvid=BV1YK411V7N3&cid=261970964&page=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\" width=\"1080\" height=\"720\"> </iframe>', '【原创音乐】《Quiet》 A-SOUL首个单曲发表~PV付', 0, 1);
INSERT INTO `articles` VALUES ('00000000-0000-0000-0000-000000000002', '【翻唱】《猫中毒》完整版PV/嘉然', 'admin', '<iframe src=\"//player.bilibili.com/player.html?aid=714893724&bvid=BV1FX4y1g7u8&cid=318542946&page=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\" width=\"1080\" height=\"720\"> </iframe>', '【翻唱】《猫中毒》完整版PV/嘉然', 0, 1);
INSERT INTO `articles` VALUES ('00000000-0000-0000-0000-000000000003', '【舞蹈剧】舞蹈就是我的生命，重新认识下，我是贝拉（直播剪辑）', 'admin', '<iframe src=\"//player.bilibili.com/player.html?aid=376670460&bvid=BV1oo4y1X7Ca&cid=371188324&page=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\" width=\"1080\" height=\"720\"> </iframe>', '【舞蹈剧】舞蹈就是我的生命，重新认识下，我是贝拉（直播剪辑）', 0, 1);
INSERT INTO `articles` VALUES ('00000000-0000-0000-0000-000000000004', '【A-SOUL/贝&珈&嘉】太潮啦！师徒三人演绎《隔岸 (DJ)》', 'admin', '<iframe src=\"//player.bilibili.com/player.html?aid=763015513&bvid=BV1M64y1a7zh&cid=411157817&page=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\" width=\"1080\" height=\"720\"> </iframe>', '【A-SOUL/贝&珈&嘉】太潮啦！师徒三人演绎《隔岸 (DJ)》', 0, 1);
INSERT INTO `articles` VALUES ('00000000-0000-0000-0000-000000000005', '【翻跳】❀浪人琵琶❀你腼腆一笑竟如此融洽~', 'admin', '<iframe src=\"//player.bilibili.com/player.html?aid=460411298&bvid=BV1d5411g7g2&cid=336676712&page=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\" width=\"1080\" height=\"720\"> </iframe>', '【翻跳】❀浪人琵琶❀你腼腆一笑竟如此融洽~', 0, 1);
INSERT INTO `articles` VALUES ('00000000-0000-0000-0000-000000000006', '【A-SOUL翻跳】精修舞台版《寄明月》', 'admin', '<iframe src=\"//player.bilibili.com/player.html?aid=459141852&bvid=BV1Q541177wA&cid=295963797&page=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\" width=\"1080\" height=\"720\"> </iframe>', '【A-SOUL翻跳】精修舞台版《寄明月》', 0, 1);
INSERT INTO `articles` VALUES ('00000000-0000-0000-0000-000000000007', '【珈乐】《红色高跟鞋》翻唱【附剧情版MV】', 'admin', '<iframe src=\"//player.bilibili.com/player.html?aid=632876483&bvid=BV1db4y117Q1&cid=408134860&page=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\" width=\"1080\" height=\"720\"> </iframe>', '【珈乐】《红色高跟鞋》翻唱【附剧情版MV】', 0, 1);
INSERT INTO `articles` VALUES ('00000000-0000-0000-0000-000000000008', '【向晚Rap】To someone loves me（直播剪辑）', 'admin', '<iframe src=\"//player.bilibili.com/player.html?aid=461212096&bvid=BV1T5411T7u8&cid=355589183&page=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\" width=\"1080\" height=\"720\"> </iframe>', '【向晚Rap】To someone loves me（直播剪辑）', 0, 1);
INSERT INTO `articles` VALUES ('00000000-0000-0000-0000-000000000009', '【翻唱】乃琳《日不落》【直播剪辑】', 'admin', '<iframe src=\"//player.bilibili.com/player.html?aid=887948721&bvid=BV1MK4y1A7FE&cid=335544586&page=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\" width=\"1080\" height=\"720\"> </iframe>', '【翻唱】乃琳《日不落》【直播剪辑】', 0, 1);

-- ----------------------------
-- Table structure for tags
-- ----------------------------
DROP TABLE IF EXISTS `tags`;
CREATE TABLE `tags`  (
  `aid` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `tags` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`aid`, `tags`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tags
-- ----------------------------
INSERT INTO `tags` VALUES ('00000000-0000-0000-0000-000000000000', '乃琳');
INSERT INTO `tags` VALUES ('00000000-0000-0000-0000-000000000000', '向晚');
INSERT INTO `tags` VALUES ('00000000-0000-0000-0000-000000000000', '嘉然');
INSERT INTO `tags` VALUES ('00000000-0000-0000-0000-000000000000', '珈乐');
INSERT INTO `tags` VALUES ('00000000-0000-0000-0000-000000000000', '贝拉');
INSERT INTO `tags` VALUES ('00000000-0000-0000-0000-000000000001', '乃琳');
INSERT INTO `tags` VALUES ('00000000-0000-0000-0000-000000000001', '向晚');
INSERT INTO `tags` VALUES ('00000000-0000-0000-0000-000000000001', '嘉然');
INSERT INTO `tags` VALUES ('00000000-0000-0000-0000-000000000001', '珈乐');
INSERT INTO `tags` VALUES ('00000000-0000-0000-0000-000000000001', '贝拉');
INSERT INTO `tags` VALUES ('00000000-0000-0000-0000-000000000002', '嘉然');
INSERT INTO `tags` VALUES ('00000000-0000-0000-0000-000000000003', '贝拉');
INSERT INTO `tags` VALUES ('00000000-0000-0000-0000-000000000004', '嘉然');
INSERT INTO `tags` VALUES ('00000000-0000-0000-0000-000000000004', '珈乐');
INSERT INTO `tags` VALUES ('00000000-0000-0000-0000-000000000004', '贝拉');
INSERT INTO `tags` VALUES ('00000000-0000-0000-0000-000000000005', '嘉然');
INSERT INTO `tags` VALUES ('00000000-0000-0000-0000-000000000006', '乃琳');
INSERT INTO `tags` VALUES ('00000000-0000-0000-0000-000000000006', '向晚');
INSERT INTO `tags` VALUES ('00000000-0000-0000-0000-000000000006', '嘉然');
INSERT INTO `tags` VALUES ('00000000-0000-0000-0000-000000000006', '珈乐');
INSERT INTO `tags` VALUES ('00000000-0000-0000-0000-000000000006', '贝拉');
INSERT INTO `tags` VALUES ('00000000-0000-0000-0000-000000000007', '珈乐');
INSERT INTO `tags` VALUES ('00000000-0000-0000-0000-000000000008', '向晚');
INSERT INTO `tags` VALUES ('00000000-0000-0000-0000-000000000009', '乃琳');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'admin', 'The_Passw0rd_y0u_w1lI_n3ver_kn0w!!!_9f3253946623');

SET FOREIGN_KEY_CHECKS = 1;
