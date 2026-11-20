/**
 * CASCADE — EdTech Controller & Stepwise Hint Engine
 * High-performance, accessible, responsive interaction layer.
 */

// Application Persistent State
const CascadeApp = {
  activeView: 'home',
  currentQuestionIndex: 0,
  bookmarks: JSON.parse(localStorage.getItem('cascade_bookmarks') || '[]'),
  theme: localStorage.getItem('cascade_theme') || 'light',
  fontScale: parseFloat(localStorage.getItem('cascade_font_scale') || '1'),
  hintMode: localStorage.getItem('cascade_hint_mode') || 'stepwise',

  // Progress per question
  questionData: CASCADE_QUESTIONS.map(q => ({
    id: q.id,
    status: 'unattempted', // 'unattempted', 'stepwise', 'mastered'
    selectedMainOption: null,
    stepProgress: 0, // current step index unlocked
    stepAttempts: {}, // { [stepIdx]: number of attempts }
    stepChoices: {}, // { [stepIdx]: { optionId, isCorrect } }
    stepRevealed: {}, // { [stepIdx]: boolean }
    completedAllSteps: false
  })),

  // Step trail for Tutor inspection & Analytics
  decisionTrail: JSON.parse(localStorage.getItem('cascade_trail') || '[]'),

  timerSeconds: 0,
  timerInterval: null
};

// Safe KaTeX Math Rendering
function renderMath(targetElement) {
  if (!targetElement) targetElement = document.body;
  if (window.renderMathInElement) {
    try {
      renderMathInElement(targetElement, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '\\[', right: '\\]', display: true },
          { left: '\\(', right: '\\)', display: false },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    } catch (e) {
      console.warn("KaTeX error:", e);
    }
  }
}

