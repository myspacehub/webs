const STORAGE_KEY = "quanzhou-junior-high-h5-progress-v2";

const COURSE = [
  {
    name: "语文",
    note: "人教部编版 · 七/八/九上下册 · 中考150分",
    volumes: [
      { name: "七年级上册", units: ["字词与记叙文基础", "现代散文、散文诗与记叙文", "文言《世说新语》", "文言《论语十二章》", "名著《朝花夕拾》", "名著《西游记》", "写作：记事与写人"] },
      { name: "七年级下册", units: ["散文、诗歌与人物传记", "文言《木兰诗》", "文言《陋室铭》《爱莲说》", "名著《骆驼祥子》", "名著《海底两万里》", "写作：抒情与细节描写"] },
      { name: "八年级上册", units: ["新闻阅读与新闻写作", "说明文阅读与答题模板", "文言《三峡》", "文言《答谢中书书》《记承天寺夜游》", "名著《红星照耀中国》", "名著《昆虫记》"] },
      { name: "八年级下册", units: ["散文、演讲稿与游记", "文言《桃花源记》《小石潭记》", "文言《岳阳楼记》《醉翁亭记》", "名著《傅雷家书》", "名著《钢铁是怎样炼成的》", "议论文入门"] },
      { name: "九年级上册", units: ["现代小说阅读", "议论文阅读与观点论证", "文言《出师表》", "诗词单元：沁园春、行路难等", "名著《艾青诗选》", "名著《水浒传》", "考场议论文结构"] },
      { name: "九年级下册", units: ["外国小说与戏曲阅读", "文言《曹刿论战》", "文言《邹忌讽齐王纳谏》", "古诗词压轴训练", "名著《儒林外史》", "名著《简·爱》", "中考语文全题型综合训练"] },
    ],
  },
  {
    name: "数学",
    note: "华东师大版（华师） · 泉州专用版本 · 中考150分",
    volumes: [
      { name: "七年级上册", units: ["有理数", "整式加减", "一元一次方程", "几何图形初步", "相交线与平行线"] },
      { name: "七年级下册", units: ["实数", "二元一次方程组", "一元一次不等式", "多边形", "轴对称", "统计初步"] },
      { name: "八年级上册", units: ["整式乘除与因式分解", "分式", "勾股定理", "平行四边形"] },
      { name: "八年级下册", units: ["二次根式", "一元二次方程", "函数（一次函数）", "数据的分析", "图形的相似入门"] },
      { name: "九年级上册", units: ["二次函数", "圆", "旋转", "概率", "二次函数+圆综合压轴"] },
      { name: "九年级下册", units: ["相似三角形", "解直角三角形（三角函数）", "投影与视图", "全册综合压轴训练"] },
    ],
  },
  {
    name: "英语",
    note: "仁爱科普版 · 泉州使用 · 中考120分",
    volumes: [
      { name: "七年级上册", units: ["问候与自我介绍", "家庭、食物与校园生活", "一般现在时", "名词单复数与基础句型"] },
      { name: "七年级下册", units: ["出行与地点方位", "天气、季节与节日", "现在进行时", "一般过去时"] },
      { name: "八年级上册", units: ["比较级与最高级", "情态动词", "一般将来时", "健康、运动、旅行话题"] },
      { name: "八年级下册", units: ["现在完成时", "宾语从句", "状语从句", "环保、历史、文化阅读"] },
      { name: "九年级上册", units: ["定语从句", "被动语态", "校园、科技与社会热点", "福建中考阅读话题拓展"] },
      { name: "九年级下册", units: ["全册语法复盘", "中考题型专项", "作文万能句型", "阅读理解定位技巧"] },
    ],
  },
  {
    name: "道德与法治",
    note: "人教部编版 · 七/八/九上下册 · 中考100分（开卷）",
    volumes: [
      { name: "七年级上册", units: ["中学时代与学习", "友谊与交往", "师生亲情", "生命思考"] },
      { name: "七年级下册", units: ["青春与情绪管理", "集体生活", "法治入门", "未成年人保护"] },
      { name: "八年级上册", units: ["社会生活与网络", "规则道德与诚信", "法律责任", "材料题高频考点"] },
      { name: "八年级下册", units: ["宪法专题：国家根本大法", "公民权利义务", "国家机构", "公平正义"] },
      { name: "九年级上册", units: ["改革开放与富强民主文明", "创新与民主法治", "中华文化与生态文明", "国情国策综合"] },
      { name: "九年级下册", units: ["世界格局", "中国担当", "少年追梦", "中考时政与主观题综合复习"] },
    ],
  },
  {
    name: "历史",
    note: "人教部编版 · 七/八/九上下册 · 中考100分（开卷）",
    volumes: [
      { name: "七年级上册", units: ["史前时期与文明起源", "夏商周早期国家", "秦汉统一多民族国家", "中国古代史七上综合"] },
      { name: "七年级下册", units: ["隋唐繁荣开放", "宋元民族关系与社会变化", "明清统一多民族国家巩固", "中国古代史综合复习"] },
      { name: "八年级上册", units: ["晚清屈辱与民族危机", "辛亥革命", "新文化运动", "新民主主义革命", "抗日战争", "解放战争"] },
      { name: "八年级下册", units: ["新中国成立", "社会主义建设", "改革开放", "新时代与现代中国", "中国近现代史综合复习"] },
      { name: "九年级上册", units: ["古代亚非欧文明", "资产阶级革命", "工业革命", "马克思主义与国际共产主义运动", "第一次世界大战"] },
      { name: "九年级下册", units: ["第二次世界大战", "冷战与战后世界格局", "全球化", "现代科技", "世界史综合复习"] },
    ],
  },
  {
    name: "地理",
    note: "人教版 · 七/八年级上下册 · 初二会考",
    volumes: [
      { name: "七年级上册", units: ["地球和地图：经纬网", "海陆分布", "天气与气候类型", "居民与聚落", "发展差异"] },
      { name: "七年级下册", units: ["亚洲", "欧洲与北美洲", "非洲", "美洲", "大洋洲与极地地区"] },
      { name: "八年级上册", units: ["中国疆域与人口民族", "中国地形气候", "中国河流", "中国自然资源", "农业工业交通"] },
      { name: "八年级下册", units: ["中国四大地理分区", "北方地区", "南方地区", "西北地区", "青藏地区", "福建乡土地理"] },
    ],
  },
  {
    name: "生物",
    note: "北师大版 · 七/八年级上下册 · 初二会考",
    volumes: [
      { name: "七年级上册", units: ["细胞结构与显微镜", "生态系统", "绿色植物", "光合作用与呼吸作用"] },
      { name: "七年级下册", units: ["人体消化系统", "人体呼吸系统", "人体循环系统", "人体神经系统", "人体生殖系统"] },
      { name: "八年级上册", units: ["动物运动行为", "细菌真菌", "生物分类", "生物多样性"] },
      { name: "八年级下册", units: ["遗传变异", "生物进化", "健康生活", "生态保护"] },
    ],
  },
  {
    name: "物理",
    note: "沪科版 · 八、九年级各一本全一册 · 中考100分",
    volumes: [
      { name: "八年级全一册", units: ["机械运动", "声现象", "光的反射与折射", "透镜及其应用", "质量与密度", "运动与力", "压强与浮力", "简单机械", "功和机械能"] },
      { name: "九年级全一册", units: ["内能与热机", "电路 电流 电压 电阻", "欧姆定律", "电功率综合计算", "家庭电路", "电与磁", "信息与能源", "中考电学压轴与实验计算"] },
    ],
  },
  {
    name: "化学",
    note: "沪教版 · 九年级一本全一册 · 中考100分",
    volumes: [
      { name: "九年级全一册", units: ["走进化学世界", "空气、水与物质构成", "化学方程式", "碳及其氧化物", "金属", "酸碱盐", "化学实验", "化学计算", "推断题与工艺流程", "福建中考实验探究大题"] },
    ],
  },
];

const TEXTBOOK_VERSIONS = {
  语文: "人教部编版（全市统一，无区县差异）",
  数学: "华东师大版 / 华师版（泉州专用重点版本）",
  英语: "仁爱科普版（不要按人教PEP找课）",
  道德与法治: "人教部编版（开卷，中考材料题重）",
  历史: "人教部编版（开卷，近现代史占比高）",
  地理: "人教版（七八年级，初二会考）",
  生物: "北师大版（七八年级，初二会考）",
  物理: "沪科版（八、九各一本全一册）",
  化学: "沪教版（九年级一本全一册）",
};

const QUANZHOU_STUDY_RHYTHM = [
  ["七年级", "全科打底，语数英主科打牢；地理、生物同步学习，提前建立会考基础。"],
  ["八年级", "新增物理；地生全年冲刺初二会考；数学几何函数、英语语法进入难点，两极分化高发期。"],
  ["九年级", "新增化学；地生结业后不再学；全年备战中考，重点攻九上二次函数、电学、酸碱盐、道法国情、近现代史。"],
];

const SUBJECT_GUIDES = {
  语文: {
    core: ["字词句段篇", "文体特征", "阅读线索", "人物形象", "语言赏析", "写作迁移"],
    methods: ["先读标题和出处", "圈关键词和情感词", "按题型找答题区间", "用模板组织规范答案", "积累课内素材迁移到作文"],
    exam: ["文言文翻译与断句", "现代文阅读概括与赏析", "古诗情感与手法", "作文审题立意与结构"],
    errors: ["只背答案不看文本", "答题缺少术语和文本依据", "作文材料套用生硬", "文言实词语境判断弱"],
    deep: ["读写结合", "传统文化", "家国情怀", "审美表达"],
  },
  数学: {
    core: ["概念定义", "运算法则", "图形性质", "函数关系", "方程思想", "统计概率"],
    methods: ["先写已知和目标", "画图建模", "用方程/函数表达关系", "分类讨论", "验算特殊值和边界"],
    exam: ["计算化简", "方程不等式应用", "几何证明", "函数图像综合", "压轴动点与最值"],
    errors: ["符号和括号丢失", "条件漏用", "图形辅助线盲目", "函数定义域和取值范围忽略"],
    deep: ["数形结合", "转化化归", "方程思想", "分类讨论"],
  },
  英语: {
    core: ["词汇短语", "句型语法", "听说读写", "语篇结构", "主题表达"],
    methods: ["先抓主题和语境", "积累高频搭配", "拆句子主干", "按题型定位信息", "作文先列提纲再写"],
    exam: ["听力信息筛选", "完形语境推断", "阅读细节与主旨", "语法填空", "书面表达"],
    errors: ["只背单词不背搭配", "长难句不找主谓宾", "阅读凭感觉选", "作文时态人称混乱"],
    deep: ["主题语境", "长难句", "词块表达", "跨文化理解"],
  },
  道德与法治: {
    core: ["成长认知", "规则意识", "责任担当", "法治观念", "国家认同", "世界视野"],
    methods: ["先背教材关键词", "材料找主体和行为", "按是什么/为什么/怎么做答题", "联系时政案例", "主观题分点作答"],
    exam: ["选择题价值判断", "材料分析题", "做法建议题", "漫画图表题"],
    errors: ["口语化答题", "脱离材料空喊口号", "主体混乱", "教材术语不准确"],
    deep: ["核心素养", "法治精神", "公共参与", "责任意识"],
  },
  历史: {
    core: ["时间线", "历史人物", "制度变迁", "事件因果", "阶段特征", "史料实证"],
    methods: ["先定时空坐标", "梳理背景-过程-影响", "用时间轴串联", "材料题先读出处和设问", "比较同类事件"],
    exam: ["选择题时空定位", "材料解析", "原因影响评价", "中外对比", "开放探究题"],
    errors: ["时间线混乱", "事件因果倒置", "材料照抄不概括", "评价缺少角度"],
    deep: ["通史脉络", "文明交流", "制度演进", "民族复兴"],
  },
  地理: {
    core: ["地图定位", "自然环境", "人文区位", "区域差异", "人地协调"],
    methods: ["先看图名图例比例尺", "定位区域", "分析自然到人文", "从原因-影响-措施作答", "用地图册复盘"],
    exam: ["经纬网与等值线", "气候地貌水文", "区域综合", "农业工业交通区位", "环境治理"],
    errors: ["不看图例", "区域定位错误", "只背结论不分析条件", "措施题缺少针对性"],
    deep: ["区域认知", "综合思维", "地理实践力", "人地协调观"],
  },
  生物: {
    core: ["结构与功能", "生命活动", "遗传变异", "生态系统", "实验探究"],
    methods: ["先背概念边界", "图表与结构对应", "用变量思想看实验", "把生命现象连到功能", "错题回归教材原文"],
    exam: ["识图填空", "实验探究", "遗传推理", "生态关系", "健康生活应用"],
    errors: ["概念相近混淆", "实验变量不清", "图表信息漏读", "答题语言不规范"],
    deep: ["结构功能观", "稳态调节", "进化适应", "科学探究"],
  },
  物理: {
    core: ["物理量", "模型图像", "公式条件", "实验测量", "能量转化"],
    methods: ["画受力/电路/光路图", "统一单位", "先判断过程再套公式", "实验题写清变量", "用图像理解变化"],
    exam: ["力学计算", "压强浮力", "电路分析", "实验探究", "综合应用题"],
    errors: ["单位不统一", "公式适用条件错", "电路串并联判断错", "受力分析漏力"],
    deep: ["模型建构", "图像思维", "控制变量", "能量观念"],
  },
  化学: {
    core: ["物质组成", "微粒观", "化学反应", "实验操作", "方程式", "生活应用"],
    methods: ["先写物质类别", "从宏观现象到微观解释", "配平方程式", "实验题看目的和装置", "用守恒思想计算"],
    exam: ["化学用语", "实验探究", "物质推断", "方程式计算", "酸碱盐综合"],
    errors: ["化学式写错", "方程式未配平", "实验现象和结论混淆", "质量守恒用错"],
    deep: ["宏微符三重表征", "实验探究", "守恒思想", "绿色化学"],
  },
};

const LEARNING_METHODS = [
  {
    title: "知识学习：闭环式学习",
    tag: "拒绝死记硬背 · 听懂、讲出、会用",
    summary: "初中学习最怕“听懂但不会用”。每节课按轻量预习、专注课堂、费曼复盘三步走，把零散知识锁进自己的脑子里。",
    steps: [
      {
        name: "轻量预习",
        time: "课前 10–20 分钟",
        action: "只做预习三问：这节课学什么？哪些内容一看就懂？哪些概念、例题或课文完全看不懂？",
        tips: ["圈课本标题、概念、公式、课下注释和疑难点", "不提前死磕难题，不把预习变成自学整章", "带着问题听课，课堂专注力会明显更稳"],
      },
      {
        name: "专注课堂",
        time: "课堂主战场",
        action: "听老师怎么从概念推到例题、从文本推到答案；笔记记框架、方法和易错点，不追求抄满。",
        tips: ["语文英语听答题逻辑和表达方式", "数学物理化学生物听条件、步骤、模型", "当堂没懂的地方做星号，当天问清，不让漏洞过夜"],
      },
      {
        name: "费曼复盘",
        time: "课后 5–10 分钟",
        action: "合上书，用大白话讲给同学或家长听：是什么、为什么、怎么用、哪里容易错。",
        tips: ["讲不顺就是盲区，不是丢脸，是定位问题", "卡住后回到教材例题、课堂笔记和错题", "一章结束再讲一次完整主线，检查是否真正内化"],
      },
    ],
    checklist: ["我今天是否带着问题听课？", "今天有没有一个疑问当天清零？", "我能否不用照书讲清一个新知识点？"],
  },
  {
    title: "刷题提分：精准高效刷题",
    tag: "学一道 · 会一类 · 不重复掉坑",
    summary: "刷题不是越多越好，而是选核心题、复盘错题、打通同类题。初中题型重复率高，错题质量比题量更值钱。",
    steps: [
      {
        name: "精准选题",
        time: "每天先选再做",
        action: "优先做三类题：课本例题和课后经典题、作业高频错题、考试反复出现的核心题型。",
        tips: ["基础弱先做基础题，别一上来刷压轴", "基础稳再做变式题和综合题", "偏题怪题超纲题先放弃，把时间给高频考点"],
      },
      {
        name: "错题复盘",
        time: "做题时间的一半",
        action: "错题本不抄题海，只写考点、真实错因、标准步骤和下次避坑提醒。",
        tips: ["错因分成概念不会、思路不对、审题粗心、计算/表达失误", "当天整理，隔天重做，周末集中复盘", "每道高频错题再找 1 道同类题验证是否真会"],
      },
      {
        name: "知识体系",
        time: "每周 20 分钟",
        action: "用一张小导图串联本周知识点、题型、易错点和错题编号，把碎片知识变成体系。",
        tips: ["不追求画得漂亮，追求关系清楚", "把错题挂到对应知识点下面", "考前按导图快速调取公式、模型、答题模板"],
      },
    ],
    checklist: ["我今天刷的是核心题型吗？", "每道错题是否写了真实错因？", "本周知识点是否已经连成一张图？"],
  },
  {
    title: "时间管理：规律换高效",
    tag: "不靠熬夜硬扛 · 只算有效专注时长",
    summary: "把基础任务尽量在校完成，晚上留给薄弱学科、错题复盘和阅读背诵。短时间真专注，胜过长时间磨洋工。",
    steps: [
      {
        name: "三段式节奏",
        time: "每天固定",
        action: "早读背语文、英语、道法、历史；晚间攻数学、物理、化学等深度题；睡前 10 分钟复盘漏洞和明日任务。",
        tips: ["周末假期只微调，不极端摆烂也不爆学", "把固定时间和固定任务绑定，形成学习惯性", "睡前不硬刷难题，只做收口和计划"],
      },
      {
        name: "碎片时间",
        time: "课间 / 自习 / 午休空档",
        action: "在校优先清基础作业和短背诵，把晚上从“补作业”里解放出来。",
        tips: ["课间可背 3 个单词、1 个公式或 1 条政治历史关键词", "自习课先做最容易拖延的基础任务", "晚上留给错题、弱科和需要安静思考的题"],
      },
      {
        name: "番茄钟专注法",
        time: "25 + 5 分钟",
        action: "25 分钟只做一件事，不碰手机、不闲聊；5 分钟休息眼睛和身体，再开下一轮。",
        tips: ["每轮只设一个小目标", "手机离开桌面或交给家长保管", "休息时站起来、远眺、喝水，不刷短视频"],
      },
    ],
    checklist: ["今天是否有一段完整 25 分钟无干扰学习？", "基础作业是否尽量在校完成？", "睡前是否做了 10 分钟复盘？"],
  },
  {
    title: "身心调节：稳住状态",
    tag: "少内耗 · 少透支 · 多行动",
    summary: "初中成绩波动很正常，很多时候不是不聪明，而是焦虑、透支和拖延让效率下降。先稳住状态，学习才有持续性。",
    steps: [
      {
        name: "接纳不完美",
        time: "每次考试后",
        action: "考试不是审判，而是体检；不和别人比，只和昨天的自己比，找到漏洞就是收获。",
        tips: ["把排名焦虑改成漏洞清单", "允许犯错，但不允许同错反复犯", "每天只追一个小进步"],
      },
      {
        name: "劳逸结合",
        time: "每天都要有",
        action: "用运动、远眺和短休息维护专注力，不用熬夜透支第二天课堂。",
        tips: ["跑步、跳绳、拉伸都可以", "学习累了远眺 1–2 分钟", "困到低效时先休息，不硬撑假学"],
      },
      {
        name: "拒绝拖延",
        time: "从 10 分钟开始",
        action: "不想学时先做 10 分钟；难题先拆第一步，一旦开始，就会更容易进入状态。",
        tips: ["任务拆到小到不能再小", "完成后打勾积累成就感", "薄弱点每天碰一点，不让问题堆成山"],
      },
    ],
    checklist: ["今天有没有把一次焦虑转成具体行动？", "今天是否运动或拉伸过？", "拖延任务是否至少启动了 10 分钟？"],
  },
];

const DAILY_METHOD_FLOW = [
  ["课前", "10–20 分钟轻量预习：看标题、标概念、圈疑问，带问题进课堂"],
  ["课堂", "听逻辑、抓方法、记易错点；没懂的地方当天问清"],
  ["课后", "用费曼法讲一遍，讲不顺就回教材、笔记和例题补洞"],
  ["刷题", "只刷核心题型；错题写考点、错因、标准步骤和避坑提醒"],
  ["睡前", "10 分钟复盘今日漏洞，安排明天最重要的 1–3 件事"],
];

const WRONG_QUESTION_TEMPLATE = [
  "考点：这题到底考哪个知识点？对应课本哪一节？",
  "错因：概念不会 / 思路不对 / 审题粗心 / 计算失误 / 表达不规范",
  "标准步骤：正确第一步是什么？关键公式、模型、答题结构是什么？",
  "避坑提醒：下次看到什么关键词、图形、材料或条件要警惕？",
  "复盘节奏：当天整理，隔天重做，周末集中复盘并找同类题验证",
];

const WEEKLY_METHOD_RHYTHM = [
  ["周一到周五", "课前轻预习，课上当堂清，晚上用番茄钟完成复盘、核心题和短背诵。"],
  ["周三小检查", "检查本周错题是否都写了错因；薄弱点先补 1 个，不贪多。"],
  ["周末总复盘", "整理一张本周知识框架图，集中翻看错题，再找同类题验证。"],
  ["每次考试后", "不急着看排名，先做漏洞清单：知识漏洞、方法漏洞、状态漏洞。"],
];

