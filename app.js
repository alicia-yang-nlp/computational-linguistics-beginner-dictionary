const categories = ["全部", "学科导览", "语言基础", "数据与表示", "模型与方法", "语言分析", "应用任务"];

const entries = [
  {
    id: 1, term: "计算语言学", english: "Computational Linguistics", category: "基础概念", complete: true,
    summary: "研究如何用计算机表示、分析和生成自然语言的交叉学科。",
    definition: "计算语言学把语言学的问题和计算方法放在一起：既关心人类语言有什么结构，也关心怎样让计算机处理这些结构。它是自然语言处理的重要理论基础。",
    example: "“小明看见了小王”中，计算机需要识别谁是动作发出者、谁是被看见的人。",
    application: "机器翻译、语音助手、搜索引擎、文本校对和大语言模型，都与计算语言学的思想有关。",
    source: "参考：ACL Anthology 计算语言学综述资料；Stanford CS224N 课程介绍。"
  },
  {
    id: 2, term: "自然语言处理", english: "Natural Language Processing · NLP", category: "基础概念", complete: true,
    summary: "让计算机处理人类日常使用的语言。",
    definition: "自然语言处理简称 NLP，研究怎样让计算机读懂、分析、翻译、回答或生成文字和语音。这里的“自然语言”指中文、英语等人类语言，不是专门为程序设计的代码语言。",
    example: "你在搜索框输入“附近适合学习的咖啡店”，系统要把这句话转换成可以检索和排序的信息。",
    application: "搜索、推荐、客服机器人、自动翻译、摘要、情感分析和问答系统。",
    source: "参考：Stanford CS224N；Jurafsky & Martin，《Speech and Language Processing》。"
  },
  {
    id: 3, term: "语言数据", english: "Language Data", category: "基础概念", complete: true,
    summary: "计算机用来学习和分析语言的文字、语音或标注信息。",
    definition: "语言数据可以是书籍、新闻、聊天记录、录音、字幕，也可以是人们对这些材料做出的标记，例如词性、实体类别或句法关系。计算机系统的效果，和数据的数量、质量及代表性密切相关。",
    example: "一组新闻文章加上“人名、地点、机构”的标注，就可以用来训练命名实体识别系统。",
    application: "训练模型、评估系统、发现语言规律，以及检查系统是否对不同人群和场景都公平有效。",
    source: "参考：Universal Dependencies 项目介绍；Stanford NLP 课程资料。"
  },
  {
    id: 4, term: "语料库", english: "Corpus", category: "基础概念", complete: true,
    summary: "经过整理、保存，可以用于语言研究的大规模语言材料集合。",
    definition: "语料库是有组织的语言数据集合。它可以包含文章、对话、网页、语音转写或带有人工标注的句子。语料库不是随便堆在一起的文本，通常还会记录来源、时间、体裁和标注方式。",
    example: "如果想研究“然而”在正式写作中的用法，可以在新闻语料库里查找它前后出现的词。",
    application: "词频统计、词典编写、机器翻译训练、语言变化研究和模型评测。",
    source: "参考：Universal Dependencies treebanks；Stanford CS224N 课程说明。"
  },
  {
    id: 5, term: "语言模型", english: "Language Model", category: "基础概念", complete: true,
    summary: "根据上下文判断或生成语言序列的模型。",
    definition: "语言模型学习语言中不同词语或字符组合出现的可能性。它可以回答“这句话接下来最可能出现什么”，也可以用来比较两种表达哪一种更自然。大语言模型是在更大数据和更大模型规模上训练出的语言模型。",
    example: "看到“今天下雨了，我带了……”时，语言模型可能会预测“雨伞”。",
    application: "输入法联想、自动补全、机器翻译、文本生成和对话系统。",
    source: "参考：Stanford CS224D/CS224N 课程资料；Jurafsky & Martin，《Speech and Language Processing》。"
  }
];

