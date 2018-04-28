
### Build Setup

首先安装node环境

下载地址 https://nodejs.org/en/download/

``` bash
# 安装全局依赖
npm i babel babel-cli node-gyp -g

# 安装项目依赖
npm install
npm install babel-preset-es2015 --save-dev
# 构建开发环境本地运行的热加载服务
npm run dev

# 构建生产环境以及测试环境
npm run build

```


### PS: 安装中如果出现以下错误

#### 错误一
``` bash
# npm ERR! phantomjs-prebuilt@2.1.14 install: `node install.js`
# npm ERR! Exit status 1
# npm ERR!
```
解决方式

``` bash
npm install phantomjs-prebuilt@2.1.14 --ignore-scripts
```

#### 错误二
``` bash
# ERROR in ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js?id=data-v-2406a849&scoped=true!./~/sass-loader/lib/loader.js?sourceMap!./~/vue-loader/lib/selector.js?type=styles&index=0
```
解决方式
``` bash
npm rebuild node-sass --force
```

