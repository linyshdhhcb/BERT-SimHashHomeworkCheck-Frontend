# 基于 SimHash 与 BERT 的高校学生作业查重系统

​	该项目旨在通过结合 **SimHash** 算法与 **BERT-Base-Chinese** 模型，实现对高校学生作业的智能查重，支持文件批量处理与历史作业比对，自动生成查重结果的 Excel 报告。系统基于 Spring Boot 构建，采用 MySQL 存储数据，并集成多种第三方工具（如 EasyExcel、HanLP、Apache POI 等）实现文件解析、文本分词、相似度计算以及结果输出。

## 项目特点

1. **多维度相似度检测：**
	使用多种相似度算法，包括 Jaccard 相似度、海明距离、Hash 相似度、余弦相似度、图片相似度以及加权相似度，从多个角度精准评估文件间相似性。
2. **批量查重：**
	- 支持单次输入一个文件夹路径，对所有作业文件进行查重，并将结果导出为 Excel 文件。
	- 支持指定“今年作业文件夹”和“去年作业文件夹”，实现今年每个文件与往年所有文件的两两对比，并自动生成查重结果的 Excel 报告。
3. **完善的 CRUD 操作：**
	基于 MySQL 构建两个主要数据表（`similarity_outcome` 与 `files`），提供文件信息管理和查重结果存储，方便后续数据查询与管理。
4. **高性能与并发处理：**
	项目依赖 Guava 等多线程支持库，实现高效的并发处理，适用于大批量文件的查重任务。

## 系统架构

### 后端

项目整体采用 **Spring Boot** 框架，主要模块包括：

- **文件解析模块：**
	利用 Apache PDFBox、Jsoup 等工具解析 PDF、HTML、TXT 等格式文件，提取文本内容。
- **预处理与特征提取：**
	利用 HanLP 对文本进行分词处理，并结合 BERT 模型生成文本特征向量，同时使用 SimHash 算法计算文档指纹。
- **相似度计算模块：**
	综合计算 Jaccard、海明距离、余弦、Hash 等多种相似度指标，并依据一定的加权规则，最终生成查重结果。
- **数据存储与管理：**
	使用 MySQL 存储文件信息（表 `files`）及查重结果（表 `similarity_outcome`），支持数据的增删改查操作。
- **结果输出模块：**
	通过 EasyExcel 将查重结果生成标准 Excel 文件，方便用户查阅与统计。

### 环境依赖与构建

项目基于 Maven 构建，主要依赖如下（具体版本请参考 `pom.xml`）：

| 名称                                      | 版本号         | 说明                                                         |
| ----------------------------------------- | -------------- | ------------------------------------------------------------ |
| **JDK**                                   | 21             |                                                              |
| **Spring Boot **                          | 3.0.5          | 项目的基础框架，统一管理 Spring Boot 相关配置与依赖版本      |
| **Knife4j**                               | 4.2.0          | 用于生成和展示 REST API 文档，方便接口调试与查看             |
| **Guava**                                 | 31.1-jre       | 提供多线程工具及高性能集合类，优化并发及数据处理             |
| **EasyExcel**                             | 4.0.0          | Excel 文件读写工具，方便生成查重结果报表                     |
| **Apache Commons Lang3**                  | 3.15.0         | Java 常用工具类库，扩展 JDK 核心 API 功能                    |
| **Jsoup**                                 | 1.10.3         | HTML 解析工具，用于解析网页及文件中的内容                    |
| **HanLP**                                 | portable-1.7.6 | 中文分词及自然语言处理库，用于提取文本特征和语义向量         |
| **Apache PDFBox**                         | 2.0.24         | PDF 文件解析工具，用于处理作业中的 PDF 文件                  |
| **Apache POI**                            | 5.2.3          | 处理 Office 文件（Excel、Word 等）的工具，支持文件内容解析和生成 |
| **Apache POI OOXML**                      | 5.2.3          | 专用于处理 OOXML 格式文件（如 .xlsx）的扩展包                |
| **Apache POI OOXML Schemas**              | 4.1.2          | 补充 Apache POI 处理 OOXML 文件所需的额外 Schema 支持        |
| **Apache POI Scratchpad**                 | 5.2.2          | 提供额外的 POI 工具支持，便于处理特殊格式或旧版 Office 文件  |
| **OkHttp**                                | 4.11.0         | 高效的 HTTP 客户端，用于发起网络请求和远程服务交互           |
| **MinIO**                                 | 8.5.7          | 对象存储客户端库，支持与 MinIO 服务器进行数据存储与读取      |
| **MySQL **                                | 8.0.33         | MySQL 数据库连接驱动，确保与 MySQL 数据库的高效连接          |
| **Druid**                                 | 1.2.24         | 数据库连接池及监控工具，提高数据库访问性能和稳定性           |
| **Spring Boot Starter Data Redis**        | 2.2.0.RELEASE  | Redis 数据操作与缓存支持库，提升系统数据访问效率             |
| **Java Mail** (javax.mail / com.sun.mail) | 1.6.2          | 用于发送邮件通知或报警，支持邮件 API 交互                    |
| **Hutool**                                | 5.8.18         | 工具库，提供丰富的实用工具和方法，简化日常开发任务           |
| **MyBatis Plus **                         | 3.5.8-001      | 集成 MyBatis Plus，实现简化数据库 CRUD 操作及增强 SQL 功能   |
| **Fastjson**                              | 2.0.21         | 高性能 JSON 处理库，实现对象与 JSON 数据间的快速转换         |
| **Lombok**                                | （自动配置）   | 通过注解减少样板代码，提高开发效率，自动生成 getter、setter 等方法 |

