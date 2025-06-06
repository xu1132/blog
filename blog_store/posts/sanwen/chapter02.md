# 前端性能优化技巧详解
## 引言
前端性能优化是提高用户体验和网站整体性能的关键。随着用户对网页加载速度和交互体验的要求越来越高，前端性能优化成为前端开发中不可回避的重要话题。一个优秀的前端性能优化方案不仅能提升用户满意度，还能降低跳出率，提升转化率，并最终实现业务目标。
本笔记将全面介绍前端性能优化的关键策略和实用技巧，涵盖页面渲染优化、资源管理、JavaScript和CSS优化、懒加载技术以及浏览器缓存机制等多个方面，旨在为前端开发者提供一份翔实的性能优化指南。
## 性能优化的本质
前端性能优化的本质在于提供更快速、更可靠、更高效的用户体验。优化网站性能不仅仅是为了让网站加载更快，更是为了提高用户满意度、降低跳出率、提升转化率，并最终实现业务目标。
在进行前端性能优化时，我们需要关注以下两大核心层面和两大辅助层面：
- **核心层面**：
  - 网络层面：优化资源加载和网络请求
  - 渲染层面：优化页面渲染和布局
- **辅助层面**：
  - 时间层面：减少加载和渲染时间
  - 体积层面：减少文件大小和资源数量
    这四个层面相互交织，构成了前端性能优化的整体框架。只有全面考虑这四个方面，才能实现真正的性能提升。
## 性能优化指标
在进行前端性能优化之前，我们需要了解如何衡量优化的效果。以下是几个关键的性能优化指标：
### 基于Chrome浏览器的性能指标
1. **First Paint (FP) - 首次绘制**
   - 指标定义：记录页面第一次绘制像素的时间，例如显示页面背景色。
   - 优化目标：在2秒内完成 FP 是基本要求，但实际中我们希望这个时间更短。
2. **First Contentful Paint (FCP) - 首次内容绘制**
   - 指标定义：记录页面开始加载到最大文本块内容或图片显示在页面中的时间。
   - 优化目标：FCP 应该在2秒内完成，这是提升用户体验的关键指标。
3. **Largest Contentful Paint (LCP) - 最大内容绘制**
   - 指标定义：记录视窗内最大的元素（通常是图片或视频）绘制的时间。
   - 优化目标：LCP 应该在2.5秒内完成，表示体验优秀。
4. **First Input Delay (FID) - 首次输入延迟**
   - 指标定义：记录在 FCP 和 TTI 之间用户首次与页面交互时响应的延迟。
   - 优化目标：FID 应该小于100毫秒，表示页面足够响应用户操作。
5. **Time to Interactive (TTI) - 可交互时间**
   - 指标定义：记录页面首次可交互的时间，即页面主线程足够空闲来可靠地响应用户输入。
   - 优化目标：TTI 应该在5秒内完成，表示页面完全准备好与用户交互。
### 三大核心指标（Core Web Vitals）
Google 在2020年5月提出了网站用户体验的三大核心指标，这些指标对于提供出色的网页用户体验至关重要：
1. **LCP（Loading）- 加载速度指标**
   - 衡量页面最大内容元素的加载延迟。
   - 目标：75%的页面加载应在2.5秒内完成。
2. **FID（Interaction）- 交互指标**
   - 衡量页面的可交互响应速度。
   - 目标：75%的页面交互响应应在100毫秒内完成。
3. **CLS（Rendering Stability）- 渲染稳定性指标**
   - 衡量在页面呈现过程中布局的稳定性。
   - 目标：75%的页面布局偏移应在0.1以内。
     这些指标代表了用户最关心的性能方面：页面加载速度、交互响应和视觉稳定性。通过关注这些指标，我们可以确保优化工作直接提升用户体验。