const VIDEO_RESOURCES = {
  语文: [
    { name: "初中语文studio", level: "基础薄弱", type: "课本同步课 / 中考应试", stage: "7-8年级预习、课后补漏", focus: "字词、病句、文言实词虚词、现代文基础考点", summary: "同步初中语文课本，合集化程度高，适合上课听不懂、基础考点不稳的学生先打地基。" },
    { name: "中文系五匪子", level: "基础补弱", type: "文言专项课", stage: "文言文短板", focus: "必考实词、虚词、特殊句式、翻译套路", summary: "把文言文从死背注释改成看语境、抓句式、套翻译步骤，适合文言短板明显的同学。" },
    { name: "朴鲤朴鲤", level: "基础到中等", type: "作文素材课", stage: "作文没素材、不会套用", focus: "小众高分素材、素材迁移、立意表达", summary: "解决作文无话可写，把素材积累和使用方法一起学，适合平时作文内容空的学生。" },
    { name: "梓墨说语文", level: "中等冲分", type: "阅读答题课 / 作文结构", stage: "阅读踩不到分、作文瓶颈", focus: "记叙文、说明文、议论文全题型模板和阅卷得分点", summary: "现代文阅读提分向很强，把题型、答题角度和得分点拆得细，适合语文中等生短期补阅读。" },
    { name: "子墨说语文", level: "中等冲分", type: "阅读答题课", stage: "同名检索备用", focus: "现代文阅读、作文结构公式", summary: "与“梓墨说语文”作为同类检索入口，搜索时可两个关键词都试，避免漏掉合集。" },
    { name: "高盛元", level: "拔高素养", type: "古诗文赏析课", stage: "古诗文理解、冲高分", focus: "唐诗宋词意境、情感、赏析底层逻辑", summary: "不只背默写，重在理解诗歌画面、情感和表达逻辑，适合古诗文赏析和作文语言积累。" },
    { name: "我就是皮皮儿", level: "拔高素养", type: "名著导读课", stage: "初中必考名著", focus: "人物、情节、中考出题角度", summary: "围绕《朝花夕拾》《西游记》《骆驼祥子》等名著梳理考试角度，适合考前补名著题。" },
    { name: "国家玮-开明致学", level: "拔高 / 中考冲刺", type: "作文升格课", stage: "初三高分作文", focus: "议论文升格、开头结尾、高阶写法", summary: "适合基础已经稳定、想把作文从会写推进到高分表达的学生。" },
    { name: "戴建业", level: "兴趣拓展", type: "古诗趣味课", stage: "碎片时间培养语感", focus: "古诗趣味讲解、文学兴趣", summary: "适合放松时看，提升古诗亲近感和语感，不替代课本同步复习。" },
    { name: "欧丽娟", level: "兴趣拓展", type: "文学素养课", stage: "名著与文学兴趣", focus: "红楼梦、文学审美", summary: "偏文学素养与阅读兴趣，适合学有余力时拓展，不作为中考应试主线。" },
  ],
  数学: [
    { name: "数学微课帮", level: "零基础 / 课本同步", type: "课本同步课", stage: "60分以下、七八年级打地基", focus: "逐课精讲、校内常考例题、查漏补缺", summary: "张华老师初中数学体系课，贴合课本，板书清楚，适合长期跟学补基础；压轴题不是主线。" },
    { name: "一数", level: "中等系统提分", type: "体系课 / 中考复习课", stage: "70-95分、一轮复习", focus: "基础—中档—拔高三层，几何模型、函数、圆、反比例函数", summary: "初中数学和中考合集完整，讲怎么想到第一步，适合寒暑假系统刷一轮让数学质变。" },
    { name: "亮亮巧解初中数学", level: "拔高 / 满分冲刺", type: "压轴题课", stage: "95+、中考最后两题", focus: "几何辅助线、动点、二次函数、易错难题", summary: "专门突破高分瓶颈，适合基础学完后刷难题和中考二轮压轴。" },
    { name: "崔莉老师", level: "衔接补弱", type: "小升初衔接课", stage: "数学极度薄弱过渡", focus: "小学到初中数学衔接、基础概念过渡", summary: "适合刚上初一或基础断层明显的学生先补前置能力。" },
  ],
  英语: [
    { name: "英语兔", level: "语法零基础", type: "语法 / 音标动画课", stage: "初一入门、语法完全看不懂", focus: "音标、八大时态、词性、句子结构、复合句", summary: "动画式讲语法，逻辑通俗，适合从底层搞懂初中语法和单词读音。" },
    { name: "英语的平行世界", level: "课内同步", type: "课本同步课 / 单词积累", stage: "预习、课后复盘、寒暑假过课本", focus: "课文翻译、重点短语、中考必考词汇", summary: "适合跟教材走，把课文、短语、单词和考点一起过。" },
    { name: "盖老师", level: "应试提分", type: "中考应试课", stage: "80冲110", focus: "阅读定位、完形逻辑、作文句型、出题坑点", summary: "适合初二初三围绕题型提分，减少凭感觉做阅读和完形。" },
    { name: "英语李辉老师", level: "应试提分", type: "中考题型课", stage: "完形、阅读、作文冲刺", focus: "阅读技巧、完形方法、作文万能句式", summary: "偏应试技巧与题型方法，适合中考前集中补做题套路。" },
    { name: "三言两语杂货社", level: "中等到拔高", type: "长难句专项", stage: "阅读复杂句看不懂", focus: "长难句拆解、句子主干、从句结构", summary: "帮助解决阅读里句子长、结构乱、看不懂的问题。" },
    { name: "瑞秋英语Rachel", level: "听说拓展", type: "口语听力课", stage: "每天10分钟磨耳朵", focus: "纯正发音、连读弱读、口语语感", summary: "适合碎片时间练发音和听力，不替代中考题型训练。" },
    { name: "CNN10", level: "听力拓展", type: "英文新闻素材", stage: "听力语感与视野拓展", focus: "新闻英语、真实语速、听力输入", summary: "适合学有余力时磨耳朵和扩展话题背景，基础薄弱者可低倍速或配字幕。" },
  ],
  道德与法治: [
    { name: "咕噜咕噜将", level: "基础同步", type: "课本同步课", stage: "七到九年级日常学习", focus: "教材知识点串讲、框架梳理", summary: "适合基础薄弱先过教材，把道法知识点从零散背诵变成框架。" },
    { name: "教政治的木子", level: "中考冲分", type: "材料题答题课", stage: "中考主观题提分", focus: "材料题模板、时政考点、主观题话术", summary: "道法大题拉分明显，适合初三集中学习材料分析和规范表达。" },
    { name: "粉元宝小傻瓜", level: "背诵整理", type: "知识点细化总结", stage: "考前背诵、查漏补缺", focus: "细化知识点、背诵清单、易混点", summary: "适合把教材观点压缩成考前可背的清单。" },
    { name: "共青团中央", level: "时政素材", type: "兴趣拓展 / 时政素材", stage: "材料题素材积累", focus: "青年责任、国家治理、社会热点", summary: "适合积累时政背景和价值表达，作为道法主观题素材补充。" },
  ],
  历史: [
    { name: "历史老师定哥", level: "基础入门 / 体系课", type: "课本同步课 / 时间线导图", stage: "初一初二打基础、时间线混乱", focus: "中国史、世界史、朝代线、思维导图", summary: "初中历史全套体系化强，适合用时间线和小故事把课本内容串起来。" },
    { name: "陈佩韦老师", level: "基础记忆", type: "歌曲记忆课", stage: "背了就忘、不爱背历史", focus: "时间线、事件、知识点歌曲化记忆", summary: "适合把枯燥历史点变成节奏记忆，作为背诵辅助。" },
    { name: "无心插柳柳成荫太难得", level: "中考拔高", type: "材料题答题课", stage: "历史大题踩分", focus: "材料题思路、从材料提取分点、答题模板", summary: "专攻历史中考大题，训练从材料里找到得分点，而不是只背结论。" },
    { name: "讲历史的张老师", level: "理解因果", type: "专题理解课", stage: "事件背景理解", focus: "朝代、专题、历史因果", summary: "适合在课本同步后补背景逻辑，帮助材料题写出原因和影响。" },
    { name: "段sir是懂王", level: "兴趣预习", type: "兴趣拓展课", stage: "预习、缓解背诵压力", focus: "趣味历史事件、故事化理解", summary: "适合碎片时间建立兴趣，再回到课本做体系化记忆。" },
  ],
  地理: [
    { name: "岚如姐姐讲地理", level: "基础预习", type: "课本同步课", stage: "七八年级地理基础", focus: "经纬网、气候、地形、中国地理、世界地理", summary: "逐课精讲课内知识，适合零基础吃透教材。" },
    { name: "地理北纬老师", level: "会考冲刺", type: "真题刷题课 / 答题模板", stage: "初二生地会考", focus: "会考真题、题型拆解、答题模板", summary: "面向生地会考冲刺，适合考前刷题和提炼答题套路。" },
    { name: "树上的老师", level: "兴趣拓展", type: "趣味地理课", stage: "看不进课本时启蒙", focus: "趣味地理、地图兴趣、区域认知", summary: "适合用兴趣带动地理学习，再回到教材和真题。" },
    { name: "安迎老师", level: "原理拔高", type: "地理原理课", stage: "学有余力、理解底层逻辑", focus: "地图、等值线、区域地理底层逻辑", summary: "适合想把地理从背诵提升到原理分析的学生。" },
  ],
  生物: [
    { name: "林旭生物讲堂", level: "基础同步", type: "课本同步课 / 框架课", stage: "七上七下预习复习", focus: "生物知识框架、教材主线、基础概念", summary: "适合先搭建生物知识框架，预习和复习都能用。" },
    { name: "Anne生物", level: "会考冲刺", type: "生地会考定向复习", stage: "初二会考前", focus: "高频考点浓缩、真题精讲、会考复习", summary: "专门面向生地会考，适合考前集中刷完高频考点。" },
    { name: "火花学院", level: "兴趣理解", type: "动画科普课", stage: "理解抽象结构", focus: "细胞、循环系统、人体结构动画理解", summary: "适合用动画理解细胞、人体系统等抽象内容，作为课本学习辅助。" },
    { name: "汉水丑生侯伟", level: "教材体系", type: "教材精讲 / 思维导图", stage: "知识点系统梳理", focus: "教材逐句梳理、图文导图", summary: "适合想把生物教材吃细、吃透的学生，作为同步和复习补充。" },
  ],
  物理: [
    { name: "于总CEO", level: "入门 / 课本同步", type: "课本同步课 / 一轮复习", stage: "八九年级零基础到同步学", focus: "力学、光学、热学、电学生活化拆解", summary: "初中物理主线推荐，讲得通俗，适合预习、补课和考前一轮复习。" },
    { name: "amor东山再起", level: "中等刷题", type: "题型归类课", stage: "70-90分、错题归纳", focus: "物理刷题、题型分类、错题训练", summary: "适合学完课本后围绕题型刷题提分。" },
    { name: "东吴学长", level: "中等建体系", type: "知识框架课", stage: "知识点零散、体系不清", focus: "完整物理知识框架、模块串联", summary: "帮助把力热声光电从零散知识点串成体系。" },
    { name: "不刷题的吴姥姥", level: "兴趣启蒙", type: "趣味实验课", stage: "暑假提前启蒙", focus: "趣味物理实验、物理思维", summary: "同济教授趣味物理实验，适合培养物理感觉，防止刚入门就懵。" },
    { name: "物理大师", level: "碎片复习", type: "动画短视频", stage: "碎片化复习知识点", focus: "动画讲物理现象、快速回顾概念", summary: "适合碎片时间辅助理解，不替代系统课和刷题。" },
  ],
  化学: [
    { name: "化学超人", level: "基础同步", type: "课本同步课", stage: "初三上刚学化学", focus: "概念、物质分类、基础方程式、课本本源", summary: "严格跟初三课本逐章精讲，零基础从头学最稳。" },
    { name: "清越姐姐的化学课", level: "中考冲刺", type: "重难点突破 / 思维导图", stage: "初三下总复习、考前冲刺", focus: "酸碱盐、实验、推断压轴、中考高频考点", summary: "用思维导图把零散化学知识串起来，适合中考重难点突破。" },
    { name: "化学灭霸", level: "拔高补充", type: "题型变式训练", stage: "基础稳后拔高", focus: "题型变式、综合训练、易错突破", summary: "适合作为清越姐姐或化学超人之后的拔高刷题补充。" },
    { name: "化学小莫", level: "中考大题", type: "真题大题精讲", stage: "实验题、推断题、计算题", focus: "中考真题大题、解题步骤、规范表达", summary: "适合考前针对大题集中训练。" },
  ],
};

const VIDEO_LEVEL_GUIDE = [
  ["基础 / 预习", "先看课本同步课，把教材概念、例题、课文和基础题听懂。"],
  ["中等 / 补弱", "围绕错题找专题课，重点补阅读、函数、方程、实验、材料题等高频短板。"],
  ["拔高 / 满分", "基础稳定后再看压轴题、作文升格、材料题模板和高阶专题。"],
  ["中考 / 会考冲刺", "初三或生地会考前优先真题、答题模板、考点浓缩和错题复盘。"],
];

const VIDEO_STUDY_PLANS = [
  ["7年级", "数学微课帮打底 + 初中语文studio 预习补漏 + 英语兔语法入门 + 岚如姐姐讲地理 / 林旭生物讲堂建立地生框架。"],
  ["8年级", "数学用一数系统刷中档题 + 物理跟于总CEO入门 + 语文用梓墨说语文补阅读 + 地理北纬老师 / Anne生物准备生地会考。"],
  ["9年级", "数学亮亮巧解突破压轴 + 清越姐姐化学课攻酸碱盐实验推断 + 教政治的木子 / 无心插柳柳成荫太难得练文科大题 + 英语李辉或盖老师冲题型。"],
  ["碎片时间", "语文看戴建业 / 欧丽娟培养语感，物理看吴姥姥或物理大师启蒙，英语用瑞秋Rachel / CNN10磨耳朵。"],
];

const VIDEO_TEXTBOOK_TIPS = [
  ["数学", "优先搜“华东师大版初中数学 / 华师版初中数学”，一数、数学微课帮可同步适配泉州华师版。"],
  ["英语", "泉州用仁爱科普版，不要误看人教PEP；章节搜索自动加入“仁爱版初中英语”。"],
  ["物理 / 化学", "物理筛选沪科版，化学筛选沪教版；九年级重点看电功率、酸碱盐、实验探究。"],
  ["地理 / 生物", "地理对应人教版，生物对应北师大版；初二会考优先真题和高频考点浓缩。"],
  ["语文 / 历史 / 道法", "部编版全国统一，UP内容基本通用；重点看答题模板、名著、材料题和时政。"],
];

const TEXTBOOK_SEARCH_PREFIX = {
  语文: "",
  数学: "华东师大版初中数学",
  英语: "仁爱版初中英语",
  道德与法治: "",
  历史: "",
  地理: "人教版初中地理",
  生物: "北师大版初中生物",
  物理: "沪科版初中物理",
  化学: "沪教版初中化学",
};

const WORD_TRAINER_STORAGE_KEY = `${STORAGE_KEY}-english-word-trainer-v1`;
const WORD_CUSTOM_LIBRARY_STORAGE_KEY = `${STORAGE_KEY}-english-custom-libraries-v1`;

const ENGLISH_WORD_BANK_FALLBACK = [
  { word: "address", meaning: "地址；演讲；处理", phrase: "home address", example: "Please write down your address clearly.", mnemonic: "add + dress：给人“加上衣服标签”就像写地址。", category: "仁爱话题" },
  { word: "advice", meaning: "建议", phrase: "give advice", example: "Could you give me some advice on English learning?", mnemonic: "ad + vice 声音：把想法说出来就是建议。", category: "中考核心" },
  { word: "afford", meaning: "负担得起", phrase: "can afford to", example: "Many students cannot afford to waste time.", mnemonic: "a + ford 像“过河”：有钱有能力才能过。", category: "中考核心" },
  { word: "agree", meaning: "同意", phrase: "agree with", example: "I agree with your plan.", mnemonic: "a + green：一路绿灯就是同意。", category: "基础动词" },
  { word: "although", meaning: "尽管", phrase: "although it is hard", example: "Although the task is hard, we will finish it.", mnemonic: "all + though：虽然想很多，还是让步。", category: "语法信号" },
  { word: "ancient", meaning: "古代的", phrase: "ancient China", example: "Quanzhou is famous for its ancient history.", mnemonic: "an + cient 像“先前”：很久以前的。", category: "文化阅读" },
  { word: "appear", meaning: "出现；似乎", phrase: "appear on the screen", example: "New words appear again and again in reading.", mnemonic: "a + pear 梨出现了：appear 出现。", category: "阅读高频" },
  { word: "avoid", meaning: "避免", phrase: "avoid mistakes", example: "Review helps us avoid the same mistakes.", mnemonic: "a + void 空洞：避开坑洞。", category: "中考核心" },
  { word: "borrow", meaning: "借入", phrase: "borrow a book from", example: "I borrowed a dictionary from the library.", mnemonic: "borrow from；lend to，方向别反。", category: "易混词" },
  { word: "brave", meaning: "勇敢的", phrase: "be brave enough", example: "Be brave enough to speak English.", mnemonic: "br + brave：不怕 brrr 发抖就是勇敢。", category: "人物品质" },
  { word: "careful", meaning: "仔细的", phrase: "be careful with", example: "Be careful with spelling in exams.", mnemonic: "care 关心 + ful 满：满是小心。", category: "基础形容词" },
  { word: "change", meaning: "改变；变化", phrase: "make a change", example: "Small changes can bring big progress.", mnemonic: "change 与 chance 只差一笔，改变带来机会。", category: "写作高频" },
  { word: "choice", meaning: "选择", phrase: "make a choice", example: "Reading is a wise choice.", mnemonic: "choose 的名词就是 choice。", category: "中考核心" },
  { word: "collect", meaning: "收集", phrase: "collect stamps", example: "He likes collecting old coins.", mnemonic: "col 一起 + lect 选：选到一起。", category: "仁爱话题" },
  { word: "communicate", meaning: "交流；沟通", phrase: "communicate with", example: "English helps us communicate with the world.", mnemonic: "common 共同：沟通就是建立共同理解。", category: "中考核心" },
  { word: "compare", meaning: "比较", phrase: "compare A with B", example: "Do not always compare yourself with others.", mnemonic: "com 一起 + pare 配对：放一起比。", category: "语法信号" },
  { word: "continue", meaning: "继续", phrase: "continue to do", example: "Continue practicing and you will improve.", mnemonic: "con + tinue 像“继续前进的队伍”。", category: "基础动词" },
  { word: "culture", meaning: "文化", phrase: "Chinese culture", example: "We should learn and spread Chinese culture.", mnemonic: "cult 培养：长期培养出来的是文化。", category: "文化阅读" },
  { word: "decide", meaning: "决定", phrase: "decide to do", example: "I decided to review words every day.", mnemonic: "de + cide 切开：切出一个选择就是决定。", category: "基础动词" },
  { word: "develop", meaning: "发展；培养", phrase: "develop a habit", example: "We should develop good learning habits.", mnemonic: "de + velop 展开：慢慢展开成长。", category: "写作高频" },
  { word: "environment", meaning: "环境", phrase: "protect the environment", example: "Everyone should protect the environment.", mnemonic: "environ 围绕：围绕我们的就是环境。", category: "中考话题" },
  { word: "especially", meaning: "尤其", phrase: "especially important", example: "Spelling is especially important in writing.", mnemonic: "special 特别的 → especially 尤其。", category: "阅读高频" },
  { word: "experience", meaning: "经历；经验", phrase: "learning experience", example: "This trip was an unforgettable experience.", mnemonic: "ex 外 + peri 尝试：尝试过就有经验。", category: "写作高频" },
  { word: "explain", meaning: "解释", phrase: "explain the reason", example: "Can you explain this sentence?", mnemonic: "ex 向外 + plain 清楚：把意思说清楚。", category: "基础动词" },
  { word: "foreign", meaning: "外国的", phrase: "foreign language", example: "English is a useful foreign language.", mnemonic: "for 外面：来自外面的。", category: "仁爱话题" },
  { word: "health", meaning: "健康", phrase: "keep healthy", example: "Good sleep is important for health.", mnemonic: "heal 治愈：健康和治愈有关。", category: "中考话题" },
  { word: "improve", meaning: "提高；改善", phrase: "improve English", example: "The best way to improve English is daily practice.", mnemonic: "im + prove：证明自己变好。", category: "学习方法" },
  { word: "include", meaning: "包括", phrase: "include many topics", example: "The test includes listening and writing.", mnemonic: "in + clude 关进来：包含在内。", category: "阅读高频" },
  { word: "invent", meaning: "发明", phrase: "invent a machine", example: "Edison invented many useful things.", mnemonic: "in + vent 来：新东西来到世界。", category: "科技话题" },
  { word: "journey", meaning: "旅行；旅程", phrase: "a long journey", example: "Learning English is a long journey.", mnemonic: "jour 一天：一天一天走成旅程。", category: "仁爱话题" },
  { word: "knowledge", meaning: "知识", phrase: "gain knowledge", example: "Reading gives us knowledge.", mnemonic: "know 知道 + ledge：知道积累成知识。", category: "中考核心" },
  { word: "language", meaning: "语言", phrase: "learn a language", example: "Practice is necessary when learning a language.", mnemonic: "lang 像“朗读”：语言要说出来。", category: "仁爱话题" },
  { word: "necessary", meaning: "必要的", phrase: "It is necessary to", example: "It is necessary to review after class.", mnemonic: "need 的高级表达：necessary。", category: "写作高频" },
  { word: "opinion", meaning: "观点", phrase: "in my opinion", example: "In my opinion, reading is helpful.", mnemonic: "opine 表达看法，opinion 是观点。", category: "写作高频" },
  { word: "practice", meaning: "练习；实践", phrase: "practice speaking", example: "Practice makes perfect.", mnemonic: "考试金句：practice makes perfect。", category: "学习方法" },
  { word: "protect", meaning: "保护", phrase: "protect animals", example: "We should protect wild animals.", mnemonic: "pro 前面 + tect 盖住：挡在前面保护。", category: "中考话题" },
  { word: "provide", meaning: "提供", phrase: "provide sb. with sth.", example: "The app provides useful word training.", mnemonic: "pro 前 + vide 看：提前看见需求并提供。", category: "中考核心" },
  { word: "realize", meaning: "意识到；实现", phrase: "realize a dream", example: "He realized that vocabulary was important.", mnemonic: "real 真实：让梦想成真，也表示意识到真实。", category: "阅读高频" },
  { word: "suggest", meaning: "建议；表明", phrase: "suggest doing", example: "The teacher suggested reviewing words daily.", mnemonic: "sug + gest 带来想法：提出建议。", category: "中考核心" },
  { word: "valuable", meaning: "有价值的", phrase: "valuable advice", example: "Mistakes are valuable if we learn from them.", mnemonic: "value 价值 + able：有价值的。", category: "写作高频" },
  { word: "accept", meaning: "接受", phrase: "accept an invitation", example: "I gladly accepted his invitation.", mnemonic: "ac + cept 拿：把东西拿过来就是接受。", category: "基础动词" },
  { word: "accident", meaning: "事故；意外", phrase: "a traffic accident", example: "Be careful to avoid accidents.", mnemonic: "accident 和 accidental 都有“意外”感。", category: "中考话题" },
  { word: "active", meaning: "积极的；活跃的", phrase: "take an active part in", example: "Take an active part in class activities.", mnemonic: "act 行动：行动起来就是 active。", category: "人物品质" },
  { word: "alone", meaning: "独自；单独", phrase: "live alone", example: "She finished the work alone.", mnemonic: "all + one：全程一个人。", category: "易混词" },
  { word: "among", meaning: "在……之中", phrase: "among students", example: "This song is popular among students.", mnemonic: "a + mong 像“人群中”。", category: "语法信号" },
  { word: "arrive", meaning: "到达", phrase: "arrive in Quanzhou", example: "We arrived at school on time.", mnemonic: "a + rive 到河边：到达某地。", category: "基础动词" },
  { word: "attention", meaning: "注意；关注", phrase: "pay attention to", example: "Pay attention to spelling and punctuation.", mnemonic: "attend 注意/出席，attention 是注意力。", category: "学习方法" },
  { word: "believe", meaning: "相信", phrase: "believe in yourself", example: "Believe in yourself and keep practicing.", mnemonic: "be + lieve：让心里觉得是真的。", category: "人物品质" },
  { word: "cause", meaning: "导致；原因", phrase: "cause problems", example: "Carelessness may cause mistakes.", mnemonic: "because 里有 cause，原因会导致结果。", category: "阅读高频" },
  { word: "celebrate", meaning: "庆祝", phrase: "celebrate a festival", example: "We celebrate the Spring Festival with family.", mnemonic: "celebrity 名人聚会常庆祝。", category: "文化阅读" },
  { word: "chance", meaning: "机会；可能性", phrase: "have a chance to", example: "Everyone has a chance to improve.", mnemonic: "change 改变少一个 g，机会常来自改变。", category: "写作高频" },
  { word: "common", meaning: "普通的；共同的", phrase: "common mistakes", example: "This is a common mistake in writing.", mnemonic: "com 一起：大家都有就是共同/常见。", category: "阅读高频" },
  { word: "complete", meaning: "完成；完整的", phrase: "complete the task", example: "Complete your review before playing.", mnemonic: "completely 完全地，complete 是完成。", category: "基础动词" },
  { word: "condition", meaning: "条件；状况", phrase: "living conditions", example: "The patient is in good condition.", mnemonic: "condi 像“规定”：符合规定条件。", category: "阅读高频" },
  { word: "correct", meaning: "正确的；改正", phrase: "correct mistakes", example: "Correct mistakes before they become habits.", mnemonic: "right 是对，correct 是更正式的对/改正。", category: "学习方法" },
  { word: "danger", meaning: "危险", phrase: "be in danger", example: "Some wild animals are in danger.", mnemonic: "danger 和 dangerous 一起记。", category: "中考话题" },
  { word: "difficult", meaning: "困难的", phrase: "a difficult problem", example: "Difficult tasks become easier with practice.", mnemonic: "difficulty 是名词，difficult 是形容词。", category: "基础形容词" },
  { word: "discover", meaning: "发现", phrase: "discover a secret", example: "You may discover a better way to learn.", mnemonic: "dis 去掉 + cover 覆盖：揭开就发现。", category: "阅读高频" },
  { word: "during", meaning: "在……期间", phrase: "during the vacation", example: "I read every day during the vacation.", mnemonic: "duration 持续时间：during 表期间。", category: "语法信号" },
  { word: "education", meaning: "教育", phrase: "online education", example: "Education changes people's lives.", mnemonic: "educate 教育 + tion 名词。", category: "文化阅读" },
  { word: "effort", meaning: "努力", phrase: "make an effort", example: "Make an effort and you will see progress.", mnemonic: "effort 和 try 近义，写作更高级。", category: "写作高频" },
  { word: "enough", meaning: "足够的；足够地", phrase: "good enough", example: "You are old enough to make a plan.", mnemonic: "e + nough 像“已够”。", category: "语法信号" },
  { word: "famous", meaning: "著名的", phrase: "be famous for", example: "Quanzhou is famous for its culture.", mnemonic: "fame 名声 + ous 形容词。", category: "文化阅读" },
  { word: "festival", meaning: "节日", phrase: "traditional festival", example: "The Mid-Autumn Festival is important in China.", mnemonic: "fest 像 feast 宴会，节日常有宴会。", category: "仁爱话题" },
  { word: "friendship", meaning: "友谊", phrase: "true friendship", example: "True friendship makes school life warmer.", mnemonic: "friend + ship：朋友关系这艘船。", category: "中考话题" },
  { word: "habit", meaning: "习惯", phrase: "form a habit", example: "A good habit saves time.", mnemonic: "habit 像“还比它”：好习惯让你更强。", category: "学习方法" },
  { word: "happen", meaning: "发生", phrase: "happen to sb.", example: "What happened to you yesterday?", mnemonic: "happen 是偶然发生，take place 偏计划发生。", category: "易混词" },
  { word: "important", meaning: "重要的", phrase: "be important for", example: "Review is important for memory.", mnemonic: "import 输入；重要信息要输入大脑。", category: "写作高频" },
  { word: "information", meaning: "信息", phrase: "useful information", example: "We can get information from books.", mnemonic: "inform 通知 + ation 名词：被告知的信息。", category: "阅读高频" },
  { word: "interest", meaning: "兴趣；使感兴趣", phrase: "show interest in", example: "He shows great interest in science.", mnemonic: "interesting 令人有趣，interested 人感兴趣。", category: "易混词" },
  { word: "introduce", meaning: "介绍；引入", phrase: "introduce myself", example: "Let me introduce my hometown.", mnemonic: "intro 开头 + duce 引导：引出来介绍。", category: "写作高频" },
  { word: "local", meaning: "当地的", phrase: "local food", example: "Local people are proud of Quanzhou culture.", mnemonic: "location 地点，local 是当地的。", category: "文化阅读" },
  { word: "medicine", meaning: "药；医学", phrase: "take medicine", example: "Take the medicine three times a day.", mnemonic: "medical 医学的，medicine 药。", category: "中考话题" },
  { word: "message", meaning: "消息；口信", phrase: "leave a message", example: "Please leave a message after the tone.", mnemonic: "message 像“传送的信息”。", category: "仁爱话题" },
  { word: "mistake", meaning: "错误", phrase: "make a mistake", example: "A mistake is a chance to learn.", mnemonic: "mis 错 + take 拿：拿错就是错误。", category: "学习方法" },
  { word: "nature", meaning: "自然；本质", phrase: "protect nature", example: "We should get close to nature.", mnemonic: "natural 自然的，由 nature 变来。", category: "中考话题" },
  { word: "offer", meaning: "主动提供；提议", phrase: "offer help", example: "He offered to help me with math.", mnemonic: "offer 比 provide 更有“主动递上”的感觉。", category: "中考核心" },
  { word: "possible", meaning: "可能的", phrase: "as soon as possible", example: "Review as soon as possible after class.", mnemonic: "poss 能力：能发生就是可能。", category: "写作高频" },
  { word: "prepare", meaning: "准备", phrase: "prepare for the exam", example: "Prepare for the exam step by step.", mnemonic: "pre 提前 + pare 配好：提前配好。", category: "学习方法" },
  { word: "probably", meaning: "很可能；大概", phrase: "probably true", example: "He will probably arrive at six.", mnemonic: "probable 可能的 + ly 副词。", category: "阅读高频" },
  { word: "promise", meaning: "承诺；保证", phrase: "make a promise", example: "I promise to practice every day.", mnemonic: "pro + mise 送出：把话送出去就是承诺。", category: "人物品质" },
  { word: "purpose", meaning: "目的", phrase: "the purpose of", example: "The purpose of review is to find holes.", mnemonic: "pur + pose 摆放：把目标摆出来。", category: "阅读高频" },
  { word: "receive", meaning: "收到", phrase: "receive a letter", example: "I received a postcard from my friend.", mnemonic: "receive 是收到，accept 是接受，可能收到但不接受。", category: "易混词" },
  { word: "recycle", meaning: "回收利用", phrase: "recycle paper", example: "We should recycle paper and bottles.", mnemonic: "re 再 + cycle 循环：再次循环利用。", category: "中考话题" },
  { word: "refuse", meaning: "拒绝", phrase: "refuse to do", example: "She refused to give up.", mnemonic: "re 向回 + fuse 流：把请求退回去。", category: "基础动词" },
  { word: "serious", meaning: "严重的；认真的", phrase: "a serious problem", example: "Pollution is a serious problem.", mnemonic: "serious 既可严重，也可认真，靠语境判断。", category: "阅读高频" },
  { word: "success", meaning: "成功", phrase: "the key to success", example: "Practice is the key to success.", mnemonic: "succeed 动词，success 名词。", category: "写作高频" },
  { word: "support", meaning: "支持", phrase: "support a team", example: "Family support gives us power.", mnemonic: "sup 下面 + port 支撑：从下面托住。", category: "中考核心" },
  { word: "surprise", meaning: "惊讶；惊喜", phrase: "to one's surprise", example: "To my surprise, I got full marks.", mnemonic: "sur 超出 + prise 抓住：超出预期就惊讶。", category: "写作高频" },
  { word: "trouble", meaning: "麻烦；困难", phrase: "have trouble doing", example: "I have trouble remembering new words.", mnemonic: "trouble doing 是中考高频结构。", category: "语法信号" },
  { word: "understand", meaning: "理解", phrase: "understand the meaning", example: "Try to understand before memorizing.", mnemonic: "under + stand：站在下面托住意思。", category: "基础动词" },
  { word: "volunteer", meaning: "志愿者；自愿做", phrase: "work as a volunteer", example: "I want to be a volunteer in the community.", mnemonic: "voluntary 自愿的；volunteer 志愿者。", category: "中考话题" },
  { word: "weather", meaning: "天气", phrase: "weather report", example: "The weather in Quanzhou is warm.", mnemonic: "weather 和 whether 发音近，拼写要分清。", category: "仁爱话题" },
  { word: "wonder", meaning: "想知道；奇迹", phrase: "wonder why", example: "I wonder how to improve my writing.", mnemonic: "wonder 既是想知道，也是奇观，语境判义。", category: "阅读高频" },
];

