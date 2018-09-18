# 1 入门指南
 ## 1.3 svg 的作用
 ## 1.4 创建一个 SVG 图像
  - 文档结构 

    1. 根元素 <svg> 以像素为单位定义了整个图像的 width 和 height ，还可以通过 xmls 属性定义 svg 的命名空间 
    2. <title> 元素的内容可以被阅读器显示在标题栏上或者是作为鼠标指针指向图像时的提示
    3. <desc> 元素允许我们为图像定义完整的描述信息
  <svg width="100%" height="100%" version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <title>Cat</title>
    <desc>stick figure of a cat</desc>
    <!-- 在这里绘制图像 -->
  </svg> 
   
  - 基本形状
    1. 按照 XML 程序的惯例，为了保持最大的灵活性，应该分离结构和表现。表现信息包含在 style 属性中，它的值是一系列表现属性和值

  - 制定样式属性
    1. 填充(fill)和轮廓画笔颜色(stroke)写在两个单独的属性中，而不是全部写在 style 属性中
    <circle cx="70" cy="95" r="50" style="stroke: black; fill: none"/>
  - 图像对象分组
    1. 使用两个 <line> 元素在猫的脸右脸上添加了胡须。我们想把这些胡须作为一个部件，所以把它们包装在分组元素 <g> 里面，然后给它一个 id。
    2. 我们可以通过指定起点和终点 x 坐标和 y 坐标(分别为x1和y1以及 x2和y2)的方式绘制一条直线
    <g id="whiskers">
      <line x1="75" y1="95" x2="135" y2="85" style="stroke: black"/>
      <line x1="75" y1="95" x2="135" y2="105" style="stroke: black"/>
    </g>

  - 变换坐标系统
    1. 现在我们使用 <use> 复用胡须分组并将它变换(transform) 为左侧胡须
    2. <use> 元素中的xlink:href 属性在不同的命名控件中。为了确保 SVG 文档能在所有 SVG  阅读器中工作，我们必须在开始的 <svg> 标签中添加 xmlns:xlink 属性。 如svg-book中的 demo

  - 其他基本图形
  - 路径
    1. 所有的基本形状实际上都是通用的 <path> 元素的快捷写法
  - 文本
    1. 在 <text> 元素中，x y 属性用于指定文本的位置，他们也是结构的一部分
    2. 字体和字号是表现的一部分，因而也是 style 属性的一部分

  
