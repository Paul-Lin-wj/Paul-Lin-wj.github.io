export const site = {
  email: 'muad.dib.lin@gmail.com',
  github: 'https://github.com/Paul-Lin-wj',
  profileReadme: 'https://github.com/Paul-Lin-wj',
};

export type Lang = 'zh' | 'en';

type Card = { tag: string; title: string; sub?: string; desc: string; bullets?: string[]; stack?: string[]; href?: string; go?: string; subs?: { label: string; href: string }[] };

type Dict = {
  htmlLang: string;
  nav: { research: string; projects: string; about: string; other: string; otherHref: string };
  hero: {
    kicker: string; namePrimary: string; nameSecondary: string | null;
    lede: string; metaDescription: string;
    chips: string[]; email: string; github: string; ctaAbout: string; ctaProjects: string;
  };
  research: { kicker: string; title: string; lede: string; cards: Card[] };
  projects: { kicker: string; title: string; lede: string; cards: Card[]; tooling: Card[]; more: string };
  about: { body: string[] };
  footer: { built: string; source: string };
  projectsPage: { title: string; lede: string; research: string; tooling: string };
  aboutPage: {
    title: string; lede: string; eduTitle: string; edu: [string, string][];
    focusTitle: string; focus: string[]; contactTitle: string; contact: string;
  };
};