// Global View Switcher
function navigateTo(viewName) {
  CascadeApp.activeView = viewName;

  const views = ['home', 'practice', 'browser', 'analytics', 'settings'];
  views.forEach(v => {
    const el = document.getElementById(`view${v.charAt(0).toUpperCase() + v.slice(1)}`);
    if (el) {
      if (v === viewName) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    }
  });

  // Update navigation button active styles
  document.querySelectorAll('.nav-btn, .mobile-nav-btn').forEach(btn => {
    if (btn.dataset.view === viewName) {
      btn.classList.add('bg-white', 'dark:bg-slate-700', 'text-[#8b6f47]', 'dark:text-[#d4b480]', 'shadow-sm');
    } else {
      btn.classList.remove('bg-white', 'dark:bg-slate-700', 'text-[#8b6f47]', 'dark:text-[#d4b480]', 'shadow-sm');
    }
  });

  if (viewName === 'home') renderHomeScreen();
  if (viewName === 'practice') renderPracticeSession();
  if (viewName === 'browser') renderBrowserScreen();
  if (viewName === 'analytics') renderAnalyticsScreen();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Timer Manager
function startPracticeTimer() {
  if (CascadeApp.timerInterval) clearInterval(CascadeApp.timerInterval);
  CascadeApp.timerSeconds = 0;
  updateTimerText();
  CascadeApp.timerInterval = setInterval(() => {
    CascadeApp.timerSeconds++;
    updateTimerText();
  }, 1000);
}

function updateTimerText() {
  const el = document.getElementById('practiceTimerText');
  if (!el) return;
  const m = String(Math.floor(CascadeApp.timerSeconds / 60)).padStart(2, '0');
  const s = String(CascadeApp.timerSeconds % 60).padStart(2, '0');
  el.textContent = `${m}:${s}`;
}

// Theme & Typography Management
function initThemeAndFont() {
  document.documentElement.setAttribute('data-theme', CascadeApp.theme);
  document.documentElement.style.setProperty('--font-scale', CascadeApp.fontScale);

  const themeIcon = document.getElementById('globalThemeIcon');
  if (themeIcon) {
    themeIcon.setAttribute('data-lucide', CascadeApp.theme === 'dark' ? 'sun' : 'moon');
  }

  // Update font scale buttons in settings
  document.querySelectorAll('.font-scale-btn').forEach(btn => {
    if (parseFloat(btn.dataset.scale) === CascadeApp.fontScale) {
      btn.classList.add('bg-white', 'dark:bg-slate-700', 'shadow-sm');
      btn.classList.remove('text-[var(--text-muted)]');
    } else {
      btn.classList.remove('bg-white', 'dark:bg-slate-700', 'shadow-sm');
      btn.classList.add('text-[var(--text-muted)]');
    }
  });

  lucide.createIcons();
}

function toggleTheme() {
  CascadeApp.theme = CascadeApp.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('cascade_theme', CascadeApp.theme);
  initThemeAndFont();
}

function setFontScale(scale) {
  CascadeApp.fontScale = scale;
  localStorage.setItem('cascade_font_scale', scale);
  initThemeAndFont();
}

// Bookmarks / Save to Revision
function toggleBookmark(questionId) {
  const idx = CascadeApp.bookmarks.indexOf(questionId);
  if (idx >= 0) {
    CascadeApp.bookmarks.splice(idx, 1);
  } else {
    CascadeApp.bookmarks.push(questionId);
  }
  localStorage.setItem('cascade_bookmarks', JSON.stringify(CascadeApp.bookmarks));
  updateBookmarkIcon();
  if (CascadeApp.activeView === 'home') renderHomeScreen();
  if (CascadeApp.activeView === 'browser') renderBrowserScreen();
}

function updateBookmarkIcon() {
  const currentQ = CASCADE_QUESTIONS[CascadeApp.currentQuestionIndex];
  const isBookmarked = CascadeApp.bookmarks.includes(currentQ.id);
  const icon = document.getElementById('iconBookmark');
  if (icon) {
    if (isBookmarked) {
      icon.classList.remove('text-slate-400');
      icon.classList.add('text-amber-500', 'fill-amber-500');
    } else {
      icon.classList.remove('text-amber-500', 'fill-amber-500');
      icon.classList.add('text-slate-400');
    }
  }
}

// ============================================================
// SCREEN 1: HOME DASHBOARD LOGIC
// ============================================================
function renderHomeScreen() {
  const masteredCount = CascadeApp.questionData.filter(q => q.status === 'mastered').length;
  document.getElementById('homeMasteredCount').textContent = `${masteredCount} / ${CASCADE_QUESTIONS.length}`;
  document.getElementById('homeBookmarksCount').textContent = `${CascadeApp.bookmarks.length} Items`;

  const container = document.getElementById('homeQuestionsList');
  if (!container) return;

  container.innerHTML = CASCADE_QUESTIONS.map((q, idx) => {
    const qState = CascadeApp.questionData[idx];
    const isBookmarked = CascadeApp.bookmarks.includes(q.id);

    let badgeClass = "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
    let badgeText = "Unattempted";
    if (qState.status === 'mastered') {
      badgeClass = "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold";
      badgeText = "Mastered";
    } else if (qState.status === 'stepwise') {
      badgeClass = "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 font-bold";
      badgeText = "In Stepwise Mode";
    }

    return `
      <div class="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-indigo-400/60 shadow-sm transition flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div class="space-y-1">
          <div class="flex items-center space-x-2">
            <span class="text-xs px-2 py-0.5 rounded-full ${badgeClass}">${badgeText}</span>
            <span class="text-xs font-semibold text-[#8b6f47] dark:text-[#c4a26e]">${q.title}</span>
            ${isBookmarked ? `<span class="text-xs text-amber-500 font-semibold">★ Saved</span>` : ''}
          </div>
          <div class="text-sm font-medium text-[var(--text-primary)] line-clamp-1">${q.statement}</div>
        </div>
        <button onclick="startPracticeSession(${idx})" class="px-4 py-2 bg-[#f5ede2] dark:bg-[#342a1e]/50 hover:bg-indigo-100 text-[#745a35] dark:text-[#d4b480] border border-[#e0d5c7] dark:border-indigo-800 rounded-xl text-xs font-semibold shrink-0 transition flex items-center space-x-1.5 self-start sm:self-auto">
          <span>Practice Now</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    `;
  }).join('');

  lucide.createIcons();
  setTimeout(() => renderMath(container), 20);
}

function startPracticeSession(index) {
  CascadeApp.currentQuestionIndex = index;
  navigateTo('practice');
}

// ============================================================
// SCREEN 2: PRACTICE SESSION LOGIC
// ============================================================
function renderPracticeSession() {
  const q = CASCADE_QUESTIONS[CascadeApp.currentQuestionIndex];
  const qState = CascadeApp.questionData[CascadeApp.currentQuestionIndex];

  // Top Session bar
  document.getElementById('practiceQuestionBadge').textContent = `Q${q.index} of ${CASCADE_QUESTIONS.length}`;
  document.getElementById('practiceSubjectTopic').textContent = `${q.subject} • ${q.topic}`;
  document.getElementById('txtExamShift').textContent = q.title;
  document.getElementById('txtPracticeStatement').innerHTML = q.statement;

  updateBookmarkIcon();
  renderPracticePills();

  // Render 4 Main Options
  const optionsBox = document.getElementById('practiceOptionsContainer');
  optionsBox.innerHTML = q.options.map(opt => {
    const isSelected = qState.selectedMainOption === opt.id;
    const isMastered = qState.status === 'mastered';
    const isStepwise = qState.status === 'stepwise';
    const isThisOptionWrong = isStepwise && isSelected && !opt.isCorrect;

    let cardClass = "cascade-option-card flex items-center justify-between p-4 rounded-xl border-2 transition";
    let radioClass = "w-5 h-5 rounded-full border-2 border-slate-300 dark:border-slate-600 flex items-center justify-center shrink-0 mr-3";
    let radioDot = "";
    let statusBadge = "";

    if (isSelected) {
      cardClass += " selected";
      radioClass = "w-5 h-5 rounded-full border-2 border-[#8b6f47] bg-[#8b6f47] flex items-center justify-center shrink-0 mr-3 text-white";
      radioDot = `<span class="w-2 h-2 rounded-full bg-white"></span>`;
      statusBadge = `<span class="text-xs font-semibold text-[#8b6f47] dark:text-[#c4a26e] bg-indigo-100 dark:bg-[#342a1e] px-2.5 py-1 rounded-lg">Selected</span>`;
    }

    if (isThisOptionWrong) {
      cardClass += " is-incorrect animate-shake border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-950 dark:text-rose-100";
      radioClass = "w-5 h-5 rounded-full border-2 border-rose-600 bg-rose-600 flex items-center justify-center shrink-0 mr-3 text-white";
      radioDot = `<i data-lucide="x" class="w-3.5 h-3.5 stroke-[3]"></i>`;
      statusBadge = `
        <span class="inline-flex items-center space-x-1 text-xs font-bold text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-900/60 px-2.5 py-1 rounded-lg border border-rose-300 dark:border-rose-800 shadow-sm">
          <i data-lucide="x-circle" class="w-3.5 h-3.5 text-rose-600 dark:text-rose-400"></i>
          <span>Incorrect Answer</span>
        </span>
      `;
    }

    if (isMastered && opt.isCorrect) {
      cardClass += " is-correct border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-100";
      radioClass = "w-5 h-5 rounded-full border-2 border-emerald-600 bg-emerald-600 flex items-center justify-center shrink-0 mr-3 text-white";
      radioDot = `<i data-lucide="check" class="w-3.5 h-3.5 stroke-[3]"></i>`;
      statusBadge = `
        <span class="inline-flex items-center space-x-1 text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/60 px-2.5 py-1 rounded-lg border border-emerald-300 dark:border-emerald-800 shadow-sm">
          <i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400"></i>
          <span>Correct Answer</span>
        </span>
      `;
    }

    return `
      <div onclick="selectPracticeOption(${opt.id})" class="${cardClass}">
        <div class="flex items-center">
          <div class="${radioClass}">${radioDot}</div>
          <div class="text-sm sm:text-base font-medium text-[var(--text-primary)]">(${opt.id}) ${opt.text}</div>
        </div>
        ${statusBadge}
      </div>
    `;
  }).join('');

  // Incorrect Alert Banner update
  const incorrectAlert = document.getElementById('practiceIncorrectAlert');
  if (incorrectAlert) {
    if (qState.status === 'stepwise' && qState.selectedMainOption && qState.selectedMainOption !== q.correctOptionId) {
      incorrectAlert.classList.remove('hidden');
      incorrectAlert.innerHTML = `
        <div class="flex items-start space-x-3">
          <div class="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
            <i data-lucide="x" class="w-5 h-5 stroke-[3]"></i>
          </div>
          <div class="flex-1">
            <div class="flex items-center justify-between">
              <h4 class="font-bold text-sm text-rose-900 dark:text-rose-100">Option (${qState.selectedMainOption}) is Incorrect</h4>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-rose-200 dark:bg-rose-900 text-rose-900 dark:text-rose-100 font-bold uppercase tracking-wider">Stepwise Hint Active</span>
            </div>
            <p class="text-xs text-rose-800 dark:text-rose-300 mt-1 leading-relaxed">
              Don't worry! Complex indefinite integrals require the right algebraic stepping stones. We've opened <strong>Step 1</strong> in the coaching panel on the right to guide you through solving this!
            </p>
          </div>
        </div>
      `;
    } else {
      incorrectAlert.classList.add('hidden');
    }
  }

  // Submit button state
  const btnSubmit = document.getElementById('btnPracticeSubmit');
  btnSubmit.disabled = qState.selectedMainOption === null || qState.status === 'mastered';

  // Success Banner
  const successBanner = document.getElementById('practiceSuccessBanner');
  if (qState.status === 'mastered' && !qState.completedAllSteps) {
    successBanner.classList.remove('hidden');
  } else {
    successBanner.classList.add('hidden');
  }

  // Right Side Stepwise Hint Panel
  renderStepwisePanel();

  lucide.createIcons();
  setTimeout(() => {
    renderMath(document.getElementById('txtPracticeStatement'));
    renderMath(optionsBox);
  }, 10);

  startPracticeTimer();
}

function renderPracticePills() {
  const bar = document.getElementById('practicePillsBar');
  if (!bar) return;
  bar.innerHTML = CASCADE_QUESTIONS.map((q, idx) => {
    const s = CascadeApp.questionData[idx];
    const isCurrent = idx === CascadeApp.currentQuestionIndex;
    let pillStyle = "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400";
    if (s.status === 'mastered') pillStyle = "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold";
    if (s.status === 'stepwise') pillStyle = "bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-bold";
    if (isCurrent) pillStyle += " ring-2 ring-indigo-500 font-black";

    return `
      <button onclick="startPracticeSession(${idx})" class="w-7 h-7 rounded-lg text-xs transition flex items-center justify-center ${pillStyle}">
        ${idx + 1}
      </button>
    `;
  }).join('');
}

function selectPracticeOption(optId) {
  const qState = CascadeApp.questionData[CascadeApp.currentQuestionIndex];
  if (qState.status === 'mastered') return;
  qState.selectedMainOption = optId;
  renderPracticeSession();
}

function handlePracticeSubmit() {
  const q = CASCADE_QUESTIONS[CascadeApp.currentQuestionIndex];
  const qState = CascadeApp.questionData[CascadeApp.currentQuestionIndex];
  if (!qState.selectedMainOption) return;

  const isCorrect = qState.selectedMainOption === q.correctOptionId;

  // Log to Decision Trail
  CascadeApp.decisionTrail.unshift({
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    questionId: q.id,
    type: 'MAIN_ATTEMPT',
    chosenOption: qState.selectedMainOption,
    isCorrect: isCorrect
  });
  localStorage.setItem('cascade_trail', JSON.stringify(CascadeApp.decisionTrail));

  if (isCorrect) {
    qState.status = 'mastered';
    renderPracticeSession();
  } else {
    // Incorrect answer!
    // Check user preference: if direct, open full explanation; if stepwise, trigger Step 1!
    if (CascadeApp.hintMode === 'direct') {
      openFullExplanationModal();
    } else {
      qState.status = 'stepwise';
      renderPracticeSession();
      // Scroll right panel into view on mobile
      if (window.innerWidth < 1024) {
        document.getElementById('stepwisePanelContainer').scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}

function handlePracticeHintRequest() {
  const qState = CascadeApp.questionData[CascadeApp.currentQuestionIndex];
  qState.status = 'stepwise';
  renderPracticeSession();
  if (window.innerWidth < 1024) {
    document.getElementById('stepwisePanelContainer').scrollIntoView({ behavior: 'smooth' });
  }
}

// STEPWISE PANEL CONTROLLER
function renderStepwisePanel() {
  const q = CASCADE_QUESTIONS[CascadeApp.currentQuestionIndex];
  const qState = CascadeApp.questionData[CascadeApp.currentQuestionIndex];
  const emptyState = document.getElementById('stepwiseEmptyState');
  const activeFlow = document.getElementById('stepwiseActiveFlow');
  const progressLabel = document.getElementById('stepwiseProgressLabel');

  if (qState.status === 'unattempted') {
    emptyState.classList.remove('hidden');
    activeFlow.classList.add('hidden');
    progressLabel.textContent = `Ready`;
    return;
  }

  emptyState.classList.add('hidden');
  activeFlow.classList.remove('hidden');

  const stepCount = q.stepwiseHints.length;
  const currentStepNum = Math.min(qState.stepProgress + 1, stepCount);
  progressLabel.textContent = `Step ${currentStepNum} of ${stepCount}`;

  const stack = document.getElementById('stepwiseNodesStack');
  stack.innerHTML = q.stepwiseHints.map((step, idx) => {
    // Only render steps that are unlocked so far
    if (idx > qState.stepProgress) return '';

    const attemptCount = qState.stepAttempts[idx] || 0;
    const choice = qState.stepChoices[idx];
    const isCompleted = choice && choice.isCorrect;
    const isRevealed = qState.stepRevealed[idx] === true;

    return `
      <div class="cascade-step-node ${isCompleted ? 'completed' : ''} bg-[var(--bg-subtle)] border border-[var(--border-color)] rounded-2xl p-4 sm:p-5 transition" id="stepNode_${idx}">
        
        <!-- Step Node Header -->
        <div class="flex items-center justify-between pb-2 mb-2 border-b border-[var(--border-color)]">
          <div class="flex items-center space-x-2">
            <span class="w-6 h-6 rounded-lg ${isCompleted ? 'bg-emerald-600 text-white' : 'bg-[#8b6f47] text-white'} text-xs font-bold flex items-center justify-center">
              ${isCompleted ? `<i data-lucide="check" class="w-3.5 h-3.5"></i>` : idx + 1}
            </span>
            <h4 class="font-bold text-xs sm:text-sm text-[var(--text-primary)]">${step.title}</h4>
          </div>

          <!-- Attempt Counter Badge (Attempt 1 of 2, Attempt 2 of 2) -->
          <div class="flex items-center space-x-1.5 text-[11px]">
            ${!isCompleted ? `
              <span class="px-2 py-0.5 rounded-full ${attemptCount >= 2 ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200' : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200'} font-semibold">
                Attempt ${Math.min(attemptCount + 1, 2)} of 2
              </span>
            ` : `
              <span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-semibold">
                Step Mastered
              </span>
            `}
          </div>
        </div>

        <!-- Step Short Instruction (1-2 lines) -->
        <div class="my-2 p-2.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-800/40 text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
          <div class="font-bold flex items-center space-x-1 mb-0.5">
            <i data-lucide="lightbulb" class="w-3.5 h-3.5 text-amber-500"></i>
            <span>Step Directive:</span>
          </div>
          <div>${step.instruction}</div>
        </div>

        <!-- 4 Multiple-Choice Options for this Step -->
        <div class="space-y-2 mt-3">
          ${step.options.map(opt => {
            const isOptSelected = choice && choice.optionId === opt.id;
            let optClass = "cascade-option-card p-2.5 rounded-xl border flex items-center justify-between text-xs font-medium transition";

            if (isOptSelected) {
              if (opt.isCorrect) optClass += " is-correct border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-100";
              else optClass += " is-incorrect animate-shake border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-950 dark:text-rose-100";
            } else if (isRevealed && opt.isCorrect) {
              optClass += " is-correct border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100 border-dashed";
            }

            return `
              <div onclick="selectStepOption(${idx}, '${opt.id}')" class="${optClass}">
                <div class="flex items-center space-x-2.5">
                  <span class="w-5 h-5 rounded-md bg-[var(--bg-surface)] font-bold text-[11px] flex items-center justify-center border border-[var(--border-color)]">
                    ${opt.id}
                  </span>
                  <div>${opt.text}</div>
                </div>
                ${isOptSelected && opt.isCorrect ? `<i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i>` : ''}
                ${isOptSelected && !opt.isCorrect ? `<i data-lucide="x-circle" class="w-4 h-4 text-rose-600"></i>` : ''}
              </div>
            `;
          }).join('')}
        </div>

        <!-- Gentle Feedback & Retry / Reveal Controls -->
        ${choice ? `
          <div class="mt-3 p-2.5 rounded-xl text-xs ${choice.isCorrect ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800' : 'bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 border border-rose-200 dark:border-rose-800'}">
            <div class="font-bold flex items-center space-x-1 mb-0.5">
              <i data-lucide="${choice.isCorrect ? 'check' : 'alert-circle'}" class="w-3.5 h-3.5"></i>
              <span>${choice.isCorrect ? 'Reinforcement:' : 'Gentle Correction:'}</span>
            </div>
            <div>${choice.feedback}</div>
            ${choice.isCorrect ? `<div class="mt-1 font-semibold text-emerald-800 dark:text-emerald-300">💡 Takeaway: ${step.takeaway}</div>` : ''}
          </div>
        ` : ''}

        <!-- Show Correct Step Button (Available after 2 failed attempts) -->
        ${!isCompleted && attemptCount >= 2 && !isRevealed ? `
          <div class="mt-3 pt-2 border-t border-[var(--border-color)] flex items-center justify-between">
            <span class="text-[11px] text-[var(--text-muted)]">Max attempts reached.</span>
            <button onclick="revealStepAnswer(${idx})" class="px-3 py-1.5 rounded-lg bg-[#f5ede2] dark:bg-[#342a1e] text-[#745a35] dark:text-[#d4b480] border border-[#e0d5c7] dark:border-indigo-800 font-semibold text-xs hover:bg-indigo-100 transition flex items-center space-x-1">
              <i data-lucide="eye" class="w-3.5 h-3.5"></i>
              <span>Reveal Step Solution</span>
            </button>
          </div>
        ` : ''}

      </div>
    `;
  }).join('');

  // Check if all steps done
  const allDone = q.stepwiseHints.every((_, idx) => {
    return (qState.stepChoices[idx] && qState.stepChoices[idx].isCorrect) || qState.stepRevealed[idx] === true;
  });

  const finalCard = document.getElementById('stepwiseFinalCard');
  if (allDone) {
    finalCard.classList.remove('hidden');
    qState.completedAllSteps = true;
    qState.status = 'mastered';
    qState.selectedMainOption = q.correctOptionId; // Auto-award final answer
  } else {
    finalCard.classList.add('hidden');
  }

  lucide.createIcons();
  setTimeout(() => renderMath(stack), 10);
}

// User selects an option inside a guided step
function selectStepOption(stepIdx, optionId) {
  const q = CASCADE_QUESTIONS[CascadeApp.currentQuestionIndex];
  const qState = CascadeApp.questionData[CascadeApp.currentQuestionIndex];
  const step = q.stepwiseHints[stepIdx];

  const chosenOpt = step.options.find(o => o.id === optionId);
  if (!chosenOpt) return;

  const currentAttempts = (qState.stepAttempts[stepIdx] || 0) + 1;
  qState.stepAttempts[stepIdx] = currentAttempts;

  qState.stepChoices[stepIdx] = {
    optionId: optionId,
    isCorrect: chosenOpt.isCorrect,
    feedback: chosenOpt.feedback
  };

  // Log to Decision Trail
  CascadeApp.decisionTrail.unshift({
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    questionId: q.id,
    type: 'STEPWISE_CHOICE',
    stepNumber: stepIdx + 1,
    optionChosen: optionId,
    isCorrect: chosenOpt.isCorrect,
    attemptNum: currentAttempts
  });
  localStorage.setItem('cascade_trail', JSON.stringify(CascadeApp.decisionTrail));

  if (chosenOpt.isCorrect) {
    // Unfold next step if this was the latest unlocked
    if (stepIdx === qState.stepProgress && qState.stepProgress < q.stepwiseHints.length - 1) {
      qState.stepProgress++;
    }
  }

  renderStepwisePanel();

  // Scroll to next step smoothly if newly unlocked
  if (chosenOpt.isCorrect && stepIdx < q.stepwiseHints.length - 1) {
    setTimeout(() => {
      const nextNode = document.getElementById(`stepNode_${stepIdx + 1}`);
      if (nextNode) nextNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 150);
  }
}

// Reveal Step Answer after 2 failed attempts
function revealStepAnswer(stepIdx) {
  const q = CASCADE_QUESTIONS[CascadeApp.currentQuestionIndex];
  const qState = CascadeApp.questionData[CascadeApp.currentQuestionIndex];
  const step = q.stepwiseHints[stepIdx];
  const correctOpt = step.options.find(o => o.isCorrect);

  qState.stepRevealed[stepIdx] = true;
  qState.stepChoices[stepIdx] = {
    optionId: correctOpt.id,
    isCorrect: true,
    feedback: `Revealed: ${correctOpt.feedback}`
  };

  // Unlock next step
  if (stepIdx === qState.stepProgress && qState.stepProgress < q.stepwiseHints.length - 1) {
    qState.stepProgress++;
  }

  renderStepwisePanel();
}

function goToNextPracticeQuestion() {
  if (CascadeApp.currentQuestionIndex < CASCADE_QUESTIONS.length - 1) {
    startPracticeSession(CascadeApp.currentQuestionIndex + 1);
  } else {
    startPracticeSession(0);
  }
}

// ============================================================
// SCREEN 3: QUESTION BANK BROWSER LOGIC
// ============================================================
function renderBrowserScreen() {
  const container = document.getElementById('browserCardsGrid');
  if (!container) return;

  const searchVal = (document.getElementById('browserSearchInput')?.value || '').toLowerCase();

  const filtered = CASCADE_QUESTIONS.filter(q => {
    const matchesSearch = q.title.toLowerCase().includes(searchVal) || 
                          q.topic.toLowerCase().includes(searchVal) ||
                          q.statement.toLowerCase().includes(searchVal);
    return matchesSearch;
  });

  container.innerHTML = filtered.map(q => {
    const qState = CascadeApp.questionData[q.index - 1];
    const isBookmarked = CascadeApp.bookmarks.includes(q.id);

    let statusBadge = `<span class="px-2 py-0.5 text-[11px] rounded bg-slate-100 dark:bg-slate-800 text-[var(--text-muted)] font-semibold">Unattempted</span>`;
    if (qState.status === 'mastered') {
      statusBadge = `<span class="px-2 py-0.5 text-[11px] rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold">Mastered</span>`;
    } else if (qState.status === 'stepwise') {
      statusBadge = `<span class="px-2 py-0.5 text-[11px] rounded bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 font-bold">Stepwise Active</span>`;
    }

    return `
      <div class="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[#8b6f47]/50 shadow-sm transition space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            ${statusBadge}
            <span class="text-xs font-semibold text-[#8b6f47] dark:text-[#c4a26e]">${q.title}</span>
          </div>
          <button onclick="toggleBookmark('${q.id}')" class="p-1 text-slate-400 hover:text-amber-500 transition">
            <i data-lucide="bookmark" class="w-4 h-4 ${isBookmarked ? 'text-amber-500 fill-amber-500' : ''}"></i>
          </button>
        </div>

        <div class="text-xs sm:text-sm text-[var(--text-primary)] font-medium line-clamp-3">
          ${q.statement}
        </div>

        <div class="flex flex-wrap items-center gap-1.5 pt-1">
          ${q.tags.map(t => `<span class="text-[10px] px-2 py-0.5 rounded bg-[var(--bg-subtle)] text-[var(--text-secondary)] font-medium">${t}</span>`).join('')}
        </div>

        <div class="pt-3 border-t border-[var(--border-color)] flex items-center justify-between">
          <button onclick="openFullExplanationForQuestion(${q.index - 1})" class="text-xs font-medium text-[var(--text-muted)] hover:text-[#8b6f47] transition flex items-center space-x-1">
            <i data-lucide="file-text" class="w-3.5 h-3.5"></i>
            <span>Full Solution</span>
          </button>
          <button onclick="startPracticeSession(${q.index - 1})" class="px-4 py-1.5 bg-[#8b6f47] hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow transition">
            Practice
          </button>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
  setTimeout(() => renderMath(container), 20);
}

// ============================================================
// SCREEN 4: ANALYTICS DASHBOARD LOGIC
// ============================================================
function renderAnalyticsScreen() {
  const mastered = CascadeApp.questionData.filter(q => q.status === 'mastered').length;
  const accuracy = Math.round((mastered / CASCADE_QUESTIONS.length) * 100);
  document.getElementById('analyticsAccuracyGauge').textContent = `${accuracy}%`;

  let totalStepAttempts = 0;
  let totalStepsCounted = 0;
  CascadeApp.questionData.forEach(q => {
    Object.values(q.stepAttempts).forEach(att => {
      totalStepAttempts += att;
      totalStepsCounted++;
    });
  });
  const avgAtt = totalStepsCounted > 0 ? (totalStepAttempts / totalStepsCounted).toFixed(1) : '1.0';
  document.getElementById('analyticsAvgAttempts').textContent = avgAtt;
  document.getElementById('analyticsTotalStepsDone').textContent = `${totalStepsCounted} Steps`;

  // Decision trail render
  const trailContainer = document.getElementById('analyticsStepTrail');
  const tutorTrail = document.getElementById('tutorTrailContent');

  const trailHtml = CascadeApp.decisionTrail.length === 0 ? 
    `<div class="text-[var(--text-muted)] py-4 text-center">No step decisions logged yet. Start a practice session!</div>` :
    CascadeApp.decisionTrail.slice(0, 15).map(event => {
      const isOk = event.isCorrect;
      return `
        <div class="p-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-subtle)] flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <span class="w-2 h-2 rounded-full ${isOk ? 'bg-emerald-500' : 'bg-rose-500'}"></span>
            <div>
              <span class="font-bold text-[var(--text-primary)]">${event.questionId}</span>
              <span class="text-[var(--text-muted)] ml-1">${event.type === 'MAIN_ATTEMPT' ? 'Main Answer' : `Step ${event.stepNumber}`}</span>
            </div>
          </div>
          <div class="text-right">
            <span class="font-semibold ${isOk ? 'text-emerald-600' : 'text-rose-600'}">${isOk ? 'Correct' : `Option ${event.chosenOption || event.optionChosen} (Wrong)`}</span>
            <div class="text-[10px] text-[var(--text-muted)]">${event.timestamp}</div>
          </div>
        </div>
      `;
    }).join('');

  if (trailContainer) trailContainer.innerHTML = trailHtml;
  if (tutorTrail) tutorTrail.innerHTML = trailHtml;
}

// ============================================================
// MODAL: FULL SINGLE-PAGE EXPLANATION LOGIC
// ============================================================
function openFullExplanationModal() {
  openFullExplanationForQuestion(CascadeApp.currentQuestionIndex);
}

function openFullExplanationForQuestion(qIdx) {
  const q = CASCADE_QUESTIONS[qIdx];
  const modal = document.getElementById('fullExplanationModal');
  const title = document.getElementById('modalFullTitle');
  const content = document.getElementById('modalFullContent');

  title.textContent = `${q.title} — Full Single-Page Solution`;

  content.innerHTML = `
    <!-- Problem Statement Block -->
    <div class="p-4 rounded-xl bg-[var(--bg-subtle)] border border-[var(--border-color)]">
      <div class="text-xs font-bold uppercase tracking-wider text-[#8b6f47] dark:text-[#c4a26e] mb-1">Problem Statement</div>
      <div class="text-sm sm:text-base font-normal text-[var(--text-primary)]">${q.statement}</div>
    </div>

    <!-- Strategy Overview -->
    <div class="p-4 rounded-xl bg-[#f5ede2]/70 dark:bg-[#342a1e]/40 border border-[#e0d5c7] dark:border-indigo-800 text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 leading-relaxed">
      <div class="font-bold flex items-center space-x-1.5 mb-1 text-indigo-800 dark:text-[#d4b480]">
        <i data-lucide="compass" class="w-4 h-4"></i>
        <span>Problem-Solving Strategy:</span>
      </div>
      <div>${q.directExplanation.overview}</div>
    </div>

    <!-- Complete Step-by-Step Derivation -->
    <div class="space-y-3">
      <h3 class="font-bold text-xs uppercase tracking-wider text-[var(--text-muted)]">Step-by-Step Mathematical Derivation</h3>
      ${q.directExplanation.steps.map(s => `
        <div class="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-1.5">
          <h4 class="font-bold text-xs sm:text-sm text-[var(--text-primary)]">${s.heading}</h4>
          <div class="overflow-x-auto text-xs sm:text-sm">\\[ ${s.detail} \\]</div>
        </div>
      `).join('')}
    </div>

    <!-- Theorems and Common Pitfalls -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <div class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200">
        <h4 class="font-bold flex items-center space-x-1.5 mb-2 text-emerald-800 dark:text-emerald-300">
          <i data-lucide="check-circle" class="w-4 h-4"></i>
          <span>Key Theorems Used</span>
        </h4>
        <ul class="space-y-1">
          ${q.directExplanation.theorems.map(t => `<li class="overflow-x-auto">\\[ ${t} \\]</li>`).join('')}
        </ul>
      </div>

      <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200">
        <h4 class="font-bold flex items-center space-x-1.5 mb-2 text-amber-800 dark:text-amber-300">
          <i data-lucide="alert-triangle" class="w-4 h-4"></i>
          <span>JEE Main Common Pitfall</span>
        </h4>
        <p class="leading-relaxed">${q.directExplanation.pitfall}</p>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  lucide.createIcons();
  setTimeout(() => renderMath(content), 10);
}

function closeFullExplanationModal() {
  document.getElementById('fullExplanationModal').classList.add('hidden');
}

// ============================================================
// TUTOR MODE DRAWER
// ============================================================
function openTutorDrawer() {
  document.getElementById('tutorDrawer').classList.remove('hidden');
  document.getElementById('tutorDrawer').classList.add('flex');
  renderAnalyticsScreen();
  lucide.createIcons();
}

function closeTutorDrawer() {
  document.getElementById('tutorDrawer').classList.add('hidden');
  document.getElementById('tutorDrawer').classList.remove('flex');
}

// Reset Progress
function resetAllProgress() {
  if (confirm("Reset all session attempts and question statuses?")) {
    CascadeApp.questionData.forEach(q => {
      q.status = 'unattempted';
      q.selectedMainOption = null;
      q.stepProgress = 0;
      q.stepAttempts = {};
      q.stepChoices = {};
      q.stepRevealed = {};
      q.completedAllSteps = false;
    });
    CascadeApp.decisionTrail = [];
    localStorage.removeItem('cascade_trail');
    alert("Session progress has been reset.");
    navigateTo('home');
  }
}

// EVENT LISTENERS INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  initThemeAndFont();

  // Navigation button listeners
  document.getElementById('btnThemeToggle').addEventListener('click', toggleTheme);
  document.getElementById('btnPracticeSubmit').addEventListener('click', handlePracticeSubmit);
  document.getElementById('btnPracticeHint').addEventListener('click', handlePracticeHintRequest);
  document.getElementById('btnOpenFullExplanation').addEventListener('click', openFullExplanationModal);
  document.getElementById('btnBookmarkToggle').addEventListener('click', () => {
    toggleBookmark(CASCADE_QUESTIONS[CascadeApp.currentQuestionIndex].id);
  });

  // Tutor Drawer listeners
  document.getElementById('btnOpenTutorDrawer').addEventListener('click', openTutorDrawer);
  document.getElementById('btnCloseTutorDrawer').addEventListener('click', closeTutorDrawer);

  // Settings dropdown
  const hintModeSelect = document.getElementById('settingHintMode');
  if (hintModeSelect) {
    hintModeSelect.value = CascadeApp.hintMode;
    hintModeSelect.addEventListener('change', (e) => {
      CascadeApp.hintMode = e.target.value;
      localStorage.setItem('cascade_hint_mode', CascadeApp.hintMode);
    });
  }

  // Browser search
  const searchInput = document.getElementById('browserSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', renderBrowserScreen);
  }

  // Escape closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeFullExplanationModal();
      closeTutorDrawer();
    }
  });

  navigateTo('home');
});
