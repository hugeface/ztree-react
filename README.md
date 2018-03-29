# ztree-react
在React环境下，调查各树状目录组件的使用及扩展性。React环境使用dva框架构建。

## rc-tree
- Basic tree
- Draggable tree

## react-treeview
- Controlled tree
- Uncontrolled tree

## ztree-for-react
ztree是基于jQuery的，功能非常强大，在jquery下成熟稳定的树状结构组件。

ztree-for-react对ztree进行了封装，使其能在React开发环境下使用。

缺点：
- 对jQuery有先天的依赖，必须将其引入 --- 本工程，在index.ejs中引入jquery.min.js
- 关键代码ref="ztree"，这种ref的使用方式未来或不被支持
- 样式引用需要Webpack额外的配置，在内置Webpack的框架(dva)中需要直接引入样式文件，才能生效  

```
import './zTreeStyle/zTreeStyle.less';
```

有点：功能最强，没有之一，具体见官网（http://www.treejs.cn/v3/main.php#_zTreeInfo）

# 调研总结

想要样式、功能与需求完美契合的树状菜单组件，还是自己写吧