const remaining = [
  ["人工语言与自然语言", "Language & Formal Language", "语言学基础", "人工语言有明确、固定的规则，例如编程语言；自然语言则是在社会中逐渐形成的中文、英语等人类语言。", "看到“请打开文件”时，人类会结合常识理解意思；程序语言通常要求每个符号和结构都严格符合语法。", "区分两者有助于理解：自然语言处理面对的是有歧义、会变化、依赖上下文的语言。"],
  ["规则与统计方法", "Rules & Statistical Methods", "基础概念", "规则方法把专家写下的语言规律交给计算机；统计方法则从大量数据中学习哪些模式更常见。", "规则可以规定“数字后面常出现量词”，统计方法则从语料中估计这种现象出现的概率。", "早期分词、词性标注常依赖规则；现代系统通常把规则、统计学习和神经网络结合起来。"],
  ["机器学习", "Machine Learning", "基础概念", "机器学习让程序从示例数据中学习输入和输出之间的规律，而不是为每种情况手写规则。", "给系统许多已经标好“垃圾邮件”或“正常邮件”的例子，它可以学习如何判断新邮件。", "文本分类、推荐、语音识别和机器翻译都可以使用机器学习。"],
  ["深度学习", "Deep Learning", "基础概念", "深度学习使用多层神经网络，逐层学习从输入到结果的表示和规律。", "模型可以先学习字符或词的局部模式，再组合成句子和段落层面的信息。", "深度学习推动了现代语音识别、机器翻译、图像文字识别和大语言模型的发展。"],
  ["生成式人工智能", "Generative AI", "基础概念", "生成式人工智能能够根据输入生成新的文字、图片、音频或其他内容。", "输入“写一段介绍春天的文字”，系统会生成一段此前并不存在的文本。", "写作辅助、代码生成、教育问答和创意设计是常见应用，但生成结果仍需要核查。"],
  ["语音", "Phonetics", "语言学基础", "语音研究人类怎样发出、传播和听见声音，也关注声音的物理特征。", "普通话里的“妈”和“马”声母相同，但元音和声调组合不同。", "语音知识帮助系统处理录音、发音差异、口音和语音识别。"],
  ["音位", "Phoneme", "语言学基础", "音位是某种语言中能够区别词义的最小语音单位，是语言系统中的抽象类别。", "英语中 /p/ 和 /b/ 可以区别 pat 和 bat，因此属于不同音位。", "音位分析用于发音词典、语音识别和语音合成的建模。"],
  ["文字与字符", "Writing & Character", "语言学基础", "文字是记录语言的符号系统；字符是文本中可以被编码和处理的基本单位。", "“中”是一个汉字字符；一个词可能由多个字符组成。", "理解文字、字符和编码的区别，有助于处理中文分词、乱码和多语言文本。"],
  ["词", "Word", "语言学基础", "词通常是能够独立使用、具有相对完整意义的语言单位，但不同语言对“词”的边界定义并不完全相同。", "“学习”“语言”可以分别作为词使用；中文句子中词与词之间通常没有空格。", "词是词性标注、词典构建和很多 NLP 任务的常用分析单位。"],
  ["词素", "Morpheme", "语言学基础", "词素是能够表达意义或语法功能的最小语言单位，一个词可以由一个或多个词素组成。", "英文 unhappy 可以分成 un- 和 happy 两个词素。", "词素分析有助于理解词的构成，也能帮助系统处理新词和词形变化。"],
  ["词法", "Morphology", "语言学基础", "词法研究词的内部结构、构成方式和变化规律。", "“可读性”可以看作由“可读”和表示性质的后缀构成。", "词法分析用于词典、拼写检查、机器翻译和跨语言文本处理。"],
  ["句子", "Sentence", "语言学基础", "句子是能够表达相对完整意思的语言单位，通常包含一定的结构和语调或标点边界。", "“小王今天去图书馆。”表达了一个完整事件。", "句子边界识别、句法分析和文本摘要都需要先确定句子的范围。"],
  ["句法", "Syntax", "语言学基础", "句法研究词语如何组合成短语和句子，以及这些组合的结构关系。", "“小明看书”和“书看小明”使用了相同词语，但排列关系改变了意思。", "句法信息可以帮助机器识别主语、谓语、宾语和复杂修饰关系。"],
  ["语义", "Semantics", "语言学基础", "语义研究语言表达本身所传达的意义，以及词语和句子之间的意义关系。", "“银行”可能指金融机构，也可能指河岸，具体意义需要结合语境判断。", "语义分析用于搜索、问答、相似度计算和机器翻译。"],
  ["语用", "Pragmatics", "语言学基础", "语用研究语言在具体场景中如何被理解，包括说话人的意图、听话人的推断和共享背景。", "有人说“这里有点冷”，可能是在陈述事实，也可能是在委婉地请求关窗。", "对话系统要理解礼貌、暗示和上下文，不能只依赖字面意义。"],
  ["字符", "Character", "文本处理", "字符是文本编码和处理时看到的基本符号单位，例如汉字、字母、数字或标点。", "“NLP”包含三个拉丁字母字符；“你好”包含两个汉字字符。", "字符计数、编码转换、文本清洗和中文预处理都以字符为基础。"],
  ["分词", "Tokenization", "文本处理", "分词是把连续的文本切分成模型或程序可以进一步处理的单位，这些单位可以是词、子词或字符。", "句子 I love NLP 可以切成 I / love / NLP。", "分词是文本分类、搜索、语言模型和机器翻译的常见预处理步骤。"],
  ["中文分词", "Chinese Word Segmentation", "文本处理", "中文分词是确定连续汉字文本中词语边界的过程，因为中文书写通常不在词之间加空格。", "“我喜欢学习计算语言学”可以切分为“我 / 喜欢 / 学习 / 计算语言学”。", "搜索索引、词性标注和中文文本分析都会受到分词结果影响。"],
  ["词形还原", "Lemmatization", "文本处理", "词形还原把词的不同变化形式归并到词典中的基本形式，同时尽量保留正确的词义和词性。", "英文 running、ran 可能都还原到 lemma run。", "词形还原可以减少稀疏性，帮助搜索和文本分析把相关词形放在一起。"],
  ["词干提取", "Stemming", "文本处理", "词干提取用简单规则去掉词缀，得到一个近似的词干，不一定是一个真正存在的词。", "英文 studies 可能被截成 studi，这个结果不一定能独立作为单词使用。", "它速度快、实现简单，常用于搜索和早期文本检索系统。"],
  ["停用词", "Stop Words", "文本处理", "停用词是某些任务中被认为信息量较低、可能被过滤的常见词。", "在某些英文搜索系统中，the、a 等词可能被视为停用词。", "过滤停用词可以减少索引体积，但对否定词等有意义的词不能机械删除。"],
  ["词性", "Part of Speech", "文本处理", "词性表示词在句子中的语法类别或作用，例如名词、动词、形容词和介词。", "“学习”在“学习语言”中通常是动词，在“学习很重要”中也可以作名词理解。", "词性信息能帮助句法分析、词义消歧和文本纠错。"],
  ["词性标注", "POS Tagging", "文本处理", "词性标注是为句子中的词或词语标记词性类别的任务。", "在“猫吃鱼”中，可以标注为“猫/名词 吃/动词 鱼/名词”。", "它是句法分析、信息抽取和语法检查的基础步骤。"],
  ["命名实体", "Named Entity", "文本处理", "命名实体是文本中指向特定对象的名称或表达，例如人名、地点、机构、日期和产品。", "“北京”“OpenAI”“2026 年”都可能是命名实体。", "识别实体可以把新闻或网页变成可检索的结构化信息。"],
  ["命名实体识别", "Named Entity Recognition · NER", "文本处理", "命名实体识别是从文本中找出实体并判断其类别的任务。", "在“马云访问杭州”中，系统可以标注“马云/人物”“杭州/地点”。", "新闻分析、知识图谱、简历解析和客服系统都常用 NER。"],
  ["句法分析", "Parsing", "句法与意义", "句法分析是根据语法结构分析句子，输出词语之间的层次或依存关系。", "对“小王读书”进行分析，可以识别“小王”是主语，“读”是谓语，“书”是宾语。", "机器翻译、问答和信息抽取可以利用句法结构减少歧义。"],
  ["依存句法", "Dependency Parsing", "句法与意义", "依存句法用有方向的关系连接词语，表示一个词依赖于另一个词以及这种依赖的类型。", "在“猫吃鱼”中，“猫”可以通过 nsubj 关系连接到“吃”，“鱼”通过 obj 连接到“吃”。", "Universal Dependencies 等资源用统一标签描述多种语言的依存关系。"],
  ["短语结构", "Phrase Structure", "句法与意义", "短语结构把句子看成由名词短语、动词短语等层层组合而成的结构。", "“红色的书”可以作为一个名词短语，其中“红色的”修饰“书”。", "短语结构适合展示层次关系，也常用于语法教学和句法树构建。"],
  ["句法树", "Parse Tree", "句法与意义", "句法树用树状结构可视化句子的组成成分或依存关系。", "句法树可以从句子根节点展开到短语、词，展示每个词在结构中的位置。", "句法树帮助研究者检查解析结果，也可以作为模型训练和教学材料。"],
  ["词义", "Word Sense", "句法与意义", "词义是一个词在特定语言和语境中表达的意义；一个词可能对应多个词义。", "“苹果”可以指水果，也可以指公司，词义由上下文和知识共同决定。", "词义表示是搜索、翻译、问答和词义消歧的基础。"],
  ["词义消歧", "Word Sense Disambiguation", "句法与意义", "词义消歧是在上下文中判断多义词到底使用哪一种词义。", "“我在银行存钱”里的“银行”应理解为金融机构，而不是河岸。", "它可以提升机器翻译、信息检索和阅读理解的准确性。"],
  ["同义词与反义词", "Synonyms & Antonyms", "句法与意义", "同义词意义相近，反义词意义相对或相反，但这种关系通常依赖具体语境。", "“高兴”和“开心”常被视为近义词；“高”和“低”是常见反义关系。", "同义词扩展可以改善搜索召回，反义词识别有助于情感和观点分析。"],
  ["词语共现", "Co-occurrence", "句法与意义", "词语共现指两个词在相同文本窗口或语境中一起出现的现象。", "“咖啡”常和“杯子”“早餐”“店铺”在相近语境中出现。", "共现统计可以帮助发现搭配、主题和词语之间的语义关系。"],
  ["词向量", "Word Embedding", "句法与意义", "词向量把词表示成一串数字，使语义相近或用法相似的词在向量空间中更接近。", "训练后，“北京”和“上海”可能比“北京”和“香蕉”更接近。", "词向量常用于相似度计算、分类、推荐和神经网络输入。"],
  ["上下文", "Context", "句法与意义", "上下文是一个词、句子或表达周围的语言材料和场景信息，它会影响理解。", "“苹果发布新品”中的“苹果”更可能指公司，而“我吃了苹果”中的“苹果”更可能指水果。", "现代语言模型会利用上下文来预测、理解和生成文本。"],
  ["文本分类", "Text Classification", "常见任务", "文本分类是把一段文字分配到一个或多个预先定义的类别。", "把新闻分成体育、财经、科技和文化类别，就是文本分类。", "垃圾邮件过滤、工单路由、新闻推荐和内容审核都使用文本分类。"],
  ["情感分析", "Sentiment Analysis", "常见任务", "情感分析判断文本表达的情绪、态度或评价倾向，例如正面、负面和中性。", "“这家餐厅服务很棒”通常会被判断为正面评价。", "电商评价分析、舆情监测和客户反馈整理是常见应用。"],
  ["信息抽取", "Information Extraction", "常见任务", "信息抽取从非结构化文本中找出实体、关系、事件或属性，转成结构化数据。", "从“苹果公司周一发布新产品”中抽取公司、时间、事件和产品信息。", "知识图谱、企业情报、合同分析和新闻数据库都需要信息抽取。"],
  ["自动摘要", "Text Summarization", "常见任务", "自动摘要从较长文本中生成较短版本，保留主要事实或中心意思。", "系统可以把一篇长新闻压缩成两三句要点。", "新闻速读、会议记录、研究资料整理和客服工单概览都能使用自动摘要。"],
  ["机器翻译", "Machine Translation", "常见任务", "机器翻译使用计算方法把一种自然语言的内容转换成另一种语言。", "把中文“我喜欢学习语言”翻译为英文 “I enjoy learning languages.”", "网页本地化、跨语言搜索、旅行沟通和字幕制作都使用机器翻译。"],
  ["问答系统", "Question Answering", "常见任务", "问答系统根据问题和可用知识，返回一个答案或相关信息。", "用户问“北京是哪个国家的首都”，系统需要找到并组织正确答案。", "搜索引擎、客服、企业知识库和教育辅导中都常见问答系统。"],
  ["文本生成", "Text Generation", "常见任务", "文本生成是根据提示、上下文或结构化输入产生新的文字内容。", "给出文章提纲后，系统可以生成一段连贯的介绍。", "写作辅助、对话、代码注释、营销文案和报告草稿都可能使用文本生成。"],
  ["语音识别", "Automatic Speech Recognition", "常见任务", "语音识别把人说的话从声音信号转换成文字。", "手机把“明天上午九点提醒我开会”转换为文字和日程信息。", "听写、会议转写、语音助手和字幕生成是常见应用。"],
  ["文本转语音", "Text-to-Speech", "常见任务", "文本转语音把文字转换成可以播放的人工语音。", "导航软件把“前方路口右转”读给驾驶者听。", "无障碍阅读、导航、有声内容和智能客服都使用文本转语音。"],
  ["大语言模型", "Large Language Model · LLM", "常见任务", "大语言模型是在大量文本上训练、能够处理和生成语言的模型，通常具有较大的参数规模和上下文能力。", "用户输入一个问题，模型根据上下文生成解释、摘要或代码。", "对话助手、检索增强、写作与编程辅助是常见应用；输出仍可能出现错误，需要核查。"]
].map(([term, english, category, definition, example, application], index) => ({
  id: index + 6, term, english, category, complete: true,
  summary: definition,
  definition, example, application,
  source: "参考：Stanford CS224N 课程资料、Universal Dependencies 项目资料及相关 NLP 教材；本词条为面向初学者的改写。"
}));

