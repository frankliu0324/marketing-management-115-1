export const course = {
  materialsFolderUrl: 'https://drive.google.com/drive/folders/1eEFzxpSBhYDH6cnN-b_HIdFbPUFPTFtd?usp=sharing',
  courseInfo: {
    name: '115-1 行銷管理',
    subtitle: '理解市場，創造價值',
    teacher: '',
    contact: '',
    meetingTime: '',
    location: '',
  },
  announcement: '歡迎加入 115-1 行銷管理課程。請先瀏覽課程地圖，掌握本學期的學習脈絡。',
  modules: [
    { id: 'marketing-thinking', title: '行銷思維', weeks: [1, 4], summary: '從顧客價值與行銷觀念建立共同語言。' },
    { id: 'market-insight', title: '市場洞察', weeks: [5, 8], summary: '辨識市場、顧客與競爭環境中的關鍵訊號。' },
    { id: 'strategy-planning', title: '策略規劃', weeks: [9, 12], summary: '將洞察轉化為目標市場、定位與行銷策略。' },
    { id: 'marketing-practice', title: '行銷實作', weeks: [13, 16], summary: '整合行銷組合，提出有說服力的行銷方案。' },
  ],
  resources: [
    { title: '課程講義與指定閱讀', note: '教師將於課堂或課程平台公告連結。', url: '' },
    { title: '個案與課堂補充資料', note: '依每週課程進度提供。', url: '' },
  ],
  assignments: [
    {
      id: 'market-observation',
      title: '作業一：市場觀察筆記',
      requirement: '選擇一項日常消費情境，記錄目標顧客、需求與品牌提供的價值。',
      deadline: '待教師公告',
      submission: '依教師公告之方式繳交。',
      rubric: '觀察具體性、顧客需求分析與行銷概念連結。',
    },
    {
      id: 'segmentation-analysis',
      title: '作業二：市場區隔分析',
      requirement: '以選定產品或服務提出市場區隔變數，說明優先目標客群。',
      deadline: '待教師公告',
      submission: '依教師公告之方式繳交。',
      rubric: '區隔邏輯、資料或觀察佐證，以及目標客群的合理性。',
    },
    {
      id: 'marketing-proposal',
      title: '期末作業：行銷提案',
      requirement: '整合市場洞察、目標市場、定位與行銷組合，完成一份行銷提案。',
      deadline: '待教師公告',
      submission: '依教師公告之方式繳交。',
      rubric: '問題定義、策略一致性、可行性與表達清晰度。',
    },
  ],
  weeks: [
    { number: 1, moduleId: 'marketing-thinking', objective: '了解課程架構與行銷管理的核心問題。', topic: '行銷管理導論', materials: ['課程大綱與導論講義'], activity: '課程地圖導覽與消費經驗分享', assignmentId: null },
    { number: 2, moduleId: 'marketing-thinking', objective: '說明顧客價值與交換關係。', topic: '市場、顧客需求與價值', materials: ['顧客價值閱讀資料'], activity: '價值主張案例討論', assignmentId: null },
    { number: 3, moduleId: 'marketing-thinking', objective: '比較不同的行銷導向與其管理意涵。', topic: '行銷觀念與企業導向', materials: ['行銷觀念講義'], activity: '品牌導向辨識練習', assignmentId: null },
    { number: 4, moduleId: 'marketing-thinking', objective: '以行銷概念觀察真實市場情境。', topic: '行銷環境中的顧客價值', materials: ['市場觀察引導單'], activity: '校園或生活情境觀察', assignmentId: 'market-observation' },
    { number: 5, moduleId: 'market-insight', objective: '辨識影響企業決策的行銷環境因素。', topic: '行銷環境分析', materials: ['總體與個體環境講義'], activity: '環境趨勢小組盤點', assignmentId: null },
    { number: 6, moduleId: 'market-insight', objective: '理解消費者行為與購買決策歷程。', topic: '消費者市場與購買行為', materials: ['消費者行為閱讀資料'], activity: '購買旅程地圖練習', assignmentId: null },
    { number: 7, moduleId: 'market-insight', objective: '運用區隔變數描述市場中的差異。', topic: '市場區隔', materials: ['市場區隔講義'], activity: '客群描述工作坊', assignmentId: null },
    { number: 8, moduleId: 'market-insight', objective: '提出具可行性的目標客群選擇。', topic: '目標市場選擇', materials: ['目標市場案例'], activity: '市場區隔分析發表', assignmentId: 'segmentation-analysis' },
    { number: 9, moduleId: 'strategy-planning', objective: '建立定位思考與差異化的基本架構。', topic: '定位與差異化', materials: ['品牌定位講義'], activity: '定位陳述句練習', assignmentId: null },
    { number: 10, moduleId: 'strategy-planning', objective: '理解產品與品牌決策如何回應市場需求。', topic: '產品、服務與品牌策略', materials: ['產品與品牌閱讀資料'], activity: '品牌架構案例討論', assignmentId: null },
    { number: 11, moduleId: 'strategy-planning', objective: '分析價格策略與價值感知的關係。', topic: '訂價策略', materials: ['訂價策略講義'], activity: '價格比較與價值辯論', assignmentId: null },
    { number: 12, moduleId: 'strategy-planning', objective: '整合產品、價格與定位形成策略方向。', topic: '行銷策略整合', materials: ['策略規劃工作表'], activity: '期末提案策略草圖', assignmentId: null },
    { number: 13, moduleId: 'marketing-practice', objective: '說明通路設計如何提升顧客接觸與便利性。', topic: '通路與零售策略', materials: ['通路策略講義'], activity: '顧客旅程接點盤點', assignmentId: null },
    { number: 14, moduleId: 'marketing-practice', objective: '選擇合適的整合行銷傳播方式。', topic: '行銷傳播與推廣', materials: ['整合傳播閱讀資料'], activity: '傳播訊息提案練習', assignmentId: null },
    { number: 15, moduleId: 'marketing-practice', objective: '以一致策略完成行銷提案。', topic: '行銷方案整合', materials: ['期末提案檢核表'], activity: '同儕提案回饋', assignmentId: 'marketing-proposal' },
    { number: 16, moduleId: 'marketing-practice', objective: '回顧行銷管理的整體決策邏輯。', topic: '期末提案發表與課程回顧', materials: ['課程回顧引導題'], activity: '提案發表與學習反思', assignmentId: null },
  ],
};

export function validateCourse(data) {
  const errors = [];
  if (data.weeks.length !== 16) errors.push('課程必須包含 16 週');
  data.weeks.forEach((week, index) => {
    for (const key of ['objective', 'topic', 'activity', 'moduleId']) {
      if (!week[key]) errors.push(`第 ${index + 1} 週缺少 ${key}`);
    }
  });
  return errors;
}
