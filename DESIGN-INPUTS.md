# OBDX Landing — Design Inputs

Phase A 设计探索阶段的输入文档。给 `/ui-ux-pro-max --design-system` 用。

---

## 1. 产品一句话

OBDX 是 AI 汽车诊断服务 —— OBD 蓝牙设备插车 → 扫码 → H5 网页看 AI 原创诊断报告（健康分、故障清单、修车预算）。

- **Tagline**：Your car, decoded.
- **替代**：Scan. Know. Go. / Every car tells a story. / The mechanic in your pocket.
- **市场**：北美（US/CA），英文优先
- **域名**：obdx.ai → 当前部署在 obd.kang-kang.com

## 2. 品牌性格（5 轴）

| 轴 | 是 | 不是 |
|----|-----|------|
| Approachable | 像朋友解释问题 | 冷冰冰工具 |
| Trustworthy | 专业数据 + 人话 | 花哨噱头 |
| Premium-Playful | Pixar 温暖 + Apple 质感 | 幼稚或套路 |
| Smart | 懂车又懂人 | 技术炫耀 |
| Modern | 干净极简有设计感 | 传统汽修油腻感 |

**对标**：
- 工具品牌：Milwaukee、Dyson
- 现代 SaaS：Linear、Vercel、Stripe
- 叙事：Pixar

**设计哲学**（官方 VI 已定）：**Dark Garage × Digital Precision**。可以继承也可以在 Phase A2 挑战 —— 用户已经对这版感觉"不过关"，欢迎出截然不同方向的候选。

## 3. 色板（VI 已定 — 可作为参考或被覆盖）

### 品牌主色
| 角色 | 名字 | Hex |
|------|------|-----|
| 主 | Electric Cobalt | `#2563EB` |
| 副 | Warm Amber | `#F59E0B` |
| 深底 | Charcoal Black | `#0F172A` |
| 浅底 | Cool White | `#F8FAFC` |

### 语义
| 角色 | Hex |
|------|-----|
| Healthy | Emerald `#10B981` |
| Caution | Warm Amber `#F59E0B` |
| Danger | Signal Red `#EF4444` |
| Info | Slate Blue `#64748B` |
| Premium | Deep Indigo `#4338CA` |

### 扩展
`#0F172A` Deep Night / `#1E293B` Dark Slate / `#334155` Medium Slate / `#94A3B8` Muted Silver / `#E2E8F0` Light Border / `#F1F5F9` Light Gray

## 4. 字体（VI 已定）

| 角色 | 字体 | 用途 |
|------|------|------|
| 标题 | **Outfit** | Hero / Section headings |
| 正文 | **DM Sans** | 段落、列表 |
| 数据 | **JetBrains Mono** | 数字、代码、技术标注 |

替代候选（如果 A2 另选）：Space Grotesk / Inter / IBM Plex Sans。

## 5. 物料清单（所有路径相对项目根）

### Logo
| 文件 | 路径 |
|------|------|
| Icon PNG（老版） | `brand-assets/obdx-brand/logo/obdx-logo-icon.png` |
| Primary Dark PNG | `brand-assets/obdx-brand/logo/obdx-logo-primary-dark.png` |
| Primary Light PNG | `brand-assets/obdx-brand/logo/obdx-logo-primary-light.png` |
| Tagline Dark PNG | `brand-assets/obdx-brand/logo/obdx-logo-tagline-dark.png` |
| **Icon SVG v2（新版）** | `brand-assets/obdx-brand/logo-redesign/obdx-logo-icon-v2.svg` |
| **Primary Dark SVG v2** | `brand-assets/obdx-brand/logo-redesign/obdx-logo-primary-dark-v2.svg` |
| **Primary Light SVG v2** | `brand-assets/obdx-brand/logo-redesign/obdx-logo-primary-light-v2.svg` |
| **Tagline SVG v2** | `brand-assets/obdx-brand/logo-redesign/obdx-logo-tagline-dark-v2.svg` |

推荐用 **SVG v2**。

### IP 角色（3 只）