const BUILTIN_ENGLISH_WORD_BANK = (
  Array.isArray(window.ENGLISH_WORD_BANK) && window.ENGLISH_WORD_BANK.length
    ? window.ENGLISH_WORD_BANK
    : ENGLISH_WORD_BANK_FALLBACK
).map((item) => normalizeBuiltInWordItem(item));
let customWordLibraries = readCustomWordLibraries();
let ENGLISH_WORD_BANK = mergeEnglishWordBank();

const wordTrainerState = {
  index: 0,
  category: "全部",
  libraryId: "all",
  lookupQuery: "",
  customLibraryName: "",
  customLibraryRaw: "",
  customFeedback: "",
  feedback: "",
  audioFeedback: null,
  exampleFeedback: "",
  examplePassed: false,
  quizCount: 20,
  sessionKeys: [],
  sessionTitle: "",
  meaningReady: false,
  step: 0,
  stepCue: "",
};
const WORD_TRAINER_STEPS = ["意思辨认", "词汇复述", "例句填空", "助记复述", "拼写确认"];
const COMMONS_API_ENDPOINT = "https://commons.wikimedia.org/w/api.php";
const WORD_AUDIO_CACHE = new Map();
const PREMIUM_ENGLISH_VOICE_PATTERN =
  /samantha|ava|allison|serena|daniel|alex|google|microsoft\s+(aria|jenny|guy|zira|david)|natural|neural|premium|enhanced/i;

const state = { subjectIndex: 0, volumeIndex: 0, query: "", mode: "catalog" };
let doneSet = readProgress();

const $ = (selector) => document.querySelector(selector);
const subjectList = $("#subjectList");
const volumeTabs = $("#volumeTabs");
const unitList = $("#unitList");
const breadcrumb = $("#breadcrumb");
const stats = $("#stats");
const subjectCount = $("#subjectCount");
const searchInput = $("#searchInput");
const resetBtn = $("#resetBtn");
const modeSwitch = $("#modeSwitch");

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlight(text) {
  const safe = escapeHTML(text);
  const q = state.query.trim();
  if (!q) return safe;
  return safe.replace(new RegExp(escapeRegExp(escapeHTML(q)), "gi"), (match) => `<mark>${match}</mark>`);
}

function containsQuery(...fields) {
  const q = state.query.trim().toLowerCase();
  if (!q) return true;
  return fields.some((field) => String(field).toLowerCase().includes(q));
}

function normalizeBuiltInWordItem(item) {
  const word = String(item.word || "").trim();
  const meaning = String(item.meaning || "").trim();
  return {
    ...item,
    word,
    phonetic: String(item.phonetic || "").trim(),
    meaning,
    phrase: String(item.phrase || `${word} in context`).trim(),
    example: String(item.example || `I need to remember the word ${word} in a real sentence.`).trim(),
    exampleAnswer: String(item.exampleAnswer || word).trim(),
    mnemonic: String(item.mnemonic || `把 ${word} 和释义“${meaning}”连成一个具体画面，再放进词块里复述。`).trim(),
    category: String(item.category || "内置词库").trim(),
    libraryId: "builtin",
    libraryName: "内置词库",
  };
}

function normalizeCustomWordItem(item, library) {
  const word = String(item.word || "").trim();
  const meaning = String(item.meaning || "").trim();
  if (!word || !meaning) return null;
  const phrase = String(item.phrase || `${word} in context`).trim();
  const example = String(item.example || `I need to remember the word ${word} in a real sentence.`).trim();
  return {
    word,
    phonetic: String(item.phonetic || "").trim(),
    meaning,
    phrase,
    example,
    exampleAnswer: String(item.exampleAnswer || word).trim(),
    exampleSource: String(item.exampleSource || `自定义词库：${library.name}`).trim(),
    mnemonic: String(item.mnemonic || `把 ${word} 和释义“${meaning}”连成一个具体画面，再用词块“${phrase}”复述。`).trim(),
    category: String(item.category || `自定义：${library.name}`).trim(),
    libraryId: library.id,
    libraryName: library.name,
    isCustom: true,
  };
}

function readCustomWordLibraries() {
  try {
    const raw = JSON.parse(localStorage.getItem(WORD_CUSTOM_LIBRARY_STORAGE_KEY) || "[]");
    if (!Array.isArray(raw)) return [];
    return raw
      .map((library) => {
        const id = String(library.id || `custom-${Date.now().toString(36)}`).trim();
        const name = String(library.name || "自定义词库").trim();
        const shell = { id, name };
        const words = Array.isArray(library.words)
          ? library.words.map((item) => normalizeCustomWordItem(item, shell)).filter(Boolean)
          : [];
        return words.length ? { id, name, createdAt: library.createdAt || Date.now(), updatedAt: library.updatedAt || Date.now(), words } : null;
      })
      .filter(Boolean);
  } catch {
    return [];
  }
}

function saveCustomWordLibraries(libraries = customWordLibraries) {
  customWordLibraries = libraries;
  ENGLISH_WORD_BANK = mergeEnglishWordBank();
  try {
    localStorage.setItem(WORD_CUSTOM_LIBRARY_STORAGE_KEY, JSON.stringify(customWordLibraries));
    return true;
  } catch (error) {
    console.warn("Failed to save custom word libraries", error);
    return false;
  }
}

function mergeEnglishWordBank() {
  return [
    ...BUILTIN_ENGLISH_WORD_BANK,
    ...customWordLibraries.flatMap((library) =>
      library.words.map((item) => normalizeCustomWordItem(item, library)).filter(Boolean),
    ),
  ];
}

function createCustomLibraryId(name) {
  const slug = String(name || "custom")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 24);
  return `custom-${slug || "words"}-${Date.now().toString(36)}`;
}

function splitCustomWordLine(line) {
  if (line.includes("|")) return line.split("|");
  if (line.includes("\t")) return line.split("\t");
  if (line.includes("，")) return line.split("，");
  if (line.includes("：")) return line.split("：");
  if (line.includes(":")) return line.split(":");
  if (line.includes("、")) return line.split("、");
  if (line.includes(",")) return line.split(",");
  const parts = line.trim().split(/\s+/);
  return [parts.shift() || "", parts.join(" ")];
}

function parseCustomWordLibrary(rawText, libraryName) {
  const shell = { id: "draft", name: libraryName };
  return String(rawText || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .map((line) => {
      const [word, meaning, phonetic, phrase, example, mnemonic] = splitCustomWordLine(line).map((part) => String(part || "").trim());
      return normalizeCustomWordItem({ word, meaning, phonetic, phrase, example, mnemonic }, shell);
    })
    .filter(Boolean);
}

function wordLibraryOptions() {
  return [
    { id: "all", name: "全部词库", count: ENGLISH_WORD_BANK.length },
    { id: "builtin", name: "内置词库", count: BUILTIN_ENGLISH_WORD_BANK.length },
    ...customWordLibraries.map((library) => ({ id: library.id, name: library.name, count: library.words.length, isCustom: true })),
  ];
}

function currentLibraryOption() {
  return wordLibraryOptions().find((library) => library.id === wordTrainerState.libraryId) || wordLibraryOptions()[0];
}

function wordMatchesLibrary(item) {
  if (wordTrainerState.libraryId === "all") return true;
  if (wordTrainerState.libraryId === "builtin") return !item.isCustom;
  return item.libraryId === wordTrainerState.libraryId;
}

function wordsForSelectedLibrary() {
  return ENGLISH_WORD_BANK.filter((item) => wordMatchesLibrary(item));
}

function wordLookupMatchesQuery(item, query = wordTrainerState.lookupQuery) {
  const q = String(query || "").trim().toLowerCase();
  if (!q) return false;
  return [item.word, item.phonetic, item.meaning, item.phrase, item.example, item.mnemonic, item.category, item.libraryName]
    .some((field) => String(field || "").toLowerCase().includes(q));
}

function highlightWordLookup(text) {
  const safe = escapeHTML(text);
  const q = wordTrainerState.lookupQuery.trim();
  if (!q) return safe;
  return safe.replace(new RegExp(escapeRegExp(escapeHTML(q)), "gi"), (match) => `<mark>${match}</mark>`);
}

function readWordTrainerProgress() {
  try {
    const raw = JSON.parse(localStorage.getItem(WORD_TRAINER_STORAGE_KEY) || "{}");
    return raw && typeof raw === "object" ? raw : {};
  } catch {
    return {};
  }
}

function saveWordTrainerProgress(progress) {
  localStorage.setItem(WORD_TRAINER_STORAGE_KEY, JSON.stringify(progress));
}

function wordKey(item) {
  const base = item.word.toLowerCase();
  return item.isCustom && item.libraryId ? `${item.libraryId}:${base}` : base;
}

function wordWrongCount(item, progress = readWordTrainerProgress()) {
  return progress[wordKey(item)]?.wrong || 0;
}

function wordHasWrongRecord(item, progress = readWordTrainerProgress()) {
  return wordWrongCount(item, progress) > 0;
}

function wordCategories() {
  return ["全部", "优先复习", "错题回顾", ...Array.from(new Set(wordsForSelectedLibrary().map((item) => item.category)))];
}

function wordCategoryCount(category) {
  const libraryWords = wordsForSelectedLibrary();
  if (category === "全部") return libraryWords.length;
  if (category === "优先复习") {
    const progress = readWordTrainerProgress();
    return libraryWords.filter((item) => wordProgressLevel(item, progress) < 2).length;
  }
  if (category === "错题回顾") {
    const progress = readWordTrainerProgress();
    return libraryWords.filter((item) => wordHasWrongRecord(item, progress)).length;
  }
  return libraryWords.filter((item) => item.category === category).length;
}

function wordMatchesQuery(item) {
  return containsQuery(item.word, item.phonetic, item.meaning, item.phrase, item.example, item.mnemonic, item.category);
}

function baseWordTrainerWords() {
  const progress = readWordTrainerProgress();
  return wordsForSelectedLibrary().filter(
    (item) =>
      (wordTrainerState.category === "全部" ||
        (wordTrainerState.category === "优先复习"
          ? wordProgressLevel(item, progress) < 2
          : wordTrainerState.category === "错题回顾"
            ? wordHasWrongRecord(item, progress)
          : item.category === wordTrainerState.category)) &&
      wordMatchesQuery(item),
  ).sort((left, right) =>
    wordTrainerState.category === "优先复习"
      ? wordProgressLevel(left, progress) - wordProgressLevel(right, progress)
      : wordTrainerState.category === "错题回顾"
        ? wordWrongCount(right, progress) - wordWrongCount(left, progress)
        : 0,
  );
}

function allLibraryRandomWords() {
  const progress = readWordTrainerProgress();
  return ENGLISH_WORD_BANK.filter(
    (item) =>
      (wordTrainerState.category === "全部" ||
        (wordTrainerState.category === "优先复习"
          ? wordProgressLevel(item, progress) < 2
          : wordTrainerState.category === "错题回顾"
            ? wordHasWrongRecord(item, progress)
            : item.category === wordTrainerState.category)) &&
      wordMatchesQuery(item),
  ).sort((left, right) =>
    wordTrainerState.category === "优先复习"
      ? wordProgressLevel(left, progress) - wordProgressLevel(right, progress)
      : wordTrainerState.category === "错题回顾"
        ? wordWrongCount(right, progress) - wordWrongCount(left, progress)
        : 0,
  );
}

function wordTrainerWords() {
  if (!wordTrainerState.sessionKeys.length) return baseWordTrainerWords();
  const byKey = new Map(ENGLISH_WORD_BANK.map((item) => [wordKey(item), item]));
  return wordTrainerState.sessionKeys.map((key) => byKey.get(key)).filter(Boolean);
}

function currentWordList() {
  const words = wordTrainerWords();
  if (!words.length) return words;
  if (wordTrainerState.index >= words.length) wordTrainerState.index = 0;
  if (wordTrainerState.index < 0) wordTrainerState.index = words.length - 1;
  return words;
}

function wordProgressLevel(item, progress = readWordTrainerProgress()) {
  return progress[wordKey(item)]?.level || 0;
}

function wordLevelLabel(level) {
  if (level >= 2) return "已掌握";
  if (level === 1) return "模糊";
  return "未掌握";
}

function wordLevelClass(level) {
  if (level >= 2) return "is-known";
  if (level === 1) return "is-fuzzy";
  return "is-new";
}

function wordProgressStats(words, progress) {
  return words.reduce(
    (stats, item) => {
      const level = wordProgressLevel(item, progress);
      if (level >= 2) stats.known += 1;
      else if (level === 1) stats.fuzzy += 1;
      else stats.fresh += 1;
      if (wordHasWrongRecord(item, progress)) stats.wrong += 1;
      return stats;
    },
    { known: 0, fuzzy: 0, fresh: 0, wrong: 0 },
  );
}

function wordQuizOptions(current) {
  const distractors = [
    ...new Set([
      ...wordsForSelectedLibrary().filter((item) => wordKey(item) !== wordKey(current)).map((item) => item.meaning),
      ...ENGLISH_WORD_BANK.filter((item) => wordKey(item) !== wordKey(current)).map((item) => item.meaning),
    ]),
  ].filter((meaning) => meaning !== current.meaning);
  const seed = current.word.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const picked = [];
  for (let offset = 0; picked.length < 3 && offset < distractors.length; offset += 1) {
    const meaning = distractors[(seed + offset * 5) % distractors.length];
    if (!picked.includes(meaning)) picked.push(meaning);
  }
  const options = [...picked];
  options.splice(seed % (options.length + 1), 0, current.meaning);
  return options;
}

function readWordQuizCount() {
  const input = document.querySelector("#wordQuizCount");
  const raw = Number.parseInt(input?.value || wordTrainerState.quizCount || 20, 10);
  const count = Number.isFinite(raw) ? raw : 20;
  wordTrainerState.quizCount = Math.min(200, Math.max(1, count));
  return wordTrainerState.quizCount;
}

function shuffledSample(words, count) {
  const pool = [...words];
  for (let index = pool.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [pool[index], pool[swapIndex]] = [pool[swapIndex], pool[index]];
  }
  return pool.slice(0, Math.min(count, pool.length));
}

function resetWordTrainerTransientState() {
  wordTrainerState.feedback = "";
  wordTrainerState.audioFeedback = null;
  wordTrainerState.exampleFeedback = "";
  wordTrainerState.examplePassed = false;
  wordTrainerState.meaningReady = false;
  wordTrainerState.step = 0;
  wordTrainerState.stepCue = "";
}

function startWordQuizSession(words, title) {
  if (!words.length) {
    wordTrainerState.feedback = "当前范围没有可抽取的单词。可以先切换到“全部”，或清空搜索条件。";
    return;
  }
  wordTrainerState.sessionKeys = words.map((item) => wordKey(item));
  wordTrainerState.sessionTitle = title;
  wordTrainerState.index = 0;
  resetWordTrainerTransientState();
  wordTrainerState.feedback = `已开始：${title}，共 ${words.length} 个词。`;
}

function endWordQuizSession() {
  wordTrainerState.sessionKeys = [];
  wordTrainerState.sessionTitle = "";
  wordTrainerState.index = 0;
  resetWordTrainerTransientState();
  wordTrainerState.feedback = "已退出当前测验，回到普通词汇范围。";
}

function wrongReviewWords() {
  const progress = readWordTrainerProgress();
  return wordsForSelectedLibrary().filter((item) => wordHasWrongRecord(item, progress) && wordMatchesQuery(item)).sort((left, right) => {
    const wrongDiff = wordWrongCount(right, progress) - wordWrongCount(left, progress);
    if (wrongDiff) return wrongDiff;
    return (progress[wordKey(right)]?.lastWrongAt || 0) - (progress[wordKey(left)]?.lastWrongAt || 0);
  });
}

function setWordProgress(item, level, result = "neutral") {
  const progress = readWordTrainerProgress();
  const key = wordKey(item);
  const previous = progress[key] || {};
  progress[key] = {
    ...previous,
    level,
    times: (previous.times || 0) + 1,
    correct: (previous.correct || 0) + (result === "correct" ? 1 : 0),
    wrong: (previous.wrong || 0) + (result === "wrong" ? 1 : 0),
    lastWrongAt: result === "wrong" ? Date.now() : previous.lastWrongAt,
    updatedAt: Date.now(),
  };
  saveWordTrainerProgress(progress);
}

function promoteWordProgress(item, level) {
  setWordProgress(item, Math.max(wordProgressLevel(item), level), "correct");
}

function recordWordMistake(item) {
  setWordProgress(item, Math.min(wordProgressLevel(item), 1), "wrong");
}

function moveWordTrainer(step) {
  const words = wordTrainerWords();
  if (!words.length) return;
  wordTrainerState.index = (wordTrainerState.index + step + words.length) % words.length;
  wordTrainerState.feedback = "";
  wordTrainerState.audioFeedback = null;
  wordTrainerState.exampleFeedback = "";
  wordTrainerState.examplePassed = false;
  wordTrainerState.meaningReady = false;
  wordTrainerState.step = 0;
  wordTrainerState.stepCue = "";
}

function pronunciationText(text) {
  return String(text || "")
    .split("=")[0]
    .replace(/\([^)]*\)/g, "")
    .replace(/[;,/，；].*$/g, "")
    .trim();
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function wordClozeForms(item) {
  const rawBases = [item.exampleAnswer, pronunciationText(item.word)]
    .filter(Boolean)
    .flatMap((value) =>
      {
        const normalized = String(value)
        .toLowerCase()
        .replace(/\([^)]*\)/g, "")
        .trim();
        return (normalized === "or" ? [normalized] : normalized.split(/=|\/|\bor\b|,/i))
        .map((part) => part.trim().replace(/\s+/g, " "))
        .filter(Boolean);
      },
    );
  const forms = new Set();
  for (const base of rawBases) {
    if (!/^[a-z]+(?:-[a-z]+)?(?:\s+[a-z]+(?:-[a-z]+)?)*$/.test(base)) continue;
    forms.add(base);
    if (base.includes("-")) forms.add(base.replace(/-/g, " "));
    if (base.includes(" ")) continue;
    if (base.endsWith("e")) forms.add(`${base.slice(0, -1)}ing`);
    else forms.add(`${base}ing`);
    if (base.endsWith("y")) forms.add(`${base.slice(0, -1)}ies`);
    forms.add(`${base}s`);
    forms.add(`${base}es`);
    forms.add(`${base}ed`);
    if (base.endsWith("e")) forms.add(`${base}d`);
  }
  return [...forms].sort((left, right) => right.length - left.length);
}