### 前端





## 数据库设计

## 数据库：homework_check

## files[文件信息表]


| 序号 | 字段名            | 类型         | 长度 | 是否为空 | 默认值            | 小数位 | 注释                               |
| :--: | ----------------- | ------------ | ---- | -------- | ----------------- | ------ | ---------------------------------- |
|  1   | id                | bigint       | --   | NO       | --                | 0      | 主键ID                             |
|  2   | absolutePath      | varchar(255) | 255  | NO       | --                | --     | 文件绝对路径                       |
|  3   | fileName          | varchar(255) | 255  | NO       | --                | --     | 文件名                             |
|  4   | fileSize          | bigint       | --   | NO       | --                | 0      | 文件大小                           |
|  5   | fileType          | varchar(50)  | 50   | NO       | --                | --     | 文件类型（扩展名）                 |
|  6   | pictureParentPath | varchar(255) | 255  | YES      | --                | --     | 本文所有图片的父路径               |
|  7   | word_json         | varchar(255) | 255  | NO       | --                | --     | 分词结果                           |
|  8   | picture_hash_json | varchar(255) | 255  | NO       | --                | --     | 图片hash指纹                       |
|  9   | create_time       | datetime     | --   | NO       | CURRENT_TIMESTAMP | --     | 创建时间                           |
|  10  | update_time       | datetime     | --   | NO       | CURRENT_TIMESTAMP | --     | 修改时间                           |
|  11  | create_user       | varchar(255) | 255  | YES      | --                | --     | 创建人                             |
|  12  | update_user       | varchar(255) | 255  | YES      | --                | --     | 修改人                             |
|  13  | is_deleted        | tinyint(1)   | --   | NO       | 0                 | 0      | 逻辑删除标识，0：未删除，1：已删除 |


## similarity_outcome[相似度结果表]


| 序号 | 字段名              | 类型           | 长度 | 是否为空 | 默认值            | 小数位 | 注释                               |
| :--: | ------------------- | -------------- | ---- | -------- | ----------------- | ------ | ---------------------------------- |
|  1   | id                  | bigint         | --   | NO       | --                | 0      | 主键id                             |
|  2   | outcome             | varchar(255)   | 255  | YES      | --                | --     | 结果                               |
|  3   | source_file_name    | varchar(255)   | 255  | NO       | --                | --     | 文件名                             |
|  4   | target_file_name    | varchar(255)   | 255  | NO       | --                | --     | 被比较的文件名                     |
|  5   | jaccard_sim         | varbinary(255) | 255  | NO       | --                | --     | 杰卡德相似度                       |
|  6   | hamming_distance    | varchar(255)   | 255  | YES      | --                | --     | 海明距离                           |
|  7   | hash_sim            | varchar(255)   | 255  | YES      | --                | --     | 相似度                             |
|  8   | con_sim             | varchar(255)   | 255  | YES      | --                | --     | 余弦相似度                         |
|  9   | avgpic_sim          | varchar(255)   | 255  | YES      | --                | --     | 图片相似度                         |
|  10  | weighted_sim        | varchar(255)   | 255  | YES      | --                | --     | 加权相似度                         |
|  11  | weighted_sim_double | double         | --   | YES      | --                | --     | 加权相似度数阈值                   |
|  12  | create_time         | datetime       | --   | NO       | CURRENT_TIMESTAMP | --     | 创建时间                           |
|  13  | update_time         | datetime       | --   | NO       | CURRENT_TIMESTAMP | --     | 修改时间                           |
|  14  | create_user         | varchar(255)   | 255  | YES      | --                | --     | 创建人                             |
|  15  | update_user         | varchar(255)   | 255  | YES      | --                | --     | 修改人                             |
|  16  | is_deleted          | tinyint(1)     | --   | NO       | 0                 | 0      | 逻辑删除标识，0：未删除，1：已删除 |

## 使用说明

1. **接口调用**
	系统提供基于 REST 的 API 接口（借助 Knife4j 可自动生成在线文档），支持文件信息管理、查重操作请求、结果查询等功能。具体接口请参考生成的 API 文档。
2. **文件查重**
	- **单文件夹查重：**
		输入作业文件所在的文件夹路径，系统会自动解析所有文件，计算各项相似度指标，并将查重结果导出为 Excel 文件。
	- **历史作业比对：**
		输入今年和往年作业的文件夹路径，系统将针对今年的每个文件，与往年所有文件进行比对，最终生成包含详细对比结果的 Excel 文件。
3. **结果查看**
	查重结果存储在 MySQL 数据库中，用户可以通过系统提供的查询接口或直接查询 `similarity_outcome` 表获取详细的比对数据。

## 模型说明

项目使用的 **BERT 模型** 为 `BERT-Base-Chinese`，用于从文本中提取语义向量，增强对文本相似度的判断能力，与传统的 SimHash 算法结合，进一步提高查重的准确率。

## 开发与贡献

欢迎对项目进行改进和贡献：

- 请先 Fork 本项目，然后创建 feature 分支进行开发；
- 提交 Pull Request 前请确保所有单元测试通过；
- 提交代码前请参考代码格式要求并补充必要的注释。

## 联系方式

- 如有问题，可以有些邮箱联系我，也可以进行交流，项目不足之处，还请多多担待。

	> **作者**: linyi **邮箱**: [jingshuihuayue@qq.com](https://gitee.com/link?target=mailto%3Ajingshuihuayue@qq.com)
	> **GitHub**: [BERT-SimHashHomeworkCheck](https://github.com/linyshdhhcb/BERT-SimHashHomeworkCheck)