# 2 在网页中使用 SVG
 ## 2.1 将 SVG 作为图像
  - 在 <img> 元素内包含 SVG 
    1. HTML <img> 元素定义一个空间，表示浏览器应该将图像绘制到这个空间中。
    2. 要使用的图像文件指定在 src 属性内。
    3. 可以使用 alt 和 title 属性给出图像描述文本，以便用户在不能看到图像时仍然能理解它代表什么
    <img src="cat.svg" title="Cat image"  alt="stick figure of a cat " />
    4. 如果不指定 img 的尺寸，会使用图像文件的固有尺寸。如果只指定高度(宽度)，宽度(高度)就会按比例缩放，以使宽高与图像文件固有的尺寸匹配
    5. 对于 SVG 来说，则更为复杂，如果文件中的根元素 <svg> 带有明确的 height 和 width 属性，则他们会被作为文件的固有尺寸。如果只指定 height 或者 width 而不是两个都指定，并且 <svg> 带有 viewBox 属性，那么将用 viewBox 计算宽高比，图像也会被缩放以匹配指定尺寸。如果 <svg> 带有viewBox 属性而没有尺寸，则 viewBox 的height width 将被视为像素长度。

  - 在 CSS 中包含 SVG
    1. css 样式属性都接受一个指向图像文件的 URL 作为属性值。最常使用的 background-image 属性。
    2. 默认情况下，背景图像会按照固有尺寸进行绘制，并且会在垂直和水平两个方向上重复，以填满该元素。
    3. SVG 文件在没有固有尺寸下，SVG 会被缩放为元素高度和宽度的100%。这个尺寸可以使用 background-size 属性显示的设置，重复模式和图像位置用 background-repeat 和 background-position 设置
    4. 除了用背景图像，在 css 中 SVG 文件还可以用 list-image (用于创建装饰性项目列表)或者 border-image (用于创建花哨的边框)
    5. 随着渲染性能的越来越高， SVG 文件避免文件太大

 ## 2.2 将 SVG 作为应用程序
  1. 要将外部 svg 文件整合到 HTML 页面中，而不受图像嵌入时的限制，可以使用嵌入对象
  2. <object> 可以嵌入任意类型的文件，只要浏览器有解析该文件类型的应用程序
  <object data="cat.svg" type="image/svg+xml" title="" alt="">
    <!-- 文本或者栅格图像用作备用选项 -->
    <p>no svg support here is a substitute</p>
    <img src="cat.svg" alt="" title=""/>
  </object>
  3. <embed> 与 <object> 之间有两个重要区别： <embed> 中使用 src 而 <object> 中使用 data。 <embed> 中不能包含任何子内容，因此嵌入失败就没有备用选项
  4. 当 SVG 文件作为嵌入对象时， SVG 文件的渲染方式与它被包含在 <img> 元素中时大致相同：它会被缩放以适配嵌入元素的宽高，并不会继承定义在父文档中的任何样式

 ## 2.3 混合文档中的 SVG 标记
  - SVG 中的 foreign object 
    1. <froeignObject> 兼容 ie11 ，如果想定义备用内容，以防 SVG 阅读器不能显示 foreign object 内容，可以结合使用 requireFeatures 属性和 <switch> 元素。

  - 在 XHTML 或者 HTML5 中内联 SVG
    1. 除了 <froeignObject> 元素的子元素，HTML 解析器会自动辨别 <svg> 元素和它的子节点都在 SVG 的命名空间内。
    2. 定义在 body 上的样式会被 svg 继承，也可以在主样式表内为 SVG 元素定义样式

  - 其他 XML 应用程序中的 SVG
    1. XSL-FO 文档内的 SVG 

# 3 坐标系统 
 ## 视口
  - em 默认字体的大小，通常相当于文本行高
  - ex 字母x 的高度
  - px 像素
  - pt 点
  - pc 12点
  - cm 厘米
  - mm 毫米
  - in 英寸
    1. 混合单位是可行，但不常用


 ## 使用默认用户坐标
  - p23
 ## 为视口指定用户坐标
  - viewBox 属性指定的数值可以使用逗号或空格分开。如果宽度或者高度为 0，则没有图形的显示。宽度和高度要求大于等于 0，为他们指定负值是错误
  - viewBox 是限制图形的视口
 ## 保留宽高比
  - 如果视口的宽高比和viewBox 不一样 SVG做以下三件事
    1. 按最小的尺寸等比缩放图形，以使图形填充视口 (必须指定图形放置的位置)
    2. 按最大的尺寸等比缩放图形并裁剪超出视口的部分 (必须指定哪个区域被裁剪掉)
    3. 拉伸或挤压绘图以使其恰好填充视口
  - 为 preserveAspectRatio 指定对齐方式
    1. xMin xMid xMax yMin yMid xMax 
    2. 通常在不知道视口宽高比时才会使用 preserveAspectRatio 。比如你可能希望缩放图像以适配应用程序视口，或者希望使用父文档的 css 设置高度和宽度
  - 使用 meet 说明符
    1. meet - viewBox适配视口
  - 使用 slice 说明符
    1. slice - 图像填充视口，裁剪超过的部分 
  - 使用 none 说明符
    2. none - 不保留宽高比，图像拉伸或缩放
 ## 嵌套坐标系统
  - svg 可以嵌套
     