## 减少HTTP请求
在网页加载过程中，只有10%-20%的最终用户响应时间花在接受请求的HTML文档上，其余的80%-90%时间花在了下载页面中的所有组件进行的HTTP请求上。因此，改善响应时间最简单的途径就是减少HTTP请求的数量。
### 减少HTTP请求的策略
1. **使用图片地图（Image Maps）**
   - 原理：将多个导航图标合并为一个图片，通过点击不同坐标区域跳转到相应链接。
   - 优势：一个图片地图可以提高效率，这样就只需要一个HTTP请求，而不是多个。
   - 示例：
     ```html
     <img src="planets.jpg" border="0" usemap="#planetmap" alt="Planets" />
     <map name="planetmap" id="planetmap">
       <area shape="rect" coords="180,139,14" href="venus.html" alt="Venus" />
       <area shape="rect" coords="129,161,10" href="mercur.html" alt="Mercury" />
       <area shape="rect" coords="0,0,110,260" href="sun.html" alt="Sun" />
     </map>
     ```
2. **使用CSS Sprites**
   - 原理：将多个小图片合并为一个大图片，通过CSS控制显示部分。
   - 优势：减少HTTP请求次数，降低加载时间。
   - 示例：
     ```css
     .sprite {
       background-image: url('sprite.png');
     }
     .icon-home {
       background-position: 0 0;
       width: 20px;
       height: 20px;
     }
     ```
3. **使用CSS背景图替代小图标**
   - 原理：用CSS背景图替代小图标，避免单独加载每个小图标。
   - 优势：减少HTTP请求，提高加载速度。
4. **内联小图片为Base64编码**
   - 原理：将小图片直接嵌入CSS或HTML中，避免额外的HTTP请求。
   - 优势：减少网络请求，加快页面加载。
   - 示例：
     ```css
     .logo {
       background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAIAAAAC1HAwKAAAAF0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=');
     }
     ```
5. **合并JavaScript和CSS文件**
   - 原理：将多个JavaScript文件合并为一个，将多个CSS文件合并为一个。
   - 优势：减少文件数量，减少请求次数。
   - 示例：
     ```html
     <script src="scripts.js"></script>
     <link rel="stylesheet" href="styles.css">
     ```
6. **设置合理的缓存策略**
   - 原理：使用浏览器缓存机制，减少重复请求。
   - 优势：避免重复下载相同资源，提高加载速度。
   - 示例：
     ```http
     Cache-Control: max-age=31536000
     ```
     通过上述策略，我们可以显著减少HTTP请求次数，从而提高页面加载速度。
