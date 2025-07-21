
# ECharts图表详解文档
## 什么是ECharts
ECharts是一款基于JavaScript的数据可视化图表库，提供直观、生动、可交互、可个性化定制的数据可视化图表。ECharts最初由百度团队开源，并于2018年初捐赠给Apache基金会，成为ASF孵化级项目。2021年1月26日晚，Apache基金会官方宣布ECharts项目正式毕业。1月28日，ECharts 5线上发布会举行[[1](https://baike.baidu.com/item/ECharts/55931618)]。
ECharts是一个使用JavaScript实现的开源可视化库，可以流畅地运行在PC和移动设备上，兼容当前绝大部分浏览器(IE9/10/11,Chrome,Firefox,Safari等)，底层依赖矢量图形库ZRender，提供直观、交互丰富、可高度个性化定制的数据可视化图表[[5](https://blog.csdn.net/qq_62541773/article/details/145587724)]。
## ECharts的主要特性
1. **丰富的图表类型**：ECharts支持多种图表类型，包括基础图表(折线图、柱状图、饼图、散点图、雷达图)、复合图表(仪表盘、漏斗图、树图)、地理图表(地图、热力图)和关系图表(关系图、桑基图)等。
2. **交互性**：支持缩放、漫游、数据筛选、数据提示等交互功能。
3. **可定制性**：支持自定义主题、颜色、样式、布局等。
4. **响应式**：能够自适应不同屏幕尺寸，支持PC和移动设备。
5. **国际化**：支持多种语言，包括中文、英文等。
6. **数据可视化**：支持多种数据源，包括静态数据、动态数据、大数据等。
## 安装与引入
### 安装ECharts
1. **通过npm安装**：
   ```bash
   npm install echarts --save
   ```
2. **通过CDN引入**：
   ```html
   <script src="https://cdn.jsdelivr.net/npm/echarts@latest/dist/echarts.min.js"></script>
   ```
3. **通过yarn安装**：
   ```bash
   yarn add echarts
   ```
### 引入ECharts
在JavaScript文件中引入ECharts：
```javascript
import * as echarts from 'echarts';
```
在HTML文件中引入ECharts：
```html
<script src="echarts.min.js"></script>
```
## 创建ECharts图表
### 创建DOM容器
在HTML文件中创建一个用于放置ECharts图表的DOM容器：
```html
<div id="main" style="width: 600px;height:400px;"></div>
```
### 初始化ECharts实例
使用`echarts.init`方法初始化ECharts实例：
```javascript
var myChart = echarts.init(document.getElementById('main'));
```
### 设置图表配置项
使用`setOption`方法设置图表的配置项：
```javascript
var option = {
    title: {
        text: 'ECharts 示例'
    },
    tooltip: {},
    legend: {
        data: ['销量']
    },
    xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [21, 17, 90, 20, 30, 60]
    }]
};
myChart.setOption(option);
```
### 更新数据
使用`setOption`方法更新数据：
```javascript
myChart.setOption({
    series: [{
        // 根据需要更新数据
        data: [32, 35, 67, 48, 40, 50]
    }]
});
```
## ECharts支持的图表类型
### 基础图表
#### 折线图
折线图用于展示数据随时间或其他连续变量的变化趋势。
**配置示例**：
```javascript
option = {
    series: [{
        name: '销量',
        type: 'line',
        data: [120, 132, 101, 134, 90, 230, 210]
    }]
};
```
**详细配置**：
- `smooth`: 设置为`true`时，折线图会呈现为曲线图。
- `areaStyle`: 设置为`{fill: "#f70"}`时，折线图会呈现为面积图。
- `symbol`: 设置折线图点的形状，如`'circle'`、`'rect'`等。
- `symbolSize`: 设置折线图点的大小。
#### 柱状图
柱状图用于展示不同类别数据的数量或比例。
**配置示例**：
```javascript
option = {
    series: [{
        name: '销量',
        type: 'bar',
        data: [21, 17, 90, 20, 30, 60]
    }]
};
```
**详细配置**：
- `barWidth`: 设置柱状图的宽度。
- `itemStyle`: 设置柱状图的样式，如颜色、边框等。
- `label`: 设置柱状图的标签显示。
- `stack`: 设置柱状图的堆叠方式。
#### 饼图
饼图用于展示数据的构成比例。
**配置示例**：
```javascript
option = {
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        data: [
            {value: 235, name: '视频广告'},
            {value: 274, name: '联盟广告'},
            {value: 310, name: '邮件营销'},
            {value: 335, name: '直接访问'},
            {value: 400, name: '搜索引擎'}
        ]
    }]
};
```
**详细配置**：
- `radius`: 设置饼图的半径。
- `center`: 设置饼图的中心位置。
- `roseType`: 设置为`'angle'`时，饼图会呈现为南丁格尔图。
- `label`: 设置饼图的标签显示。
#### 散点图
散点图用于展示两个变量之间的关系。
**配置示例**：
```javascript
option = {
    series: [{
        type: 'scatter',
        data: [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]
    }]
};
```
**详细配置**：
- `symbol`: 设置散点的形状。
- `symbolSize`: 设置散点的大小。
- `label`: 设置散点的标签显示。
- `itemStyle`: 设置散点的样式。
#### 雷达图
雷达图用于展示多个变量在多个维度上的表现。
**配置示例**：
```javascript
option = {
    radar: {
        indicator: [
            {name: '销售', max: 6000},
            {name: '管理', max: 6000},
            {name: '信息技术', max: 6000},
            {name: '客服', max: 6000},
            {name: '研发', max: 6000},
            {name: '市场', max: 6000}
        ],
        shape: 'circle'
    },
    series: [{
        name: '预算 vs 实际',
        type: 'radar',
        data: [4200, 3000, 2000, 3500, 5000, 1800]
    }]
};
```
**详细配置**：
- `indicator`: 设置雷达图的指标和最大值。
- `shape`: 设置雷达图的形状，如`'circle'`、`'polygon'`等。
- `splitNumber`: 设置雷达图的分割段数。
- `areaStyle`: 设置雷达图的填充样式。
### 复合图表
#### 仪表盘
仪表盘用于展示单一数据的实时变化。
**配置示例**：
```javascript
option = {
    series: [{
        type: 'gauge',
        data: [{value: 85, name: '得分'}],
        center: ['50%', '78%'],
        startAngle: 180,
        endAngle: 0,
        splitNumber: 10
    }]
};
```
**详细配置**：
- `startAngle`: 设置仪表盘的起始角度。
- `endAngle`: 设置仪表盘的结束角度。
- `splitNumber`: 设置仪表盘的分割段数。
- `axisLine`: 设置仪表盘的轴线样式。
- `axisTick`: 设置仪表盘的刻度样式。
- `splitLine`: 设置仪表盘的分隔线样式。
#### 漏斗图
漏斗图用于展示数据在转化过程中的流失情况。
**配置示例**：
```javascript
option = {
    series: [{
        type: 'funnel',
        data: [
            {value: 60, name: '浏览量'},
            {value: 40, name: '点击量'},
            {value: 20, name: '访问量'},
            {value: 10, name: '转化率'}
        ]
    }]
};
```
**详细配置**：
- `min`: 设置漏斗图的最小值。
- `max`: 设置漏斗图的最大值。
- `minSize`: 设置漏斗图的最小宽度。
- `maxSize`: 设置漏斗图的最大宽度。
- `sort`: 设置漏斗图的数据排序方式，如`'ascending'`、`'descending'`等。
#### 树图
树图用于展示层次结构数据。
**配置示例**：
```javascript
option = {
    series: [{
        type: 'tree',
        data: [{
            name: 'A',
            children: [{
                name: 'B',
                children: [{
                    name: 'C'
                }]
            }]
        }]
    }]
};
```
**详细配置**：
- `data`: 设置树图的数据。
- `layout`: 设置树图的布局方式，如`'orthogonal'`、`'radial'`等。
- `nodeWidth`: 设置树图节点的宽度。
- `nodeGap`: 设置树图节点之间的间距。
- `root`: 设置树图的根节点属性。
#### 旭日图
旭日图用于展示分层数据的占比关系。
**配置示例**：
```javascript
option = {
    series: [{
        type: 'sunburst',
        data: [
            {name: 'A', value: 1000},
            {name: 'A|B', value: 600},
            {name: 'A|C', value: 400},
            {name: 'A|C|D', value: 200},
            {name: 'A|C|E', value: 200}
        ]
    }]
};
```
**详细配置**：
- `data`: 设置旭日图的数据，数据项的名称使用`|`分隔表示层级关系。
- `radius`: 设置旭日图的半径。
- `center`: 设置旭日图的中心位置。
- `label`: 设置旭日图的标签显示。
- `itemStyle`: 设置旭日图的样式。
### 地理图表
#### 地图
地图用于在地图上展示数据，支持中国地图、世界地图等。
**配置示例**：
```javascript
option = {
    series: [{
        type: 'map',
        mapType: 'china',
        data: [
            ['广东', 100],
            ['北京', 200],
            ['上海', 300]
        ]
    }]
};
```
**详细配置**：
- `mapType`: 设置地图的类型，如`'china'`、`'world'`等。
- `data`: 设置地图上的数据，数据项的格式为`[地区, 值]`。
- `roam`: 设置地图是否可以漫游。
- `label`: 设置地图上的标签显示。
- `itemStyle`: 设置地图上的区域样式。
#### 热力图
热力图用于展示数据在二维网格上的密度或热度。
**配置示例**：
```javascript
option = {
    series: [{
        type: 'heatmap',
        data: [
            [0, 0, 10],
            [0, 1, 20],
            [1, 0, 30],
            [1, 1, 40]
        ]
    }]
};
```
**详细配置**：
- `data`: 设置热力图的数据，数据项的格式为`[x, y, value]`。
- `visualMap`: 设置热力图的视觉映射，用于显示数据的范围和颜色。
- `xAxis`: 设置热力图的x轴。
- `yAxis`: 设置热力图的y轴。
- `color`: 设置热力图的颜色。
### 关系图表
#### 关系图
关系图用于展示实体之间的关系。
**配置示例**：
```javascript
option = {
    series: [{
        type: 'graph',
        data: [
            {name: 'A'},
            {name: 'B'},
            {name: 'C'}
        ],
        links: [
            {source: 'A', target: 'B'},
            {source: 'B', target: 'C'}
        ]
    }]
};
```
**详细配置**：
- `data`: 设置关系图的节点数据。
- `links`: 设置关系图的边数据。
- `label`: 设置关系图的标签显示。
- `itemStyle`: 设置关系图的样式。
- `lineStyle`: 设置关系图的边样式。
#### 桑基图
桑基图用于展示资源在不同环节之间的流动情况。
**配置示例**：
```javascript
option = {
    series: [{
        type: 'sankey',
        data: [
            {name: 'A'},
            {name: 'B'},
            {name: 'C'}
        ],
        links: [
            {source: 'A', target: 'B', value: 5},
            {source: 'B', target: 'C', value: 3}
        ]
    }]
};
```
**详细配置**：
- `data`: 设置桑基图的节点数据。
- `links`: 设置桑基图的边数据，包括源节点、目标节点和值。
- `layout`: 设置桑基图的布局方式。
- `nodeGap`: 设置桑基图节点之间的间距。
- `nodeAlign`: 设置桑基图节点的对齐方式。
## ECharts的常用组件
### 标题
标题用于展示图表的名称和副标题。
**配置示例**：
```javascript
title: {
    text: 'ECharts 示例',
    subtext: '副标题',
    x: 'center',
    y: 'top',
    itemGap: 10
}
```
**详细配置**：
- `text`: 设置主标题的文本。
- `subtext`: 设置副标题的文本。
- `x`: 设置标题的水平位置，可选值：`'center'`、`'left'`、`'right'`。
- `y`: 设置标题的垂直位置，可选值：`'top'`、`'bottom'`、`'center'`。
- `itemGap`: 设置主标题和副标题之间的距离。
### 工具提示
工具提示用于展示鼠标悬停在图表上时显示的数据信息。
**配置示例**：
```javascript
tooltip: {
    trigger: 'axis',
    formatter: '{a}<br/>{b}:{c}'
}
```
**详细配置**：
- `trigger`: 设置触发方式，可选值：`'item'`（悬停在数据项上触发）、`'axis'`（悬停在坐标轴上触发）。
- `formatter`: 设置提示框的显示格式，可以使用函数动态生成内容。
- `position`: 设置提示框的位置。
- `backgroundColor`: 设置提示框的背景颜色。
- `borderColor`: 设置提示框的边框颜色。
### 图例
图例用于展示图表中不同系列的标记、颜色和名称，可以通过点击控制哪些系列不显示。
**配置示例**：
```javascript
legend: {
    data: ['销量'],
    orient: 'horizontal',
    x: 'left',
    y: 'top'
}
```
**详细配置**：
- `data`: 设置图例的名称数组。
- `orient`: 设置图例的布局方向，可选值：`'horizontal'`（水平布局）、`'vertical'`（垂直布局）。
- `x`: 设置图例的水平位置，可选值：`'left'`、`'center'`、`'right'`。
- `y`: 设置图例的垂直位置，可选值：`'top'`、`'middle'`、`'bottom'`。
- `itemWidth`: 设置图例标记的宽度。
- `itemHeight`: 设置图例标记的高度。
- `itemGap`: 设置图例每项之间的间隔。
### 坐标轴
坐标轴用于展示数据的范围和刻度。
**配置示例**：
```javascript
xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
},
yAxis: {
    type: 'value'
}
```
**详细配置**：
- `type`: 设置坐标轴的类型，可选值：`'category'`（分类轴）、`'value'`（数值轴）、`'time'`（时间轴）。
- `data`: 设置分类轴的数据。
- `min`: 设置数值轴的最小值。
- `max`: 设置数值轴的最大值。
- `splitNumber`: 设置数值轴的分割段数。
- `axisLabel`: 设置坐标轴的标签显示。
- `axisLine`: 设置坐标轴的轴线样式。
- `axisTick`: 设置坐标轴的刻度样式。
- `splitLine`: 设置坐标轴的分隔线样式。
### 数据系列
数据系列用于展示实际的数据，是图表的核心部分。
**配置示例**：
```javascript
series: [{
    name: '销量',
    type: 'bar',
    data: [21, 17, 90, 20, 30, 60],
    itemStyle: {
        color: '#50AEDD',
        borderRadius: [4, 4, 0, 0]
    }
}]
```
**详细配置**：
- `name`: 设置系列的名称，用于图例和工具提示中显示。
- `type`: 设置系列的类型，如`'bar'`、`'line'`等。
- `data`: 设置系列的数据。
- `itemStyle`: 设置系列的样式，如颜色、边框等。
- `label`: 设置系列的标签显示。
- `emphasis`: 设置系列在高亮状态下的样式。
## ECharts的高级功能
### 动画效果
ECharts支持多种动画效果，可以增强图表的视觉效果。
**配置示例**：
```javascript
animation: true,
animationDuration: 1000,
animationEasing: 'cubicOut'
```
**详细配置**：
- `animation`: 设置是否开启动画效果。
- `animationDuration`: 设置动画的持续时间，单位为毫秒。
- `animationEasing`: 设置动画的缓动函数，可选值：`'linear'`、`'quadraticIn'`、`'quadraticOut'`、`'quadraticInOut'`、`'cubicIn'`、`'cubicOut'`、`'cubicInOut'`、`'quarticIn'`、`'quarticOut'`、`'quarticInOut'`、`'quinticIn'`、`'quinticOut'`、`'quinticInOut'`、`'sinusoidalIn'`、`'sinusoidalOut'`、`'sinusoidalInOut'`、`'exponentialIn'`、`'exponentialOut'`、`'exponentialInOut'`、`'circularIn'`、`'circularOut'`、`'circularInOut'`、`'backIn'`、`'backOut'`、`'backInOut'`、`'elasticIn'`、`'elasticOut'`、`'elasticInOut'`、`'bounceIn'`、`'bounceOut'`、`'bounceInOut'`。
### 工具栏
工具栏提供了多种交互功能，如保存图表、数据视图、动态类型切换、数据区域缩放、重置等。
**配置示例**：
```javascript
toolbox: {
    show: true,
    feature: {
        saveAsImage: {},
        dataView: {},
        restore: {},
        dataZoom: {},
        brush: {}
    }
}
```
**详细配置**：
- `show`: 设置是否显示工具栏。
- `feature`: 设置工具栏的功能，包括：
  - `saveAsImage`: 保存为图片。
  - `dataView`: 数据视图，可以查看和编辑数据。
  - `restore`: 重置图表。
  - `dataZoom`: 数据缩放，可以缩放数据视图。
  - `brush`: 刷选，可以刷选数据。
### 数据区域缩放
数据区域缩放用于缩放图表的数据视图。
**配置示例**：
```javascript
dataZoom: [{
    type: 'slider',
    xAxisIndex: 0,
    yAxisIndex: 0
}]
```
**详细配置**：
- `type`: 设置数据区域缩放的类型，可选值：`'slider'`（滑动条）、`'inside'`（内部缩放）。
- `xAxisIndex`: 设置x轴的索引。
- `yAxisIndex`: 设置y轴的索引。
- `start`: 设置数据区域缩放的起始位置，范围为0到100。
- `end`: 设置数据区域缩放的结束位置，范围为0到100。
### 视觉映射
视觉映射用于根据数据值对图表元素进行颜色、大小等视觉上的映射。
**配置示例**：
```javascript
visualMap: {
    show: true,
    min: 0,
    max: 100,
    left: 'left',
    bottom: 'bottom',
    text: ['高', '低'],
    calculable: true
}
```
**详细配置**：
- `show`: 设置是否显示视觉映射组件。
- `min`: 设置视觉映射的最小值。
- `max`: 设置视觉映射的最大值。
- `left`: 设置视觉映射的水平位置。
- `bottom`: 设置视觉映射的垂直位置。
- `text`: 设置视觉映射的文本，通常用于表示高低值。
- `calculable`: 设置是否可以手动调整视觉映射的范围。
## ECharts的响应式设计
ECharts支持响应式设计，能够自适应不同屏幕尺寸。
**配置示例**：
```javascript
window.addEventListener('resize', function () {
    myChart.resize();
});
```
**详细配置**：
- `resize`: 当窗口大小改变时，调用`resize`方法可以使图表适应新的窗口大小。
- `media`: 可以设置媒体查询，根据不同的屏幕尺寸使用不同的配置。
## ECharts的国际化
ECharts支持多种语言，可以通过设置`echarts.setOption`中的`lang`参数来实现国际化。
**配置示例**：
```javascript
echarts.setOption({
    lang: {
        'title': '图表',
        'legend': '图例',
        'tooltip': '提示',
        'dataZoom': '数据区域缩放',
        'dataView': '数据视图',
        'restore': '重置',
        'saveAsImage': '保存为图片'
    }
});
```
**详细配置**：
- `lang`: 设置图表的国际化文本。
## ECharts的性能优化
ECharts提供了多种性能优化的方法，可以提高图表的渲染速度和交互性能。
### 减少数据量
通过减少数据量可以提高图表的渲染速度。
**方法**：
- 使用`dataZoom`组件，只显示部分数据。
- 使用`brush`组件，只显示选中的数据。
- 使用`dataTool`组件，对数据进行预处理。
### 合并数据
通过合并数据可以减少图表的渲染次数。
**方法**：
- 使用`setOption`方法的`notMerge`参数，设置为`false`可以合并数据。
- 使用`dispatchAction`方法，通过动作来更新数据。
### 减少样式计算
通过减少样式计算可以提高图表的渲染性能。
**方法**：
- 使用`itemStyle`的`color`参数，设置统一的颜色。
- 使用`label`的`show`参数，控制标签的显示。
- 使用`axisLabel`的`show`参数，控制坐标轴标签的显示。
### 使用Canvas渲染
ECharts默认使用Canvas渲染，可以提高图表的渲染性能。
**方法**：
- 设置`renderer`参数为`'canvas'`。
- 设置`useDirtyRect`参数为`true`，只渲染变化的部分。
### 使用Web Workers
通过使用Web Workers可以将数据处理和渲染分开，提高图表的性能。
**方法**：
- 设置`webWorker`参数为`true`。
- 设置`webWorkerURL`参数为Web Workers的URL。
## ECharts的常见问题
### 图表不显示
如果图表不显示，可能是由于以下原因：
1. **CSS样式问题**：检查CSS样式，确保图表容器的`width`和`height`设置正确。
2. **JavaScript错误**：检查浏览器的开发者工具，查看是否有JavaScript错误。
3. **数据问题**：检查数据是否正确，确保数据不为空。
4. **版本问题**：检查ECharts的版本，确保使用的是最新版本。
### 图表显示不完整
如果图表显示不完整，可能是由于以下原因：
1. **容器大小问题**：检查容器的大小，确保足够大。
2. **数据范围问题**：检查数据的范围，确保在坐标轴的范围内。
3. **布局问题**：检查布局设置，确保没有冲突。
### 图表性能问题
如果图表性能不佳，可能是由于以下原因：
1. **数据量过大**：减少数据量，使用数据区域缩放或数据视图。
2. **样式复杂**：简化样式，减少计算。
3. **渲染方式**：使用Canvas渲染，提高渲染性能。
## ECharts的未来发展趋势
ECharts是一个开源项目，未来可能会有以下发展趋势：
1. **新图表类型**：增加新的图表类型，如三维图表、虚拟现实图表等。
2. **新功能**：增加新的功能，如数据连接、数据处理、数据可视化等。
3. **性能优化**：优化性能，提高渲染速度和交互性能。
4. **国际化**：增加对更多语言的支持，提高国际化程度。
5. **生态系统**：建立更加完善的生态系统，包括插件、工具、服务等。
## 参考资料
[1] ECharts. https://baike.baidu.com/item/ECharts/55931618.
[5] Echarts入门教程(基础详细)_echarts详细教程-CSDN博客. https://blog.csdn.net/qq_62541773/article/details/145587724. 