const allEntries = [...entries, ...remaining];

const categoryByTerm = {
  "计算语言学": "学科导览", "自然语言处理": "学科导览",
  "人工语言与自然语言": "语言基础", "语音": "语言基础", "音位": "语言基础", "文字与字符": "语言基础", "词": "语言基础", "词素": "语言基础", "词法": "语言基础", "句子": "语言基础", "句法": "语言基础", "语义": "语言基础", "语用": "语言基础",
  "语言数据": "数据与表示", "语料库": "数据与表示", "字符": "数据与表示", "分词": "数据与表示", "中文分词": "数据与表示", "词形还原": "数据与表示", "词干提取": "数据与表示", "停用词": "数据与表示",
  "规则与统计方法": "模型与方法", "机器学习": "模型与方法", "深度学习": "模型与方法", "语言模型": "模型与方法", "生成式人工智能": "模型与方法", "大语言模型": "模型与方法",
  "词性": "语言分析", "词性标注": "语言分析", "命名实体": "语言分析", "命名实体识别": "语言分析", "句法分析": "语言分析", "依存句法": "语言分析", "短语结构": "语言分析", "句法树": "语言分析", "词义": "语言分析", "词义消歧": "语言分析", "同义词与反义词": "语言分析", "词语共现": "语言分析", "词向量": "语言分析", "上下文": "语言分析",
  "文本分类": "应用任务", "情感分析": "应用任务", "信息抽取": "应用任务", "自动摘要": "应用任务", "机器翻译": "应用任务", "问答系统": "应用任务", "文本生成": "应用任务", "语音识别": "应用任务", "文本转语音": "应用任务"
};