function wordClozeData(item) {
  const forms = wordClozeForms(item);
  const example = item.example || "";
  for (const form of forms) {
    const pattern = new RegExp(`\\b${escapeRegExp(form)}\\b`, "i");
    if (pattern.test(example)) {
      return {
        answer: form.toLowerCase(),
        base: pronunciationText(item.word).toLowerCase(),
        text: example.replace(pattern, "______"),
      };
    }
  }
  return {
    answer: pronunciationText(item.word).toLowerCase(),
    base: pronunciationText(item.word).toLowerCase(),
    text: `${example}  →  ______`,
  };
}

function setWordAudioFeedback(text, href = "") {
  wordTrainerState.audioFeedback = text ? { text, href } : null;
}

function clearWordStepCue() {
  wordTrainerState.stepCue = "";
}

function nextWordStepCue(step) {
  if (step >= WORD_TRAINER_STEPS.length) return "本词闭环完成，点下方「下一词」继续";
  return `⬇ 继续下一步：${WORD_TRAINER_STEPS[step]}`;
}

function advanceWordTrainerStep(step, feedback) {
  const previousStep = wordTrainerState.step || 0;
  wordTrainerState.step = Math.max(wordTrainerState.step, step);
  if (wordTrainerState.step > previousStep) {
    wordTrainerState.stepCue = nextWordStepCue(wordTrainerState.step);
  }
  if (feedback) wordTrainerState.feedback = feedback;
}

function normalizedAudioLookupWord(item) {
  return pronunciationText(item.word)
    .toLowerCase()
    .replace(/[^a-z\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function commonsPronunciationCandidates(word) {
  const base = String(word || "").trim().toLowerCase();
  if (!base || base.includes("-")) {
    return base
      ? [
          `File:En-us-${base}.ogg`,
          `File:En-uk-${base}.ogg`,
          `File:En-${base}.ogg`,
        ]
      : [];
  }
  return [
    `File:En-us-${base}.ogg`,
    `File:En-us-${base}.oga`,
    `File:En-uk-${base}.ogg`,
    `File:En-uk-${base}.oga`,
    `File:En-ca-${base}.ogg`,
    `File:En-au-${base}.ogg`,
    `File:En-${base}.ogg`,
    `File:En-${base}.oga`,
  ];
}

function commonsImageInfoUrl(params) {
  const query = new URLSearchParams({
    action: "query",
    format: "json",
    origin: "*",
    prop: "imageinfo",
    iiprop: "url|mime|extmetadata",
    ...params,
  });
  return `${COMMONS_API_ENDPOINT}?${query.toString()}`;
}

function commonsAudioSourceFromPage(page) {
  const info = page?.imageinfo?.[0];
  const url = info?.url || "";
  const mime = info?.mime || "";
  if (!url || (!mime.startsWith("audio/") && !/\.(ogg|oga|mp3|wav)$/i.test(url))) return null;
  const meta = info.extmetadata || {};
  const license = meta.LicenseShortName?.value || "自由许可";
  const licenseUrl = meta.LicenseUrl?.value || page.fullurl || info.descriptionurl || "";
  const title = page.title || "Wikimedia Commons audio";
  const sourceText = `${title} ${meta.Categories?.value || ""} ${meta.ImageDescription?.value || ""}`.toLowerCase();
  return {
    url,
    href: licenseUrl || info.descriptionurl || "",
    label: `真人/词典级自由音频：Wikimedia Commons（${license}）`,
    title,
    isPronunciation: /pronunciation|english/.test(sourceText),
  };
}

async function fetchCommonsCandidateAudio(word) {
  const titles = commonsPronunciationCandidates(word);
  if (!titles.length) return null;
  const response = await fetch(commonsImageInfoUrl({ titles: titles.join("|") }));
  if (!response.ok) return null;
  const data = await response.json();
  const pages = Object.values(data.query?.pages || {});
  return pages.map(commonsAudioSourceFromPage).find(Boolean) || null;
}

async function searchCommonsPronunciationAudio(word) {
  const query = new URLSearchParams({
    action: "query",
    format: "json",
    origin: "*",
    generator: "search",
    gsrnamespace: "6",
    gsrlimit: "8",
    gsrsearch: `${word} English pronunciation audio`,
    prop: "imageinfo",
    iiprop: "url|mime|extmetadata",
  });
  const response = await fetch(`${COMMONS_API_ENDPOINT}?${query.toString()}`);
  if (!response.ok) return null;
  const data = await response.json();
  const pages = Object.values(data.query?.pages || {});
  const exactWord = new RegExp(`(^|[^a-z])${escapeRegExp(word)}([^a-z]|$)`, "i");
  const sources = pages.map(commonsAudioSourceFromPage).filter(Boolean);
  return (
    sources.find((source) => exactWord.test(source.title.toLowerCase()) && source.isPronunciation) ||
    sources.find((source) => source.isPronunciation) ||
    null
  );
}

async function findAuthorizedWordAudio(item) {
  const rawWord = pronunciationText(item.word).toLowerCase();
  const word = normalizedAudioLookupWord(item);
  if (!word || /\s/.test(rawWord)) return null;
  if (WORD_AUDIO_CACHE.has(word)) return WORD_AUDIO_CACHE.get(word);
  try {
    const source = (await fetchCommonsCandidateAudio(word)) || (await searchCommonsPronunciationAudio(word));
    WORD_AUDIO_CACHE.set(word, source || null);
    return source || null;
  } catch {
    WORD_AUDIO_CACHE.set(word, null);
    return null;
  }
}

function chooseEnglishVoice() {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  return [...voices]
    .filter((voice) => voice.lang?.startsWith("en"))
    .sort((left, right) => {
      const leftScore =
        (left.lang === "en-US" ? 8 : left.lang?.startsWith("en-US") ? 6 : 0) +
        (PREMIUM_ENGLISH_VOICE_PATTERN.test(left.name) ? 12 : 0) +
        (/female|woman|samantha|ava|allison|serena|jenny|aria/i.test(left.name) ? 2 : 0);
      const rightScore =
        (right.lang === "en-US" ? 8 : right.lang?.startsWith("en-US") ? 6 : 0) +
        (PREMIUM_ENGLISH_VOICE_PATTERN.test(right.name) ? 12 : 0) +
        (/female|woman|samantha|ava|allison|serena|jenny|aria/i.test(right.name) ? 2 : 0);
      return rightScore - leftScore;
    })[0] || null;
}

function playAuthorizedAudio(source) {
  return new Promise((resolve, reject) => {
    const audio = new Audio(source.url);
    audio.preload = "auto";
    audio.playbackRate = 0.9;
    audio.oncanplaythrough = () => {
      audio.play().then(resolve).catch(reject);
    };
    audio.onerror = reject;
    audio.load();
    window.setTimeout(() => {
      if (audio.readyState >= 2) audio.play().then(resolve).catch(reject);
    }, 900);
  });
}

function speakEnglishText(text, { rate = 0.55 } = {}) {
  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    wordTrainerState.feedback = "当前浏览器暂不支持系统朗读，可以换 Chrome / Safari 再试。";
    return false;
  }
  const spokenText = String(text || "").trim();
  if (!spokenText) return false;
  const utterance = new SpeechSynthesisUtterance(spokenText);
  utterance.lang = "en-US";
  utterance.rate = rate;
  utterance.pitch = 1;
  utterance.volume = 1;
  utterance.voice = chooseEnglishVoice();
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
  return true;
}

async function speakEnglishWord(item) {
  const key = wordKey(item);
  setWordAudioFeedback("正在查找免费授权真人/词典级单词音频……");
  render();
  const source = await findAuthorizedWordAudio(item);
  const current = currentWordList()[wordTrainerState.index];
  if (!current || wordKey(current) !== key) return false;
  if (source) {
    try {
      await playAuthorizedAudio(source);
      setWordAudioFeedback(source.label, source.href);
      render();
      return true;
    } catch {
      setWordAudioFeedback("");
    }
  } else {
    setWordAudioFeedback("");
  }
  const ok = speakEnglishText(pronunciationText(item.word), { rate: 0.55 });
  render();
  return ok;
}

function speakEnglishExample(item) {
  setWordAudioFeedback("");
  const ok = speakEnglishText(item.example, { rate: 0.57 });
  render();
  return ok;
}

function checkExampleCloze(item) {
  const input = document.querySelector("#wordExampleInput");
  const answer = input?.value.trim().toLowerCase() || "";
  const cloze = wordClozeData(item);
  if (!answer) {
    wordTrainerState.feedback = "";
    clearWordStepCue();
    wordTrainerState.examplePassed = false;
    wordTrainerState.exampleFeedback = "先把例句空格补上；这一步是在训练“看到语境能调出单词”。";
    return;
  }
  if (answer === cloze.answer || answer === cloze.base) {
    promoteWordProgress(item, 1);
    wordTrainerState.feedback = "";
    wordTrainerState.examplePassed = true;
    wordTrainerState.stepCue = "⬇ 例句填空已通过，点击下方「进入助记复述」继续";
    wordTrainerState.exampleFeedback = `✅ 例句填空正确：${item.example}`;
  } else {
    recordWordMistake(item);
    wordTrainerState.feedback = "";
    clearWordStepCue();
    wordTrainerState.examplePassed = false;
    wordTrainerState.exampleFeedback = `❌ 例句里应填 ${cloze.answer}。先读完整句，再回到词汇“${item.phrase}”。`;
  }
}

function checkWordSpelling(item) {
  const input = document.querySelector("#wordSpellingInput");
  const answer = input?.value.trim().toLowerCase() || "";
  const target = item.word.toLowerCase();
  if (!answer) {
    wordTrainerState.feedback = "先默写英文，再点检查；写错也没关系，漏洞被看见就能补。";
    clearWordStepCue();
    return;
  }
  if (answer === target) {
    promoteWordProgress(item, 2);
    wordTrainerState.stepCue = "➡ 本词闭环完成，点击下方「下一词」继续";
    wordTrainerState.feedback = `✅ 拼写正确：${item.word}。再读一遍词汇搭配“${item.phrase}”，把它放进句子里。`;
  } else {
    recordWordMistake(item);
    clearWordStepCue();
    wordTrainerState.feedback = `❌ 拼写还差一点：你写的是 ${answer}，正确是 ${item.word}。按音节拆开再默写一次。`;
  }
}

function wordTrainerCategoryButtonsHTML() {
  return wordCategories()
    .map((category) => {
      const active = category === wordTrainerState.category ? " is-active" : "";
      return `
        <button class="word-category${active}" type="button" data-word-category="${escapeHTML(category)}">
          ${highlight(category)} <span>${wordCategoryCount(category)}</span>
        </button>
      `;
    })
    .join("");
}

function wordLibrarySelectorHTML() {
  const current = currentLibraryOption();
  return `
    <section class="word-library-panel">
      <div>
        <span class="tag">词库范围</span>
        <h3>当前词库：${escapeHTML(current.name)}</h3>
        <p>查询、随机测验、错题回顾都会优先按当前词库范围执行；选择自定义词库后即可专项训练。</p>
      </div>
      <label class="word-library-select">
        <span>切换词库</span>
        <select id="wordLibrarySelect">
          ${wordLibraryOptions()
            .map(
              (library) => `
                <option value="${escapeHTML(library.id)}" ${library.id === wordTrainerState.libraryId ? "selected" : ""}>
                  ${escapeHTML(library.name)}（${library.count}词）
                </option>
              `,
            )
            .join("")}
        </select>
      </label>
    </section>
  `;
}

function wordLookupResults() {
  const q = wordTrainerState.lookupQuery.trim();
  if (!q) return [];
  const normalized = q.toLowerCase();
  return wordsForSelectedLibrary().filter((item) => wordLookupMatchesQuery(item, q))
    .sort((left, right) => {
      const leftWord = left.word.toLowerCase();
      const rightWord = right.word.toLowerCase();
      const leftScore = leftWord === normalized ? 0 : leftWord.startsWith(normalized) ? 1 : 2;
      const rightScore = rightWord === normalized ? 0 : rightWord.startsWith(normalized) ? 1 : 2;
      return leftScore - rightScore || leftWord.localeCompare(rightWord);
    })
    .slice(0, 24);
}

function wordLookupHTML() {
  const results = wordLookupResults();
  const hasQuery = wordTrainerState.lookupQuery.trim();
  return `
    <section class="word-lookup-panel">
      <div class="word-tool-head">
        <div>
          <span class="tag">词汇查询</span>
          <h3>查单词、释义、词块、例句</h3>
          <p>输入英文、中文释义、词块或例句关键词；查到后可以直接用结果开始测验。</p>
        </div>
        <div class="word-lookup-form">
          <input id="wordLookupInput" type="search" value="${escapeHTML(wordTrainerState.lookupQuery)}" placeholder="如：preserve / 保护 / take part in" autocomplete="off" />
          <button type="button" data-word-action="run-lookup">查询</button>
          <button type="button" data-word-action="clear-lookup">清空</button>
        </div>
      </div>
      ${
        hasQuery
          ? results.length
            ? `
              <div class="word-lookup-summary">
                <strong>找到 ${results.length} 个匹配词</strong>
                <button type="button" data-word-action="start-lookup-quiz">用查询结果测验</button>
              </div>
              <div class="word-lookup-results">
                ${results
                  .map(
                    (item) => `
                      <article>
                        <div class="word-lookup-title">
                          <b>${highlightWordLookup(item.word)}</b>
                          <small>${highlightWordLookup(item.phonetic || "音标待补充")}</small>
                        </div>
                        <p><strong>意思：</strong>${highlightWordLookup(item.meaning)}</p>
                        <p><strong>词块：</strong>${highlightWordLookup(item.phrase)}</p>
                        <p><strong>例句：</strong>${highlightWordLookup(item.example)}</p>
                        <p><strong>助记：</strong>${highlightWordLookup(item.mnemonic)}</p>
                        <span>${highlightWordLookup(item.libraryName || item.category)}</span>
                      </article>
                    `,
                  )
                  .join("")}
              </div>
            `
            : `<div class="empty">没有查到匹配词。可以换英文原形、中文释义，或把它加入自定义词库。</div>`
          : ""
      }
    </section>
  `;
}

function customWordLibraryHTML() {
  return `
    <section class="word-custom-panel">
      <div class="word-tool-head">
        <div>
          <span class="tag">自定义词库</span>
          <h3>创建自己的专项词库</h3>
          <p>格式：每行一个词，推荐用 <code>word | meaning | phonetic | phrase | example | mnemonic</code>。只填前两列也能生成可测词条。</p>
        </div>
      </div>
      <div class="word-custom-form">
        <input id="customLibraryName" type="text" value="${escapeHTML(wordTrainerState.customLibraryName)}" placeholder="词库名称，如：Unit 1 错词 / 阅读高频词" />
        <textarea id="customLibraryWords" rows="5" placeholder="preserve | 保护；保存 | [prɪˈzɜːv] | preserve culture | We should preserve local culture. | pre + serve：提前服务就是保护">${escapeHTML(wordTrainerState.customLibraryRaw)}</textarea>
        <button type="button" data-word-action="save-custom-library">保存词库并切换使用</button>
      </div>
      ${
        wordTrainerState.customFeedback
          ? `<div class="word-tool-feedback" role="status">${escapeHTML(wordTrainerState.customFeedback)}</div>`
          : ""
      }
      ${
        customWordLibraries.length
          ? `<div class="word-custom-list">
              ${customWordLibraries
                .map(
                  (library) => `
                    <article>
                      <div>
                        <b>${escapeHTML(library.name)}</b>
                        <span>${library.words.length} 词</span>
                      </div>
                      <div>
                        <button type="button" data-word-action="use-custom-library" data-library-id="${escapeHTML(library.id)}">使用</button>
                        <button type="button" data-word-action="test-custom-library" data-library-id="${escapeHTML(library.id)}">测验</button>
                        <button type="button" data-word-action="delete-custom-library" data-library-id="${escapeHTML(library.id)}">删除</button>
                      </div>
                    </article>
                  `,
                )
                .join("")}
            </div>`
          : `<p class="word-session-note">还没有自定义词库。保存后会显示在这里，并自动出现在词库下拉框、随机测验、错题回顾和分类按钮中。</p>`
      }
    </section>
  `;
}

function wordTrainerStatsHTML(words, progress) {
  const libraryWords = wordsForSelectedLibrary();
  const libraryStats = wordProgressStats(libraryWords, progress);
  const visibleStats = wordProgressStats(words, progress);
  return `
    <section class="word-stats">
      <article><strong>${libraryWords.length}</strong><span>当前词库</span></article>
      <article><strong>${ENGLISH_WORD_BANK.length}</strong><span>总词数</span></article>
      <article><strong>${libraryStats.known}</strong><span>当前已掌握</span></article>
      <article><strong>${libraryStats.wrong}</strong><span>当前错题</span></article>
      <article><strong>${visibleStats.fuzzy}</strong><span>当前模糊</span></article>
      <article><strong>${visibleStats.fresh}</strong><span>当前未掌握</span></article>
    </section>
  `;
}

function wordTrainerQuizControlsHTML() {
  const progress = readWordTrainerProgress();
  const wrongCount = wordsForSelectedLibrary().filter((item) => wordHasWrongRecord(item, progress)).length;
  const sessionActive = wordTrainerState.sessionKeys.length > 0;
  return `
    <section class="word-quiz-controls">
      <div class="word-quiz-controls__main">
        <label>
          <span>随机测验数量</span>
          <input id="wordQuizCount" type="number" min="1" max="200" value="${wordTrainerState.quizCount || 20}" inputmode="numeric" />
        </label>
        <button type="button" data-word-action="start-random-quiz">全库随机测验</button>
        <button type="button" data-word-action="start-library-quiz">当前词库测验</button>
        <button type="button" data-word-action="review-wrong">错题回顾 <span>${wrongCount}</span></button>
        <button type="button" data-word-action="retry-wrong">错词重点重测</button>
        ${sessionActive ? `<button type="button" data-word-action="end-session">退出测验</button>` : ""}
      </div>
      ${
        sessionActive
          ? `<p class="word-session-note">当前测验：${escapeHTML(wordTrainerState.sessionTitle)} · ${wordTrainerState.sessionKeys.length} 词</p>`
          : `<p class="word-session-note">全库随机测验会从内置词库 + 自定义词库一起抽；当前词库测验才只按上方选中的词库抽。</p>`
      }
    </section>
  `;
}

function wordTrainerStepHTML(step) {
  return `
    <div class="word-stepper" aria-label="单词训练步骤">
      ${WORD_TRAINER_STEPS.map((label, index) => {
        const className = index < step ? "is-done" : index === step ? "is-active" : "is-locked";
        return `<span class="${className}"><b>${index + 1}</b>${label}</span>`;
      }).join("")}
    </div>
  `;
}

function wordNextStepCueHTML() {
  if (!wordTrainerState.stepCue) return "";
  return `
    <div class="word-next-cue" role="status">
      <span class="word-next-cue__arrow">➜</span>
      <strong>${escapeHTML(wordTrainerState.stepCue)}</strong>
    </div>
  `;
}

function wordAudioFeedbackHTML() {
  const feedback = wordTrainerState.audioFeedback;
  if (!feedback?.text) return "";
  return `
    <div class="word-audio-feedback" role="status">
      <span>🎧</span>
      <p>${escapeHTML(feedback.text)}${
        feedback.href
          ? ` <a href="${escapeHTML(feedback.href)}" target="_blank" rel="noreferrer">查看授权来源</a>`
          : ""
      }</p>
    </div>
  `;
}

function wordTrainerStageHTML(current, step, options) {
  const cloze = wordClozeData(current);
  if (step === 0) {
    return `
      <section class="word-stage-grid">
        <article class="word-stage is-active">
          <b>1. 主动回忆 + 意思辨认：先想，再选</b>
          <p>上方释义已隐藏。先点读音，闭眼在心里说出“意思、词性、常见搭配”，再显示选项验证。</p>
          ${
            wordTrainerState.meaningReady
              ? `<div class="word-options">
                  ${options
                    .map(
                      (option) => `
                        <button type="button" data-word-option="${escapeHTML(option)}">${highlight(option)}</button>
                      `,
                    )
                    .join("")}
                </div>`
              : `<div class="word-recall-cue">
                  <span>不要先看选项。先主动回忆 3 秒：这个词是什么意思？常和什么词搭配？</span>
                  <button type="button" data-word-action="meaning-ready">我已先回忆，显示选项</button>
                </div>`
          }
        </article>
      </section>
    `;
  }
  if (step === 1) {
    return `
      <section class="word-stage-grid">
        <article class="word-stage is-active">
          <b>2. 词汇复述：读音、释义、词汇搭配一起说出来</b>
          <p class="word-focus-line">${highlight(current.word)} · ${highlight(current.phonetic || "")}</p>
          <p class="word-focus-line">${highlight(current.phrase)}</p>
          <div class="word-stage-actions">
            <button type="button" data-word-action="speak-word">🔊 播放词汇</button>
            <button type="button" data-word-action="phrase-done">我能用这个词汇口头造句</button>
          </div>
        </article>
      </section>
    `;
  }
  if (step === 2) {
    return `
      <section class="word-stage-grid">
        <article class="word-stage is-active">
          <b>3. 例句填空：从语境里调出单词</b>
          <p class="word-cloze">${highlight(cloze.text)}</p>
          ${current.exampleSource ? `<p class="word-example-source">来源：${highlight(current.exampleSource)}</p>` : ""}
          <div class="word-spell">
            <input id="wordExampleInput" type="text" placeholder="填空：输入原词或句中形式" autocomplete="off" />
            <button type="button" data-word-action="check-example">检查例句</button>
          </div>
          ${
            wordTrainerState.exampleFeedback
              ? `<div class="word-inline-feedback" role="status">
                  ${escapeHTML(wordTrainerState.exampleFeedback)}
                  ${
                    wordTrainerState.examplePassed
                      ? `<div class="word-stage-actions">
                          <button type="button" data-word-action="speak-example">🔊 播放完整句子</button>
                          <button type="button" data-word-action="example-next">进入助记复述</button>
                        </div>`
                      : ""
                  }
                </div>`
              : ""
          }
        </article>
      </section>
    `;
  }
  if (step === 3) {
    return `
      <section class="word-stage-grid">
        <article class="word-stage is-active">
          <b>4. 助记复述：用一个钩子把它挂住</b>
          <p>${highlight(current.mnemonic)}</p>
          <button type="button" data-word-action="mnemonic-done">我已闭眼复述这个钩子</button>
        </article>
      </section>
    `;
  }
  return `
    <section class="word-stage-grid">
      <article class="word-stage is-active">
        <b>5. 拼写确认：最后一次主动回忆</b>
        <div class="word-spell">
          <input id="wordSpellingInput" type="text" placeholder="默写：${escapeHTML(current.meaning)} 对应的英文" autocomplete="off" />
          <button type="button" data-word-action="check-spelling">检查拼写并计入熟练度</button>
        </div>
      </article>
    </section>
  `;
}

function wordTrainerCardHTML(current, words, progress) {
  const itemProgress = progress[wordKey(current)] || {};
  const level = itemProgress.level || 0;
  const options = wordQuizOptions(current);
  const step = Math.min(Math.max(wordTrainerState.step || 0, 0), WORD_TRAINER_STEPS.length - 1);
  return `
    <article class="word-card">
      <div class="word-card__top">
        <span class="tag">${highlight(current.category)}</span>
        <span class="word-level ${wordLevelClass(level)}">${wordLevelLabel(level)} · ${itemProgress.times || 0} 次训练${
          itemProgress.wrong ? ` · 错 ${itemProgress.wrong}` : ""
        }</span>
      </div>
      <div class="word-card__main">
        <span class="word-index">${wordTrainerState.index + 1} / ${words.length}</span>
        <h3>
          <button class="word-title-audio" type="button" data-word-action="speak-word" aria-label="播放 ${escapeHTML(current.word)} 的英文读音" title="点击播放单词读音">
            <span>${highlight(current.word)}</span>
            <small>🔊 点单词播放读音</small>
          </button>
        </h3>
        <p class="word-phonetic">${highlight(current.phonetic || "音标待补充")}</p>
        ${
          step === 0
            ? `<p class="word-meaning word-meaning--locked">释义已隐藏：先完成“意思辨认”再显示</p>`
            : `<p class="word-meaning">${highlight(current.meaning)}</p>`
        }
      </div>
      ${wordTrainerStepHTML(step)}
      ${wordNextStepCueHTML()}
      ${wordTrainerStageHTML(current, step, options)}
      ${wordAudioFeedbackHTML()}
      ${
        wordTrainerState.feedback
          ? `<div class="word-feedback" role="status">${escapeHTML(wordTrainerState.feedback)}</div>`
          : ""
      }
      <div class="word-actions">
        <button type="button" data-word-action="prev">上一词</button>
        <button type="button" data-word-action="next">下一词</button>
        <button type="button" data-word-action="mark-new">还不会</button>
        <button type="button" data-word-action="mark-fuzzy">有点模糊</button>
        <button type="button" data-word-action="mark-known">已掌握</button>
        <button type="button" data-word-action="reset-progress">重置词汇记录</button>
      </div>
    </article>
  `;
}

function renderWordTrainer() {
  hideVolumeTabs();
  const words = currentWordList();
  const progress = readWordTrainerProgress();
  const libraryWords = wordsForSelectedLibrary();
  const libraryStats = wordProgressStats(libraryWords, progress);
  breadcrumb.innerHTML = `
    <div>
      <h2>英语必掌握单词训练</h2>
      <p>${
        state.query.trim()
          ? `关键词「${escapeHTML(state.query)}」匹配 ${words.length} 个词`
          : "主动回忆 · 听音辨义 · 词汇复述 · 语境填空 · 闭卷拼写"
      }</p>
    </div>
    <div class="progress-ring"><strong>${libraryStats.known}/${libraryWords.length}</strong><span>当前词库已掌握</span></div>
  `;

  unitList.innerHTML = `
    <div class="word-trainer">
      <article class="word-hero">
        <span class="tag">中考英语 · 仁爱版核心词汇闭环</span>
        <h3>按记忆规律逐步解锁，不再假装“看过就会”</h3>
        <p>每个词必须完成：主动回忆 → 听音辨义 → 词汇复述 → 例句填空 → 助记复述 → 闭卷拼写。错词会自动进入回顾和重点重测。</p>
      </article>
      ${wordLibrarySelectorHTML()}
      ${wordLookupHTML()}
      ${customWordLibraryHTML()}
      <section class="word-category-row">${wordTrainerCategoryButtonsHTML()}</section>
      ${wordTrainerQuizControlsHTML()}
      ${wordTrainerStatsHTML(words, progress)}
      ${
        words.length
          ? wordTrainerCardHTML(words[wordTrainerState.index], words, progress)
          : `
            <div class="empty">
              <strong>当前没有匹配单词</strong>
              <p>可以清空搜索，或换“语法”“阅读”“写作”“话题”等关键词。</p>
            </div>
          `
      }
    </div>
  `;
}

function handleWordTrainerClick(event) {
  const categoryButton = event.target.closest("[data-word-category]");
  if (categoryButton) {
    wordTrainerState.category = categoryButton.dataset.wordCategory;
    wordTrainerState.sessionKeys = [];
    wordTrainerState.sessionTitle = "";
    wordTrainerState.index = 0;
    wordTrainerState.feedback = "";
    wordTrainerState.audioFeedback = null;
    wordTrainerState.exampleFeedback = "";
    wordTrainerState.examplePassed = false;
    wordTrainerState.meaningReady = false;
    wordTrainerState.step = 0;
    wordTrainerState.stepCue = "";
    render();
    return true;
  }

  const optionButton = event.target.closest("[data-word-option]");
  if (optionButton) {
    const words = currentWordList();
    const current = words[wordTrainerState.index];
    if (!current) return true;
    const chosen = optionButton.dataset.wordOption;
    if (chosen === current.meaning) {
      promoteWordProgress(current, 1);
      wordTrainerState.exampleFeedback = "";
      wordTrainerState.examplePassed = false;
      advanceWordTrainerStep(1, `✅ 选对了：${current.word} = ${current.meaning}。现在进入词汇复述。`);
    } else {
      recordWordMistake(current);
      wordTrainerState.feedback = `❌ 这次选成了“${chosen}”，正确是“${current.meaning}”。看一眼助记钩子再来。`;
    }
    render();
    return true;
  }

  const actionButton = event.target.closest("[data-word-action]");
  if (!actionButton) return false;
  const words = currentWordList();
  const current = words[wordTrainerState.index];
  const action = actionButton.dataset.wordAction;
  const globalActions = new Set([
    "reset-progress",
    "start-random-quiz",
    "start-library-quiz",
    "review-wrong",
    "retry-wrong",
    "end-session",
    "run-lookup",
    "clear-lookup",
    "start-lookup-quiz",
    "save-custom-library",
    "use-custom-library",
    "test-custom-library",
    "delete-custom-library",
  ]);
  if (!current && !globalActions.has(action)) return true;

  switch (action) {
    case "run-lookup": {
      const input = document.querySelector("#wordLookupInput");
      wordTrainerState.lookupQuery = input?.value || "";
      wordTrainerState.feedback = wordTrainerState.lookupQuery.trim()
        ? `已查询：${wordTrainerState.lookupQuery.trim()}`
        : "请输入要查询的单词、中文释义或词块。";
      break;
    }
    case "clear-lookup":
      wordTrainerState.lookupQuery = "";
      wordTrainerState.feedback = "词汇查询已清空。";
      break;
    case "start-lookup-quiz": {
      const sample = wordLookupResults();
      startWordQuizSession(sample, `查询结果测验 ${sample.length} 词`);
      break;
    }
    case "start-random-quiz": {
      const count = readWordQuizCount();
      const sample = shuffledSample(allLibraryRandomWords(), count);
      startWordQuizSession(sample, `全库随机测验 ${sample.length}/${count}`);
      break;
    }
    case "start-library-quiz":
      startWordQuizSession(baseWordTrainerWords(), `${currentLibraryOption().name} · 当前范围测验`);
      break;
    case "save-custom-library": {
      const nameInput = document.querySelector("#customLibraryName");
      const wordsInput = document.querySelector("#customLibraryWords");
      const name = (nameInput?.value || "").trim();
      const raw = wordsInput?.value || "";
      wordTrainerState.customLibraryName = name;
      wordTrainerState.customLibraryRaw = raw;
      if (!name) {
        wordTrainerState.customFeedback = "请先给自定义词库起一个名称。";
        wordTrainerState.feedback = wordTrainerState.customFeedback;
        break;
      }
      const parsed = parseCustomWordLibrary(raw, name);
      if (!parsed.length) {
        wordTrainerState.customFeedback = "没有识别到有效词条。至少每行写：英文 | 中文意思。也支持 英文，中文意思 或 英文：中文意思。";
        wordTrainerState.feedback = wordTrainerState.customFeedback;
        break;
      }
      const id = createCustomLibraryId(name);
      const shell = { id, name };
      const words = parsed.map((item) => normalizeCustomWordItem(item, shell)).filter(Boolean);
      const library = { id, name, createdAt: Date.now(), updatedAt: Date.now(), words };
      const saved = saveCustomWordLibraries([...customWordLibraries, library]);
      wordTrainerState.libraryId = id;
      wordTrainerState.category = "全部";
      wordTrainerState.sessionKeys = [];
      wordTrainerState.sessionTitle = "";
      wordTrainerState.index = 0;
      wordTrainerState.customLibraryName = "";
      wordTrainerState.customLibraryRaw = "";
      resetWordTrainerTransientState();
      wordTrainerState.customFeedback = saved
        ? `✅ 已创建自定义词库「${name}」，共 ${words.length} 个词；随机测验、当前词库测验和错题回顾都可以使用它。`
        : `⚠️ 已临时创建「${name}」，但浏览器本地存储写入失败；刷新后可能丢失。`;
      wordTrainerState.feedback = wordTrainerState.customFeedback;
      break;
    }
    case "use-custom-library": {
      const libraryId = actionButton.dataset.libraryId;
      const library = customWordLibraries.find((item) => item.id === libraryId);
      if (!library) {
        wordTrainerState.feedback = "没有找到这个自定义词库。";
        break;
      }
      wordTrainerState.libraryId = library.id;
      wordTrainerState.category = "全部";
      wordTrainerState.sessionKeys = [];
      wordTrainerState.sessionTitle = "";
      wordTrainerState.index = 0;
      resetWordTrainerTransientState();
      wordTrainerState.customFeedback = `已切换到自定义词库「${library.name}」。`;
      wordTrainerState.feedback = wordTrainerState.customFeedback;
      break;
    }
    case "test-custom-library": {
      const libraryId = actionButton.dataset.libraryId;
      const library = customWordLibraries.find((item) => item.id === libraryId);
      if (!library) {
        wordTrainerState.feedback = "没有找到这个自定义词库。";
        break;
      }
      wordTrainerState.libraryId = library.id;
      wordTrainerState.category = "全部";
      startWordQuizSession(wordsForSelectedLibrary(), `自定义词库「${library.name}」测验`);
      break;
    }
    case "delete-custom-library": {
      const libraryId = actionButton.dataset.libraryId;
      const library = customWordLibraries.find((item) => item.id === libraryId);
      if (!library) {
        wordTrainerState.feedback = "没有找到这个自定义词库。";
        break;
      }
      if (!window.confirm(`确认删除自定义词库「${library.name}」吗？`)) return true;
      const saved = saveCustomWordLibraries(customWordLibraries.filter((item) => item.id !== libraryId));
      if (wordTrainerState.libraryId === libraryId) wordTrainerState.libraryId = "all";
      wordTrainerState.category = "全部";
      wordTrainerState.sessionKeys = [];
      wordTrainerState.sessionTitle = "";
      wordTrainerState.index = 0;
      resetWordTrainerTransientState();
      wordTrainerState.customFeedback = saved
        ? `已删除自定义词库「${library.name}」。`
        : `已从当前页面移除「${library.name}」，但本地存储更新失败；刷新后可能恢复。`;
      wordTrainerState.feedback = wordTrainerState.customFeedback;
      break;
    }
    case "review-wrong": {
      wordTrainerState.sessionKeys = [];
      wordTrainerState.sessionTitle = "";
      wordTrainerState.category = "错题回顾";
      wordTrainerState.index = 0;
      resetWordTrainerTransientState();
      const wrongCount = wordCategoryCount("错题回顾");
      wordTrainerState.feedback = wrongCount ? `已进入错题回顾，共 ${wrongCount} 个历史错词。` : "目前还没有错词记录。";
      break;
    }
    case "retry-wrong": {
      const count = readWordQuizCount();
      const sample = shuffledSample(wrongReviewWords(), count);
      startWordQuizSession(sample, `错词重点重测 ${sample.length}/${count}`);
      break;
    }
    case "end-session":
      endWordQuizSession();
      break;
    case "prev":
      moveWordTrainer(-1);
      break;
    case "next":
      moveWordTrainer(1);
      break;
    case "speak-word":
      if (!speakEnglishWord(current)) render();
      return true;
    case "meaning-ready":
      wordTrainerState.meaningReady = true;
      clearWordStepCue();
      wordTrainerState.feedback = "现在再选择中文意思；这一步是在验证刚才的主动回忆。";
      break;
    case "phrase-done":
      wordTrainerState.exampleFeedback = "";
      wordTrainerState.examplePassed = false;
      advanceWordTrainerStep(2, `好，词汇复述已过。现在把例句里的空格补出来：${current.phrase}`);
      break;
    case "check-example":
      checkExampleCloze(current);
      break;
    case "speak-example":
      if (!speakEnglishExample(current)) render();
      return true;
    case "example-next":
      wordTrainerState.exampleFeedback = "";
      wordTrainerState.examplePassed = false;
      advanceWordTrainerStep(3, "");
      break;
    case "mnemonic-done":
      advanceWordTrainerStep(4, "助记钩子已复述。最后闭卷拼写一次，正确后计入“已掌握”。");
      break;
    case "mark-new":
      setWordProgress(current, 0);
      clearWordStepCue();
      wordTrainerState.feedback = `已把 ${current.word} 标为“还不会”，它会留在复习重点里。`;
      break;
    case "mark-fuzzy":
      setWordProgress(current, 1);
      clearWordStepCue();
      wordTrainerState.feedback = `已把 ${current.word} 标为“有点模糊”，建议明天再刷一次。`;
      break;
    case "mark-known":
      setWordProgress(current, 2);
      clearWordStepCue();
      wordTrainerState.feedback = `漂亮，${current.word} 已标为掌握。隔几天还要抽查，别让它溜走。`;
      break;
    case "check-spelling":
      checkWordSpelling(current);
      break;
    case "reset-progress":
      localStorage.removeItem(WORD_TRAINER_STORAGE_KEY);
      wordTrainerState.sessionKeys = [];
      wordTrainerState.sessionTitle = "";
      resetWordTrainerTransientState();
      wordTrainerState.feedback = "词汇记录已重置，可以重新开始一轮干净的记忆闭环。";
      break;
    default:
      return false;
  }
  render();
  return true;
}

function readProgress() {
  try {
    return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));
  } catch {
    return new Set();
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...doneSet]));
}

