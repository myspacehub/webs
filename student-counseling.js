(function () {
  const GUIDE = {
    title: "身心积极疗法 · 中学生心理疏导",
    subtitle: "把考试、人际、亲子、自我否定和拖延压力拆成“先稳住身体—看清事实—找回资源—做小行动”的日常自助流程。",
    safety:
      "本页用于日常心理困扰疏导与自我调节，不做诊断，也不替代学校心理老师、医生或心理咨询师。若出现伤害自己/他人的念头、被暴力威胁、严重失眠失控、惊恐无法缓解等情况，请立刻告诉可信成年人，并联系学校心理老师、班主任、家长或当地紧急服务。",
    principles: [
      ["人不是问题", "困住你的通常是一个旧反应模式。先把“我很差”改成“我有一个模式需要升级”。"],
      ["先稳身体，再讲道理", "情绪强度超过 7/10 时，大脑很难理性分析；先呼气、放松肩颈、感到脚踩地。"],
      ["找正向目标", "把“不要紧张、不要吵、不要拖延”改成“我要先做哪一步、说哪句话、保护什么需要”。"],
      ["保留好意图，换低成本做法", "焦虑可能想保护成绩，愤怒可能想保护边界，拖延可能想躲开失败感；保留保护意图，换更有效的行动。"],
    ],
    reset: [
      ["1. 标强度", "给现在的情绪打分 0–10；超过 7 先不争论、不做重大决定。"],
      ["2. 看见当下", "说出眼前 5 个物品，感觉双脚踩地，手摸桌面或衣角。"],
      ["3. 慢呼气", "吸气 3 秒，呼气 5–6 秒，做 6 轮；同时放松下巴、肩膀、手指。"],
      ["4. 命名情绪", "用一句话说：这是紧张/委屈/愤怒/羞耻，不等于我整个人有问题。"],
      ["5. 问保护", "这个反应想保护我什么？成绩、尊严、安全感、被理解、被接纳，还是自主感？"],
      ["6. 选下一步", "只选一个 24 小时内能做的小动作：问一道题、发一条澄清消息、先学 10 分钟、找老师聊 5 分钟。"],
    ],
    scenarios: [
      {
        title: "考试焦虑 / 考前发慌",
        tag: "先降强度，再回到题目",
        signs: ["脑中反复出现“考砸了怎么办”", "心跳快、手心出汗、看书却进不去", "越想努力越慌"],
        steps: [
          "把目标从“不能考差”改成“我先拿下会做题，再处理卡住题”。",
          "考前写一张 3 行清单：必拿分题型、最容易错的点、卡题时的退路。",
          "考试中卡住 40 秒仍无思路，先标记跳过，让身体知道“我还有选择”。",
        ],
        script: "我现在紧张，是身体在提醒我重视这件事。下一步不是证明我很强，而是先做一道我会的题，让节奏回来。",
      },
      {
        title: "被父母/老师批评后很崩",
        tag: "事实—故事—需要—请求",
        signs: ["一句批评后觉得“我完了/没人懂我”", "想顶嘴或完全不说话", "心里委屈但表达不出来"],
        steps: [
          "事实：对方具体说了什么？不要加“他就是看不起我”的判断。",
          "故事：我脑中自动解释成了什么？它一定是真的吗？有没有第二种可能？",
          "需要：我真正需要的是尊重、鼓励、方法、空间，还是被听见？",
          "请求：用一句具体请求替代争吵，例如“你可以先听我说完原因，再一起定改法吗？”",
        ],
        script: "我知道你担心我的学习。刚才那句话我听了很难受，我更需要你先告诉我具体哪一步要改，我们一起定一个可执行办法。",
      },
      {
        title: "同学关系 / 被误解 / 社交内耗",
        tag: "不读心，先澄清",
        signs: ["反复猜别人是不是讨厌自己", "聊天后一直回放细节", "想解释又怕更尴尬"],
        steps: [
          "把“他肯定讨厌我”改成“我现在没有足够证据，只是很在意这段关系”。",
          "先找一个最小澄清动作：私下问一句、补充说明一次、或先观察一天。",
          "如果对方持续越界，用温和边界：我愿意沟通，但不接受嘲笑/传播隐私。",
        ],
        script: "我可能理解错了，所以想确认一下：你刚才那句话是在开玩笑，还是对我有不舒服的地方？我想把事情说清楚。",
      },
      {
        title: "成绩退步后的自我否定",
        tag: "把身份问题改回方法问题",
        signs: ["觉得“我就是笨/没救了”", "不敢看卷子，越躲越焦虑", "拿自己和别人反复比较"],
        steps: [
          "把“我不行”改成“这次暴露了知识、方法或状态中的一个漏洞”。",
          "把错题分三类：不会、会但错、时间不够；每类只选 1 个最该修的点。",
          "练三块自我价值肌肉：自信=我能学一点；自爱=我值得被照顾；自尊=我守一个小承诺。",
        ],
        script: "一次退步不是判决书，是检测报告。我今天只修一个漏洞，修完就比昨天更稳。",
      },
      {
        title: "拖延、刷手机、明知该学却动不了",
        tag: "保留休息需要，重设计入口",
        signs: ["越焦虑越刷手机", "计划写得很满，开始却很难", "一想到要学很多就想逃"],
        steps: [
          "承认拖延背后的好意图：它可能想让我躲开失败、压力或无聊。",
          "把任务切到小到不能再小：只打开书、只写标题、只做 1 道题、只背 3 个词。",
          "改环境而不是硬拼意志：手机离手 2 米，桌面只留当前科目，计时 10 分钟启动。",
        ],
        script: "我不是要立刻学满 3 小时，我只启动 10 分钟。10 分钟后再决定下一轮。",
      },
      {
        title: "争吵后后悔 / 情绪爆发",
        tag: "先修复，再讨论对错",
        signs: ["话一出口就后悔", "明明想被理解，却说成攻击", "吵完后关系更僵"],
        steps: [
          "先承认自己的语气或行为，不急着证明自己完全有理。",
          "把攻击句改成拥有句：我感到___，我需要___，我请求___。",
          "如果对方也激动，先约定暂停：我们 20 分钟后再谈，避免继续伤害。",
        ],
        script: "我刚才语气太冲，这部分我道歉。我真正想说的是我很着急，也需要被尊重。我们能不能换个方式说？",
      },
    ],
    cards: [
      {
        title: "事实—故事—需要—行动",
        use: "适合反复内耗、误解、亲子或同学冲突。",
        steps: ["事实：摄像机能拍到什么？", "故事：我给事实加了什么解释？", "需要：我在乎什么？", "行动：一个请求、边界、道歉、澄清或暂停。"],
      },
      {
        title: "信念 / 规则更新",
        use: "适合“必须完美、不能拒绝、一次失败就完了”等卡住自己的规则。",
        steps: ["旧规则：只有___，我才___。", "保护意图：它想保护我什么？", "新规则：我可以优先___，同时允许___。", "验证：下一次真实场景中试一句新说法。"],
      },
      {
        title: "自我价值三肌肉",
        use: "适合低自尊、自我否定、成绩波动后怀疑自己。",
        steps: ["自信：今天完成一个能证明“我能学”的小动作。", "自爱：照顾一个身体或情绪需要。", "自尊：守一个小承诺，或保护一个合理边界。"],
      },
      {
        title: "带温度的边界",
        use: "适合被催、被嘲笑、隐私被侵犯、关系里不敢拒绝。",
        steps: ["我理解/在乎___。", "同时，我不能/不会___。", "我可以___。", "如果继续___，我会___。"],
      },
      {
        title: "亲子沟通修复",
        use: "适合和父母因为成绩、手机、作息、选择反复冲突。",
        steps: ["先暂停降火：我想好好说，不想吵。", "讲事实和感受，不贴标签。", "提出两个可接受选择。", "约定后果和支持方式，第二天复盘。"],
      },
      {
        title: "24小时小实验",
        use: "适合目标混乱、改变迟迟开始不了。",
        steps: ["如果问题好 20%，明天会有什么不同？", "哪一小步在我控制内？", "需要谁或什么支持？", "用什么证据判断它有效？"],
      },
    ],
    help: [
      ["绿色", "一般压力、短时难过、可通过休息/沟通/复盘缓解：可用本页练习。"],
      ["橙色", "连续多日失眠、吃不下、频繁哭、明显影响上课：尽快找班主任、心理老师、家长一起支持。"],
      ["红色", "出现自伤他伤想法、被威胁或伤害、失控惊恐、现实感明显异常：立即找身边成年人并联系紧急服务。"],
    ],
  };

  function fallbackEscape(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[char]);
  }

  function safeText(escapeHTML, value) {
    return (escapeHTML || fallbackEscape)(value);
  }

  function paint(highlight, value) {
    return (highlight || fallbackEscape)(value);
  }

  function listHTML(items, highlight) {
    return `<ul>${items.map((item) => `<li>${paint(highlight, item)}</li>`).join("")}</ul>`;
  }

  const CRISIS_KEYWORDS = [
    "自杀",
    "轻生",
    "不想活",
    "想死",
    "活不下去",
    "结束生命",
    "自残",
    "割腕",
    "伤害自己",
    "伤害别人",
    "杀了",
    "打死",
    "报复",
    "家暴",
    "被打",
    "被威胁",
    "侵犯",
    "性侵",
    "幻听",
    "幻觉",
  ];

  const ANALYSIS_PROFILES = [
    {
      id: "exam",
      label: "考试/学习压力",
      keywords: ["考试", "成绩", "分数", "排名", "中考", "高考", "月考", "卷子", "作业", "复习", "刷题", "背不完", "上课", "学习", "题目"],
      emotion: "焦虑、紧张、害怕落后",
      need: "掌控感、胜任感、清晰计划、被鼓励",
      intention: "旧反应可能在保护你的成绩和未来，但它用“吓自己”的方式催你努力，成本太高。",
      method: "90秒稳定身体 + 目标重写 + 24小时小实验",
      steps: [
        "先把目标从“不能考差”改成“我先拿回一个可控动作”。",
        "把任务缩小到 10 分钟：只做会做题、只背 5 个词、只整理 1 道错题。",
        "写下一个“卡住时退路”：跳过、标记、先拿基础分、课后问一个人。",
      ],
      script: "我现在紧张，说明我重视这件事。下一步不是证明我完美，而是先做一个可控的小动作。",
      action: "今天只修一个漏洞：选一题错题，写清“考点—错因—下次第一步”。",
    },
    {
      id: "family",
      label: "亲子/师生沟通压力",
      keywords: ["爸", "妈", "父母", "家长", "老师", "班主任", "批评", "骂", "管我", "手机", "催", "不理解", "吵架", "沟通"],
      emotion: "委屈、愤怒、压迫感、想被理解",
      need: "尊重、空间、被听见、具体支持",
      intention: "旧反应可能在保护你的尊严和自主感，但顶嘴或沉默容易让对方只看见态度，看不见需要。",
      method: "事实—故事—需要—请求 + 带温度的边界",
      steps: [
        "先把对错放一边，写出摄像机能拍到的事实：谁说了什么、做了什么。",
        "把“他们就是不爱我/看不起我”暂时标成故事，不当作唯一真相。",
        "用一句具体请求替代争吵：我需要你先听我说完，再一起定改法。",
      ],
      script: "我知道你是担心我。刚才那种说法我听了很难受，我更需要一个具体可执行的建议。你可以先听我说完原因吗？",
      action: "找一个不在争吵中的时间，用 3 句话说：事实、感受、请求。",
    },
    {
      id: "peer",
      label: "同学关系/社交内耗",
      keywords: ["同学", "朋友", "室友", "关系", "孤立", "嘲笑", "误会", "讨厌我", "聊天", "群", "班里", "喜欢的人", "恋爱", "分手"],
      emotion: "不安、委屈、羞耻、害怕被排斥",
      need: "连接感、尊重、安全感、清晰边界",
      intention: "反复猜测是在保护你不被关系伤到，但读心会让焦虑不断加码。",
      method: "事实—故事—需要—行动 + 温和澄清",
      steps: [
        "把“对方肯定讨厌我”改成“我现在缺证据，但我很在意这段关系”。",
        "选择一个最小澄清动作：问一句、解释一次、观察一天。",
        "如果对方持续越界，用边界保护自己，而不是继续讨好。",
      ],
      script: "我可能理解错了，所以想确认一下：你刚才那句话是在开玩笑，还是对我有不舒服的地方？我想把事情说清楚。",
      action: "把这件事拆成两列：确定发生的事实 / 我脑中补出来的故事。",
    },
    {
      id: "selfWorth",
      label: "自我否定/低价值感",
      keywords: ["我不行", "我很差", "没用", "废物", "笨", "自卑", "讨厌自己", "没人喜欢", "不配", "完了", "没救", "失败"],
      emotion: "羞耻、失落、无力、害怕被否定",
      need: "被接纳、价值感、可恢复的信心",
      intention: "自我攻击有时想逼你变好，但它会消耗能量，让你更难行动。",
      method: "自我价值三肌肉 + 信念/规则更新",
      steps: [
        "把“我就是不行”改成“我有一个能力/方法/状态漏洞”。",
        "同时练三块肌肉：自信=做成一小件事；自爱=照顾一个需要；自尊=守一个小承诺。",
        "用“还没有”替代“永远不可能”。",
      ],
      script: "一次失败不是我的身份，只是一个反馈。我可以先修一个最小漏洞，让自己重新动起来。",
      action: "今天完成一个 15 分钟小承诺，并记录：我做到了什么，而不是我还差什么。",
    },
    {
      id: "procrastination",
      label: "拖延/手机/启动困难",
      keywords: ["拖延", "手机", "刷视频", "短视频", "游戏", "不想学", "动不了", "懒", "摆烂", "熬夜", "计划", "坚持不了", "分心"],
      emotion: "焦虑、麻木、逃避后的内疚",
      need: "休息、轻量启动、低压力反馈、环境支持",
      intention: "拖延可能在帮你躲开失败感、无聊或压力；它不是懒的证明，而是入口设计太重。",
      method: "正向意图更新 + 环境层最小改变",
      steps: [
        "先承认：我需要休息/害怕失败；然后给它一个更低成本的满足方式。",
        "把任务切到小到不能再小：打开书、写标题、做 1 题、背 3 词。",
        "改环境：手机离手 2 米，桌面只留当前材料，计时 10 分钟。",
      ],
      script: "我不是要立刻自律一整天，我只启动 10 分钟。启动以后，我再决定下一轮。",
      action: "现在做一个 10 分钟番茄钟，只要求开始，不要求完美。",
    },
    {
      id: "emotion",
      label: "情绪爆发/压力过载",
      keywords: ["崩溃", "哭", "生气", "发火", "控制不住", "烦", "压力", "焦虑", "害怕", "紧张", "委屈", "难受", "喘不过气"],
      emotion: "高强度情绪、身体紧绷、脑中反复转",
      need: "安全、稳定、被理解、恢复节奏",
      intention: "情绪在提醒你：某个需要被压太久了。先降低伤害，再处理事情。",
      method: "90秒稳定身体 + 情绪命名 + 下一步减害",
      steps: [
        "先离开继续刺激你的场景 2–5 分钟，喝水或去洗手间都可以。",
        "慢呼气 6 轮，命名情绪：这是愤怒/害怕/委屈，不等于我整个人失控。",
        "等强度下降后，只做一个减害动作：暂停、道歉、澄清、求助或休息。",
      ],
      script: "我现在情绪太高，继续说会伤人。我先暂停 20 分钟，等我能好好说再回来。",
      action: "把强度从 0–10 重新打分；下降 1 分就算有效。",
    },
    {
      id: "future",
      label: "迷茫/目标选择",
      keywords: ["迷茫", "不知道", "未来", "目标", "方向", "选择", "选科", "志愿", "专业", "怎么办"],
      emotion: "不确定、担心选错、压力悬空",
      need: "清晰、可试错、支持、阶段性目标",
      intention: "迷茫可能在提醒你：不要随便做重大决定；但一直悬着也会消耗能量。",
      method: "良构目标 + 24小时小实验 + 生态检查",
      steps: [
        "把“我要想清一生”降级成“我先弄清下一个月的一个选择”。",
        "列出可控信息：兴趣、能力、成绩、资源、限制、可咨询的人。",
        "做一个小实验：访谈一个学长/老师，查一个专业，尝试一套相关题。",
      ],
      script: "我不需要今天决定全部未来。我只需要多拿一个真实信息，让下一步更清楚。",
      action: "今天问一个可信的人：如果你是我，会先补哪一类信息？",
    },
  ];

  const DEFAULT_PROFILE = {
    label: "综合心理困扰",
    emotion: "混合压力、困惑或反复内耗",
    need: "被理解、稳定感、清晰下一步",
    intention: "这个困扰可能在提醒你：有一个重要需要还没有被好好看见。",
    method: "事实—故事—需要—行动 + 24小时小实验",
    steps: [
      "先写事实：谁、何时、说了/做了什么，尽量不加评价。",
      "再写故事：我脑中最吓人的解释是什么？还有没有第二种解释？",
      "最后选行动：一个请求、一个边界、一次求助、一个小任务或一次休息。",
    ],
    script: "我先不急着评价自己。我把事情拆清楚，再选一个对我和关系都更有帮助的小行动。",
    action: "用 5 分钟写下：事实 1 句、感受 1 句、需要 1 句、下一步 1 句。",
  };

  function includesAny(text, words) {
    return words.some((word) => text.includes(word));
  }

  function scoreProfile(text, profile) {
    return profile.keywords.reduce((score, keyword) => score + (text.includes(keyword) ? 1 : 0), 0);
  }

  function selectedProfiles(text) {
    return ANALYSIS_PROFILES
      .map((profile) => ({ profile, score: scoreProfile(text, profile) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((item) => item.profile);
  }

  function shortQuote(text) {
    const clean = text.replace(/\s+/g, " ").trim();
    return clean.length > 86 ? `${clean.slice(0, 86)}…` : clean;
  }

  function analysisHTML(text, intensityValue) {
    const clean = text.trim();
    const intensity = Number(intensityValue || 5);
    if (!clean) {
      return `
        <div class="support-analysis-placeholder">
          写下一个具体困扰后，我会按“事实—故事—情绪—需要—行动”给你一份可执行的疏导建议。
        </div>
      `;
    }

    const crisis = includesAny(clean, CRISIS_KEYWORDS);
    const profiles = selectedProfiles(clean);
    const main = profiles[0] || DEFAULT_PROFILE;
    const related = profiles.slice(1).map((profile) => profile.label);
    const highIntensity = intensity >= 8;

    if (crisis) {
      return `
        <div class="analysis-warning analysis-warning--red">
          <strong>先处理安全，不继续做普通自助分析</strong>
          <p>你的输入里出现了红色危险信号。现在最重要的不是一个人扛，也不是继续讲道理，而是立刻让现实中的可信成年人知道：家长、班主任、学校心理老师、亲近亲友，或联系所在地紧急服务。请尽量不要独处，远离可能伤害自己或他人的物品和地点。</p>
        </div>
        <div class="analysis-grid">
          <article class="analysis-card">
            <h4>现在先做 3 件事</h4>
            <ul>
              <li>把这段话直接给一个可信成年人看：我现在有危险念头/处在危险处境，需要你马上陪我。</li>
              <li>把身体放到更安全的位置：坐到有人在的地方，手离开危险物品，慢慢呼气。</li>
              <li>如果身边没人能立即回应，请联系所在地紧急服务或尽快前往有人值守的安全地点。</li>
            </ul>
          </article>
          <article class="analysis-card">
            <h4>可以直接说的话</h4>
            <p class="analysis-script">我现在不是想讲道理，我需要安全陪伴。请你先不要批评我，先陪我待一会儿，并帮我联系能支持我的成年人/专业人员。</p>
          </article>
        </div>
      `;
    }

    return `
      ${highIntensity ? `
        <div class="analysis-warning">
          <strong>情绪强度 ${intensity}/10：先稳定身体</strong>
          <p>强度偏高时，先做 6 轮慢呼气、放松肩颈和手指，再看下面建议。现在不适合做重大决定，也不适合硬扛到崩。</p>
        </div>
      ` : ""}
      <div class="analysis-summary">
        <span class="support-tag">已根据输入生成</span>
        <h4>我初步识别到：${fallbackEscape(main.label)}</h4>
        <p>你写的是：“${fallbackEscape(shortQuote(clean))}”${related.length ? `；同时也可能牵涉：${fallbackEscape(related.join("、"))}` : ""}。</p>
      </div>
      <div class="analysis-grid">
        <article class="analysis-card">
          <h4>1. 先拆结构</h4>
          <ul>
            <li><b>可能情绪：</b>${fallbackEscape(main.emotion)}</li>
            <li><b>未满足需要：</b>${fallbackEscape(main.need)}</li>
            <li><b>旧模式的正向意图：</b>${fallbackEscape(main.intention)}</li>
            <li><b>适合方法：</b>${fallbackEscape(main.method)}</li>
          </ul>
        </article>
        <article class="analysis-card">
          <h4>2. 具体做法</h4>
          <ul>${main.steps.map((step) => `<li>${fallbackEscape(step)}</li>`).join("")}</ul>
        </article>
        <article class="analysis-card">
          <h4>3. 可以直接对自己说</h4>
          <p class="analysis-script">${fallbackEscape(main.script)}</p>
        </article>
        <article class="analysis-card">
          <h4>4. 24小时内的小行动</h4>
          <p>${fallbackEscape(main.action)}</p>
          <p class="analysis-note">判断有没有进步，不看问题是否彻底消失，只看：强度是否下降 1 分、恢复是否快一点、下一步是否更清楚。</p>
        </article>
      </div>
      <details class="analysis-followup" open>
        <summary>继续问自己 5 个问题</summary>
        <ol>
          <li>这件事里，摄像机能拍到的事实是什么？</li>
          <li>我脑中最刺痛的解释是什么？它是事实，还是故事？</li>
          <li>这个情绪想保护我什么？成绩、尊严、安全、连接，还是自主？</li>
          <li>如果好 20%，下一次我会说什么/做什么？</li>
          <li>我现在可以找谁支持我，而不是一个人硬扛？</li>
        </ol>
      </details>
    `;
  }

  function bindInteractiveAnalyzer() {
    if (window.__studentCounselingAnalyzerBound) return;
    window.__studentCounselingAnalyzerBound = true;

    document.addEventListener("input", (event) => {
      if (event.target?.id !== "supportIntensityInput") return;
      const output = document.getElementById("supportIntensityOutput");
      if (output) output.textContent = event.target.value;
    });

    document.addEventListener("click", (event) => {
      const analyzeButton = event.target.closest("[data-support-analyze]");
      const clearButton = event.target.closest("[data-support-clear]");
      if (!analyzeButton && !clearButton) return;

      const textarea = document.getElementById("supportConcernInput");
      const intensity = document.getElementById("supportIntensityInput");
      const result = document.getElementById("supportAnalysisResult");
      if (!textarea || !result) return;

      if (clearButton) {
        textarea.value = "";
        if (intensity) intensity.value = "5";
        const output = document.getElementById("supportIntensityOutput");
        if (output) output.textContent = "5";
        result.innerHTML = analysisHTML("", 5);
        textarea.focus();
        return;
      }

      result.innerHTML = analysisHTML(textarea.value, intensity?.value || 5);
      result.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  function breadcrumbHTML(escapeHTML) {
    return `
      <div>
        <h2>${safeText(escapeHTML, GUIDE.title)}</h2>
        <p>${safeText(escapeHTML, GUIDE.subtitle)}</p>
      </div>
      <div class="progress-ring">
        <strong>${GUIDE.scenarios.length}</strong>
        <span>场景卡</span>
      </div>
    `;
  }

  function pageHTML(highlight, escapeHTML) {
    return `
      <div class="student-support-page">
        <article class="support-hero">
          <span class="support-tag">身心积极 · 非临床自助</span>
          <h3>${paint(highlight, "中学生心理困扰疏导工具箱")}</h3>
          <p>${paint(highlight, GUIDE.subtitle)}</p>
        </article>

        <section class="support-alert">
          <strong>先说安全边界</strong>
          <p>${paint(highlight, GUIDE.safety)}</p>
        </section>

        <section class="support-section support-input-panel">
          <div class="support-section__head">
            <span class="support-tag">心理困惑输入</span>
            <h3>${paint(highlight, "把当下困扰写出来，立即得到一份疏导分析")}</h3>
            <p>${paint(highlight, "建议写一个具体场景：发生了什么、你怎么想、身体哪里有反应、最想改变什么。")}</p>
          </div>
          <div class="support-form">
            <label class="support-textarea-label" for="supportConcernInput">
              <span>我的困惑</span>
              <textarea id="supportConcernInput" rows="7" placeholder="例如：快考试了我很慌，越想学越刷手机；爸妈一催我就想顶嘴，之后又很后悔……"></textarea>
            </label>
            <div class="support-intensity-row">
              <label for="supportIntensityInput">情绪强度：<output id="supportIntensityOutput">5</output>/10</label>
              <input id="supportIntensityInput" type="range" min="0" max="10" value="5" />
            </div>
            <div class="support-input-actions">
              <button type="button" data-support-analyze>生成疏导分析</button>
              <button type="button" data-support-clear>清空</button>
            </div>
            <div id="supportAnalysisResult" class="support-analysis-result" aria-live="polite">
              ${analysisHTML("", 5)}
            </div>
          </div>
        </section>

        <section class="support-section">
          <div class="support-section__head">
            <span class="support-tag">底层原则</span>
            <h3>${paint(highlight, "遇到困扰时，先按这 4 条理解自己")}</h3>
          </div>
          <div class="support-principles">
            ${GUIDE.principles.map(([title, body]) => `
              <article>
                <strong>${paint(highlight, title)}</strong>
                <p>${paint(highlight, body)}</p>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="support-section">
          <div class="support-section__head">
            <span class="support-tag">3分钟急救</span>
            <h3>${paint(highlight, "情绪上来时，不先讲道理，先让身体回到可控")}</h3>
          </div>
          <div class="support-reset">
            ${GUIDE.reset.map(([title, body]) => `
              <article>
                <b>${paint(highlight, title)}</b>
                <p>${paint(highlight, body)}</p>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="support-section">
          <div class="support-section__head">
            <span class="support-tag">常见困扰</span>
            <h3>${paint(highlight, "按真实中学校园场景练，不空喊口号")}</h3>
          </div>
          <div class="support-scenarios">
            ${GUIDE.scenarios.map((scenario, index) => `
              <details class="support-scenario"${index < 2 ? " open" : ""}>
                <summary>
                  <span>${paint(highlight, scenario.title)}</span>
                  <small>${paint(highlight, scenario.tag)}</small>
                </summary>
                <div class="support-scenario__body">
                  <div>
                    <h4>常见表现</h4>
                    ${listHTML(scenario.signs, highlight)}
                  </div>
                  <div>
                    <h4>具体做法</h4>
                    ${listHTML(scenario.steps, highlight)}
                  </div>
                  <blockquote>${paint(highlight, scenario.script)}</blockquote>
                </div>
              </details>
            `).join("")}
          </div>
        </section>

        <section class="support-section">
          <div class="support-section__head">
            <span class="support-tag">方法卡</span>
            <h3>${paint(highlight, "把 Skill 的方法转成可照搬句式")}</h3>
          </div>
          <div class="support-card-grid">
            ${GUIDE.cards.map((card) => `
              <article class="support-card">
                <h4>${paint(highlight, card.title)}</h4>
                <p>${paint(highlight, card.use)}</p>
                ${listHTML(card.steps, highlight)}
              </article>
            `).join("")}
          </div>
        </section>

        <section class="support-section support-help">
          <div class="support-section__head">
            <span class="support-tag">什么时候求助</span>
            <h3>${paint(highlight, "自助不是硬扛，会求助也是能力")}</h3>
          </div>
          <div class="support-help-grid">
            ${GUIDE.help.map(([level, body]) => `
              <article class="support-help-card support-help-card--${safeText(escapeHTML, level)}">
                <strong>${paint(highlight, level)}</strong>
                <p>${paint(highlight, body)}</p>
              </article>
            `).join("")}
          </div>
        </section>
      </div>
    `;
  }

  bindInteractiveAnalyzer();

  window.STUDENT_COUNSELING = {
    breadcrumbHTML,
    pageHTML,
    scenarioCount: GUIDE.scenarios.length,
  };
})();