const relatedByTerm = {
  "计算语言学": ["自然语言处理", "语言学基础", "机器学习"],
  "自然语言处理": ["计算语言学", "语言模型", "应用任务"],
  "语言数据": ["语料库", "文本分类", "命名实体识别"],
  "语料库": ["语言数据", "词语共现", "语言模型"],
  "语言模型": ["深度学习", "大语言模型", "文本生成"],
  "中文分词": ["分词", "词性标注", "中文"],
  "机器学习": ["深度学习", "文本分类", "语言数据"],
  "深度学习": ["机器学习", "语言模型", "词向量"],
  "大语言模型": ["语言模型", "生成式人工智能", "文本生成"],
  "命名实体识别": ["命名实体", "信息抽取", "词性标注"],
  "依存句法": ["句法分析", "句法树", "词性标注"],
  "词义消歧": ["词义", "上下文", "机器翻译"],
  "词向量": ["词语共现", "深度学习", "上下文"],
  "情感分析": ["文本分类", "词义", "上下文"],
  "机器翻译": ["语言模型", "词义消歧", "语料库"],
  "问答系统": ["信息抽取", "大语言模型", "上下文"],
  "语音识别": ["语音", "音位", "文本转语音"],
  "文本转语音": ["语音", "音位", "语音识别"]
};