## JavaScript性能优化
JavaScript代码的性能直接影响页面的响应速度和用户体验。以下是一些关键的JavaScript性能优化技巧：
### 减少DOM操作
频繁的DOM操作会导致重绘和重新布局，影响性能。建议将多个DOM操作合并为一个操作，或者使用DocumentFragment来批量插入DOM元素。
```javascript
// 不推荐写法（频繁操作DOM）
const container = document.getElementById('container');
for (let i = 0; i < 1000; i++) {
  const element = document.createElement('div');
  element.textContent = 'Item ' + i;
  container.appendChild(element);
}
// 推荐写法（合并DOM操作）
const container = document.getElementById('container');
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  const element = document.createElement('div');
  element.textContent = 'Item ' + i;
  fragment.appendChild(element);
}
container.appendChild(fragment);
```
### 避免不必要的重绘和回流
重绘和回流会消耗大量的计算资源。尽量避免在循环中修改样式属性或获取布局信息。如果需要对多个样式进行修改，可以使用CSS的class切换。
```javascript
// 不推荐写法（频繁触发回流）
for (let i = 0; i < elements.length; i++) {
  elements[i].style.width = (parseInt(elements[i].style.width) + 10) + 'px';
}
// 推荐写法（减少回流）
let widths = [];
for (let i = 0; i < elements.length; i++) {
  widths.push(parseInt(elements[i].style.width) + 10);
}
for (let i = 0; i < elements.length; i++) {
  elements[i].style.width = widths[i] + 'px';
}
```
### 使用事件委托
通过事件委托减少事件处理程序的数量，提高性能。
```javascript
// 不推荐写法（为每个元素添加事件处理程序）
const items = document.querySelectorAll('.item');
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function() {
    // 处理点击事件
  });
}
// 推荐写法（使用事件委托）
document.querySelector('.list').addEventListener('click', function(e) {
  if (e.target.classList.contains('item')) {
    // 处理点击事件
  }
});
```
### 使用节流和防抖技术
控制事件处理的频率，减少不必要的计算。
```javascript
// 防抖函数
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
// 节流函数
function throttle(func, wait) {
  let lastTime = 0;
  return function(...args) {
    const nowTime = new Date().getTime();
    if (nowTime - lastTime >= wait) {
      func.apply(this, args);
      lastTime = nowTime;
    }
  };
}
// 使用防抖处理窗口调整事件
window.addEventListener('resize', debounce(handleResize, 200));
// 使用节流处理滚动事件
window.addEventListener('scroll', throttle(handleScroll, 100));
```
### 避免使用eval
eval会阻止JavaScript引擎对代码进行优化，影响性能。应尽量避免使用eval，特别是不要将字符串作为代码执行。
```javascript
// 不推荐写法（使用eval）
eval("var result = " + value + ";");
// 推荐写法（使用替代方法）
const result = JSON.parse(value);
```
### 尽量使用id选择器
id选择器在CSS选择器中性能最好，应尽量使用id选择器而不是其他选择器。
```javascript
// 推荐写法（使用id选择器）
const element = document.getElementById('myElement');
// 不推荐写法（使用class选择器）
const element = document.querySelector('.myElement');
```
### 函数保持简洁
保持函数简洁，避免在函数内部进行复杂的计算。如果函数需要进行复杂的计算，可以考虑将其拆分为多个小函数。
```javascript
// 推荐写法（函数保持简洁）
function calculate() {
  const a = getDataA();
  const b = getDataB();
  return a + b;
}
function getDataA() {
  // 获取数据A
}
function getDataB() {
  // 获取数据B
}
```
### 使用Web Workers处理耗时任务
将耗时任务交由Web Workers处理，避免阻塞主线程。
```javascript
// 主线程代码
const worker = new Worker('worker.js');
worker.postMessage(data);
worker.addEventListener('message', function(e) {
  // 处理计算结果
});
// Web Worker代码（worker.js）
self.addEventListener('message', function(e) {
  const result = heavyCalculate(e.data);
  self.postMessage(result);
});
function heavyCalculate(data) {
  // 耗时计算逻辑
}
```
### 懒加载
通过动态导入`import()`或`System.import()`实现模块的按需加载。
```javascript
// 按需加载模块
function loadModule() {
  import('module.js').then(module => {
    module.default();
  });
}
```
## CSS性能优化
CSS代码的优化可以显著提高页面的渲染速度。以下是一些关键的CSS性能优化技巧：
### 内联首屏关键CSS
将首屏渲染所需的关键CSS直接嵌入HTML中，避免额外的网络请求。
```html
<!-- 推荐写法（内联关键CSS） -->
<!DOCTYPE html>
<html>
<head>
  <style>
    /* 首屏渲染所需的关键CSS */
    body {
      font-family: Arial, sans-serif;
    }
    .header {
      background-color: #f0f0f0;
      padding: 20px;
    }
  </style>
  <link rel="stylesheet" href="non-critical.css">
</head>
<body>
  <!-- 页面内容 -->
</body>
</html>
```
### 异步加载非首屏CSS
通过`link`标签的`media="print"`属性结合`JavaScript`控制加载时机，实现非首屏CSS的异步加载。
```html
<!-- 推荐写法（异步加载非首屏CSS） -->
<link rel="stylesheet" href="non-critical.css" media="print">
<script>
  const link = document.querySelector('link[rel="stylesheet"]');
  link.media = 'all';
</script>
```
### 压缩CSS文件
删除不必要的空格、换行和注释，减少文件大小。可以使用工具如`cssnano`或`PostCSS`进行压缩。
```css
/* 压缩前 */
.body {
  font-family: Arial, sans-serif;
  color: #333;
  margin: 0;
  padding: 0;
}
/* 压缩后 */
.body{font-family:Arial,sans-serif;color:#333;margin:0;padding:0}
```
### 删除无用CSS
使用工具如`PurgeCSS`删除未使用的CSS代码，减少文件大小。
```bash
# 使用PurgeCSS删除无用CSS
purgecss --css styles.css --html index.html
```
### 有选择地使用选择器
避免使用通用选择器（如`*`），选择更具体的选择器。避免使用后代选择器（如`div span`），使用相邻兄弟选择器（如`div + span`）或相邻选择器（如`div ~ span`）。
```css
/* 不推荐写法（通用选择器） */
* {
  margin: 0;
  padding: 0;
}
/* 推荐写法（具体选择器） */
body, div, span {
  margin: 0;
  padding: 0;
}
```
### 减少CSS选择器的复杂性
CSS选择器的复杂性会影响渲染性能，建议层级嵌套最好不超过3层。
```css
/* 不推荐写法（复杂选择器） */
div.container > div.content > div.article > h1.title {
  color: #333;
}
/* 推荐写法（简化选择器） */
.article-h1 {
  color: #333;
}
```
### 避免使用`@import`
使用`<link>`标签引入CSS文件，避免`@import`导致的阻塞。
```html
<!-- 推荐写法（使用link标签） -->
<link rel="stylesheet" href="styles.css">
<!-- 不推荐写法（使用@import） -->
<style>
  @import url('styles.css');
</style>
```
### 避免过度使用通配符选择器
通配符选择器（如`*`）会匹配所有元素，增加渲染时间。
```css
/* 不推荐写法（过度使用通配符选择器） */
* {
  box-sizing: border-box;
}
/* 推荐写法（避免通配符选择器） */
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
```
### 使用CSS变量减少重复代码
使用CSS变量减少重复代码，提高代码复用性和可维护性。
```css
/* 使用CSS变量 */
:root {
  --primary-color: #333;
  --secondary-color: #666;
}
.body {
  color: var(--primary-color);
}
.title {
  color: var(--secondary-color);
}
```
## 懒加载
懒加载是一种延迟加载资源的策略，可以显著提高页面的首屏加载速度和用户体验。以下是懒加载的具体实现技巧：
### 图片懒加载
通过监听页面滚动事件，判断图片是否进入视口，延迟加载。实现方法包括使用`loading="lazy"`属性（HTML5原生支持）、使用JavaScript库如`lazysizes`，或自定义实现。
#### HTML5原生懒加载
HTML5原生支持图片懒加载，只需在`<img>`标签上设置`loading="lazy"`属性即可。
```html
<!-- 推荐写法（HTML5原生懒加载） -->
<img src="placeholder.jpg" data-src="image.jpg" loading="lazy" alt="Image">
```
#### JavaScript库懒加载
使用JavaScript库如`lazysizes`实现图片懒加载。
```html
<!-- 推荐写法（使用lazysizes） -->
<img src="placeholder.jpg" data-src="image.jpg" class="lazyload" alt="Image">
<script src="lazysizes.min.js"></script>
```
#### 自定义图片懒加载
自定义实现图片懒加载，通过监听页面滚动事件，判断图片是否进入视口，延迟加载。
```html
<!-- HTML结构 -->
<img src="placeholder.jpg" data-src="image.jpg" class="lazy" alt="Image">
```
```javascript
// JavaScript实现
const lazyImages = document.querySelectorAll('img.lazy');
const checkLazyLoad = () => {
  lazyImages.forEach(img => {
    if (img.getBoundingClientRect().top <= window.innerHeight) {
      img.src = img.dataset.src;
      img.classList.remove('lazy');
    }
  });
};
// 监听滚动事件
window.addEventListener('scroll', checkLazyLoad);
window.addEventListener('resize', checkLazyLoad);
checkLazyLoad();
```
### JavaScript模块懒加载
通过动态导入`import()`或`System.import()`实现模块的按需加载。
```javascript
// 按需加载模块
function loadModule() {
  import('module.js').then(module => {
    module.default();
  });
}
```
### CSS懒加载
通过`link`标签的`media="print"`属性结合`JavaScript`控制加载时机，实现CSS的按需加载。
```html
<!-- CSS懒加载 -->
<link rel="stylesheet" href="styles.css" media="print">
<script>
  const link = document.querySelector('link[rel="stylesheet"]');
  link.media = 'all';
</script>
```
## 浏览器缓存
浏览器缓存是提高页面加载速度的重要手段。以下是浏览器缓存的具体优化技巧：
### 浏览器缓存类型
浏览器缓存有多种形式，包括内存缓存和磁盘缓存。以Chrome为例，打开调试面板，找到Application选项卡，就可以看到它所支持的各种缓存模式。
```plaintext
Memory Cache（内存缓存）：临时存储最近访问的资源，关闭浏览器后失效。
Disk Cache（磁盘缓存）：持久化存储资源，即使关闭浏览器后仍然有效。
```
### 强制缓存
强制缓存通过设置http header来实现：`Expires`和`Cache-Control`。强制缓存直接返回缓存资源，不会向服务器发起请求。
#### expires
`Expires`用来指定资源到期的具体时间，是服务器的具体时间点。该属性是HTTP/1.0规范中定义的，精确到秒。
```http
Expires: Mon, 01 Jan 2025 00:00:00 GMT
```
#### cache-control
`Cache-Control`是HTTP/1.1规范中定义的，它比`Expires`更强大和灵活。
```http
Cache-Control: max-age=31536000
```
- `max-age`：指定资源在缓存中的最大有效时间，单位为秒。
- `no-cache`：不使用缓存，每次请求都向服务器验证资源是否更新。
- `no-store`：不存储任何缓存，每次请求都必须向服务器请求资源。
### 协商缓存
协商缓存是一个服务端缓存策略，是通过服务端判断一个资源是否需要被缓存、客户端资源是否和服务端资源一致。
#### last-modified和if-modified-since
`Last-Modified`表示资源最后修改的时间，精确到秒。
```http
Last-Modified: Mon, 01 Jan 2024 00:00:00 GMT
```
`If-Modified-Since`用来验证资源是否需要更新，如果资源没有更新，服务器返回304（Not Modified）状态码。
```http
If-Modified-Since: Mon, 01 Jan 2024 00:00:00 GMT
```
#### etag和if-none-match
`ETag`（实体标签）是一个唯一标识资源版本的字符串，可以是任何字符串，但通常是一个哈希值。
```http
ETag: "123456789"
```
`If-None-Match`用来验证资源是否需要更新，如果资源没有更新，服务器返回304（Not Modified）状态码。
```http
If-None-Match: "123456789"
```
### 浏览器缓存策略
根据资源的性质和更新频率，设置适当的缓存策略：
1. **静态资源**：设置较长的缓存时间，如一年或更长。
   ```http
   Cache-Control: public, max-age=31536000
   ```
