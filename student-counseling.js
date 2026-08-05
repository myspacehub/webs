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

  window.STUDENT_COUNSELING = {
    breadcrumbHTML,
    pageHTML,
    scenarioCount: GUIDE.scenarios.length,
  };
})();