function keyFor(subjectIndex, volumeIndex, unitIndex) {
  return `${subjectIndex}-${volumeIndex}-${unitIndex}`;
}

function hidePageLoader() {
  const loader = $("#pageLoader");
  if (!loader) return;
  loader.classList.add("is-hidden");
  window.setTimeout(() => loader.remove(), 420);
}

function totals() {
  const volumes = COURSE.reduce((sum, subject) => sum + subject.volumes.length, 0);
  const units = COURSE.reduce((sum, subject) => sum + subject.volumes.reduce((inner, volume) => inner + volume.units.length, 0), 0);
  const refinedNodes =
    typeof window !== "undefined" && typeof window.countJuniorRefinedSubjectNodes === "function"
      ? COURSE.reduce((sum, subject) => sum + window.countJuniorRefinedSubjectNodes(subject.name), 0)
      : 0;
  const nodes = refinedNodes || units * 24;
  return { subjects: COURSE.length, volumes, units, nodes, done: doneSet.size };
}

function guideFor(subjectName) {
  return SUBJECT_GUIDES[subjectName] || SUBJECT_GUIDES.语文;
}

const DEFAULT_UNIT_DETAIL = {
  keys: [],
  focus: "章节核心概念、教材例题、关键表达和错题复盘",
  core: "先把本章拆成“概念定义—典型例题—实际应用—复盘输出”四层，避免只记标题不懂内容。",
  method: "读教材目录和例题，圈出定义、条件、结论与关键词，再用一道基础题验证是否会用。",
  exam: "常见考法会把教材概念放进材料、图表、生活情境或综合题中，要求能解释、判断、迁移。",
  error: "最容易出现“看懂文字但不会落到题目步骤”的问题，需要用错题标出卡住的具体概念。",
  deep: "把本章与前后章节连接起来，形成概念卡、例题卡、错因卡和口头讲解卡。",
};