# 4 基本形状
 - 线段
   1. 指定坐标可以不带单位，此时会使用用户坐标，也可带单位，如 em in
 - 笔画特征
   1. stroke-width 线的宽度
   2. 笔画颜色 stroke：red black 
   3. stroke-opacity 控制线条的透明度
   4. stroke-dasharray 虚线，值由一系列的数字组成，代表线的长度和空隙的长度，数字之间有逗号隔开，数字个数为偶数
 - 矩阵
   1. 圆角矩阵 <rect x="10" y="10" height="20" rx="" ry="" />
   2. rx 相当于 x-radius ry 相当于 y-radius 
 - 圆与椭圆 cx cy 圆心的坐标
   1. 圆需要指定 r 半径
   2. 椭圆需要指定圆心的坐标外，还需要指定 x方向的半径与 y 方向的半径 
 - 多边形
   1. polygon points => 所有点的坐标，，每个点的坐标之间用逗号隔开，每个点用空格隔开
   2. 填充边线交叉的多边形 fill-full 属性的 nonzero (默认值) 和 evenodd 。
   3. evenodd 只算与边线相交的次数。如果总数时奇数，则认为点在图形内部，否则认为点在图形的外部
 - 折线
   1. polyline 时最好将fill 属性设置为 none ，否则 SVG 阅读器会尝试填充形状。
 - 线帽和线连接
   1. 当使用 line 或者 polyline 画线时，可以为 stroke-linecap 指定不同的值来确定线的头尾形状，可能取值 butt round square 
   2. butt 则准确的与起始位置对齐
   3. round square 都超过真实位置
   4. stroke-linejoin 属性来指定线段在图形棱角处交叉时的效果，可能取值 miter (尖的) round (圆的) bevel (平的)
 - 基本形状总结
   5. stroke-miterlimit 相交处显示宽度与线段的最大比例，默认值为4 
   6. fill-opacity 0-1 0 表示完全透明
   7. fill-rule  该属性决定判断某个点是否在图形内部的方法 nonzero (默认值) evenodd 

# 5 文档结构
  ## 结构和表现
   - 结构就是图形时什么
  ## 在 SVG 中使用样式
   - 内联样式
     1. 设置 style 属性的值
   - 内部样式表
     1. <defs> 
   - 外部样式表 
     2. 如果希望统一修改 SVG 文档的样式，需要将其保存到一个外部文件中，然后把他变成一个外部样式
     3. 应用4外部样式表的完整 SVG 文档 (<?xml ... ?> <?xml-stylesheet ... ?> <!DOCTYPE>) 
     4. 内联样式几乎总比内部或外部样式表渲染快
   - 表现属性

     1. <circle cx="" cy="" r="" fill: "green">
     2. 表现属性直接写在 标签上，权重最低
     3. 指定样式表现信息首选使用 style 或者样式表

  ## 分组和引用对象
   - <g> 元素
     1.  g 元素会将所有的子元素作为一个组合，通常组合有一个 id 作为名称
   - <use> 元素
     1. 定义一组图形对象后，可以使用 use 标签再次显示它们 。要指定想要重用的组合，给 xlink:href 属性指定 URL 即可
   - <defs> 元素 组合方式
     1. 复用组合时，需要知道原始图像中这些图形的位置，并以此位置作为复用的基础，而不是使用诸如0这样简单的数字
     2. 填充和笔画颜色由原始图形建立，并不能通过 use 元素覆盖。
     3. 我们不能单独将他们储存起来，只是绘制其中的一个或多个.
     4. 处于安全的原因，并非所有的 SVG 阅读器都支持外部引用，尤其是 web 浏览器。
     5. 可以将公用的对象放在一个 svg 文件中，然后引用。具有局限性
   - <symbol> 元素 组合方式

     1. 将 <symbol> 放在 <defs> 标签中。
   - <image>

     1. <use> 元素允许我们复用 SVG 文件的一部分，而 <image> 元素可以包含一个完整的 svg 或者栅格文件
  