| 角色 | 定位 | 资源 |
|------|------|------|
| **Wrench Uncle**（扳手大叔） | 老练修车师傅 IP，品牌门面 | `brand-assets/obdx-brand/ip-characters/wrench-uncle/{default, expressions, poses, with-dash}.png` |
| **Wrench** | 年轻助手 / 工具人 | `brand-assets/obdx-brand/ip-characters/wrench/{default, expressions, poses}.png` |
| **Dash**（仪表盘） | 车机化身，传递数据感 | `brand-assets/obdx-brand/ip-characters/dash/{default, expressions}.png` |

### 场景图（6 张 — 16:9 + 方形各 3 幕）

| 幕 | 含义 | 16:9 | 方形 |
|----|------|------|------|
| Ride | 开车中，设备亮起 | `obdx-scene-ride-16x9.png` | `obdx-scene-ride-square.png` |
| Checkup | 扫描诊断中 | `obdx-scene-checkup-16x9.png` | `obdx-scene-checkup-square.png` |
| Done | 报告完成，健康分 | `obdx-scene-done-16x9.png` | `obdx-scene-done-square.png` |

路径前缀：`brand-assets/obdx-brand/scenes/`

## 6. 内容素材（已有可复用）

从 `brand-assets/constants.ts` 搬：

- **PRICING_PLANS**：Free $0 / Plus $4.99/月 / Shop $19.99/月（3 档）
- **STATS**：706GB / 82 brands / 24,935 models / 10 sec
- **COMPETITORS**：FIXD / BlueDriver / CarMD / Innova / Snap-on 对比表
- **NAV_LINKS**：Features / How It Works / Pricing / Compare

## 7. Landing 必备 Section（建议）

参考 `brand-assets/Home.tsx` 结构（旧方案逻辑合理，视觉可全新）：

1. **Navbar** — logo + 导航 + CTA
2. **Hero** — slogan + 副文案 + CTA + 吉祥物/场景图
3. **Stats** — 4 个数字卡（706GB / 82 / 24,935 / 10s）
4. **Problem** — 用户 5 大痛点（故障灯、被宰、二手车、工具贵、竞品麻烦）
5. **HowItWorks** — 3 步流程（Plug / Scan / Read）
6. **Features** — AI 诊断 / 车型专属 / 修车预算 / 分享报告
7. **Comparison** — OBDX vs FIXD/BlueDriver/CarMD/Innova/Snap-on
8. **Pricing** — 3 档卡片
9. **Testimonials** — 推荐语（如有）
10. **DownloadCTA** — 下载引导
11. **Footer**

> 范围选 **A**（只重做 landing），功能页 scan/demo/report 不动。

## 8. 历史探索（`brand-assets/ideas.md` 3 方案）

1. **暗夜车库 Dark Garage Aesthetic** — VI 已选，用户反馈"不过关"
2. **蓝图解构 Blueprint Deconstruction** — 工程蓝图美学，网格 + 标注线
3. **皮克斯叙事 Pixar Storytelling** — 叙事驱动，角色中心

Phase A2 候选**需要至少有 1 套是"非暗夜车库变体"**，否则等于没探索。

## 9. 约束（强 vs 软）

### 强约束（不可违反）
- 保留 logo（推荐 SVG v2）
- 保留 3 只吉祥物 IP 形象（Wrench Uncle / Wrench / Dash）— 可以只选其一重点用
- 北美市场英文 copy
- 保留上述 5 个品牌性格轴（Pixar 温暖 + Apple 质感这句是品牌基因）

### 软约束（可调整）
- 色板（VI 那套可替换，但要给得出新色板的叙事理由）
- 字体（VI 那套可替换）
- 布局 / 网格 / 动效 / 叙事方式
- 深浅模式默认值（VI 默认 dark，可改）

### 零约束
- 现有 `brand-assets/*.tsx` 12 个组件（**作废**，不作为实现参考）

## 10. 部署约束

- 目标域名 `obd.kang-kang.com`（先用 `obd-new.kang-kang.com` 验证再切）
- Coolify 反代 `*.kang-kang.com` → `76.13.31.179`
- 前端容器 nginx，反代 `/api/*` 到 FastAPI 后端容器（**1c 同域架构**，前端不触发 CORS）
- 技术栈：Vite + React + TS + Tailwind v4 + framer-motion + lucide-react（**不含** shadcn/ui / wouter / sonner）
- 资产本地化：所有图片从 `web/public/brand/` 提供，**不走 CloudFront**