const UNIT_DETAIL_RULES = {
  语文: [
    {
      keys: ["新闻"],
      focus: "新闻六要素、标题导语主体、消息通讯特写、客观准确表达",
      core: "掌握新闻“何人、何时、何地、何事、何因、如何”的信息骨架，区分标题、导语、主体、背景和结语的作用。",
      method: "先抓新闻事实，再看材料来源和表达立场，概括时保留核心事件，赏析时落到准确、简明、客观的语言特点。",
      exam: "常考拟写标题、概括导语、判断新闻价值、分析消息结构，也会要求写一则简短新闻。",
      error: "容易把新闻概括写成散文感想，或只抄细节不提事件主体；答题必须回到事实与结构。",
      deep: "可连接媒介素养、真实信息判断和活动探究写作，训练“用事实说话”的表达能力。",
    },
    {
      keys: ["说明"],
      focus: "说明对象、说明特征、说明顺序、说明方法和语言准确性",
      core: "围绕说明对象提炼本质特征，弄清时间顺序、空间顺序、逻辑顺序，以及举例子、列数字、作比较等方法。",
      method: "读题先问“说明什么、说明它哪一点、怎样说明”，答作用时用“方法名称+具体内容+说明效果”的格式。",
      exam: "常考信息筛选、说明方法及作用、词语能否删改、段落顺序和科技材料阅读。",
      error: "容易把“说明方法”写成修辞手法，或只说“生动形象”不说明准确严密的效果。",
      deep: "适合与科学精神、跨学科阅读和生活中的说明文写作结合，形成清楚解释事物的能力。",
    },
    {
      keys: ["文言", "古诗", "古代", "传统"],
      focus: "文言实词虚词、句式翻译、诗文意象、情感主旨和传统文化",
      core: "积累课内实词、虚词、通假字、古今异义和特殊句式，同时抓住诗文意象、人物志趣与思想情感。",
      method: "翻译坚持“留、换、补、调、删”，诗歌赏析先找意象和情感词，再分析手法与表达效果。",
      exam: "常考实词解释、句子翻译、断句、内容理解、诗歌炼字、意象情感和课内外迁移阅读。",
      error: "容易逐字硬译、忽略语境，诗歌题只写情绪不写意象依据；必须把答案落回原句。",
      deep: "可连接儒家修身、山水情怀、家国精神和文化传承，积累作文中的传统文化素材。",
    },
    {
      keys: ["小说"],
      focus: "情节推进、人物形象、环境描写、叙述视角和主题理解",
      core: "从开端、发展、高潮、结局梳理情节，结合语言、动作、心理、外貌和环境分析人物形象。",
      method: "人物题按“性格特点+文本依据+情节作用”答，环境题从氛围、人物、情节、主题四个角度分析。",
      exam: "常考情节概括、人物赏析、伏笔照应、标题作用、结尾效果和主题探究。",
      error: "容易只复述故事不分析作用，或给人物贴标签但没有文本证据；每个结论都要找到句子支撑。",
      deep: "可连接现实人生、社会观察和叙事写作，训练从故事中看人物命运与时代背景。",
    },
    {
      keys: ["名著", "朝花夕拾", "西游记", "骆驼祥子", "海底两万里", "红星照耀中国", "昆虫记", "傅雷家书", "钢铁是怎样炼成的", "艾青诗选", "水浒传", "儒林外史", "简·爱"],
      focus: "作者背景、人物关系、关键情节、主题思想和中考出题角度",
      core: "按“作者与时代—主要人物—核心情节—主题精神—典型题型”梳理名著，不只背故事梗概。",
      method: "先做人物关系图，再按章节或事件线整理情节，最后把人物性格、主题和典型细节对应起来。",
      exam: "常考人物辨析、情节排序、片段阅读、主题理解、人物评价和与作文素材的迁移。",
      error: "容易只记热闹情节，不记人物变化和主题价值；答题时必须写出具体情节依据。",
      deep: "名著复习要服务阅读题和作文素材，把整本书阅读变成可调用的证据库。",
    },
    {
      keys: ["议论文", "论述", "思辨"],
      focus: "中心论点、分论点、论据类型、论证方法和论证结构",
      core: "明确论点、事实论据、道理论据和举例论证、道理论证、对比论证、比喻论证等方法的关系。",
      method: "读论述文本先找观点句，再看每段如何支撑观点；写作时用“提出问题—分析问题—解决问题”搭框架。",
      exam: "常考寻找中心论点、补写论据、分析论证方法、梳理论证思路和写一段议论文字。",
      error: "容易把话题当论点，或只背模板不结合材料；论点必须是明确判断句。",
      deep: "可连接批判性思维、材料作文立意和现实问题表达，训练有证据的思考。",
    },
    {
      keys: ["诗歌", "现代诗", "诗词", "沁园春", "行路难"],
      focus: "意象组合、节奏语气、象征手法、抒情方式和时代精神",
      core: "把握诗歌中的意象、画面、节奏和抒情主体，理解直抒胸臆、借景抒情、象征等表达。",
      method: "先读出画面，再找反复出现的词语和情绪变化，赏析时说明“写了什么—怎么写—表达什么”。",
      exam: "常考意象含义、诗句赏析、情感概括、朗读节奏和仿写创作。",
      error: "容易空喊“表达热爱”而不说明意象，或把现代诗当散文逐句翻译。",
      deep: "可连接审美表达、时代精神和朗诵活动，把抽象情感变成可感的画面。",
    },
    {
      keys: ["戏剧", "演讲"],
      focus: "台词动作、人物冲突、舞台说明、对象意识和现场表达",
      core: "戏剧重在冲突与台词，演讲重在观点、对象、场合和感染力，两者都要关注语言的现场效果。",
      method: "分析戏剧先抓矛盾冲突，分析演讲先找观点和听众；表达题要兼顾内容、语气和场景。",
      exam: "常考人物台词含义、舞台说明作用、演讲稿结构、开场结尾和活动探究任务。",
      error: "容易只说情节不说舞台效果，或演讲稿缺少对象称呼和号召性语言。",
      deep: "可连接综合性学习、口语交际和舞台实践，训练公开表达与角色理解。",
    },
    {
      keys: ["散文", "写景", "山水", "游记", "民俗", "亲情", "人物", "家国", "生命", "哲理", "想象", "科幻", "文学作品", "综合复习", "字词", "记叙文", "写作", "抒情", "细节", "全题型", "中考语文"],
      focus: "线索结构、景物描写、细节刻画、情感变化和读写迁移",
      core: "抓住文章线索、描写对象、情感变化和主旨落点，理解写景、叙事、抒情、议论如何组合。",
      method: "阅读时先圈线索词和情感词，赏析句子按“手法+内容+情感/作用”组织，写作迁移到细节描写。",
      exam: "常考内容概括、句段作用、词句赏析、标题含义、情感变化和仿写片段。",
      error: "容易把“我觉得很美”当赏析，或忽略结构位置；必须说明具体词句怎样产生表达效果。",
      deep: "可连接生活观察、审美体验和作文素材库，把课文写法迁移到自己的叙事写景。",
    },
  ],
  数学: [
    {
      keys: ["有理数"],
      focus: "正负数、数轴、相反数、绝对值和有理数四则运算",
      core: "建立数轴模型，理解符号、大小、距离和运算顺序，尤其是负数参与加减乘除时的法则。",
      method: "计算题先定符号再算绝对值，混合运算先看括号、乘方、乘除、加减，应用题用正负表示相反意义。",
      exam: "常考数轴比较大小、绝对值化简、科学记数法、有理数混合运算和实际盈亏温差问题。",
      error: "最容易把负号、减号、相反数混在一起，或乘方时漏掉括号导致符号错误。",
      deep: "这是代数运算的入口，后面的整式、方程、函数都依赖对符号和运算律的稳定掌握。",
    },
    {
      keys: ["实数", "二次根式"],
      focus: "平方根、算术平方根、立方根、无理数估算和根式化简",
      core: "区分有理数与无理数，掌握开方意义、根式性质、最简二次根式和分母有理化的基本思想。",
      method: "根式化简先分解因数，把能开方的部分移出根号；估算无理数用相邻平方数或立方数定位。",
      exam: "常考平方根概念、实数分类、根式加减乘除、估算范围和二次根式应用。",
      error: "容易把平方根和算术平方根混淆，或误以为根号内外可以随意拆分相加。",
      deep: "实数把数系从有限小数扩展到连续数轴，是函数图像、勾股定理和几何长度计算的基础。",
    },
    {
      keys: ["整式", "因式", "分式"],
      focus: "单项式多项式、乘法公式、因式分解、分式约分通分和条件限制",
      core: "掌握同类项、幂的运算、平方差公式、完全平方公式、提公因式与公式法分解，以及分式有意义条件。",
      method: "化简先观察结构，能提公因式先提，能套公式再套；分式运算先找最简公分母并标明取值限制。",
      exam: "常考整式化简求值、乘法公式变形、因式分解、分式方程前置化简和实际比例问题。",
      error: "容易漏括号、漏指数、约分约掉加减项，或忽略分母不能为零的限制。",
      deep: "代数式变形是方程、函数和几何证明中的工具，关键是看出结构而不是机械展开。",
    },
    {
      keys: ["一元一次方程", "二元一次方程组", "一元二次方程", "不等式"],
      focus: "等量关系、不等关系、消元、配方、判别式和应用建模",
      core: "把文字条件转化为方程或不等式，理解解、解集、根的意义，掌握移项、合并、消元、配方和公式法。",
      method: "应用题先设未知数、列关系、解方程、检验是否符合实际；方程组优先选择代入或加减消元。",
      exam: "常考行程工程利润问题、方案选择、不等式组取整、根的判别式和一元二次方程应用。",
      error: "容易列式不对应题意、解完不检验，或不等式两边乘除负数时忘记改变不等号方向。",
      deep: "方程思想贯穿初中数学，是把实际问题变成可计算模型的核心工具。",
    },
    {
      keys: ["平面直角坐标系"],
      focus: "坐标轴、象限、点的坐标、平移规律和位置表示",
      core: "理解有序数对与平面位置一一对应，掌握象限符号、坐标轴上的点和平移后坐标变化。",
      method: "画坐标系先定原点、单位长度和正方向，点的移动用横坐标管左右、纵坐标管上下。",
      exam: "常考点所在象限、图形平移、坐标规律、面积计算和与函数图像的衔接。",
      error: "容易把横纵坐标写反，或忽略坐标轴上的点不属于任何象限。",
      deep: "坐标系把几何图形数字化，是一次函数、二次函数、反比例函数和解析几何的入口。",
    },
    {
      keys: ["一次函数", "二次函数", "反比例函数", "综合压轴", "压轴"],
      focus: "函数表达式、图像性质、增减性、交点、最值和实际应用",
      core: "理解变量关系，掌握一次函数直线、反比例函数双曲线、二次函数抛物线的图像与参数意义。",
      method: "函数题先画草图，标出关键点、交点和取值范围，再用解析式把图像信息转化为方程或不等式。",
      exam: "常考待定系数法、图像交点、面积最值、实际利润路程问题和函数综合压轴题。",
      error: "容易只代公式不看定义域，或把图像交点的坐标与方程组解的意义割裂。",
      deep: "函数是初中数学最重要的跨章节主线，连接方程、不等式、图形变化和实际建模。",
    },
    {
      keys: ["数据", "概率", "统计初步"],
      focus: "数据收集整理、统计图表、平均数中位数众数方差和随机事件概率",
      core: "理解数据来源、样本与总体，掌握统计量含义、数据波动和简单随机事件概率计算。",
      method: "统计题先看图表标题、单位和总量，概率题先列出等可能结果，再用目标结果数除以总结果数。",
      exam: "常考扇形条形折线统计图、样本估计总体、方差比较、列表树状图和频率估计概率。",
      error: "容易漏看单位和样本容量，或把频率、概率、百分比混用。",
      deep: "统计概率培养数据意识，可连接现实调查、体育成绩、质量检测和社会热点图表阅读。",
    },
    {
      keys: ["圆"],
      focus: "圆的基本性质、垂径定理、圆周角、切线、弧弦圆心角关系",
      core: "掌握半径、弦、弧、圆心角、圆周角和切线的性质，理解同圆或等圆中角、弧、弦的对应关系。",
      method: "圆题常补半径、连圆心、找直角、用圆周角定理，证明切线时优先证明半径垂直切线。",
      exam: "常考圆周角计算、切线证明、弦长半径关系、圆与三角形综合和动点最值。",
      error: "容易忘记“同圆或等圆”的前提，或切线证明没有落到垂直半径。",
      deep: "圆是几何综合压轴高频模块，常与相似、勾股、三角函数和函数图像结合。",
    },
    {
      keys: ["相似", "锐角三角函数", "投影"],
      focus: "相似判定性质、比例线段、正弦余弦正切、解直角三角形和空间视图",
      core: "掌握相似三角形判定与对应边比例，理解锐角三角函数是直角三角形边角关系，视图体现三维到二维的投影。",
      method: "几何计算先找相似或直角三角形，标对应边和角；视图题按主视、左视、俯视逐层还原。",
      exam: "常考相似证明、测高测距、坡度仰角、三视图判断和几何综合计算。",
      error: "容易对应边找错，或把 sin、cos、tan 的边比记混。",
      deep: "相似与三角函数是测量现实世界的数学工具，连接比例、几何证明和实际建模。",
    },
    {
      keys: ["几何图形", "相交线", "平行线", "三角形", "全等", "轴对称", "勾股", "平行四边形", "旋转", "多边形"],
      focus: "基本图形性质、角线关系、判定定理、图形变换和几何证明",
      core: "掌握线段、角、平行、三角形、四边形和图形变换的性质与判定，理解证明需要从已知推向结论。",
      method: "几何题先画清图、标已知、找目标，证明题用“条件—定理—结论”链条，辅助线服务于全等、相似或勾股。",
      exam: "常考角度计算、全等证明、特殊四边形判定、轴对称旋转性质、勾股计算和几何综合。",
      error: "容易凭图形直观看结论，或辅助线乱画不服务目标；证明必须写出理由。",
      deep: "几何训练空间想象和逻辑推理，是中考压轴题中函数与图形结合的基础。",
    },
  ],
  英语: [
    {
      keys: ["问候", "自我介绍", "家庭", "食物", "校园", "一般现在时", "名词单复数", "基础句型"],
      focus: "音标入门、问候介绍、家庭食物校园词块、一般现在时和名词单复数",
      core: "七上重点是建立英语句子地基：主语、谓语、be 动词/实义动词、名词单复数和日常话题表达。",
      method: "按场景背词块，句子先找主语和谓语，再用替换练习把人物、地点、物品换进去。",
      exam: "常考情景交际、单复数、一般现在时、基础阅读细节和介绍自己/家庭/校园的小作文。",
      error: "容易漏 be 动词、第三人称单数不加 s，或名词复数和冠词搭配错误。",
      deep: "七上英语要先把发音、词块和简单句稳定下来，后面时态和从句才不会塌。",
    },
    {
      keys: ["出行", "地点方位", "天气", "季节", "节日", "现在进行时", "一般过去时"],
      focus: "出行问路、地点方位、天气节日、现在进行时和一般过去时",
      core: "七下从静态介绍进入活动叙述，重点看时间状语如何提示正在发生或过去发生的动作。",
      method: "读题先圈时间词和地点词，写作按“时间—地点—活动—感受”展开。",
      exam: "常考问路、天气询问、节日活动、现在进行时、一般过去时和日常活动写作。",
      error: "容易把现在进行时和一般现在时混用，过去式不规则变化也容易漏。",
      deep: "这是从句子到小语篇的过渡，要训练用英语描述真实生活事件。",
    },
    {
      keys: ["比较级", "最高级", "情态动词", "一般将来时", "健康", "运动", "旅行"],
      focus: "比较级最高级、情态动词、一般将来时、健康运动旅行话题",
      core: "八上语法集中在比较、建议、计划和预测，话题围绕健康、运动和旅行。",
      method: "比较题先确定比较对象，建议题用 problem-advice-reason，计划题看将来时间标志。",
      exam: "常考形容词副词比较级最高级、should/must/can、be going to/will、健康建议和旅行计划作文。",
      error: "容易比较对象不一致，或情态动词后面误用动词变形。",
      deep: "八上是英语表达从事实陈述走向观点建议的关键阶段。",
    },
    {
      keys: ["现在完成时", "宾语从句", "状语从句", "环保", "历史", "文化阅读"],
      focus: "现在完成时、宾语从句、状语从句、环保历史文化阅读",
      core: "八下进入初中语法难点，重点掌握完成时的时间范围、宾语从句陈述语序和状语从句逻辑关系。",
      method: "长句先找主句，再圈连接词；完成时题看 already/yet/for/since 等时间信号。",
      exam: "常考完成时、宾语从句语序、原因/条件/时间状语从句、环保文化阅读和综合填空。",
      error: "容易宾语从句仍用疑问语序，或 for/since 与延续性动词搭配错误。",
      deep: "这一册直接影响阅读理解和完形，必须从语法点推进到语篇逻辑。",
    },
    {
      keys: ["定语从句", "被动语态", "社会热点", "科技", "阅读话题"],
      focus: "定语从句、被动语态、校园科技社会热点和福建中考阅读话题",
      core: "九上重点是复杂句和主被动关系，同时把校园、科技、社会热点作为阅读和写作素材。",
      method: "定语从句先找先行词，被动语态先判断动作承受者，再检查 be 动词和过去分词。",
      exam: "常考关系词选择、被动语态、阅读主旨推断、科技社会材料理解和话题作文。",
      error: "容易关系代词乱选，或被动语态漏 be 动词。",
      deep: "九上要把语法变成阅读能力，服务福建中考英语题型。",
    },
    {
      keys: ["语法复盘", "中考题型", "作文万能句型", "阅读理解定位"],
      focus: "全册语法复盘、中考专项、作文句型、阅读定位技巧",
      core: "九下不再追新知识，重点是把词汇、语法、阅读、完形、写作按福建中考题型打包复习。",
      method: "错题按题型归类，阅读先定位关键词，作文先搭结构再填句型和例子。",
      exam: "常考听力、完形、阅读、短文填空、情景交际、看图写话和书面表达。",
      error: "容易只刷题不复盘，作文模板套得生硬且时态人称错误。",
      deep: "九下目标是稳定输出：读得准、选得稳、写得规范。",
    },
    {
      keys: ["Making New Friends", "Looking Different", "Getting Together", "Having Fun"],
      focus: "自我介绍、外貌家庭、日常活动、名词代词、be 动词和一般现在时",
      core: "掌握问候、姓名、国籍、外貌、家庭成员和兴趣活动的基础词块，建立主语、谓语、宾语和时态意识。",
      method: "背单词时按场景成组记忆，句子先找主语和谓语，口语表达用短句反复替换人物、地点和活动。",
      exam: "常考情景交际、代词和 be 动词、一般现在时、阅读细节匹配以及介绍自己或朋友的小作文。",
      error: "容易漏 be 动词、第三人称单数不加 s，或把 he/she/his/her 混用。",
      deep: "这是英语表达的地基，后续校园、健康、环保和文化话题都要复用这些基础句型。",
    },
    {
      keys: ["School Life", "Local Area", "Birthday", "Seasons", "Weather"],
      focus: "校园生活、社区地点、生日活动、季节天气、方位表达和过去/将来时间",
      core: "围绕学校课程、建筑地点、生日聚会、天气季节积累动词短语和地点介词，理解时间状语对时态的提示。",
      method: "读对话先标时间、地点、人物和活动，写作时按“时间—地点—活动—感受”展开。",
      exam: "常考方位问路、there be 句型、一般过去时、天气询问、邀请回复和活动安排写作。",
      error: "容易把 in/on/at/to 方位介词混用，或描述过去活动时动词仍用原形。",
      deep: "可连接真实校园和社区表达，训练从生活场景中组织英语信息的能力。",
    },
    {
      keys: ["Playing Sports", "Keeping Healthy", "Hobbies", "Our World"],
      focus: "运动健康、兴趣爱好、自然世界、比较级最高级和情态动词",
      core: "掌握运动项目、疾病建议、兴趣表达和自然环境词汇，理解 should/must/can 以及形容词比较结构。",
      method: "健康建议题用“problem + advice + reason”，比较题先确定比较对象，再检查形容词形式。",
      exam: "常考提建议、病症对话、运动计划、爱好介绍、比较级最高级和人与自然阅读。",
      error: "容易建议句只写口号没有做法，或比较级前后对象不一致。",
      deep: "把语言学习和生活习惯、环保意识结合，积累中考作文高频主题素材。",
    },
    {
      keys: ["Feeling Excited", "Cycling", "Food Festival", "Our Clothes"],
      focus: "情绪表达、旅行交通、饮食文化、服装礼仪、状语从句和宾语从句",
      core: "掌握情绪形容词、交通方式、点餐烹饪、服装材质与场合表达，理解原因、条件、时间等句子连接。",
      method: "长句先找主句，再圈 because/if/when/that 等连接词，写作时用连接词让句子有层次。",
      exam: "常考情绪安慰、旅行安全、点餐菜单、服装选择、宾语从句语序和状语从句填空。",
      error: "容易宾语从句仍用疑问语序，或从句时态和主句语境不一致。",
      deep: "可连接跨文化礼仪和生活表达，提升从单句到语篇的组织能力。",
    },
    {
      keys: ["Changing World", "Saving the Earth", "English Around the World", "Amazing Science", "China and the World", "Entertainment"],
      focus: "社会变化、环境保护、英语传播、科技发明、中国文化和娱乐友谊",
      core: "积累环保、科技、文化交流和娱乐阅读词汇，掌握现在完成时、被动语态、定语从句等九年级核心语法。",
      method: "阅读先抓主题句和段落功能，语法题看动作发生时间、主被动关系和先行词，作文用观点加例子支撑。",
      exam: "常考完形语篇逻辑、阅读主旨推断、被动语态、现在完成时、文化介绍和环保科技作文。",
      error: "容易把现在完成时和一般过去时混用，或被动语态漏 be 动词和过去分词。",
      deep: "这些主题直接对接中考阅读和写作，重点是用准确语言表达社会责任和文化自信。",
    },
    {
      keys: ["词汇语法", "阅读写作"],
      focus: "中考高频词块、核心语法、阅读题型、书面表达结构和错题复盘",
      core: "把词汇按话题、语法按句法功能、阅读按题型、写作按体裁整理，形成中考复习清单。",
      method: "每天复盘错题中的词块和句型，阅读按细节、推断、主旨、词义分类训练，作文先列提纲再成文。",
      exam: "常考完形、阅读、短文填空、补全对话、任务型阅读和书面表达。",
      error: "容易只背孤立单词不背搭配，或作文句式堆砌但时态人称混乱。",
      deep: "复习阶段要建立“词块—句型—语篇—表达”的闭环，而不是零散刷题。",
    },
  ],
  道德与法治: [
    {
      keys: ["成长", "友谊", "师长", "生命", "中学时代", "学习", "师生亲情"],
      focus: "自我认识、友谊品质、师生亲子沟通、生命价值和挫折应对",
      core: "理解中学成长中的学习、自我、友谊、亲情、师生关系和生命意义，学会用教材关键词解释生活困惑。",
      method: "材料题先找人物关系和行为，再按“是什么—为什么—怎么做”组织答案。",
      exam: "常考漫画启示、情境选择、交友原则、孝亲敬师、珍爱生命和挫折应对建议。",
      error: "容易只写个人感受，不使用尊重、责任、沟通、生命价值等教材术语。",
      deep: "这一模块培养健康人格，是后面责任、法治和国家认同学习的心理基础。",
    },
    {
      keys: ["青春", "情绪", "集体", "法治天地", "法治入门", "未成年人"],
      focus: "青春期变化、情绪调节、集体规则、法律保护和未成年人责任",
      core: "掌握青春期生理心理变化、情绪情感管理、集体利益与个人利益、法律作用和特殊保护。",
      method: "做情境题先判断行为是否尊重规则和他人，再给出可操作做法。",
      exam: "常考青春异性交往、调节情绪、集体荣誉、违法与犯罪区别、未成年人保护。",
      error: "容易把自由理解成想做什么就做什么，忽视规则边界和法律后果。",
      deep: "可连接校园治理、班级建设和法治意识，训练在真实冲突中作出合理选择。",
    },
    {
      keys: ["社会生活", "社会规则", "社会责任", "国家利益", "网络", "诚信", "法律责任", "材料题"],
      focus: "社会关系、规则秩序、诚信守法、服务社会、国家安全和公共责任",
      core: "理解个人与社会相互依存，掌握规则、诚信、违法责任、关爱他人、服务社会和国家利益至上的观点。",
      method: "主观题先确定主体是个人、社会还是国家，再分点写意义和做法。",
      exam: "常考网络生活、诚信案例、违法责任判断、志愿服务、国家安全和维护国家利益。",
      error: "容易把责任题写成空泛口号，缺少具体行动如遵守规则、依法维权、服务社会。",
      deep: "这一模块把个人成长推向公共生活，是理解公民责任和国家观念的关键。",
    },
    {
      keys: ["宪法", "权利义务", "人民当家作主", "法治精神", "国家机构", "公平正义"],
      focus: "宪法地位、国家机构、公民权利义务、公平正义和依法治国",
      core: "掌握宪法是根本法、国家权力属于人民、公民权利与义务相统一、公平正义和法治精神。",
      method: "法治题按“依据—意义—做法”回答，遇到权利义务题要同时说明依法行使和自觉履行。",
      exam: "常考宪法宣传、监督权、受教育权、人格尊严权、权利义务关系和公平正义案例。",
      error: "容易只强调权利不谈义务，或把普通法律地位等同于宪法。",
      deep: "可连接国家制度认同和法治中国建设，训练用法律视角分析社会事件。",
    },
    {
      keys: ["富强", "创新", "民主", "文明", "家园", "和谐", "梦想", "世界", "中国", "未来", "时政", "国情", "国策", "少年追梦"],
      focus: "改革创新、民主法治、中华文化、生态文明、中国梦、世界格局和少年担当",
      core: "理解改革开放、创新驱动、全过程人民民主、文化自信、绿色发展、民族团结、中国担当和个人理想。",
      method: "时政材料先找关键词，再连接教材观点；开放题要写国家、社会、青少年三个层面的做法。",
      exam: "常考创新强国、民主参与、文化传承、生态保护、共同富裕、中国担当和青少年使命。",
      error: "容易背大段口号却不扣材料，或把国内发展与世界舞台割裂。",
      deep: "这是中考道法综合题核心区域，要把教材观点、年度时政和个人行动连成一条线。",
    },
  ],
  历史: [
    {
      keys: ["史前", "夏商周", "秦汉", "三国", "中国古代史七上"],
      focus: "中华文明起源、早期国家、统一多民族国家建立、政权分立与民族交融",
      core: "按史前文明、夏商周制度、秦汉统一和魏晋南北朝民族交融梳理中国古代早期发展。",
      method: "先定朝代顺序，再用政治制度、经济文化、民族关系和历史影响四条线归纳。",
      exam: "常考分封制、商鞅变法、秦统一措施、汉武帝巩固统一、丝绸之路和民族交融。",
      error: "容易把朝代顺序和制度影响混淆，材料题要注意时间和人物提示。",
      deep: "这是理解中华文明连续性和统一多民族国家形成的起点。",
    },
    {
      keys: ["隋唐", "辽宋", "宋元", "明清", "古代史综合"],
      focus: "繁荣开放、民族政权并立、经济重心南移、统一巩固和闭关变化",
      core: "梳理隋唐制度与开放气象、宋元经济文化与民族关系、明清统一巩固和社会危机。",
      method: "用时间轴串联制度、经济、民族、对外关系和科技文化，比较不同朝代阶段特征。",
      exam: "常考科举制、贞观开元、宋代商业、元朝行省、郑和下西洋、明清边疆治理和闭关锁国。",
      error: "容易只记事件不记影响，或把“繁荣开放”和“封闭保守”的阶段特征混在一起。",
      deep: "可连接制度演进、文明交流和国家治理，为古今对比题提供主线。",
    },
    {
      keys: ["半殖民地", "近代化", "民主革命", "新民主主义", "国共", "抗日", "解放", "近代经济", "晚清", "辛亥", "新文化"],
      focus: "民族危机、近代探索、民主革命、抗日战争、人民解放和社会文化变迁",
      core: "按侵略与反抗、制度探索、思想解放、革命道路、民族战争和社会生活变化构建近代史主线。",
      method: "材料题抓条约、人物、口号和时间，回答原因影响时区分国内外背景。",
      exam: "常考鸦片战争、洋务运动、戊戌变法、辛亥革命、五四运动、长征、抗日战争和解放战争。",
      error: "容易把近代化探索的阶级属性和结果混淆，或评价事件只写成败不写历史意义。",
      deep: "近代史核心是民族独立和人民解放，适合与家国情怀和史料实证结合复习。",
    },
    {
      keys: ["中华人民共和国", "社会主义", "中国特色社会主义", "民族团结", "祖国统一", "国防外交", "科技文化", "新中国", "改革开放", "新时代", "近现代史"],
      focus: "新中国成立、社会主义建设、改革开放、民族团结、祖国统一、外交国防和科技生活",
      core: "把新中国史分为成立巩固、制度建立、探索建设、改革开放和新时代发展几个阶段。",
      method: "复习时用“政策—成就—影响”表格整理土地改革、一五计划、改革开放、港澳回归和外交突破。",
      exam: "常考开国大典、抗美援朝、三大改造、十一届三中全会、家庭联产承包、民族区域自治和一国两制。",
      error: "容易把不同历史时期政策混放，或忽略改革开放前后发展任务的变化。",
      deep: "这是理解民族复兴道路的核心内容，要与现实中国发展成就联系起来。",
    },
    {
      keys: ["亚非文明", "欧洲文明", "亚非欧", "封建时代", "走向近代", "资本主义", "资产阶级", "工业革命", "殖民地", "世界大战", "冷战", "和平发展", "马克思主义", "全球化", "现代科技", "世界史"],
      focus: "世界古代文明、资本主义兴起、工业革命、世界战争、冷战格局和全球发展",
      core: "从古代文明多元起源，到资本主义制度确立、工业化扩展、两次世界大战和战后世界格局演变。",
      method: "世界史复习要用地区定位和阶段特征，比较不同文明、革命、改革和国际关系变化。",
      exam: "常考古代埃及希腊罗马、新航路开辟、英法美革命、工业革命、两次世界大战、罗斯福新政和冷战。",
      error: "容易把国家、革命、战争时间线混乱，或只记结论不看生产力和制度变化。",
      deep: "世界史要抓文明交流与冲突、现代化道路和人类命运共同体意识。",
    },
  ],
  地理: [
    {
      keys: ["地球和地图", "经纬网"],
      focus: "经纬网、方向、比例尺、图例注记、等高线和地图判读",
      core: "掌握经纬度定位、半球划分、地图三要素和等高线地形图，能从地图提取位置和地形信息。",
      method: "读图先看图名、方向、比例尺和图例，再定位经纬度、海陆位置和地形起伏。",
      exam: "常考经纬网定位、比例尺换算、方向判断、等高线地形部位和路线选择。",
      error: "容易忽略东西经和南北纬，或看等高线时不判断疏密与闭合形态。",
      deep: "地图能力是所有地理题的入口，后续区域地理和中国地理都先靠定位。",
    },
    {
      keys: ["陆地和海洋", "海陆", "天气与气候", "气候", "居民与聚落", "发展与合作", "发展差异"],
      focus: "海陆分布、板块运动、天气气候、人口聚落和世界发展差异",
      core: "理解七大洲四大洋、板块构造、气温降水、气候类型、人口分布、聚落形成和发展合作。",
      method: "自然地理题先分析纬度、海陆、地形和洋流，人文题再看人口、交通、资源和经济水平。",
      exam: "常考大洲大洋、火山地震、气候图判读、人口密度、聚落选址和发达/发展中国家差异。",
      error: "容易只背气候名称不读气温降水图，或把天气短期变化和气候长期特征混淆。",
      deep: "这一册建立世界地理底层框架，核心是从自然条件推到人类活动。",
    },
    {
      keys: ["亚洲", "邻近", "东半球", "西半球", "极地", "欧洲", "北美洲", "非洲", "美洲", "大洋洲"],
      focus: "世界区域位置、自然环境、人口经济、国家差异和区域联系",
      core: "从位置范围、地形气候、河流资源、人口城市和产业特点认识亚洲及典型国家地区。",
      method: "区域题用“在哪里—有什么自然条件—发展什么产业—面临什么问题—如何治理”的路径。",
      exam: "常考亚洲地势河流、日本工业、东南亚农业旅游、印度人口软件、俄罗斯资源交通、美国巴西和极地科考。",
      error: "容易记国家碎片知识，不会用位置和自然条件解释产业布局。",
      deep: "区域认知训练地理综合思维，为中国四大地理区域学习打底。",
    },
    {
      keys: ["从世界看中国", "自然环境", "自然资源", "经济发展", "中国疆域", "人口民族", "中国地形", "中国河流", "农业工业交通"],
      focus: "中国疆域人口民族、地形气候河流、土地水资源、农业工业交通",
      core: "掌握中国位置疆域、行政区、人口民族，理解地势阶梯、季风气候、河流湖泊、资源分布和经济布局。",
      method: "中国地理题先定位省区和地形区，再按自然条件分析农业、工业、交通和生态问题。",
      exam: "常考行政区轮廓、地形阶梯、季风气候、黄河长江、资源分布、铁路干线和产业区位。",
      error: "容易省区简称混淆，或措施题不针对区域问题。",
      deep: "这一部分是福建中考地理高频基础，必须把地图、自然和经济三层叠起来看。",
    },
    {
      keys: ["地理差异", "北方", "南方", "西北", "青藏", "中国在世界", "中国四大地理分区", "福建乡土"],
      focus: "四大地理区域、区域差异、因地制宜发展、生态保护和中国发展",
      core: "理解秦岭—淮河、北方南方西北青藏的自然差异、生产生活差异和区域发展方向。",
      method: "区域比较题按气候、地形、水文、农业、工业、民居和生态问题列表比较。",
      exam: "常考四大区域界线、东北华北黄土高原、长江三角洲、珠三角、西北干旱、青藏高寒和区域可持续发展。",
      error: "容易把区域特征绝对化，或只写自然原因不写人文影响。",
      deep: "区域差异体现人地协调观，要学会为不同地区提出因地制宜的发展措施。",
    },
  ],
  生物: [
    {
      keys: ["生物和生物圈", "人类活动", "生态系统", "生态保护"],
      focus: "生物特征、生态因素、生态系统组成、食物链食物网和生物圈",
      core: "认识生物共同特征，理解环境影响生物、生物适应并影响环境，以及生态系统物质能量流动。",
      method: "生态题先找生产者、消费者、分解者和非生物部分，再画食物链判断能量流向。",
      exam: "常考生物特征判断、生态因素、食物链、生态系统自动调节能力和生物圈保护。",
      error: "容易把分解者漏掉，或食物链从消费者开始写。",
      deep: "这是生态观的起点，后续人类活动、环境保护和健康生活都要回到生物圈整体。",
    },
    {
      keys: ["结构层次", "绿色植物", "细胞", "显微镜", "光合作用"],
      focus: "细胞结构、组织器官系统、植物类群、光合作用、呼吸作用和蒸腾作用",
      core: "掌握细胞是生命活动基本单位，理解植物从细胞到组织器官的层次，以及绿色植物三大生理作用。",
      method: "识图题先区分细胞结构功能，植物生理题用“原料—场所—条件—产物—意义”分析。",
      exam: "常考显微镜使用、动植物细胞区别、种子萌发、根茎叶结构、光合作用实验和蒸腾作用。",
      error: "容易把光合作用和呼吸作用条件、场所、气体变化混淆。",
      deep: "绿色植物是生态系统能量入口，连接结构功能观和物质能量循环。",
    },
    {
      keys: ["人的由来", "营养", "呼吸", "运输", "废物", "调节", "消化", "循环", "神经", "生殖"],
      focus: "人体生殖发育、消化吸收、呼吸交换、血液循环、排泄和神经激素调节",
      core: "按系统理解人体结构与功能：消化获取营养，呼吸获得氧气，循环运输物质，排泄清除废物，调节维持稳态。",
      method: "人体题先定位器官系统，再说明结构如何适应功能；实验题看变量和生理指标变化。",
      exam: "常考青春期、消化酶、肺泡气体交换、心脏血管、尿液形成、反射弧、视觉听觉和激素调节。",
      error: "容易把动脉静脉按含氧多少判断，或把神经调节和激素调节作用速度混淆。",
      deep: "人体模块要建立稳态思维，把各系统看成协同工作而不是孤立背诵。",
    },
    {
      keys: ["其他生物", "动物", "细菌", "真菌", "病毒", "多样性", "生物分类"],
      focus: "动物运动行为、细菌真菌病毒、生态作用、分类保护和生物多样性",
      core: "理解动物结构与运动行为，掌握细菌、真菌、病毒的结构繁殖特点，以及它们在生态和人类生活中的作用。",
      method: "分类题抓结构特征和繁殖方式，作用题从生态平衡、物质循环、生产生活和疾病防治分析。",
      exam: "常考关节结构、先天/学习行为、细菌真菌培养、病毒特点、分类单位和多样性保护。",
      error: "容易把病毒当成细胞生物，或把细菌真菌都简单看成有害。",
      deep: "这一模块连接进化适应、生态平衡和生物技术应用，是理解生命多样性的关键。",
    },
    {
      keys: ["延续和发展", "生殖", "遗传", "变异", "进化", "健康"],
      focus: "生殖发育、遗传规律、变异类型、生命起源进化、传染病和健康生活",
      core: "掌握有性/无性生殖、基因与性状、遗传变异、自然选择、传染病环节和健康生活方式。",
      method: "遗传题先写亲代基因型和配子，健康题按传染源、传播途径、易感人群找控制措施。",
      exam: "常考植物嫁接扦插、昆虫两栖鸟类发育、显隐性遗传、进化证据、免疫和安全用药。",
      error: "容易把可遗传变异和不可遗传变异混淆，或传染病预防措施对应错环节。",
      deep: "生命延续模块把微观遗传和宏观进化连起来，适合用模型图和案例复盘。",
    },
  ],
  物理: [
    {
      keys: ["机械运动"],
      focus: "参照物、运动和静止、速度、路程时间图像和测量误差",
      core: "理解运动相对性，掌握速度公式 v=s/t、平均速度测量和路程—时间图像意义。",
      method: "计算先统一 m、s、m/s 等单位，再列出已知量和目标量；图像题看斜率和交点含义。",
      exam: "常考参照物判断、速度单位换算、平均速度实验、追及相遇和图像分析。",
      error: "容易把平均速度当成速度平均值，或单位不统一直接代入公式。",
      deep: "机械运动是力学起点，后面运动和力、功率、机械能都要先描述运动过程。",
    },
    {
      keys: ["声现象", "物态变化", "光现象", "光的反射", "折射", "透镜"],
      focus: "声音产生传播、温度物态、光的直线传播反射折射、凸透镜成像",
      core: "掌握声、热、光现象的基本条件和规律，理解实验现象背后的传播介质、能量变化和成像规律。",
      method: "现象题先判断物理过程，再写条件和规律；光学题画规范光路图，透镜题抓物距像距和像的性质。",
      exam: "常考音调响度音色、熔化汽化液化、平面镜成像、光的折射、凸透镜成像实验和眼镜应用。",
      error: "容易把音调和响度混淆，或把实像虚像、放大缩小和正倒关系记反。",
      deep: "这些章节训练从生活现象抽象出物理规律，是实验探究和模型思维的入门。",
    },
    {
      keys: ["质量与密度"],
      focus: "质量、天平量筒使用、密度公式、物质鉴别和测量误差",
      core: "理解质量是物体属性，密度是物质特性，掌握 ρ=m/V 及固体液体密度测量。",
      method: "实验题先确定测什么量、用什么仪器、测量顺序怎样减少误差，再代入密度公式。",
      exam: "常考天平读数、量筒读数、密度计算、空心实心判断和实验误差分析。",
      error: "容易把质量和重力混淆，或量筒读数视线不平导致误差。",
      deep: "密度连接物质属性和浮力计算，是从测量走向模型计算的重要章节。",
    },
    {
      keys: ["运动和力", "运动与力", "第七章 力"],
      focus: "力的作用效果、三要素、弹力重力摩擦力、二力平衡和牛顿第一定律",
      core: "理解力能改变运动状态或形状，掌握常见力、受力示意图、惯性、平衡力和相互作用力。",
      method: "力学题先选研究对象，再画受力图，判断是否平衡，最后列关系或用规律解释现象。",
      exam: "常考弹簧测力计、重力计算、摩擦力影响因素、惯性解释、二力平衡和受力分析。",
      error: "容易漏支持力或摩擦力，或把平衡力和相互作用力混为一谈。",
      deep: "受力分析是整个初中物理计算和解释题的核心基本功。",
    },
    {
      keys: ["压强", "浮力"],
      focus: "压力压强、液体压强、大气压、阿基米德原理和浮沉条件",
      core: "掌握 p=F/S、液体压强 p=ρgh、浮力 F浮=G排 和物体浮沉条件。",
      method: "压强题先判断受力面积和压力，浮力题先确定排开液体体积，再比较浮力与重力。",
      exam: "常考增大减小压强、液体压强实验、连通器、大气压、浮力计算和浮沉判断。",
      error: "容易把压力等同于重力，或浮力方向、排液体积判断错误。",
      deep: "压强浮力把力学与密度、液体性质连接，是中考综合计算高频点。",
    },
    {
      keys: ["功和机械能", "简单机械"],
      focus: "功、功率、动能势能、机械能转化、杠杆滑轮和机械效率",
      core: "理解做功条件、能量形式与转化，掌握杠杆平衡、滑轮特点和机械效率公式。",
      method: "机械题先判断力的方向和距离，能量题看高度速度变化，效率题分清有用功、额外功和总功。",
      exam: "常考功和功率计算、动能势能影响因素、杠杆平衡、滑轮组拉力和机械效率。",
      error: "容易只看到用了力就认为做功，或把机械省力误解成省功。",
      deep: "机械能模块建立能量观念，为内能、电能和能源可持续发展做铺垫。",
    },
    {
      keys: ["内能", "内能的利用"],
      focus: "分子热运动、内能改变方式、比热容、热值、热机效率和能量转化",
      core: "理解温度、热量、内能的区别，掌握热传递和做功改变内能，以及燃料燃烧释放能量。",
      method: "热学计算先区分吸放热对象，再用 Q=cmΔt 或 Q=mq，热机题看能量流向。",
      exam: "常考扩散现象、比热容实验、水调节气温、热值计算、四冲程内燃机和效率。",
      error: "容易说“物体含有热量”，或把温度高低和内能大小简单等同。",
      deep: "热学把微观粒子运动和宏观能量转化连接起来，是能源问题的基础。",
    },
    {
      keys: ["电流和电路", "电路", "电压 电阻", "欧姆定律", "电功率", "生活用电", "家庭电路", "电学"],
      focus: "串并联电路、电流电压电阻、欧姆定律、电能电功率和安全用电",
      core: "掌握电路连接、电流路径、串并联规律、I=U/R、P=UI 及家庭电路安全原则。",
      method: "电学题先识别串联并联，标电表测谁，再用规律列方程；实验题控制变量分析电阻影响因素。",
      exam: "常考电路图连接、电表示数变化、伏安法测电阻、小灯泡功率、动态电路和家庭电路故障。",
      error: "容易把电压表串联或电流表并联，动态电路中滑动变阻器变化方向判断错。",
      deep: "电学是中考压轴核心区，要把电路图、实验数据和公式计算合成一个模型。",
    },
    {
      keys: ["电与磁", "信息", "能源", "实验与计算"],
      focus: "磁场、电磁感应、电动机发电机、信息传递、能源分类和综合实验计算",
      core: "理解磁体磁场、电流磁效应、电磁感应和电能机械能转化，认识信息技术和能源可持续发展。",
      method: "电磁题先判断能量转化方向，实验综合题先列物理量、仪器、变量和误差来源。",
      exam: "常考通电螺线管、右手定则应用、电动机发电机区别、无线电通信、能源分类和综合计算。",
      error: "容易把电动机和发电机原理混淆，或只背能源名称不判断是否可再生。",
      deep: "九下内容把物理规律推向现代技术应用，适合用“原理—装置—应用”复盘。",
    },
  ],
  化学: [
    {
      keys: ["走进化学世界"],
      focus: "化学研究对象、物理变化化学变化、实验基本操作和科学探究",
      core: "认识化学研究物质组成、结构、性质和变化，掌握药品取用、加热、称量、过滤等基础实验操作。",
      method: "实验题先看目的和现象，判断是否产生新物质，再按规范写操作、现象、结论。",
      exam: "常考变化性质判断、仪器识别、基本操作正误、实验安全和探究步骤。",
      error: "容易把发光放热都判断为化学变化，或把实验现象写成结论。",
      deep: "这是化学实验素养入口，后面氧气、水、酸碱盐实验都依赖规范操作。",
    },
    {
      keys: ["空气", "物质构成", "自然界的水"],
      focus: "空气成分、氧气性质、分子原子离子、水的组成净化和微粒观",
      core: "掌握空气中氧气氮气等成分，理解分子原子离子构成物质，认识水的电解、净化和保护。",
      method: "微观解释题用粒子种类、间隔、运动和变化来说明宏观现象；实验题关注装置气密性和现象。",
      exam: "常考空气中氧气含量测定、氧气制取性质、分子原子区别、电解水、过滤蒸馏和水资源保护。",
      error: "容易把分子变化和原子变化混淆，或空气含量实验中忽略红磷过量和装置密闭。",
      deep: "宏观—微观—符号三重表征从这里建立，是化学区别于其他学科的核心思维。",
    },
    {
      keys: ["化学方程式", "碳和碳", "碳及", "燃料"],
      focus: "质量守恒、化学方程式配平、碳单质与氧化物、燃烧条件和能源利用",
      core: "理解化学反应前后原子种类和数目守恒，掌握方程式书写配平、碳及其氧化物性质和燃烧灭火。",
      method: "方程式先写反应物生成物，再配平、标条件和状态；计算题按化学方程式比例找质量关系。",
      exam: "常考质量守恒解释、方程式配平、CO/CO₂性质、实验室制 CO₂、燃烧灭火和燃料环境问题。",
      error: "容易方程式未配平，或把一氧化碳和二氧化碳性质混淆。",
      deep: "守恒思想是化学计算与推断核心，碳循环连接能源、环境和生活应用。",
    },
    {
      keys: ["金属", "溶液"],
      focus: "金属活动性、金属腐蚀防护、溶液组成、溶解度和溶质质量分数",
      core: "掌握常见金属性质、置换反应、活动性顺序，理解溶液、饱和溶液、溶解度曲线和浓度计算。",
      method: "金属题先看活动性顺序，溶液题先分清溶质、溶剂、溶液质量和温度条件。",
      exam: "常考金属与酸盐反应、铁生锈条件、溶解度曲线、配制溶液和溶质质量分数计算。",
      error: "容易把溶解度和溶质质量分数混淆，或金属置换反应不判断活动性。",
      deep: "金属与溶液是实验推断和计算结合点，常与酸碱盐综合命题。",
    },
    {
      keys: ["酸和碱", "酸碱盐", "盐 化肥", "化学与生活", "实验探究", "化学实验", "化学计算", "计算复习", "推断题", "工艺流程"],
      focus: "酸碱盐性质、复分解反应、化肥鉴别、营养材料、实验探究和综合计算",
      core: "掌握酸碱盐通性、pH、指示剂、中和反应、复分解条件，以及化学与营养、材料、环境的联系。",
      method: "推断题先按物质类别和特征反应找突破口，实验探究题按假设、操作、现象、结论、反思书写。",
      exam: "常考酸碱性质、离子共存、除杂鉴别、化肥使用、营养元素、实验评价和方程式综合计算。",
      error: "容易把现象和结论混写，或复分解反应不检查沉淀、气体、水生成条件。",
      deep: "九下综合要求把物质分类、实验探究和守恒计算打通，是中考化学压轴基础。",
    },
  ],
};

