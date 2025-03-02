import http from "@/utils/http";

/**
 * 查重生成Excel表
 * @param {object} params 相似度结果表比较实体
 * @param {string} params.path 文件夹路径
 * @param {boolean} params.isFlag 是否智能分词
 * @param {boolean} params.pictureSimFlag 是否计算文档图片
 * @param {number} params.threshold 相似度阈值
 * @param {string} params.excelPath 生成excel路径
 * @param {boolean} params.multithreadingFlag 是否多线程
 * @param {boolean} params.bertFlag 是否使用bert模型
 * @returns
 */
export function checkTextSimilarity(params) {
  return http.post(`/similarityOutcome/check`, params);
}


/**
 * 与往年作业查重生成Excel表
 * @param {object} params 往年作业查重
 * @param {string} params.path 文件夹路径
 * @param {boolean} params.isFlag 是否智能分词
 * @param {boolean} params.pictureSimFlag 是否计算文档图片
 * @param {object} params.threshold 相似度阈值
 * @param {string} params.excelPath 生成excel路径
 * @param {boolean} params.multithreadingFlag 是否多线程
 * @param {boolean} params.bertFlag 是否使用bert模型
 * @param {string} params.pathUsual 往年作业文件夹路径
 * @returns
 */
export function checkTextSimilarityUsual(params) {
  return http.post(`/similarityOutcome/checkUsual`, params);
}
