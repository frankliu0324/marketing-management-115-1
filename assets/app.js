import { course } from './course-data.js';

export function moduleCardMarkup(module) {
  return `<a class="module-card module-card--${module.id}" href="#week-${module.weeks[0]}">
    <span>第 ${module.weeks[0]}–${module.weeks[1]} 週</span>
    <h3>${module.title}</h3>
    <p>${module.summary}</p>
    <strong>探索本階段 →</strong>
  </a>`;
}

export function renderHome(data) {
  document.querySelector('#announcement').textContent = data.announcement;
  document.querySelector('#module-map').innerHTML = data.modules.map(moduleCardMarkup).join('');
  const currentWeek = data.weeks[0];
  document.querySelector('#current-week').innerHTML = `
    <span class="eyebrow">從這裡開始</span>
    <h2>第 ${currentWeek.number} 週｜${currentWeek.topic}</h2>
    <p>${currentWeek.objective}</p>
    <a href="#week-${currentWeek.number}">查看本週學習內容 →</a>`;
}

export function materialsFolderMarkup(url) {
  if (!url) return '<p class="materials-pending">教材資料夾連結待教師設定</p>';
  return `<a class="materials-folder-button" href="${url}" target="_blank" rel="noopener noreferrer">開啟教材資料夾</a>`;
}

export function weekCardMarkup(week, assignment, materialsFolderUrl = '') {
  const materialItems = week.materials.map((item) => `<li>${item}</li>`).join('');
  const assignmentMarkup = assignment
    ? `<p class="week-assignment"><strong>本週作業：</strong><a href="#assignment-${assignment.id}">${assignment.title}</a></p>`
    : '<p class="week-assignment"><strong>本週無作業</strong></p>';
  return `<article class="week-card" id="week-${week.number}">
    <p class="week-number">第 ${week.number} 週</p>
    <h3>${week.topic}</h3>
    <dl>
      <div><dt>學習目標</dt><dd>${week.objective}</dd></div>
      <div><dt>教材／資源</dt><dd><ul>${materialItems}</ul></dd></div>
      <div><dt>課堂活動</dt><dd>${week.activity}</dd></div>
    </dl>
    ${assignmentMarkup}
    ${materialsFolderMarkup(materialsFolderUrl)}
  </article>`;
}

export function assignmentCardMarkup(assignment) {
  return `<article class="assignment-card" id="assignment-${assignment.id}">
    <p class="eyebrow">課程作業</p><h3>${assignment.title}</h3>
    <dl>
      <div><dt>作業要求</dt><dd>${assignment.requirement}</dd></div>
      <div><dt>截止日期</dt><dd>${assignment.deadline}</dd></div>
      <div><dt>繳交方式</dt><dd>${assignment.submission}</dd></div>
      <div><dt>評量重點</dt><dd>${assignment.rubric}</dd></div>
    </dl>
  </article>`;
}

export function resourceMarkup(resource) {
  const label = resource.url
    ? `<a href="${resource.url}" target="_blank" rel="noopener noreferrer">${resource.title}</a>`
    : `<strong>${resource.title}</strong>`;
  return `<li>${label}<span>${resource.note}</span></li>`;
}

export function displayValue(value) {
  return value && value.trim() ? value : '待教師公告';
}

export function renderCourseInfo(info) {
  const fields = [['授課教師', info.teacher], ['聯絡方式', info.contact], ['上課時間', info.meetingTime], ['上課地點', info.location]];
  document.querySelector('#course-details').innerHTML = fields
    .map(([label, value]) => `<div><dt>${label}</dt><dd>${displayValue(value)}</dd></div>`).join('');
}

export function setupMobileNavigation(button, menu) {
  const closeMenu = () => {
    menu.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
    button.textContent = '開啟選單';
  };
  button.addEventListener('click', () => {
    const willOpen = !menu.classList.contains('is-open');
    menu.classList.toggle('is-open', willOpen);
    button.setAttribute('aria-expanded', String(willOpen));
    button.textContent = willOpen ? '關閉選單' : '開啟選單';
  });
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
}

export function renderLearningContent(data) {
  const assignmentById = Object.fromEntries(data.assignments.map((item) => [item.id, item]));
  document.querySelector('#weekly-schedule').innerHTML = `
    <p class="eyebrow">學習週曆</p><h2 id="schedule-title">16 週學習進度</h2>
    <p class="section-intro">每週都有清楚的學習目標、教材、活動與作業提醒。</p>
    <div class="week-grid">${data.weeks.map((week) => weekCardMarkup(week, assignmentById[week.assignmentId], data.materialsFolderUrl)).join('')}</div>`;
  document.querySelector('#resources').innerHTML = `
    <p class="eyebrow">教材資源</p><h2 id="resources-title">閱讀與課堂資料</h2>
    <p class="section-intro">所有週次教材集中在同一資料夾，教師更新內容後會直接反映在資料夾中。</p>
    ${materialsFolderMarkup(data.materialsFolderUrl)}
    <ul class="resource-list">${data.resources.map(resourceMarkup).join('')}</ul>`;
  document.querySelector('#assignment-list').innerHTML = `
    <p class="eyebrow">作業專區</p><h2 id="assignments-title">作業要求與繳交方式</h2>
    <p class="section-intro">本站僅提供作業說明；請依教師公告的方式與期限繳交。</p>
    <div class="assignment-grid">${data.assignments.map(assignmentCardMarkup).join('')}</div>`;
}

if (typeof document !== 'undefined') {
  renderHome(course);
  renderLearningContent(course);
  renderCourseInfo(course.courseInfo);
  setupMobileNavigation(document.querySelector('.menu-button'), document.querySelector('#site-navigation'));
}