function normalizeText(value) {
  return String(value).toLowerCase().replace(/\s+/g, " ");
}

function unitTopic(unitName) {
  return String(unitName)
    .replace(/^第[一二三四五六七八九十百]+(章|单元)\s*/, "")
    .replace(/^Unit\s+\d+\s*/i, "")
    .replace(/^中考\s*/, "中考")
    .replace(/[：:———-]/g, " ")
    .trim() || unitName;
}

function detailFor(subjectName, unitName) {
  const rules = UNIT_DETAIL_RULES[subjectName] || [];
  const target = normalizeText(unitName);
  return rules.find((rule) => rule.keys.some((key) => target.includes(normalizeText(key)))) || DEFAULT_UNIT_DETAIL;
}

function profileFor(subjectName, volumeName, unitName) {
  const refinedBranches =
    typeof window !== "undefined" && typeof window.createJuniorRefinedMindMapBranches === "function"
      ? window.createJuniorRefinedMindMapBranches(subjectName, volumeName, unitName)
      : null;
  if (refinedBranches && refinedBranches.length) {
    return refinedBranches.map((branch) => [branch.title, branch.points]);
  }

  const guide = guideFor(subjectName);
  const detail = detailFor(subjectName, unitName);
  const topic = unitTopic(unitName);
  const keywords = detail.focus.split(/[、，,和与]/).map((item) => item.trim()).filter(Boolean).slice(0, 6).join(" / ");
  return [
    [
      "核心知识框架",
      [
        `章节定位：${unitName} 属于 ${volumeName}，学习对象聚焦“${topic}”。`,
        `真实知识主干：${detail.core}`,
        `必须会串联：${detail.focus}`,
        `与${subjectName}学科主线连接：${guide.core.slice(0, 4).join(" → ")}。`,
        `完成标准：能用 3 分钟讲清“概念是什么、条件是什么、例题怎么用、错题错在哪里”。`,
      ],
    ],
    [
      "方法模型",
      [
        `本章解题/阅读动作：${detail.method}`,
        `预习时只做三件事：圈出“${topic}”中的新概念，标出不会的例题，写下 1 个课堂要解决的问题。`,
        `课堂抓老师怎样从条件推到结论，课后用“概念卡—例题卡—错因卡”复盘本章。`,
        `可迁移方法：${guide.methods.slice(0, 3).join("；")}。`,
        `费曼检查：合上书向同学讲一遍“${keywords || topic}”，讲不顺的地方就是漏洞。`,
      ],
    ],
    [
      "常考题型与应用",
      [
        `本章高频考法：${detail.exam}`,
        `基础题检查概念边界，中档题考方法迁移，综合题会把 ${unitName} 与前后章节组合。`,
        `应用场景要回到教材例题、实验/图表/材料和本地中考常见表达，不只背结论。`,
        `与常规题型连接：${guide.exam.slice(0, 3).join("；")}。`,
        `训练建议：每学完一小节做 2 道基础题、1 道变式题、1 道错因复盘题。`,
      ],
    ],
    [
      "易错点与诊断",
      [
        `本章高频误区：${detail.error}`,
        `诊断方式：把错题原因写成“概念没分清 / 条件漏看 / 步骤不规范 / 表达不准确”四类之一。`,
        `订正时必须补一句“下次看到什么关键词就用什么方法”，避免只改答案。`,
        `本学科常见错因提醒：${guide.errors.slice(0, 3).join("；")}。`,
        `周末复盘：重做本章错题，若仍错，回到教材定义、例题和课堂笔记重新讲一遍。`,
      ],
    ],
    [
      "专题深化 / 学科关键词专题",
      [
        `专题深化：${detail.deep}`,
        `关键词清单：${keywords || detail.focus}。`,
        `跨章节连接：把 ${unitName} 与 ${volumeName} 的前后章节做一张“概念—方法—题型”小导图。`,
        `输出任务：整理 1 页本章学习单，包含核心概念、典型题、易错提醒和一个真实应用例子。`,
        `提分目标：从“知道标题”推进到“能解释、能判断、能做题、能迁移”。`,
      ],
    ],
  ];
}

function progressForSubject(subjectIndex) {
  const subject = COURSE[subjectIndex];
  const total = subject.volumes.reduce((sum, volume) => sum + volume.units.length, 0);
  let done = 0;
  subject.volumes.forEach((volume, volumeIndex) => {
    volume.units.forEach((_, unitIndex) => {
      if (doneSet.has(keyFor(subjectIndex, volumeIndex, unitIndex))) done += 1;
    });
  });
  return { total, done, percent: total ? Math.round((done / total) * 100) : 0 };
}

function renderStats() {
  const t = totals();
  const percent = t.units ? Math.round((t.done / t.units) * 100) : 0;
  stats.innerHTML = [
    ["学科", t.subjects],
    ["分册", t.volumes],
    ["章节 / 单元", t.units],
    ["导图节点", t.nodes],
    ["泉州教材", "2026现行"],
    ["学习方法", `${LEARNING_METHODS.length} 板块`],
    ["心理疏导", "场景自助"],
    ["英语词汇", `${ENGLISH_WORD_BANK.length} 词`],
    ["B站资源", "分档推荐"],
    ["完成进度", `${percent}%`],
  ].map(([label, value]) => `<article class="stat-card"><strong>${value}</strong><span>${label}</span></article>`).join("");
}

