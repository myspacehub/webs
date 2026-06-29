# 福建省高中全科学习 H5

静态 H5 站点，包含福建省高中九大学科目录、单元检索、学习进度记录和详细知识思维导图。

## 本地预览

```bash
python3 -m http.server 8000
```

打开：

```text
http://127.0.0.1:8000/
```

## Render 部署

仓库根目录包含 `render.yaml`，按 Render Blueprint 配置为静态站点：

- 入口：`index.html`
- 发布目录：`./`
- 自动部署：main 分支提交触发
