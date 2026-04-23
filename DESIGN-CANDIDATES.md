# OBDX Landing — Design Candidates (Phase A2)

4 套风格候选。每套都守 DESIGN-INPUTS.md 里的强约束（logo v2 SVG / 3 吉祥物 / 北美英文 / 5 品牌性格轴），软约束（色板/字体/布局）可自由解构。

旧 VI 默认的 **Dark Garage** 用户已反馈"不过关"，候选里有意不包含其变体。

---

## 候选 1 — Under the Hood（引擎盖下）

**调性**：精密机械美学 × 玻璃质感数据层。想象打开引擎盖看金属、活塞、管路，但所有数据漂浮在透明玻璃卡片里。

- **色板**：`#0A0A0A` Jet Black / `#2563EB` Cobalt / `#F59E0B` Amber / `#C0C0C0` Titanium（金属感）
- **字体**：Space Grotesk（标题，几何工程感）+ DM Sans + JetBrains Mono
- **布局**：左右不对称，左边暗色金属肌理 + IP 角色场景图，右边透明玻璃卡（backdrop-blur）叠在金属上
- **动效**：玻璃卡 hover 微微倾斜（3D tilt），数据从 IP 手里"流"到玻璃卡
- **吉祥物**：Wrench Uncle 站 Hero 中心，Dash 作为小数据粒子飘浮
- **风险**：深色本质没脱开 Dark Garage

## 候选 2 — Bento Garage（便当车库）✅ **推荐 / 已实现 Hero 原型**

**调性**：浅色 Bento grid × 日系 Kawaii + 工具感。从"车库暗房"反转到"明亮工作台"，温暖木质 + 每个信息点独立圆角格子。

- **色板**：`#F5F1EA` Warm Beige / `#FAFAF7` Cream / `#2563EB` Cobalt / `#E07856` Terracotta / `#1A1A1A` Ink
- **字体**：Outfit + DM Sans + JetBrains Mono（VI 继承）
- **布局**：12 列 bento grid，大格 + 小格不对称堆叠，`rounded-3xl` 柔和圆角
- **动效**：每格独立淡入（stagger），hover 放大轻微 tilt
- **吉祥物**：Wrench Uncle 溢出大 Hero 格子右下角，Dash 钻进数据格子
- **为什么推荐**：
  - 彻底反转 Dark Garage（浅色 vs 深色）
  - Bento 是 2026 主流模式，读起来有节奏
  - 浅色系 + 吉祥物最大化 Pixar 温暖 + Apple 质感
  - 保留 Electric Cobalt 品牌色做点缀
  - 对比旧 HTML 的临时蓝色调差异化极强

## 候选 3 — Diagnostic Runway（诊断跑道）

**调性**：Apple 产品页 × F1 遥测。极简、巨字号、中心对齐，数据如赛车仪表盘实时跳动。

- **色板**：`#000000` Racing Black / `#EF4444` Signal Red / `#FFFFFF` / `#4338CA` Deep Indigo
- **字体**：Outfit ExtraBold 150px+（超大 Hero 标题）+ Inter + IBM Plex Mono
- **布局**：全宽纵向 runway，每屏一个大主题，中心对齐，大量留白
- **动效**：scroll-driven reveal，数字 counter 动画，横向滑动展示竞品对比
- **吉祥物**：**几乎不用**（只 Hero 一尊 Wrench Uncle，其他屏纯 typography + 产品 UI 截图）
- **风险**：弱化了 IP 依赖，品牌识别度下降

## 候选 4 — Paper Workshop（纸上车间）

**调性**：手绘 sketch + 纸肌理 + 工程图纸笔记。像打开老修车师傅的手写笔记本。

- **色板**：`#F2EAD3` Aged Paper / `#1A1A1A` Dark Ink / `#2B6CB0` Blueprint Cyan / `#E07856` Caution Amber
- **字体**：Instrument Serif（手写风标题）+ DM Mono（正文）+ Caveat 手写体点缀
- **布局**:拼贴、不规则、手绘连线连接信息块
- **动效**:笔迹描绘（SVG stroke dashoffset）、纸张翻页
- **吉祥物**:改造成"纸质风"笔触描边插画
- **风险**:需要把吉祥物 PNG 做二次艺术处理，工作量大

---

## 推荐：**候选 2 — Bento Garage**，已先出 Hero 原型让你看实物再定

Hero 代码在 `web/src/components/Hero.tsx`，用候选 2 色板/字体/布局。

如果 Hero 不对路，换到候选 1/3/4 的主要变更点：
- → 候选 1：`index.css` 色板改深色金属；Hero 用 `backdrop-blur` 玻璃卡；背景换 IP 场景图
- → 候选 3：`index.css` 色板改黑白红；Hero 去掉 bento grid 改全宽中心对齐；字号 6xl → 9xl；吉祥物用量减到 1 个
- → 候选 4：`index.css` 色板改 paper；字体换 Instrument Serif；加 SVG 手绘描边 texture
