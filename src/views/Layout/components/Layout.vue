<template>
  <div class="common-layout">
    <el-container>
      <!-- Header: 居中显示项目名称 -->
      <el-header class="header">
        <h1>基于SimHash与BERT的高校学生作业查重系统</h1>
      </el-header>

      <!-- Main: 三个选择项 -->
      <el-main class="main">
        <el-row :gutter="30" justify="center">
          <el-col :span="6">
            <el-card @click="handleNavigation('SimilarityOutcome')" class="option-card">
              <div class="option-content">
                <h3>作业间查重</h3>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card @click="handleNavigation('SimilarityOutcomeUsual')" class="option-card">
              <div class="option-content">
                <h3>往年作业和今年作业查重</h3>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card @click="handleNavigation('fileUpload')" class="option-card">
              <div class="option-content">
                <h3>文件上传</h3>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>

      <!-- Footer: 可选项 -->
      <el-footer class="footer">
        <p>© 2025 高校学生作业查重系统</p>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    handleNavigation(routeName) {
      this.$router.push({ name: routeName });
    }
  }
}
</script>

<style scoped lang="scss">
$primary-color: #4a90e2;
$secondary-color: #fff;
$bg-gradient: linear-gradient(135deg, #74ebd5, #acb6e5);

.common-layout {
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  background: $bg-gradient;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  width: 500%;
}

/* Header 样式 */
.header {
  text-align: center;
  color: $primary-color;
  font-size: 28px;
  line-height: 70px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
  h1 {
    margin: 0;
    font-weight: 600;
    color: $primary-color;
  }

}

/* Main 内容区域 */
.main {
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;  /* 增加选项卡之间的间距 */
  /* 每个选项卡片之间间距 */
  .option-card {

  }
}

/* Option Card 样式：卡片整体效果、悬停动画 */
.option-card {
  cursor: pointer;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* margin 可根据需要保留或移除，因为 gap 已经提供了间距 */
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $secondary-color;
  border: none;
  margin: 10px;
}

.option-card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.option-card .option-content h3 {
  margin: 0;
  color: $primary-color;
  font-size: 20px;
}


/* Footer 样式 */
.footer {
  color: $primary-color;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  line-height: 50px;
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin-top: 20px;
}
</style>