function renderModeSwitch() {
  modeSwitch.querySelectorAll("[data-mode]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === state.mode);
  });
}

function renderSubjects() {
  subjectCount.textContent = `${COURSE.length} 科`;
  subjectList.innerHTML = COURSE.map((subject, subjectIndex) => {
    const p = progressForSubject(subjectIndex);
    const active = subjectIndex === state.subjectIndex && !["methods", "counseling", "wordTrainer"].includes(state.mode) && (state.mode === "videos" || !state.query) ? " is-active" : "";
    return `<button class="subject-btn${active}" type="button" data-subject-index="${subjectIndex}"><b>${escapeHTML(subject.name)}</b><span>${p.done}/${p.total}</span></button>`;
  }).join("");
}

function renderBreadcrumb() {
  const subject = COURSE[state.subjectIndex];
  const p = progressForSubject(state.subjectIndex);
  breadcrumb.innerHTML = `
    <div>
      <h2>${escapeHTML(subject.name)}</h2>
      <p>${escapeHTML(subject.note)} · ${subject.volumes.length} 个分册 · ${p.total} 个章节</p>
    </div>
    <div class="progress-ring"><strong>${p.percent}%</strong><span>${p.done}/${p.total} 已学</span></div>
  `;
}

function renderVolumeTabs() {
  const subject = COURSE[state.subjectIndex];
  volumeTabs.hidden = false;
  volumeTabs.innerHTML = subject.volumes.map((volume, volumeIndex) => {
    const active = volumeIndex === state.volumeIndex ? " is-active" : "";
    return `<button class="volume-tab${active}" type="button" data-volume-index="${volumeIndex}">${escapeHTML(volume.name)}</button>`;
  }).join("");
}

function hideVolumeTabs() {
  volumeTabs.hidden = true;
  volumeTabs.innerHTML = "";
}

function unitHTML(subjectIndex, volumeIndex, unit, unitIndex, volumeName) {
  const id = keyFor(subjectIndex, volumeIndex, unitIndex);
  const checked = doneSet.has(id);
  return `
    <label class="unit">
      <input type="checkbox" data-progress-key="${id}" ${checked ? "checked" : ""} />
      <span class="unit__title">${highlight(unit)}</span>
      <span class="unit__meta">${highlight(volumeName)}</span>
    </label>
  `;
}

function volumeCardHTML(subjectIndex, volumeIndex) {
  const subject = COURSE[subjectIndex];
  const volume = subject.volumes[volumeIndex];
  return `
    <article class="volume-card">
      <div class="volume-card__head">
        <h3>${escapeHTML(volume.name)}</h3>
        <small>${volume.units.length} 项</small>
      </div>
      <div class="units">
        ${volume.units.map((unit, unitIndex) => unitHTML(subjectIndex, volumeIndex, unit, unitIndex, volume.name)).join("")}
      </div>
    </article>
  `;
}

function mindMapCardHTML(subjectIndex, volumeIndex, unitIndex) {
  const subject = COURSE[subjectIndex];
  const volume = subject.volumes[volumeIndex];
  const unit = volume.units[unitIndex];
  return `
    <article class="mindmap-card">
      <div class="mindmap-root">
        <span class="tag">${escapeHTML(subject.name)} · ${escapeHTML(volume.name)}</span>
        <h3>${highlight(unit)}</h3>
        <p>把章节内容拆成知识框架、方法模型、题型应用、易错诊断和专题关键词，便于预习、复习和错题回填。</p>
      </div>
      <div class="mindmap-branches">
        ${profileFor(subject.name, volume.name, unit).map(([title, points]) => `
          <details class="mindmap-branch" open>
            <summary>${escapeHTML(title)}</summary>
            <ul>${points.map((point) => `<li>${highlight(point)}</li>`).join("")}</ul>
          </details>
        `).join("")}
      </div>
    </article>
  `;
}

function mindMapListHTML(subjectIndex, volumeIndex, matchedUnits = null) {
  const volume = COURSE[subjectIndex].volumes[volumeIndex];
  const units = matchedUnits || volume.units.map((unit, unitIndex) => ({ unit, unitIndex }));
  return `<div class="mindmap-list">${units.map(({ unitIndex }) => mindMapCardHTML(subjectIndex, volumeIndex, unitIndex)).join("")}</div>`;
}

function refinedMindMapNodeHTML(item, depth = 0) {
  if (typeof item === "string") {
    return `<li class="curated-map-leaf">${highlight(item)}</li>`;
  }
  const children = item.children || [];
  const open = depth < 2 ? " open" : "";
  return `
    <li class="curated-map-node curated-map-node--depth-${depth}">
      <details${open}>
        <summary>${highlight(item.title)}</summary>
        ${
          children.length
            ? `<ul>${children.map((child) => refinedMindMapNodeHTML(child, depth + 1)).join("")}</ul>`
            : ""
        }
      </details>
    </li>
  `;
}

function subjectRefinedMindMapHTML(subjectIndex) {
  const subject = COURSE[subjectIndex];
  const refined =
    typeof window !== "undefined" && typeof window.getJuniorRefinedSubjectMindMap === "function"
      ? window.getJuniorRefinedSubjectMindMap(subject.name)
      : null;
  if (!refined) return "";
  const exportText =
    typeof window !== "undefined" && typeof window.juniorRefinedMindMapText === "function"
      ? window.juniorRefinedMindMapText(subject.name)
      : "";
  return `
    <section class="network-section curated-map-section">
      <div class="section-head">
        <h3>福建泉州初中精细化知识点导图</h3>
        <p>${highlight(refined.title)} · ${highlight(refined.textbook)} · 使用 🔹核心概念、📌重点结论 / 方法模型、📌常考题型与应用、⚠️高频易错点 标记。</p>
      </div>
      <div class="curated-map-layout">
        <div class="curated-map-tree" aria-label="${escapeHTML(refined.title)}">
          <ul>
            <li class="curated-map-node curated-map-node--depth-0">
              <details open>
                <summary>跨章节 / 跨分册主线</summary>
                <ul>${(refined.cross || []).map((item) => `<li class="curated-map-leaf">${highlight(item)}</li>`).join("")}</ul>
              </details>
            </li>
            ${refined.roots.map((item) => refinedMindMapNodeHTML(item, 0)).join("")}
          </ul>
        </div>
        ${
          exportText
            ? `<details class="curated-map-export">
                <summary>复制到 XMind / ProcessOn / 幕布的文本版</summary>
                <textarea readonly spellcheck="false">${escapeHTML(exportText)}</textarea>
              </details>`
            : ""
        }
      </div>
    </section>
  `;
}

function subjectNetworkHTML(subjectIndex) {
  const subject = COURSE[subjectIndex];
  const guide = guideFor(subject.name);
  const version = TEXTBOOK_VERSIONS[subject.name] || subject.note;
  return `
    <div class="subject-network">
      <article class="network-hero">
        <span class="tag">泉州2026现行版 · 跨册总图</span>
        <h3>${escapeHTML(subject.name)} 全学段知识关系网</h3>
        <p>${escapeHTML(version)}。按年级分册串联主线，复习时先看主线，再回到章节补漏洞。</p>
      </article>
      ${subjectRefinedMindMapHTML(subjectIndex)}
      <section class="network-section">
        <div class="section-head"><h3>泉州初中学习节奏</h3><p>贴合本地考试：七年级打底，八年级会考和物理爬坡，九年级全力中考。</p></div>
        <div class="roadmap">
          ${QUANZHOU_STUDY_RHYTHM.map(([grade, tip]) => `
            <article>
              <b>${escapeHTML(grade)}</b>
              <p>${escapeHTML(tip)}</p>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="network-section">
        <div class="section-head"><h3>分册路线</h3><p>从七年级基础到九年级中考综合。</p></div>
        <div class="roadmap">
          ${subject.volumes.map((volume, index) => `
            <article>
              <b>${index + 1}. ${escapeHTML(volume.name)}</b>
              <p>${volume.units.map(escapeHTML).join(" → ")}</p>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="network-section">
        <div class="section-head"><h3>学科能力主线</h3><p>这些能力会跨章节反复出现。</p></div>
        <div class="topic-grid">
          ${[
            ["核心概念", guide.core],
            ["方法模型", guide.methods],
            ["考试题型", guide.exam],
            ["易错诊断", guide.errors],
          ].map(([title, points]) => `<article><h4>${escapeHTML(title)}</h4><ul>${points.map((p) => `<li>${escapeHTML(p)}</li>`).join("")}</ul></article>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function methodSearchFields(block) {
  return [
    block.title,
    block.tag,
    block.summary,
    ...block.checklist,
    ...block.steps.flatMap((step) => [step.name, step.time, step.action, ...step.tips]),
  ];
}

function methodCardHTML(block, index) {
  return `
    <article class="method-card">
      <div class="method-card__head">
        <span class="tag">0${index + 1}</span>
        <h3>${highlight(block.title)}</h3>
        <p class="method-card__tagline">${highlight(block.tag)}</p>
        <p>${highlight(block.summary)}</p>
      </div>
      <div class="method-steps">
        ${block.steps.map((step, stepIndex) => `
          <section class="method-step">
            <span class="method-step__num">${stepIndex + 1}</span>
            <div>
              <div class="method-step__head">
                <h4>${highlight(step.name)}</h4>
                <small>${highlight(step.time)}</small>
              </div>
              <p>${highlight(step.action)}</p>
              <ul>${step.tips.map((tip) => `<li>${highlight(tip)}</li>`).join("")}</ul>
            </div>
          </section>
        `).join("")}
      </div>
      <details class="method-checklist" open>
        <summary>今天自查</summary>
        <ul>${block.checklist.map((item) => `<li>${highlight(item)}</li>`).join("")}</ul>
      </details>
    </article>
  `;
}

function dailyFlowHTML() {
  return `
    <section class="method-section">
      <div class="method-section__head">
        <span class="tag">可直接照搬</span>
        <h3>普通初中生每日执行流程</h3>
        <p>先按这 5 步执行一周：预习有问题、课堂抓逻辑、课后讲出来、错题真复盘、睡前做收口。</p>
      </div>
      <div class="daily-flow">
        ${DAILY_METHOD_FLOW.map(([time, action]) => `
          <article>
            <strong>${highlight(time)}</strong>
            <span>${highlight(action)}</span>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function wrongQuestionTemplateHTML() {
  return `
    <section class="method-section">
      <div class="method-section__head">
        <span class="tag">提分快捷入口</span>
        <h3>错题复盘极简模板</h3>
        <p>错题本不要抄题抄答案，照下面 5 行写，目标是杜绝同错反复犯。</p>
      </div>
      <ol class="wrong-template">
        ${WRONG_QUESTION_TEMPLATE.map((item) => `<li>${highlight(item)}</li>`).join("")}
      </ol>
    </section>
  `;
}

function weeklyRhythmHTML() {
  return `
    <section class="method-section">
      <div class="method-section__head">
        <span class="tag">稳定提分</span>
        <h3>一周执行节奏</h3>
        <p>把学习方法放进固定节奏里，才不会变成看完很燃、第二天忘光。</p>
      </div>
      <div class="weekly-grid">
        ${WEEKLY_METHOD_RHYTHM.map(([title, body]) => `
          <article>
            <b>${highlight(title)}</b>
            <p>${highlight(body)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function methodHTML() {
  hideVolumeTabs();
  const blocks = LEARNING_METHODS.filter((block) => containsQuery(...methodSearchFields(block)));
  breadcrumb.innerHTML = `<div><h2>学习方法</h2><p>把高中版完整方法论改造成适合初中生照搬执行的学习闭环。</p></div><div class="progress-ring"><strong>${LEARNING_METHODS.length}</strong><span>板块</span></div>`;
  unitList.innerHTML = `
    <div class="method-page">
      <article class="method-hero">
        <span class="tag">初中高效学习法 · 融合高中版方法论</span>
        <h3>不拼天赋，拼流程、复盘和稳定状态</h3>
        <p>把知识学习、刷题复盘、时间管理、身心调节做成固定动作：课前有问题，课堂抓逻辑，课后讲出来，错题真复盘。</p>
      </article>
      <section class="method-grid">
        ${blocks.length ? blocks.map(methodCardHTML).join("") : `<div class="empty">当前搜索没有匹配学习方法，可清空搜索或换一个关键词。</div>`}
      </section>
      ${dailyFlowHTML()}
      ${wrongQuestionTemplateHTML()}
      ${weeklyRhythmHTML()}
    </div>
  `;
}

function counselingHTML() {
  hideVolumeTabs();
  if (window.STUDENT_COUNSELING) {
    breadcrumb.innerHTML = window.STUDENT_COUNSELING.breadcrumbHTML(escapeHTML);
    unitList.innerHTML = window.STUDENT_COUNSELING.pageHTML(highlight, escapeHTML);
    return;
  }

  breadcrumb.innerHTML = `<div><h2>心理疏导</h2><p>身心积极疗法 · 中学生日常自助</p></div>`;
  unitList.innerHTML = `<div class="empty">心理疏导模块暂未加载，请刷新页面重试。</div>`;
}

function biliSearchUrl(keyword) {
  return `https://search.bilibili.com/all?keyword=${encodeURIComponent(keyword)}`;
}

function biliUpSearchUrl(keyword) {
  return `https://search.bilibili.com/upuser?keyword=${encodeURIComponent(keyword)}`;
}

function textbookSearchKeyword(subjectName, unitName) {
  const prefix = TEXTBOOK_SEARCH_PREFIX[subjectName] || "";
  return prefix ? `${prefix} ${unitName}` : unitName;
}

function biliUnitSearchUrl(subjectName, unitName) {
  return biliSearchUrl(textbookSearchKeyword(subjectName, unitName));
}

function videoResourceFields(resource) {
  return [resource.name, resource.level, resource.type, resource.stage, resource.focus, resource.summary];
}

function videoResourceCardHTML(resource) {
  return `
    <article class="up-card">
      <div class="up-card__head">
        <strong>${highlight(resource.name)}</strong>
        <span>${highlight(resource.level)}</span>
      </div>
      <p class="up-card__meta">${highlight(resource.type)} · ${highlight(resource.stage)}</p>
      <p><b>重点：</b>${highlight(resource.focus)}</p>
      <p>${highlight(resource.summary)}</p>
      <a href="${escapeHTML(biliUpSearchUrl(resource.name))}" target="_blank" rel="noopener noreferrer">搜索 UP</a>
    </article>
  `;
}

function videoLevelGuideHTML() {
  return `
    <section class="video-tips">
      <h3>分层选课规则</h3>
      <div class="video-plan-grid">
        ${VIDEO_LEVEL_GUIDE.map(([level, tip]) => `
          <article>
            <b>${highlight(level)}</b>
            <p>${highlight(tip)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function videoStudyPlanHTML() {
  return `
    <section class="video-tips">
      <h3>最优跟学搭配方案</h3>
      <div class="video-plan-grid">
        ${VIDEO_STUDY_PLANS.map(([grade, plan]) => `
          <article>
            <b>${highlight(grade)}</b>
            <p>${highlight(plan)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function videoTextbookTipsHTML() {
  return `
    <section class="video-tips">
      <h3>泉州教材搜索提示</h3>
      <div class="video-plan-grid">
        ${VIDEO_TEXTBOOK_TIPS.map(([title, tip]) => `
          <article>
            <b>${highlight(title)}</b>
            <p>${highlight(tip)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function videoHTML() {
  const subject = COURSE[state.subjectIndex];
  const volume = subject.volumes[state.volumeIndex];
  const resources = VIDEO_RESOURCES[subject.name] || [];
  const resourceFields = resources.flatMap(videoResourceFields);
  const versionText = TEXTBOOK_VERSIONS[subject.name] || subject.note;
  const visibleResources = resources.filter((resource) => containsQuery(subject.name, subject.note, versionText, ...videoResourceFields(resource)));
  const prefix = TEXTBOOK_SEARCH_PREFIX[subject.name] || "部编通用";
  const units = volume.units.filter((unit) => containsQuery(subject.name, volume.name, unit, textbookSearchKeyword(subject.name, unit), versionText, ...resourceFields));
  renderVolumeTabs();
  breadcrumb.innerHTML = `
    <div><h2>${escapeHTML(subject.name)} · B站视频资源</h2><p>${escapeHTML(volume.name)} · ${escapeHTML(versionText)} · 章节搜索关键词：${escapeHTML(prefix)} + 章节名。</p></div>
    <div class="progress-ring"><strong>${resources.length}</strong><span>UP推荐</span></div>
  `;
  unitList.innerHTML = `
    <div class="video-page">
      <article class="video-hero">
        <span class="tag">初中全科封神 UP · 分层推荐</span>
        <h3>${escapeHTML(subject.name)}：基础 / 中等 / 拔高 / 中考冲刺</h3>
        <p>按预习打基础、校内同步补弱、刷题提分、中考总复习分层选择；同时区分课本同步课、应试答题课和兴趣拓展课。泉州版本学科会自动带教材版本关键词，不附加 UP 名，避免搜索词过长。</p>
      </article>
      ${videoLevelGuideHTML()}
      ${videoTextbookTipsHTML()}
      <section class="up-grid">
        ${visibleResources.length ? visibleResources.map(videoResourceCardHTML).join("") : `<div class="empty">当前搜索没有匹配 UP，可清空搜索或换“基础 / 中考 / 作文 / 压轴 / 会考”等关键词。</div>`}
      </section>
      <section class="video-syllabus">
        <div class="section-head"><h3>按当前分册章节找视频</h3><p>${escapeHTML(volume.name)} · ${units.length}/${volume.units.length} 项</p></div>
        <div class="video-links">
          ${units.length ? units.map((unit) => `<a href="${escapeHTML(biliUnitSearchUrl(subject.name, unit))}" target="_blank" rel="noopener noreferrer">${highlight(unit)}<small>${highlight(textbookSearchKeyword(subject.name, unit))}</small></a>`).join("") : `<div class="empty">当前搜索没有匹配章节，可清空搜索或切换分册。</div>`}
        </div>
      </section>
      <section class="video-tips">
        <h3>选课小建议</h3>
        <ul>
          <li>基础薄弱/预习：先看系统课和教材串讲，别直接刷压轴题。</li>
          <li>中等提分/专项刷题：围绕错题找同类视频，学完立刻重做错题。</li>
          <li>中考冲刺/拔高：优先看题型归纳、答题模板、真题讲解。</li>
          <li>零散短视频适合碎片化复盘，系统合集课适合完整补基础。</li>
        </ul>
      </section>
      ${videoStudyPlanHTML()}
    </div>
  `;
}

function getSearchResults() {
  const groups = [];
  COURSE.forEach((subject, subjectIndex) => {
    subject.volumes.forEach((volume, volumeIndex) => {
      const matchedUnits = volume.units.map((unit, unitIndex) => ({ unit, unitIndex })).filter(({ unit }) => containsQuery(subject.name, volume.name, unit));
      if (matchedUnits.length) groups.push({ subject, subjectIndex, volume, volumeIndex, matchedUnits });
    });
  });
  return groups;
}

function searchHTML() {
  const groups = getSearchResults();
  hideVolumeTabs();
  breadcrumb.innerHTML = `<div><h2>搜索结果</h2><p>关键词「${escapeHTML(state.query)}」共匹配 ${groups.reduce((sum, group) => sum + group.matchedUnits.length, 0)} 项</p></div>`;
  unitList.innerHTML = groups.length
    ? groups.map(({ subject, subjectIndex, volume, volumeIndex, matchedUnits }) => `
        <article class="volume-card">
          <div class="volume-card__head"><h3>${highlight(subject.name)} · ${highlight(volume.name)}</h3><small>${matchedUnits.length} 项</small></div>
          <div class="units">${matchedUnits.map(({ unit, unitIndex }) => state.mode === "mindmap" ? mindMapCardHTML(subjectIndex, volumeIndex, unitIndex) : unitHTML(subjectIndex, volumeIndex, unit, unitIndex, volume.name)).join("")}</div>
        </article>
      `).join("")
    : `<div class="empty">没有找到匹配内容，可换一个关键词。</div>`;
}

function renderCurrent() {
  if (state.mode === "methods") return methodHTML();
  if (state.mode === "counseling") return counselingHTML();
  if (state.mode === "wordTrainer") return renderWordTrainer();
  if (state.mode === "videos") return videoHTML();
  renderBreadcrumb();
  volumeTabs.hidden = state.mode === "subjectMap";
  if (state.mode !== "subjectMap") renderVolumeTabs();
  unitList.innerHTML = state.mode === "subjectMap"
    ? subjectNetworkHTML(state.subjectIndex)
    : state.mode === "mindmap"
      ? mindMapListHTML(state.subjectIndex, state.volumeIndex)
      : volumeCardHTML(state.subjectIndex, state.volumeIndex);
}

function render() {
  renderStats();
  renderModeSwitch();
  renderSubjects();
  if (state.query.trim() && !["methods", "counseling", "wordTrainer", "videos", "subjectMap"].includes(state.mode)) searchHTML();
  else renderCurrent();
}

subjectList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-subject-index]");
  if (!button) return;
  state.subjectIndex = Number(button.dataset.subjectIndex);
  state.volumeIndex = 0;
  if (["methods", "counseling", "wordTrainer"].includes(state.mode)) state.mode = "catalog";
  state.query = "";
  searchInput.value = "";
  render();
});

volumeTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-volume-index]");
  if (!button) return;
  state.volumeIndex = Number(button.dataset.volumeIndex);
  render();
});

modeSwitch.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mode]");
  if (!button) return;
  state.mode = button.dataset.mode;
  render();
});

unitList.addEventListener("click", (event) => {
  handleWordTrainerClick(event);
});

unitList.addEventListener("change", (event) => {
  const librarySelect = event.target.closest("#wordLibrarySelect");
  if (librarySelect) {
    wordTrainerState.libraryId = librarySelect.value || "all";
    wordTrainerState.category = "全部";
    wordTrainerState.sessionKeys = [];
    wordTrainerState.sessionTitle = "";
    wordTrainerState.index = 0;
    resetWordTrainerTransientState();
    wordTrainerState.feedback = `已切换到「${currentLibraryOption().name}」。`;
    render();
    return;
  }

  const checkbox = event.target.closest("[data-progress-key]");
  if (!checkbox) return;
  if (checkbox.checked) doneSet.add(checkbox.dataset.progressKey);
  else doneSet.delete(checkbox.dataset.progressKey);
  saveProgress();
  render();
});

unitList.addEventListener("input", (event) => {
  if (event.target?.id === "wordLookupInput") {
    wordTrainerState.lookupQuery = event.target.value;
  }
  if (event.target?.id === "customLibraryName") {
    wordTrainerState.customLibraryName = event.target.value;
  }
  if (event.target?.id === "customLibraryWords") {
    wordTrainerState.customLibraryRaw = event.target.value;
  }
});

unitList.addEventListener("keydown", (event) => {
  if (event.target?.id !== "wordLookupInput" || event.key !== "Enter") return;
  event.preventDefault();
  wordTrainerState.lookupQuery = event.target.value;
  wordTrainerState.feedback = wordTrainerState.lookupQuery.trim()
    ? `已查询：${wordTrainerState.lookupQuery.trim()}`
    : "请输入要查询的单词、中文释义或词块。";
  render();
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

resetBtn.addEventListener("click", () => {
  state.query = "";
  searchInput.value = "";
  render();
  searchInput.focus();
});

try {
  render();
} finally {
  hidePageLoader();
}
