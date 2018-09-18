# XML 的用途
 - 把数据从 HTML 分离
   1. 如果需要在 HTML 文档中显示动态数据，那么每当数据改变时将花费大量的时间来编辑 HTML
   2. 通过 XML ，数据能够储存在独立的 XML 文件中。这样就可以专注与使用 HTML 进行布局和显示，并确保修改底层数据不再需要对 HTML 进行任何改变
 - 简化数据共享
   1. XML 数据以纯文本格式进行储存，因此提供了一种独立与软件和硬件的数据储存方法
 - 简化数据传输
 - 简化平台的变更
 - 使自己的数据更有用

# XML 命名规范
 - 名称可以含字母 数字以及其他的字符
 - 名称不能以数字或者标点符号开始
 - 名称不能包含空格
 - 名称不能以字符 'xml' (或者XML Xml)开始
 - 可以使用下划线的名称
 - 不能以 '-' 来连接两个单词

# XML 属性
 - 我的经验是在 HTML 中，属性用起来很便利，但是在 XML 中，您应该尽量避免使用属性。如果信息感觉起来很像数据，那么请使用子元素吧。

# XML 验证
 - XML 文档必须有根元素
 - XML 文档必须有关闭标签
 - XML 标签对大小写敏感
 - XML 元素必须被正确的嵌套
 - XML 属性必须加引号

# XML 验证器

# XML HTTP Request
 - xmlhttp=new XMLHttpRequest();
 - Internet Explorer （IE5 和 IE6）使用 ActiveX 对象：xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
 - xmlhttp.onreadystatechange=state_Change;
 - xmlhttp.open("GET",url,true);
 - xmlhttp.send(null);
 - onreadystatechange 是一个事件句柄。它的值 (state_Change) 是一个函数的名称，当 XMLHttpRequest 对象的状态发生改变时，会触发此函数。状态从 0 (uninitialized) 到 4 (complete) 进行变化。仅在状态为 4 时，我们才执行代码。
 - 我们的实例在 open() 的第三个参数中使用了 "true"。该参数规定请求是否异步处理。True 表示脚本会在 send() 方法之后继续执行，而不等待来自服务器的响应。onreadystatechange 事件使代码复杂化了。但是这是在没有得到服务器响应的情况下，防止代码停止的最安全的方法。通过把该参数设置为 "false"，可以省去额外的 onreadystatechange 代码。如果在请求失败时是否执行其余的代码无关紧要，那么可以使用这个参数。

# XML 解析器
 - 解析请求的文件
  
 - 解析请求的字符串 
  1. parser=new DOMParser();
  2. xmlDoc=parser.parseFromString(txt,"text/xml");

# XML DOM 
 - 解析 文档
 - xmlDoc.getElementsByTagName("to")[0].childNodes[0].nodeValue
 - xmlDoc  由解析器创建的 XML 文档
 - getElementsByTagName("to")[0] - 第一个 <to> 元素
 - childNodes[0] - <to> 元素的第一个子元素（文本节点）
 - nodeValue - 节点的值（文本本身）
 - document.getElementById("to").innerHTML = xmlDoc.getElementsByTagName("to")[0].childNodes[0].nodeValue;
 - 解析字符串
 - 与以上一样，获取 xmlDoc 时有区别

# XML to HTML


# XML 命名空间
 - 使用前缀来避免命名冲突  <h:table>
 - 使用命名空间 <h:table xmlns:h="http://www.w3.org/TR/html4/">
 - XML Namespace (xmlns) 属性  xmlns:namespace-prefix="namespaceURI"
 - 默认的命名空间（Default Namespaces）xmlns="namespaceURI"