2. **半静态资源**：如需要定期更新的图片或CSS文件，设置适中的缓存时间。
   ```http
   Cache-Control: public, max-age=86400
   ```
3. **动态资源**：如经常变化的页面或数据，设置较短的缓存时间或不缓存。
   ```http
   Cache-Control: no-cache, must-revalidate
   ```
4. **私有资源**：如用户特定的页面或数据，设置适当的私有缓存策略。
   ```http
   Cache-Control: private, max-age=3600
   ```
### 缓存问题处理
1. **版本控制**：通过在资源文件名中添加版本号或哈希值，确保缓存资源在更新时能够被正确加载。
   ```html
   <script src="scripts.123456.js"></script>
   <link rel="stylesheet" href="styles.654321.css">
   ```
2. **缓存失效**：在资源更新后，确保用户能够获取到最新的资源。可以通过设置适当的缓存过期时间或强制用户刷新页面。
3. **CDN缓存**：如果使用了CDN，需要确保CDN缓存策略与服务器缓存策略一致，并且能够及时更新。
## 前端性能优化工具
在进行前端性能优化时，各种工具可以帮助我们分析、测试和优化代码。以下是几种常用的前端性能优化工具：
### Chrome DevTools
Chrome DevTools是Chrome浏览器自带的开发者工具，提供了丰富的性能分析功能。
1. **Performance Tab**：记录页面的性能数据，包括CPU、内存、网络请求等。
2. **Network Tab**：分析网络请求，查看每个请求的响应时间、内容大小等。
3. **Sources Tab**：分析JavaScript代码，查看函数调用栈、变量值等。
4. **Memory Tab**：分析内存使用情况，检测内存泄漏问题。
### Lighthouse
Lighthouse是Google开发的一款开源工具，用于评估网页的性能、可访问性、最佳实践、SEO和PWA等。
1. **Chrome Extension**：可以直接在Chrome浏览器中使用Lighthouse插件进行测试。
2. **Command Line**：可以通过命令行使用Lighthouse进行测试。
3. **Node.js Module**：可以将Lighthouse集成到自动化测试流程中。
### Webpack
Webpack是一个模块 bundler，可以帮助我们优化前端资源。
1. **Code Splitting**：将代码分割成多个块，实现按需加载。
2. **Dead Code Elimination**：删除未使用的代码，减少文件大小。
3. **Tree Shaking**：删除未使用的模块，减少文件大小。
4. **Minification**：压缩代码，减少文件大小。
### CSSNano
CSSNano是一个CSS压缩工具，可以删除不必要的空格、换行和注释，减少文件大小。
```bash
# 使用CSSNano压缩CSS文件
cssnano input.css > output.css
```
### PurgeCSS
PurgeCSS是一个删除未使用CSS代码的工具，可以减少CSS文件大小。
```bash
# 使用PurgeCSS删除无用CSS
purgecss --css styles.css --html index.html
```
## 总结
前端性能优化是一个全面而复杂的过程，涉及多个方面的技巧和最佳实践。通过减少HTTP请求、优化JavaScript和CSS代码、实现懒加载和合理利用浏览器缓存等方法，可以显著提高页面的加载速度和用户体验。
在进行前端性能优化时，我们需要关注以下关键指标：FP（首次绘制）、FCP（首次内容绘制）、LCP（最大内容绘制）、FID（首次输入延迟）和TTI（可交互时间）。同时，我们还需要关注Google提出的三大核心指标：LCP（加载速度指标）、FID（交互指标）和CLS（渲染稳定性指标）。
通过持续监控和分析性能数据，根据实际需求调整优化策略，我们才能保持良好的性能表现，最终提升用户满意度和网站的业务目标。
## 参考资料
[1] 读懂前端「性能优化」 - 七猫技术团队. https://tech.qimao.com/yi-wen-du-dong-qian-duan-xing-neng-you-hua/. 
[2] 探索前端性能优化：关键策略与代码实例-阿里云开发者社区. https://developer.aliyun.com/article/1643202. 
[3] 前端优化之减少HTTP请求原创 - CSDN博客. https://blog.csdn.net/weixin_45369499/article/details/102952337. 
[4] JavaScript性能优化怎么实现？12种优化方式你知道嘛 - 腾讯云. https://cloud.tencent.com/developer/article/2314011. 
[5] CSS性能优化的8个技巧 - 稀土掘金. https://juejin.cn/post/6844903649605320711. 
[6] 前端懒加载技术 - 稀土掘金. https://juejin.cn/post/7257882531353608253. 
[7] 彻底搞懂前端浏览器缓存 - 稀土掘金. https://juejin.cn/post/6921390645516959758. 