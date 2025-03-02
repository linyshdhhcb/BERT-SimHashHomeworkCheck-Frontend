<template>
  <div class="form-containers">
    <el-form :model="formData" label-width="150px" class="form-container">
      <h2>对文件夹的所有文件相似度检测</h2>
      <el-form-item label="文件夹路径：">
        <el-input v-model="formData.path" placeholder="请输入文件夹路径" />
      </el-form-item>

      <el-form-item label="是否智能分词：">
        <el-switch v-model="formData.isFlag" active-text="是" inactive-text="否" />
      </el-form-item>

      <el-form-item label="是否计算文档图片：">
        <el-switch v-model="formData.pictureSimFlag" active-text="是" inactive-text="否" />
      </el-form-item>

      <el-form-item label="相似度阈值：">
        <el-input-number v-model="formData.threshold" :min="0" :max="1" step="0.01" placeholder="请输入相似度阈值" />
      </el-form-item>

      <el-form-item label="生成 Excel 路径：">
        <el-input v-model="formData.excelPath" placeholder="请输入生成 Excel 路径" />
      </el-form-item>

      <el-form-item label="是否多线程：">
        <el-switch v-model="formData.multithreadingFlag" active-text="是" inactive-text="否" />
      </el-form-item>

      <el-form-item label="是否使用 BERT模型：">
        <el-switch v-model="formData.bertFlag" active-text="是" inactive-text="否" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { ElForm, ElFormItem, ElInput, ElInputNumber, ElSwitch, ElButton } from 'element-plus';
import { checkTextSimilarity } from '@/apis/SimilarityOutcome/SimilarityOutcome.js';

export default {
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElInputNumber,
    ElSwitch,
    ElButton,
  },
  setup() {
    const formData = ref({
      path: '',
      isFlag: true,
      pictureSimFlag: false,
      threshold: 0.8,
      excelPath: '',
      multithreadingFlag: true,
      bertFlag: false,
    });

    const submitForm = () => {
      console.log('submitForm called');
      checkTextSimilarity(formData.value)
        .then(response => {
          console.log('Response:', response);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      console.log('Form data:', formData.value);
    };

    return {
      formData,
      submitForm,
    };
  },
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

* {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  font-size: 16px;
  /* 居中 */
  text-align: center;
  width: 100%;
}

/* 整体背景使用渐变色，居中布局 */
.form-containers {

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200%;
  min-height: 100vh;
  background: linear-gradient(135deg, #74ebd5, #acb6e5);
  padding: 100px 20px;
}

/* 表单容器 */
.form-container {
  max-width: 800px;
  width: 300%;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  margin: 0 auto;
}

/* 二级标题 */
h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
  color: #4313df;
}

/* 表单项间距 */
.el-form-item {
  margin-bottom: 20px;
}

.el-form-item label {
  font-weight: 600;
}

/* 输入框宽度 */
.el-input,
.el-input-number {
  width: 100%;
}

/* 按钮样式 */
.el-button {
  width: 100%;
  background-color: #4313df;
  border-color: #4313df;
  font-size: 16px;
  padding: 10px 0;
}

.el-button:hover {
  background-color: #5a2dd3;
  border-color: #5a2dd3;
}
</style>
