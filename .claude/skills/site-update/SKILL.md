---
name: site-update
description: 维护和更新个人网站（内容增改、双语同步、本地预览、部署）。当用户要求更新网站内容、添加论文/项目/成果、修改文案、调整样式或部署上线时使用。
---

# 个人网站维护指南

Astro 7 双语静态站，部署在 GitHub Pages（push main 触发 Actions）。repo: `~/mywork/Paul-Lin-wj.github.io`。

## 架构要点（改动前先记住）

- **所有文案集中在 `src/data/site.ts`**：`zh` / `en` 两个 `Dict`，页面是薄壳。改内容 = 改这个文件，**中英两处必须同步改**。
- 路由：英文是默认语言在根路径 `/`，中文在 `/zh/` 前缀。
- `src/components/Card.astro`：卡片组件。规则：**有 `subs` 时不能整卡套链接**（`<a>` 不能嵌套），标题变成链接，子项目单独成链。支持 `featured?: boolean`（preprint 强调样式）和 `authors?: string`（serif italic 作者行）。
- 样式集中在 `src/styles/global.css`，设计 token 在 `:root`（`--bg` 深蓝、`--accent` #58a6ff、`--accent-2` 青色、`--mono`、`--serif`）。
- 动画原则：纯 CSS/SMIL，全部包在 `@media (prefers-reduced-motion: no-preference)` 里。
- 字体：Newsreader 自托管（@fontsource），中文标题回退系统宋体，不要引 Google Fonts CDN（国内可达性）。

## 更新流程（必须按顺序）

1. 改 `site.ts`（中英同步）和/或组件/样式。
2. `npm run build` 确认通过。
3. 本地预览验证：`npm run preview`（后台，localhost:4321），用 curl grep 验证 `/`、`/zh/` 及相关内页。
4. **停下，让用户在 localhost:4321 看过并明确确认**——用户的要求是"先把本地给我看下再在github上部署"。
5. 确认后才 `git commit` + `git push origin main`。
6. `gh run watch` 确认 Actions 部署 success，再 curl 线上验证。
7. 里程碑发手机通知：`~/.claude/skills/gotify-push/scripts/push.sh "标题" "一句话结果" 5`。

## 已知的坑

- **Edit 工具在 site.ts 上容易歧义**：zh/en 块结构相同，old_string 要带足够上下文（前后行）唯一定位。
- **zsh glob**：`dist/assets/*.css` 这类会报 `no matches found`，用 `find`/`grep` 代替；构建产物 CSS 在 `dist/_astro/BaseLayout.<hash>.css`。
- 未加引号的 `===` 在 zsh 会报错。
- **OpenReview 抓不了**：WebFetch 503 / curl 403（anti-bot challenge）。需要论文信息时让用户直接粘贴页面文字。
- GitHub 私有仓库外链会 404——引用用户仓库前先确认是 public（`ParticleBench_planck2018` 截至 2026-09-26 仍私有，链接是死的）。

## 现状（2026-09-26 部署版）

- 首页：hero（径迹背景 + 探测器 SVG）→ `01 — Projects` → `02 — Publication`（featured preprint 卡）。
- 页脚有 mono 运行参数行 `site v1.1 · <date> · en/zh · astro@7`（构建时生成）。
- About 页方向只有两项：高能物理 / Agent。
- 回退点：commit `54247a3`（美化特性前的状态）。