const industryByCategory = {
  "学科导览": ["智能搜索与知识服务", "教育科技与学习工具"],
  "语言基础": ["语言教育与智能批改", "语音与无障碍产品"],
  "数据与表示": ["企业文档检索", "多语言内容管理"],
  "模型与方法": ["智能客服与办公助手", "内容创作与开发工具"],
  "语言分析": ["舆情洞察与内容审核", "合同、简历与新闻解析"],
  "应用任务": ["在线服务与客户体验", "内容生产与信息管理"]
};

const industryByTerm = {
  "文本分类": ["客服工单分流", "内容审核与新闻推荐"],
  "情感分析": ["电商评价洞察", "品牌舆情监测"],
  "信息抽取": ["合同与报告解析", "企业情报与知识图谱"],
  "自动摘要": ["会议纪要整理", "新闻与研究资料速读"],
  "机器翻译": ["跨境电商与本地化", "旅行和跨语言沟通"],
  "问答系统": ["企业知识库助手", "在线客服与教育辅导"],
  "文本生成": ["写作与办公辅助", "营销内容与代码说明"],
  "语音识别": ["会议转写与字幕", "语音助手与车载交互"],
  "文本转语音": ["无障碍阅读", "导航与智能客服"],
  "大语言模型": ["知识工作辅助", "产品内智能助手"]
};

