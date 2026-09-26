export const site = {
  email: 'muad.dib.lin@gmail.com',
  github: 'https://github.com/Paul-Lin-wj',
  profileReadme: 'https://github.com/Paul-Lin-wj',
};

export type Lang = 'zh' | 'en';

type Card = { tag: string; title: string; sub?: string; desc: string; bullets?: string[]; stack?: string[]; href?: string; go?: string; subs?: { label: string; href: string }[]; featured?: boolean };

type Dict = {
  htmlLang: string;
  nav: { projects: string; about: string; other: string; otherHref: string };
  hero: {
    kicker: string; namePrimary: string; nameSecondary: string | null;
    metaDescription: string;
    email: string; github: string; ctaAbout: string; ctaProjects: string;
  };
  publication: { kicker: string; title: string; card: Card };
  projects: { kicker: string; title: string; lede: string; cards: Card[]; tooling: Card[]; more: string };
  footer: { built: string; source: string };
  projectsPage: { title: string; lede: string; research: string; tooling: string };
  aboutPage: {
    title: string; lede: string; eduTitle: string; edu: [string, string][];
    focusTitle: string; focus: string[]; contactTitle: string; contact: string;
  };
};

const zh: Dict = {
  htmlLang: 'zh-CN',
  nav: { projects: '项目', about: '关于', other: 'English', otherHref: '/en/' },
  hero: {
    kicker: '武汉大学 · 物理科学与技术学院 · 微电子科学与工程',
    namePrimary: '林晖洋',
    nameSecondary: 'Huiyang Lin',
    metaDescription: '中微子物理与可审计的 agent 自动化。JUNO 能量刻度流水线、ParticleBench 物理基准（ICLR 2027 投稿），以及让自动化过程可追溯的工具链。',
    email: 'Email',
    github: 'GitHub',
    ctaAbout: '更多关于我',
    ctaProjects: '查看项目',
  },
  publication: {
    kicker: '02 — Publication',
    title: '成果',
    card: {
      tag: 'ICLR 2027 投稿',
      title: 'ParticleBench: Evaluating LLM Agents on Experimental Particle Physics Tasks',
      sub: 'OpenReview',
      desc: '面向实验粒子物理长链路计算任务的 LLM agent 基准：agent 须产出可执行的分析流程而非文字答案；任务自带 verifier 把正确性与性能分开评分，最终提交冻结后在 held-out 数据上重跑。Ding, Li, Sun, Zhang, Cheng, Nip, Lin, Liang, Chen.',
      href: 'https://openreview.net/forum?id=07nrkcmOOq',
      go: 'OpenReview →',
      featured: true,
    },
  },
  projects: {
    kicker: '01 — Projects',
    title: '项目',
    lede: '科研流水线与工具链。全部代码在 GitHub 上公开。',
    cards: [
      {
        tag: 'JUNO · 物理分析',
        title: 'juno-acu-energy-calibration-pipeline',
        sub: 'Python',
        desc: 'JUNO ACU 伽马源刻度数据处理流水线，覆盖 EDM → E_true = f(E_rec) 主链，含事例挑选、物理 QA、峰位拟合与非线性全局拟合。',
        stack: ['Python', 'JUNO', 'calibration'],
        href: 'https://github.com/Paul-Lin-wj/juno-acu-energy-calibration-pipeline',
        go: '查看仓库 →',
        subs: [
          { label: 'standalone_esd2npz — EDM/ESD → npz，每次运行留档代码快照与全部 cut 条件', href: 'https://github.com/Paul-Lin-wj/standalone_esd2npz' },
          { label: 'juno_calibration_acu_gamma_source — MC 模板最小二乘能谱拟合与峰位提取', href: 'https://github.com/Paul-Lin-wj/juno_calibration_acu_gamma_source' },
        ],
      },
      {
        tag: '物理 × Agent · ICLR 2027 投稿',
        title: 'ParticleBench_planck2018',
        sub: 'Python',
        desc: 'ParticleBench 的 Planck 2018 CMB 任务：用宇宙学参数推断测 AI agent 的长链路物理推理。CAMB 理论谱 + 银河前景 + 仪器噪声，参数在 Planck 2018 ±3σ 内随机采样防止背题；verifier 把正确性与性能分开评分，最终提交冻结后在 held-out 数据上重跑，真值 agent 全程不可见。',
        stack: ['Python', 'CAMB', 'benchmark', 'agent'],
        href: 'https://github.com/Paul-Lin-wj/ParticleBench_planck2018',
        go: '查看仓库 →',
        subs: [
          { label: '论文 — ParticleBench: Evaluating LLM Agents on Experimental Particle Physics Tasks（ICLR 2027 投稿，OpenReview）', href: 'https://openreview.net/forum?id=07nrkcmOOq' },
          { label: 'ParticleBench_planck2018 — Planck 2018 CMB 任务仓库', href: 'https://github.com/Paul-Lin-wj/ParticleBench_planck2018' },
        ],
      },
      {
        tag: 'Agent · 工具链',
        title: 'pi-phone-control',
        sub: 'TypeScript',
        desc: 'Android 手机操控 agent 扩展：受约束的工具面 + 多层安全防线 + 红队实测。配套常显任务横幅，全程可暂停、可终止。',
        stack: ['TypeScript', 'agent', 'safety'],
        href: 'https://github.com/Paul-Lin-wj/pi-phone-control',
        go: '查看仓库 →',
      },
      {
        tag: 'Agent · 多智能体',
        title: 'co-scientist-on-claude-code',
        sub: 'JavaScript',
        desc: '把 Google Co-Scientist 的多智能体科学发现流程复现到 Claude Code：7 个专门智能体组成"文献综述 → 假设生成 → 同行评审 → Elo 锦标赛排名 → 假设进化 → 元评审"循环，最终输出带排名的假设列表与完整研究概览。',
        stack: ['JavaScript', 'Python', 'multi-agent', 'Elo'],
        href: 'https://github.com/Paul-Lin-wj/co-scientist-on-claude-code',
        go: '查看仓库 →',
      },
    ],
    tooling: [
      {
        tag: 'Agent · 配套件',
        title: 'android-task-banner',
        sub: 'Java',
        desc: 'agent 手机任务的常显进度横幅，带暂停与终止按钮。按钮指令带新鲜度校验，残留点击会被下一个任务自动丢弃。',
        stack: ['Java', 'Android', 'overlay'],
        href: 'https://github.com/Paul-Lin-wj/android-task-banner',
        go: '查看仓库 →',
      },
      {
        tag: '工具 · Linux 移植',
        title: 'CS_switch',
        sub: 'Python',
        desc: 'CSSwitch 的 Linux CLI 移植版：把 Claude Science 的登录与模型推理解耦，让科研 agent 可接入任意 OpenAI 兼容端点。含多 provider 适配层、用户级安装脚本与 .deb 打包。',
        stack: ['Python', 'CLI', 'proxy', 'packaging'],
        href: 'https://github.com/Paul-Lin-wj/CS_switch',
        go: '查看仓库 →',
      },
      {
        tag: '知识库',
        title: 'TransformerWiki',
        sub: 'Python',
        desc: 'Transformer 模型优化的结构化知识库，打包为 Claude Code skill：注意力机制、训练策略、推理服务、量化与 kernel 级优化。',
        stack: ['Python', 'knowledge base'],
        href: 'https://github.com/Paul-Lin-wj/TransformerWiki',
        go: '查看仓库 →',
      },
    ],
    more: '全部项目 →',
  },
  footer: { built: 'Built with Astro', source: '源码' },
  projectsPage: {
    title: '项目',
    lede: '科研流水线与工具链。全部代码在 GitHub 上公开。',
    research: '科研流水线',
    tooling: '工具链',
  },
  aboutPage: {
    title: '关于',
    lede: '武汉大学物理科学与技术学院本科生，微电子科学与工程方向。',
    eduTitle: '教育背景',
    edu: [
      ['2023 — 至今', '武汉大学 · 物理科学与技术学院 · 微电子科学与工程'],
    ],
    focusTitle: '方向',
    focus: ['高能物理', 'Agent'],
    contactTitle: '联系',
    contact: '技术讨论、合作或任何问题，欢迎邮件联系。',
  },
};

