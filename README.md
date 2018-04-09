# tree-react
在React环境下，调查各树状目录组件的使用及扩展性。React环境使用dva框架构建。

## rc-tree
- Basic tree
- Draggable tree

优点：
- 功能较为强大，满足拖拽、添加、删除、编辑等交互功能
- 开发文档及Demo维护较好

缺点：
- 扩展性一般

## react-treeview
- Controlled tree
- Uncontrolled tree

缺点：
- 插件样式开放度不足，风格扩展性差，难以适应浏览器缩放
- 功能上展示为主，缺少交互性功能

## ztree-for-react
ztree是基于jQuery的，功能非常强大，在jquery下成熟稳定的树状结构组件。

ztree-for-react对ztree进行了封装，使其能在React开发环境下使用。

优点：
- 功能强大，扩展性强，demo、文档齐全详尽
- 主流树形插件，性能稳定，方案齐全，开发资料较多

缺点：
- 对jQuery有先天的依赖，必须将其引入 --- 本工程，在index.ejs中引入jquery.min.js
- 关键代码ref="ztree"，这种ref的使用方式未来或不被支持
- 样式引用需要Webpack额外的配置，在内置Webpack的框架(dva)中需要直接引入样式文件，才能生效  

```
import './zTreeStyle/zTreeStyle.less';
```

优点：功能最强，没有之一，具体见本工程开发示例companyManagement，以及官网示例（http://www.treejs.cn/v3/main.php#_zTreeInfo

# 调研总结

ztree是以上几种树形插件中，功能最为强大，扩展性最优的。

# 代码使用说明

- src/routes/IndexPages.js为主展示页面，默认展示基于ztree-for-react的OrgTree组件
- OrgTree, CompanyManagement组件实现了适应浏览器窗口的缩放效果，需要IndexPages.less配置支持，其它组件则不需要，展示时需注释掉相关Css代码
- 要查看其它插件果，取消IndexPages中的相关注释，并且注释掉IndexPages.less中的代码