const categoryConcepts = {
  "学科导览": ["计算语言学", "自然语言处理", "语言模型"],
  "语言基础": ["词", "句法", "语义", "语用"],
  "数据与表示": ["语料库", "分词", "中文分词", "词形还原"],
  "模型与方法": ["机器学习", "深度学习", "语言模型", "大语言模型"],
  "语言分析": ["词性标注", "句法分析", "词义消歧", "上下文"],
  "应用任务": ["文本分类", "信息抽取", "机器翻译", "问答系统"]
};

function resolveRelated(entry) {
  const preferred = relatedByTerm[entry.term] || categoryConcepts[entry.category] || [];
  return preferred
    .filter(term => term !== entry.term && allEntries.some(item => item.term === term))
    .slice(0, 3);
}

allEntries.forEach(entry => {
  entry.category = categoryByTerm[entry.term] || entry.category;
  entry.related = resolveRelated(entry);
  entry.industryApplications = industryByTerm[entry.term] || industryByCategory[entry.category];
});
let selectedCategory = "全部";
let selectedId = 1;

const termGrid = document.querySelector("#termGrid");
const entryContent = document.querySelector("#entryContent");
const searchInput = document.querySelector("#searchInput");
const resultsCount = document.querySelector("#resultsCount");
const categorySelect = document.querySelector("#categorySelect");
const termSelect = document.querySelector("#termSelect");

function renderTermSelect() {
  const categoryEntries = allEntries.filter(entry => selectedCategory === "全部" || entry.category === selectedCategory);
  if (!categoryEntries.some(entry => entry.id === selectedId)) selectedId = categoryEntries[0]?.id || 1;
  termSelect.innerHTML = categoryEntries.map(entry =>
    `<option value="${entry.id}">${String(entry.id).padStart(2, "0")} · ${entry.term} — ${entry.english}</option>`
  ).join("");
  termSelect.value = String(selectedId);
}