# 6 坐标系统变换
  ## translate 变换
    - translate 声明会获取整个网格，然后把他移动到画布的新位置，而不是移动 图形。
  ## scale 变换
    - SVG 会在计算形状的坐标之前，先对坐标系统应用变换
  ## 变换序列
    - 变换序列的顺序会影响结果，变换 A 然后变换 B 的结果与变换 B 然后变换 A 的结果不同。
  ## 技巧：笛卡尔坐标系统转换
   - 在原始绘图中找到最大 y 坐标
   - 将整个绘图放入 <g> 元素中
   - 启用平移，根据最大 y 值向下移动坐标系统：transform=" translate(0, max - y)"
   - 接下来的变换就是缩放 y 轴 -1倍，让它倒置翻转： transform" translate(0, max - y) scale(1, -1)"
  ## rotate 变换 
   - 除非我们另行指定，否则旋转的中心点(0, 0) 
   - 如果指定旋转的中心点, SVG 定义了rotate方法。 rotate(angle, centerX, centerY)
  ## 技巧：围绕中心点缩放
   - translate(-centerX*(factor-1), -centerY*(factor-1)) scale(factor)
   - centerX centerY 分别是缩放的中心点 x y 坐标
  ## skewX 变换和 skewY 变换、
   - skewX skewY 只是倾斜x y 轴，x y 轴的坐标不会改变
  ## 变换总结
  ## CSS 变换和 SVG

# 7 路径
  ## moveto lineto closepath
   - 每个路径都必须以 moveto 命令开始。命令字母为大写的 M ，紧跟着一个使用逗号或空格分隔的 x 和 y 坐标。
   - moveto 命令后面紧跟着一个或多个 lineto 命令，用大写 L 表示，它的后面也是由逗号或者空格分隔的 x 和 y 坐标。
   - 使用四条线绘制矩形和使用 closepath 命令绘制矩形还有一个区别。当关闭路径时，开始线和结束线会被连接到一起，形成一个有样式的连续形状。如果使用粗笔画或者设置 stroke-linecap 以及 stroke-linejoin 效果，区别就很明显了。可以完全无缝结合
  ## 相对 moveto 和 lineto
   - 大写命令的坐标是绝对的，小写命令的坐标是相对的。但是 closepath 命令没有坐标，他的大小写形式效果相同。
   - 如果使用小写 m 启动路径，他的坐标会被解析为绝对位置，因为它没有参照位置计算相对位置。
  ## 路径的快捷方式
   - 水平和垂直 lineto 命令
     1. 路径可以使用 H 命令加绝对 x 坐标，或者 h 命令加相对 x 坐标，来指定一条水平线。类似的，垂直线可以使用 V 命令加绝对 y 坐标或者 v 命令加相对 y 坐标来指定。
     2.  <path d=" M 12 24 h 15 v 25 h -15 z"> 此 path 绘制一个宽度为15 单位 高度为 25 单位的矩形，并且其左上角的坐标(12,24) 处。
   - 路径快捷方式表示法
     1. 可以在 L 或者 l 后面放多组坐标
     2. 所有不必要的空白都可以消除。字母后面不需要空白，因为所有的命令都是一个字母。数字和命令之间不需要空白，因为命令字母并不能作为数字的一部分。正数和负数之间也不需要空白，因为负数的前置减号并不能作为正数的一部分。
     3. <path d="M 12 24 h 15 v 25 h -15 z"> ==> <path d="M12 24h15v25h-15z">
     4. 如果是纯数字，除了减号以外，其他的用空格隔开
  ## 椭圆弧
   - 圆狐命令以字母 A (绝对坐标的缩写) 或者 a (相对坐标的缩写) 开始，后面紧跟以下 7 个参数。
   - 点所在椭圆的 x 半径和 y 半径
   - 椭圆的 x 轴旋转角度 x-axis-rotation 
   - large-arc-flag , 如果需要圆狐的角度小于 180 度，其为 0；如果需要的圆狐的角度大于或者等于 180 度，则为 1；
   - sweep-flag ，如果需要弧以负角度绘制则为0，以正角度绘制则为1；
   - 终点的 x 坐标和 y 坐标。
  ## 从其他弧线格式变换
  ## 贝塞尔曲线
  ## 路径总结
  ## <maeker> 元素
   - 
  ## 标记记录

# 8 图案和渐变

# 9 文本

# 10 裁剪和蒙版

# 11 滤镜

# 12 SVG 动画

# 13 添加交互

# 14 使用 SVG DOM

# 15 生成 SVG  