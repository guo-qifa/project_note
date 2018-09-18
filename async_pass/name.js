(function () {

  var _isIE = (
    navigator.appName == "Microsoft Internet Explorer"
  );

  var _removeNode = _isIE ? function () {
    var d;
    return function (n) {
      if (n && n.tagName != 'BODY') {
        d = d || document.createElement('div');
        d.appendChild(n);
        d.innerHTML = '';
      }
    }
  }() : function (n) {
    if (n && n.parentNode && n.tagName != 'BODY') {
      n.parentNode.removeChild(n);
    }
  };


  /* [ Request by window.name ] 
  * **************************************************************************** 
   借助 Window.name 实现 Js 的跨域访问。 
   1、 url 向外传值， callback 处理返回结果。 
   2、 返回页面中 JS 对 window.name 赋值。 
  
   返回页 
   <script language="JavaScript"> 
       window.name = ...  // 支持 JSON 字符串，可达~2MB 
   </script> 
  
   若需同时进行多个请求，回调函数应是不同的函数实例。 
   iframe 的自由载入形成了异步机制。 
  */

  wnRequest = {
    _doc: document,
    _proxyUrl: 'proxy.html'
  };

  wnRequest.send = function (url, callback) {
    if (!url || typeof url !== 'string') {
      return;
    }
    url += (url.indexOf('?') > 0 ? '&' : '?') + 'windowname=get';

    var frame = this._doc.createElement('iframe');
    frame._state = 0;
    this._doc.body.appendChild(frame);
    frame.style.display = 'none';

    (function (el, type, fn) {
      if (_isIE) {
        el.attachEvent('on' + type, fn);
      } else {
        el.addEventListener(type, fn, false);
      }
    })(frame, 'load', function () {
      if (frame._state == 1) {
        _getData(frame, callback);
      } else if (frame._state == 0) {
        frame._state = 1;
        //frame.contentWindow.location = wnRequest._proxyUrl;  
        frame.contentWindow.location.replace(wnRequest._proxyUrl);
      }
    });
    frame.src = url;
  };

  //  
  // 设置异域 Js 可访问的本地数据，客户端直接站间转递数据  
  // 注：  
  // 即浏览器直接将数据转递给另一个域的窗口，数据不上网。  
  // 返回页代码：  
  // <script type="text/javascript">  
  //     if (window.name) {  
  //         //... 处理 name 值  
  //         window.name = null;  
  //     }  
  //     // 升为顶级窗口，完成数据转递  
  //     try {  
  //         top.location.hostname;  
  //         if (top.location.hostname != window.location.hostname) {  
  //             top.location.href =window.location.href;  
  //         }  
  //     } catch(e) {  
  //         top.location.href = window.location.href;  
  //     }  
  // </script>  
  //  
  //  
  wnRequest.setname = function (name, url) {
    if (!url || typeof url !== 'string') {
      return;
    }
    url += (url.indexOf('?') > 0 ? '&' : '?') + 'windowname=loc';

    var frame = this._doc.createElement('iframe');
    frame._count = 0;
    this._doc.body.appendChild(frame);
    frame.style.display = 'none';
    if (_isIE) {
      frame.name = name;
    } else {
      frame.contentWindow.name = name;
    }
    frame.src = url;
  };

  //  
  // 私用辅助  
  //  
  var _clear = function (frame) {
    try {
      frame.contentWindow.document.write('');
      frame.contentWindow.close();
      _removeNode(frame);
    } catch (e) { }
  }

  var _getData = function (frame, callback) {
    try {
      var da = frame.contentWindow.name;
    } catch (e) { }
    _clear(frame);
    if (callback && typeof callback === 'function') {
      callback(da);
    }
  }

})();

/**
 * 如果需要同时访问多个异域文件，可以像下面这样写回调函数，
 * 浏览器异步载入 iframe 的机制形成了天生的 JS 跨域异步访问。 
 * 这是跨域请求的主页面 JS 调用：
 */
var _str = '', _cnt = 0;

function myfunc(id) {
  return function (data) {
    _str += id + ':' + data + '\n';
    ++_cnt;
    if (_cnt >= 4) alert(_str);
  };
}

var _links = [
  { id: 4, url: 'http://www.aaa.com/test4.html' },
  { id: 5, url: 'http://www.bbb.com/test5.html' },
  { id: 6, url: 'http://www.ccc.com/test6.html' },
  { id: 7, url: 'http://www.ddd.com/test7.html' }
];
function dosome() {
  for (var _i = 0; _i < _links.length; ++_i) {
    wnRequest.send(_links[_i].url, myfunc(_links[_i].id));
  }
  // 跨域本地数据转递  
  wnRequest.setname('这里可能是一串加密用的密钥哦，俺从 https 那边过来滴！', 'http://www.eee.com/test8.html');
}

// 跨域的页面
if (window.name) {
  alert(window.name);
  // 存储或处理 name 值  
  // 可存在 Cookie 中，如果不希望 Cookie 上传泄露出去，可设置其 secure 属性  
  window.name = null;
}
/**
  try { 
    top.location.hostname; 
    if (top.location.hostname != window.location.hostname) { 
        top.location.href =window.location.href; 
    } 
  } catch(e) { 
    top.location.href = window.location.href; 
  } 
*/