function renderFilters() {
  categorySelect.innerHTML = categories.map(category =>
    `<option value="${category}">${category === "全部" ? "全部分类" : category}</option>`
  ).join("");
  categorySelect.value = selectedCategory;
}

function getVisibleEntries() {
  const query = searchInput.value.trim().toLowerCase();
  return allEntries.filter(entry => {
    const matchesCategory = selectedCategory === "全部" || entry.category === selectedCategory;
    const searchable = `${entry.term} ${entry.english} ${entry.summary}`.toLowerCase();
    return matchesCategory && searchable.includes(query);
  });
}

function renderTerms() {
  const visible = getVisibleEntries();
  resultsCount.textContent = visible.length;
  termGrid.innerHTML = visible.length ? visible.map(entry =>
    `<button class="term-card ${entry.id === selectedId ? "selected" : ""}" data-id="${entry.id}">
      <span class="number">${String(entry.id).padStart(2, "0")} · ${entry.category}</span>
      <h3>${entry.term}</h3>
      <p>${entry.english}</p>
    </button>`
  ).join("") : `<div class="empty-state">没有找到匹配的词条。</div>`;

  termGrid.querySelectorAll(".term-card").forEach(card => {
    card.addEventListener("click", () => {
      selectedId = Number(card.dataset.id);
      renderTerms();
      renderEntry();
    });
  });
}

function renderEntry() {
  const entry = allEntries.find(item => item.id === selectedId) || allEntries[0];
  termSelect.value = String(entry.id);
  const diagram = entry.id <= 5
    ? `<div class="diagram"><span>语言</span><i></i><span>数据</span><i></i><span>模型</span></div>`
    : "";
  const related = entry.related.map(term =>
    `<button class="related-chip" data-related-term="${term}">${term}</button>`
  ).join("");
  const industry = entry.industryApplications.map(item =>
    `<div class="industry-item">${item}</div>`
  ).join("");
  entryContent.innerHTML = `
    <h3>${entry.term}</h3>
    <div class="english">${entry.english}</div>
    <div class="definition-block">
      <div class="label">核心释义</div>
      <p class="definition">${entry.definition}</p>
    </div>
    ${diagram}
    <div class="label">例句</div>
    <div class="example">${entry.example}</div>
    <div class="label">它能做什么</div>
    <p class="application">${entry.application}</p>
    <div class="label">相关概念</div>
    <div class="chip-list">${related}</div>
    <div class="label">行业应用</div>
    <div class="industry-list">${industry}</div>
    <div class="label">资料来源</div>
    <p class="source">${entry.source}</p>
  `;
  entryContent.querySelectorAll("[data-related-term]").forEach(button => {
    button.addEventListener("click", () => {
      const relatedEntry = allEntries.find(item => item.term === button.dataset.relatedTerm);
      if (!relatedEntry) return;
      selectedId = relatedEntry.id;
      selectedCategory = "全部";
      searchInput.value = "";
      renderFilters();
      renderTerms();
      renderEntry();
    });
  });
}

searchInput.addEventListener("input", renderTerms);
termSelect.addEventListener("change", () => {
  selectedId = Number(termSelect.value);
  renderTerms();
  renderEntry();
});
categorySelect.addEventListener("change", () => {
  selectedCategory = categorySelect.value;
  searchInput.value = "";
  renderFilters();
  renderTermSelect();
  renderTerms();
  renderEntry();
});
renderFilters();
renderTermSelect();
renderTerms();
renderEntry();

document.querySelectorAll("[data-scroll-to]").forEach(button => {
  button.addEventListener("click", () => document.getElementById(button.dataset.scrollTo).scrollIntoView());
});

document.querySelector("[data-browse-all]").addEventListener("click", () => {
  selectedCategory = "全部";
  searchInput.value = "";
  renderFilters();
  renderTermSelect();
  renderTerms();
  document.getElementById("dictionary").scrollIntoView();
});

document.querySelectorAll("[data-map-category]").forEach(button => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.mapCategory;
    searchInput.value = "";
    renderFilters();
    renderTermSelect();
    renderTerms();
    renderEntry();
    document.getElementById("dictionary").scrollIntoView();
  });
});
