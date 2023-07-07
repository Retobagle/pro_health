import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 引入node内置模块path，获取绝对路径
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  // src文件夹配置别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  }
})