const en: Dict = {
  htmlLang: 'en',
  nav: { projects: 'Projects', about: 'About', other: '中文', otherHref: '/' },
  hero: {
    kicker: 'Wuhan University · School of Physics and Technology · Microelectronics',
    namePrimary: 'Huiyang Lin',
    nameSecondary: null,
    metaDescription: 'Neutrino physics and auditable agent automation. JUNO energy-calibration pipelines, the ParticleBench physics benchmark (ICLR 2027 submission), and tooling that keeps automation traceable.',
    email: 'Email',
    github: 'GitHub',
    ctaAbout: 'More about me',
    ctaProjects: 'View projects',
  },
  publication: {
    kicker: '02 — Publication',
    title: 'Publication',
    card: {
      tag: 'ICLR 2027 submission',
      title: 'ParticleBench: Evaluating LLM Agents on Experimental Particle Physics Tasks',
      sub: 'OpenReview',
      desc: 'A benchmark for LLM agents on long-horizon computational tasks in experimental particle physics: agents must produce executable analysis procedures, not textual answers; task-specific verifiers separate correctness from performance, and final submissions are frozen and re-executed on held-out data. Ding, Li, Sun, Zhang, Cheng, Nip, Lin, Liang, Chen.',
      href: 'https://openreview.net/forum?id=07nrkcmOOq',
      go: 'OpenReview →',
      featured: true,
    },
  },
  projects: {
    kicker: '01 — Projects',
    title: 'Projects',
    lede: 'Research pipelines and tooling. All source is public on GitHub.',
    cards: [
      {
        tag: 'JUNO · Physics analysis',
        title: 'juno-acu-energy-calibration-pipeline',
        sub: 'Python',
        desc: 'Gamma-source calibration pipeline for the JUNO ACU, covering the EDM → E_true = f(E_rec) chain with event selection, physics QA, peak fitting and global non-linearity fitting.',
        stack: ['Python', 'JUNO', 'calibration'],
        href: 'https://github.com/Paul-Lin-wj/juno-acu-energy-calibration-pipeline',
        go: 'View repository →',
        subs: [
          { label: 'standalone_esd2npz — EDM/ESD → npz, archiving a code snapshot and every cut on each run', href: 'https://github.com/Paul-Lin-wj/standalone_esd2npz' },
          { label: 'juno_calibration_acu_gamma_source — least-squares MC-template spectrum fitter and peak extraction', href: 'https://github.com/Paul-Lin-wj/juno_calibration_acu_gamma_source' },
        ],
      },
      {
        tag: 'Physics × Agents · ICLR 2027 submission',
        title: 'ParticleBench_planck2018',
        sub: 'Python',
        desc: 'The Planck 2018 CMB task of ParticleBench: testing an AI agent\'s long-horizon physics reasoning through cosmological parameter inference. CAMB theory spectra plus galactic foregrounds and instrument noise, with parameters sampled randomly within Planck 2018 ±3σ so the task cannot be memorised; a task-specific verifier separates correctness from performance, and final submissions are frozen and re-executed on held-out data the agent never sees.',
        stack: ['Python', 'CAMB', 'benchmark', 'agent'],
        href: 'https://github.com/Paul-Lin-wj/ParticleBench_planck2018',
        go: 'View repository →',
        subs: [
          { label: 'Paper — ParticleBench: Evaluating LLM Agents on Experimental Particle Physics Tasks (ICLR 2027 submission, OpenReview)', href: 'https://openreview.net/forum?id=07nrkcmOOq' },
          { label: 'ParticleBench_planck2018 — the Planck 2018 CMB task repository', href: 'https://github.com/Paul-Lin-wj/ParticleBench_planck2018' },
        ],
      },
      {
        tag: 'Agents · Tooling',
        title: 'pi-phone-control',
        sub: 'TypeScript',
        desc: 'An Android phone-control agent extension: constrained tool surface, layered defences, red-teamed. Ships with an always-visible task banner that can be paused or stopped.',
        stack: ['TypeScript', 'agent', 'safety'],
        href: 'https://github.com/Paul-Lin-wj/pi-phone-control',
        go: 'View repository →',
      },
      {
        tag: 'Agents · Multi-agent',
        title: 'co-scientist-on-claude-code',
        sub: 'JavaScript',
        desc: 'A Claude Code reproduction of Google Co-Scientist\'s multi-agent scientific-discovery loop: seven specialist agents run literature review → hypothesis generation → peer review → Elo tournament ranking → hypothesis evolution → meta-review, ending in a ranked hypothesis list and a full research overview.',
        stack: ['JavaScript', 'Python', 'multi-agent', 'Elo'],
        href: 'https://github.com/Paul-Lin-wj/co-scientist-on-claude-code',
        go: 'View repository →',
      },
    ],
    tooling: [
      {
        tag: 'Agents · Companion',
        title: 'android-task-banner',
        sub: 'Java',
        desc: 'An always-visible progress banner for agent tasks on Android, with pause and stop buttons. Button commands carry freshness checks, so stale taps are dropped by the next task.',
        stack: ['Java', 'Android', 'overlay'],
        href: 'https://github.com/Paul-Lin-wj/android-task-banner',
        go: 'View repository →',
      },
      {
        tag: 'Tooling · Linux port',
        title: 'CS_switch',
        sub: 'Python',
        desc: 'The Linux CLI port of CSSwitch: decouples Claude Science\'s sign-in from model inference so a research agent can be pointed at any OpenAI-compatible endpoint. Includes a multi-provider adapter layer, a per-user installer and .deb packaging.',
        stack: ['Python', 'CLI', 'proxy', 'packaging'],
        href: 'https://github.com/Paul-Lin-wj/CS_switch',
        go: 'View repository →',
      },
      {
        tag: 'Knowledge base',
        title: 'TransformerWiki',
        sub: 'Python',
        desc: 'A structured knowledge base on Transformer optimisation, packaged as a Claude Code skill: attention mechanisms, training strategies, inference serving, quantisation and kernel-level work.',
        stack: ['Python', 'knowledge base'],
        href: 'https://github.com/Paul-Lin-wj/TransformerWiki',
        go: 'View repository →',
      },
    ],
    more: 'All projects →',
  },
  footer: { built: 'Built with Astro', source: 'Source' },
  projectsPage: {
    title: 'Projects',
    lede: 'Research pipelines and tooling. All source is public on GitHub.',
    research: 'Research pipelines',
    tooling: 'Tooling',
  },
  aboutPage: {
    title: 'About',
    lede: 'Undergraduate at Wuhan University, School of Physics and Technology.',
    eduTitle: 'Education',
    edu: [
      ['2023 — present', 'Wuhan University · School of Physics and Technology · Microelectronics'],
    ],
    focusTitle: 'Focus',
    focus: ['High-energy physics', 'Agents'],
    contactTitle: 'Contact',
    contact: 'For technical discussion, collaboration, or anything else — email is best.',
  },
};

export const dicts: Record<Lang, Dict> = { zh, en };
export const otherLang: Record<Lang, Lang> = { zh: 'en', en: 'zh' };