const zh: Dict = {
  htmlLang: 'zh-CN',
  nav: { research: '研究方向', projects: '项目', about: '关于', other: 'English', otherHref: '/en/' },
  hero: {
    kicker: '武汉大学 · 物理科学与技术学院 · 微电子科学与工程',
    namePrimary: '林晖洋',
    nameSecondary: 'Huiyang Lin',
    lede: 'AI Agent × 可审计的自动化',
    metaDescription: '中微子物理与可审计的 agent 自动化。JUNO 能量刻度流水线、物理基准测试，以及让自动化过程可追溯的工具链。',
    chips: ['JUNO 能量刻度', '可复现流水线', 'Agent 工具链', 'Android 自动化'],
    email: 'Email',
    github: 'GitHub',
    ctaAbout: '更多关于我',
    ctaProjects: '查看项目',
  },
  research: {
    kicker: '01 — Research',
    title: '研究方向',
    lede: '两个方向，一个共同点：让复杂过程的每一步都可追溯。',
    cards: [
      {
        tag: 'JUNO · 物理分析',
        title: '能量刻度的完整物理链路',
        desc: '从 EDM 到 E_true = f(E_rec) 的完整链路：波形与事例重建、26B 能量修正、事例挑选、物理 QA、峰位拟合与非线性全局拟合。刻度源覆盖 Ge68 / Cs137 / Mn54 / Co60 / K40 五种单能源与 AmC 关联对三峰。',
        bullets: [
          '五种单能源 + AmC 关联对三峰的挑选与拟合',
          '26B Finalcorrection 与非线性全局拟合',
          '每一步挑选条件都留档可查',
        ],
      },
      {
        tag: 'Agent · 工程',
        title: '可审计的自动化',
        desc: '让不可信的自动化过程变得可追溯、可控制。物理流水线每次运行留档代码快照与全部 cut 条件；手机操控 agent 用白名单工具面与多层防线约束模型行为。',
        bullets: [
          '每次运行产出代码快照（含 sha256）与完整性审计',
          '工具面白名单 + 受保护应用黑名单',
          '红队三轮实测的防线验证',
        ],
      },
    ],
  },
  projects: {
    kicker: '02 — Projects',
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
        tag: '物理 × Agent',
        title: 'jbench_plank2018',
        sub: 'Python',
        desc: 'Planck 2018 CMB 基准：用宇宙学参数推断来测 AI agent 的物理推理能力。CAMB 理论谱 + 银河前景 + 仪器噪声，参数在 Planck 2018 ±3σ 内随机采样防止背题；真值由评分系统独占，agent 不可见。',
        stack: ['Python', 'CAMB', 'benchmark', 'agent'],
        href: 'https://github.com/Paul-Lin-wj/jbench_plank2018',
        go: '查看仓库 →',
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
  about: {
    body: [
      '物理这边，流水线的每次运行都留档代码快照与全部挑选条件，保证结果能逐位溯源；工程那边，agent 的每一个动作都被约束在明确的工具面里，越权会被拦下。',
    ],
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
    focus: [
      '把 JUNO 中微子实验的能量刻度分析自动化：从原始数据到非线性曲线的完整链路',
      '科研流水线的可复现与可审计：代码快照、cut 条件留档、完整性校验',
      'Agent 工具链的约束与安全：受控工具面、多层防线、红队验证',
    ],
    contactTitle: '联系',
    contact: '技术讨论、合作或任何问题，欢迎邮件联系。',
  },
};

const en: Dict = {
  htmlLang: 'en',
  nav: { research: 'Research', projects: 'Projects', about: 'About', other: '中文', otherHref: '/' },
  hero: {
    kicker: 'Wuhan University · School of Physics and Technology · Microelectronics',
    namePrimary: 'Huiyang Lin',
    nameSecondary: null,
    lede: 'AI agents × auditable automation',
    metaDescription: 'Neutrino physics and auditable agent automation. JUNO energy-calibration pipelines, physics benchmarks, and tooling that keeps automation traceable.',
    chips: ['JUNO calibration', 'Reproducible pipelines', 'Agent tooling', 'Android automation'],
    email: 'Email',
    github: 'GitHub',
    ctaAbout: 'More about me',
    ctaProjects: 'View projects',
  },
  research: {
    kicker: '01 — Research',
    title: 'Research',
    lede: 'Two directions, one common thread: making every step of a complex process traceable.',
    cards: [
      {
        tag: 'JUNO · Physics analysis',
        title: 'The full energy-calibration chain',
        desc: 'The complete chain from EDM to E_true = f(E_rec): waveform and event reconstruction, 26B energy correction, event selection, physics QA, peak fitting and global non-linearity fitting. Sources cover five single-energy gammas (Ge68 / Cs137 / Mn54 / Co60 / K40) plus the AmC coincidence triplets.',
        bullets: [
          'Selection and fitting for five single-energy sources + AmC triplets',
          '26B Finalcorrection and global non-linearity fitting',
          'Every selection cut is recorded and auditable',
        ],
      },
      {
        tag: 'Agents · Engineering',
        title: 'Auditable automation',
        desc: 'Making untrusted automation traceable and controllable. The physics pipeline archives a code snapshot and all cut conditions on every run; the phone-control agent constrains model behaviour through a whitelisted tool surface and layered defences.',
        bullets: [
          'Per-run code snapshot (with sha256) and integrity audit',
          'Whitelisted tool surface + protected-app blacklist',
          'Defences validated by three rounds of red-teaming',
        ],
      },
    ],
  },
  projects: {
    kicker: '02 — Projects',
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
        tag: 'Physics × Agents',
        title: 'jbench_plank2018',
        sub: 'Python',
        desc: 'A Planck 2018 CMB benchmark that tests an AI agent\'s physics reasoning through cosmological parameter inference. CAMB theory spectra plus galactic foregrounds and instrument noise, with parameters sampled randomly within Planck 2018 ±3σ so the task cannot be memorised; ground truth is held by the scoring system and never shown to the agent.',
        stack: ['Python', 'CAMB', 'benchmark', 'agent'],
        href: 'https://github.com/Paul-Lin-wj/jbench_plank2018',
        go: 'View repository →',
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
  about: {
    body: [
      'In physics, every pipeline run archives a code snapshot and all selection conditions so results can be traced bit-for-bit. In engineering, every agent action is confined to an explicit tool surface, and anything out of bounds is blocked.',
    ],
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
    focus: [
      'Automating the energy-calibration analysis for the JUNO neutrino experiment — the full chain from raw data to the non-linearity curve',
      'Reproducible and auditable research pipelines: code snapshots, recorded cut conditions, integrity checks',
      'Constraint and safety for agent tooling: controlled tool surfaces, layered defences, red-team validation',
    ],
    contactTitle: 'Contact',
    contact: 'For technical discussion, collaboration, or anything else — email is best.',
  },
};

export const dicts: Record<Lang, Dict> = { zh, en };
export const otherLang: Record<Lang, Lang> = { zh: 'en', en: 'zh' };
