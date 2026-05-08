// ============ QUESTION DATA ============
const set1 = [
  { q: "How do we break up broadcast domains in a switched internetwork?", opts: ["By creating VLANs","By adding more routers","By creating subnets","By using more cables"], ans: 0 },
  { q: "Switch ports associated with only one VLAN are called:", opts: ["Trunk ports","Access ports","Hybrid ports","Layer 3 ports"], ans: 1 },
  { q: "Access ports:", opts: ["Carry traffic for multiple VLANs","Tag frames for all VLANs","Belong to one VLAN and send/receive untagged traffic","Are only used between switches"], ans: 2 },
  { q: "To configure trunking on a FastEthernet port, you use:", opts: ["switchport mode access","vlan [number]","interface range","switchport mode trunk"], ans: 3 },
  { q: "The 2960 switch supports which encapsulation method?", opts: ["ISL","HDLC","IEEE 802.1Q","PPP"], ans: 2 },
  { q: "A trunk port is used to:", opts: ["Connect a PC to a switch","Carry traffic for multiple VLANs","Disable VLANs","Assign IP addresses"], ans: 1 },
  { q: "VLAN stands for:", opts: ["Virtual Local Area Network","Very Large Area Network","Virtual Link Access Node","Variable LAN Number"], ans: 0 },
  { q: "Which command is used to create a VLAN in a switch?", opts: ["vlan [number]","ip vlan","create vlan","switch vlan"], ans: 0 },
  { q: "Which device normally uses an access port?", opts: ["Router","PC","Switch","Server"], ans: 1 },
  { q: "Which command is used to assign a port to a VLAN?", opts: ["switchport access vlan [number]","trunk vlan [number]","vlan trunk [number]","access mode vlan"], ans: 0 }
];

const set2 = [
  { q: "Creating VLANs without buying another switch allows:", opts: ["One broadcast domain","Two switches","Fewer subnets","Two or more separate LANs"], ans: 3 },
  { q: "Trunk ports:", opts: ["Belong to only one VLAN","Cannot carry VLAN traffic","Carry traffic of multiple VLANs","Are slower than access ports"], ans: 2 },
  { q: "ISL (Inter-Switch Link) is used for:", opts: ["Assigning IP addresses","Tagging VLAN information onto Ethernet frames","Configuring access ports","Increasing bandwidth"], ans: 1 },
  { q: "To verify VLAN configuration, you use:", opts: ["ping","traceroute","show vlan","ipconfig"], ans: 2 },
  { q: "To assign a port to a specific VLAN, use:", opts: ["switchport trunk","switchport access","interface range vlan","vlan trunk encapsulation"], ans: 1 },
  { q: "VLAN stands for:", opts: ["Virtual Local Area Network","Very Large Area Network","Virtual Link Access Network","Variable LAN"], ans: 0 },
  { q: "A VLAN is mainly used to:", opts: ["Increase cable length","Divide a network into logical groups","Replace routers","Increase internet speed"], ans: 1 },
  { q: "Which device commonly connects to an access port?", opts: ["Router","PC","Switch","Firewall"], ans: 1 },
  { q: "Which command is used to create a VLAN on a Cisco switch?", opts: ["create vlan","vlan [number]","switchport vlan","add vlan"], ans: 1 },
  { q: "Which type of port is usually used between two switches?", opts: ["Access port","Console port","Trunk port","Ethernet port"], ans: 2 }
];

const set3 = [
  { q: "DHCP is mainly used to:", opts: ["Block network traffic","Control switches","Turn off computers","Give IP addresses automatically"], ans: 3 },
  { q: "Port security is used to:", opts: ["Increase speed","Control MAC addresses","Change IP address","Enable routing"], ans: 1 },
  { q: "Without DHCP relay, the router will:", opts: ["Forward broadcasts","Save requests","Discard DHCP broadcasts","Assign IPs"], ans: 2 },
  { q: "If port security rules are violated, the port may:", opts: ["Work faster","Ignore the device","Restrict or shut down","Change VLAN"], ans: 2 },
  { q: "Reserved IP addresses should be used for:", opts: ["Servers","Mobile phones","Guests","Students"], ans: 0 },
  { q: "Creating VLANs without buying another switch allows:", opts: ["One broadcast domain","Two switches","Fewer subnets","Two or more separate LANs"], ans: 3 },
  { q: "Trunk ports:", opts: ["Belong to only one VLAN","Cannot carry VLAN traffic","Carry traffic of multiple VLANs","Are slower than access ports"], ans: 2 },
  { q: "ISL (Inter-Switch Link) is used for:", opts: ["Assigning IP addresses","Tagging VLAN information onto Ethernet frames","Configuring access ports","Increasing bandwidth"], ans: 1 },
  { q: "To verify VLAN configuration, you use:", opts: ["ping","traceroute","show vlan","ipconfig"], ans: 2 },
  { q: "To assign a port to a specific VLAN, use:", opts: ["switchport trunk","switchport access","interface range vlan","vlan trunk encapsulation"], ans: 1 }
];

const set4 = [
  { q: "Which command enables DHCP service on a Cisco router?", opts: ["service dhcp","ip dhcp enable","dhcp start","enable dhcp"], ans: 0 },
  { q: "Which VLAN is the default VLAN on Cisco switches?", opts: ["VLAN 0","VLAN 1","VLAN 100","VLAN 255"], ans: 1 },
  { q: "Access ports are mainly connected to:", opts: ["Routers","Switches","End devices","Servers only"], ans: 2 },
  { q: "Which command is used to create a VLAN?", opts: ["switchport vlan","interface vlan","vlan [number]","ip vlan"], ans: 2 },
  { q: "What is the purpose of a trunk link?", opts: ["Block VLAN traffic","Connect multiple VLANs between switches","Assign IP addresses","Improve wireless signal"], ans: 1 },
  { q: "Which protocol is commonly used for VLAN tagging today?", opts: ["HTTP","FTP","802.1Q","ARP"], ans: 2 },
  { q: "Which command shows the MAC addresses learned by a switch?", opts: ["show ip route","show mac address-table","show vlan brief","show interfaces"], ans: 1 },
  { q: "DHCP stands for:", opts: ["Dynamic Host Configuration Protocol","Data Host Control Protocol","Dynamic Hardware Configuration Process","Device Host Communication Protocol"], ans: 0 },
  { q: "Which device separates broadcast domains using VLANs?", opts: ["Hub","Repeater","Switch","Access Point"], ans: 2 },
  { q: "What happens if two devices have the same IP address?", opts: ["Network works normally","Faster communication","IP conflict occurs","VLAN changes automatically"], ans: 2 }
];

const descriptiveQuestions = [
  {
    q: "What are port security violation modes?",
    a: "Port security has three violation modes:\n\n• <strong>Protect</strong> — Drops packets from unknown MAC addresses silently. No log or alert is generated. The port stays up.\n\n• <strong>Restrict</strong> — Drops packets from unknown MAC addresses but sends an SNMP trap and logs the violation. The port stays up.\n\n• <strong>Shutdown</strong> (default) — Puts the port into an error-disabled state immediately. The port is effectively shut down and must be manually re-enabled with <code>shutdown</code> then <code>no shutdown</code>."
  },
  {
    q: "What is Router on a Stick?",
    a: "Router on a Stick is a method of inter-VLAN routing where a single physical router interface is divided into multiple sub-interfaces — one for each VLAN. The router connects to the switch via a single trunk link. Each sub-interface is configured with an IP address that acts as the default gateway for its VLAN. This allows traffic to be routed between VLANs without needing a separate physical interface for each one."
  },
  {
    q: "What is the difference between Access port and Trunk port?",
    a: "<strong>Access Port:</strong> Belongs to a single VLAN only. It carries untagged traffic and is typically connected to end devices like PCs, printers, and IP phones.\n\n<strong>Trunk Port:</strong> Carries traffic for multiple VLANs simultaneously using VLAN tagging (802.1Q). It is used to connect switches to other switches or to routers performing inter-VLAN routing.\n\nIn short — access ports serve individual devices, trunk ports serve the network backbone."
  }
];

const allQuestions = [...set1, ...set2, ...set3, ...set4];
const TOTAL_MCQ = allQuestions.length; // 40
const letters = ['a','b','c','d'];

// ============ STATE ============
let currentMode = '';
let currentSet = 1;
let currentQ = 0;
let userAnswers = new Array(TOTAL_MCQ).fill(-1);
let lockedQuestions = new Array(TOTAL_MCQ).fill(false);
let timerInterval = null;
let elapsedSeconds = 0;

// ============ NETWORK CANVAS BACKGROUND ============
const canvas = document.getElementById('networkCanvas');
const ctx = canvas.getContext('2d');
let nodes = [];
let animFrame;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function initNodes() {
  nodes = [];
  const count = window.innerWidth < 600 ? 30 : 60;
  for (let i = 0; i < count; i++) {
    nodes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1
    });
  }
}

function drawNetwork() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const maxDist = 150;
  for (let i = 0; i < nodes.length; i++) {
    const a = nodes[i];
    a.x += a.vx; a.y += a.vy;
    if (a.x < 0 || a.x > canvas.width) a.vx *= -1;
    if (a.y < 0 || a.y > canvas.height) a.vy *= -1;
    ctx.beginPath();
    ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,240,255,0.25)';
    ctx.fill();
    for (let j = i + 1; j < nodes.length; j++) {
      const b = nodes[j];
      const dx = a.x - b.x, dy = a.y - b.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDist) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(123,97,255,${0.08 * (1 - dist / maxDist)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
  animFrame = requestAnimationFrame(drawNetwork);
}

resizeCanvas();
initNodes();
drawNetwork();
window.addEventListener('resize', () => { resizeCanvas(); initNodes(); });

// ============ PARTICLES ============
function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.background = Math.random() > 0.5 ? 'var(--cyan)' : 'var(--purple)';
    p.style.animationDuration = (Math.random() * 15 + 10) + 's';
    p.style.animationDelay = (Math.random() * 15) + 's';
    container.appendChild(p);
  }
}
createParticles();

// ============ PAGE NAVIGATION ============
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goHome() {
  clearInterval(timerInterval);
  showPage('landingPage');
}

// ============ STUDY MODE ============
function startMode(mode) {
  currentMode = mode;
  if (mode === 'study') {
    currentSet = 1;
    renderStudyCards();
    showPage('studyPage');
    document.querySelectorAll('.set-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
  } else {
    startExam();
  }
}

function switchSet(num) {
  currentSet = num;
  document.querySelectorAll('.set-btn').forEach((b, i) => b.classList.toggle('active', i === num - 1));
  renderStudyCards();
}

function getSetData(num) {
  if (num === 1) return set1;
  if (num === 2) return set2;
  if (num === 3) return set3;
  if (num === 4) return set4;
  return [];
}

function renderStudyCards() {
  const container = document.getElementById('studyContainer');
  container.innerHTML = '';

  if (currentSet === 5) {
    // Descriptive questions
    descriptiveQuestions.forEach((item, i) => {
      const card = document.createElement('div');
      card.className = 'study-card descriptive-card';
      card.innerHTML = `
        <div class="study-q-num">Descriptive Question ${i + 1}</div>
        <div class="study-q-text">${item.q}</div>
        <div class="descriptive-answer">
          <div class="desc-answer-label">Answer:</div>
          <div class="desc-answer-text">${item.a}</div>
        </div>
      `;
      container.appendChild(card);
    });
  } else {
    const data = getSetData(currentSet);
    data.forEach((item, i) => {
      const card = document.createElement('div');
      card.className = 'study-card';
      card.innerHTML = `
        <div class="study-q-num">Question ${i + 1}</div>
        <div class="study-q-text">${item.q}</div>
        <div class="study-options">
          ${item.opts.map((opt, j) => `
            <div class="study-opt ${j === item.ans ? 'correct' : ''}">
              <span>${opt}</span>
            </div>
          `).join('')}
        </div>
      `;
      container.appendChild(card);
    });
  }
  container.scrollTop = 0;
}

// ============ EXAM MODE ============
function startExam() {
  currentQ = 0;
  userAnswers = new Array(TOTAL_MCQ).fill(-1);
  lockedQuestions = new Array(TOTAL_MCQ).fill(false);
  elapsedSeconds = 0;
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    elapsedSeconds++;
    const m = String(Math.floor(elapsedSeconds / 60)).padStart(2, '0');
    const s = String(elapsedSeconds % 60).padStart(2, '0');
    document.getElementById('timerDisplay').textContent = `${m}:${s}`;
  }, 1000);
  showPage('examPage');
  renderDots();
  renderQuestion();
}

function renderDots() {
  const container = document.getElementById('qDots');
  container.innerHTML = '';
  for (let i = 0; i < TOTAL_MCQ; i++) {
    const dot = document.createElement('div');
    let cls = 'q-dot';
    if (i === currentQ) cls += ' active';
    if (lockedQuestions[i]) {
      cls += userAnswers[i] === allQuestions[i].ans ? ' dot-correct' : ' dot-wrong';
    } else if (userAnswers[i] >= 0) {
      cls += ' answered';
    }
    dot.className = cls;
    dot.onclick = () => { currentQ = i; renderQuestion(); };
    container.appendChild(dot);
  }
}

function renderQuestion() {
  const item = allQuestions[currentQ];
  const isLocked = lockedQuestions[currentQ];
  document.getElementById('qNumber').textContent = `Question ${currentQ + 1} / ${TOTAL_MCQ}`;
  document.getElementById('qText').textContent = item.q;

  const optContainer = document.getElementById('qOptions');
  optContainer.innerHTML = '';
  item.opts.forEach((opt, i) => {
    const btn = document.createElement('div');
    let cls = 'q-opt';
    if (isLocked) {
      cls += ' disabled';
      if (i === item.ans) cls += ' correct';
      else if (i === userAnswers[currentQ] && i !== item.ans) cls += ' wrong';
    }
    btn.className = cls;
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span>${opt}</span>`;
    if (!isLocked) btn.onclick = () => selectAnswer(i);
    optContainer.appendChild(btn);
  });

  // Feedback message
  let existingFeedback = document.getElementById('feedbackMsg');
  if (existingFeedback) existingFeedback.remove();
  if (isLocked) {
    const fb = document.createElement('div');
    fb.id = 'feedbackMsg';
    const wasCorrect = userAnswers[currentQ] === item.ans;
    fb.className = 'feedback-msg ' + (wasCorrect ? 'fb-correct' : 'fb-wrong');
    fb.innerHTML = wasCorrect
      ? '✓ وەڵامەکەت دروستە!'
      : `✗ هەڵە! وەڵامی دروست: <strong>${letters[item.ans]}) ${item.opts[item.ans]}</strong>`;
    optContainer.after(fb);
  }

  // Progress
  const answered = userAnswers.filter(a => a >= 0).length;
  document.getElementById('examProgressFill').style.width = ((answered / TOTAL_MCQ) * 100) + '%';
  document.getElementById('examProgressText').textContent = `${currentQ + 1} / ${TOTAL_MCQ}`;

  // Nav buttons
  document.getElementById('prevBtn').disabled = currentQ === 0;
  const nextBtn = document.getElementById('nextBtn');
  if (currentQ === TOTAL_MCQ - 1) {
    nextBtn.innerHTML = `تەواوکردن <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 7"/></svg>`;
    nextBtn.className = 'nav-btn finish';
  } else {
    nextBtn.innerHTML = `دواتر <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l7-7-7-7"/></svg>`;
    nextBtn.className = 'nav-btn primary';
  }

  renderDots();
}

function selectAnswer(idx) {
  if (lockedQuestions[currentQ]) return;

  userAnswers[currentQ] = idx;
  lockedQuestions[currentQ] = true;

  const item = allQuestions[currentQ];
  const isCorrect = idx === item.ans;
  const opts = document.querySelectorAll('.q-opt');

  opts.forEach((o, i) => {
    o.classList.add('disabled');
    if (i === item.ans) {
      o.classList.add('correct');
    }
    if (i === idx && !isCorrect) {
      o.classList.add('wrong');
      o.style.animation = 'shake .4s ease';
    }
  });

  // Show feedback message
  let existingFeedback = document.getElementById('feedbackMsg');
  if (existingFeedback) existingFeedback.remove();
  const fb = document.createElement('div');
  fb.id = 'feedbackMsg';
  fb.className = 'feedback-msg ' + (isCorrect ? 'fb-correct' : 'fb-wrong');
  fb.innerHTML = isCorrect
    ? '✓ وەڵامەکەت دروستە!'
    : `✗ هەڵە! وەڵامی دروست: <strong>${letters[item.ans]}) ${item.opts[item.ans]}</strong>`;
  document.getElementById('qOptions').after(fb);

  renderDots();

  // Update progress
  const answered = userAnswers.filter(a => a >= 0).length;
  document.getElementById('examProgressFill').style.width = ((answered / TOTAL_MCQ) * 100) + '%';

  // Auto-advance to next question after a delay
  if (currentQ < TOTAL_MCQ - 1) {
    setTimeout(() => {
      currentQ++;
      renderQuestion();
    }, 1500);
  }
}

function nextQuestion() {
  if (currentQ === TOTAL_MCQ - 1) {
    finishExam();
  } else {
    currentQ++;
    renderQuestion();
  }
}

function prevQuestion() {
  if (currentQ > 0) {
    currentQ--;
    renderQuestion();
  }
}

// ============ RESULTS ============
function finishExam() {
  clearInterval(timerInterval);
  let correct = 0;
  userAnswers.forEach((a, i) => { if (a === allQuestions[i].ans) correct++; });
  const wrong = TOTAL_MCQ - correct;
  const pct = correct / TOTAL_MCQ;

  showPage('resultsPage');

  // Trophy
  const trophy = document.getElementById('resultsTrophy');
  trophy.textContent = pct >= 0.9 ? '🏆' : pct >= 0.7 ? '🎉' : pct >= 0.5 ? '💪' : '📚';

  // Title
  const title = document.getElementById('resultsTitle');
  title.textContent = pct >= 0.9 ? 'نایاب بوو! 🌟' : pct >= 0.7 ? 'زۆر باش بوو!' : pct >= 0.5 ? 'باش بوو!' : 'هەوڵ بدەوە!';

  // Animate score
  document.getElementById('scoreNum').textContent = '0';
  document.getElementById('correctCount').textContent = '0';
  document.getElementById('wrongCount').textContent = '0';
  const m = String(Math.floor(elapsedSeconds / 60)).padStart(1, '0');
  const s = String(elapsedSeconds % 60).padStart(2, '0');
  document.getElementById('totalTime').textContent = `${m}:${s}`;

  // Update score label
  document.getElementById('scoreLabel').textContent = `لە ${TOTAL_MCQ}`;

  // Score ring animation
  const circle = document.getElementById('scoreCircle');
  const circumference = 2 * Math.PI * 85;
  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = circumference;
  setTimeout(() => {
    circle.style.transition = 'stroke-dashoffset 1.5s ease-out';
    circle.style.strokeDashoffset = circumference * (1 - pct);
  }, 300);

  // Counter animation
  animateCounter('scoreNum', correct, 1200);
  animateCounter('correctCount', correct, 1000);
  animateCounter('wrongCount', wrong, 1000);

  // Confetti for good scores
  if (pct >= 0.7) launchConfetti();

  // Review cards
  const reviewContainer = document.getElementById('resultsReview');
  reviewContainer.innerHTML = '<h3 style="font-size:1rem;color:var(--text2);text-align:center;margin-bottom:.3rem">پێداچوونەوەی وەڵامەکان</h3>';
  allQuestions.forEach((item, i) => {
    const isCorrect = userAnswers[i] === item.ans;
    const card = document.createElement('div');
    card.className = 'review-card' + (isCorrect ? '' : ' incorrect');
    card.style.animationDelay = (i * 0.04) + 's';
    const userAnsText = userAnswers[i] >= 0 ? `${letters[userAnswers[i]]} — ${item.opts[userAnswers[i]]}` : 'No answer';
    card.innerHTML = `
      <div class="review-q"><strong>Q${i + 1}.</strong> ${item.q}</div>
      <div class="review-info">
        ${isCorrect
          ? `<span class="correct-ans">✓ ${letters[item.ans]} — ${item.opts[item.ans]}</span>`
          : `<span class="your-ans">✗ Your: ${userAnsText}</span> → <span class="correct-ans">✓ ${letters[item.ans]} — ${item.opts[item.ans]}</span>`
        }
      </div>
    `;
    reviewContainer.appendChild(card);
  });
}

function animateCounter(id, target, duration) {
  const el = document.getElementById(id);
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ============ CONFETTI ============
function launchConfetti() {
  const c = document.getElementById('confettiCanvas');
  const cctx = c.getContext('2d');
  c.width = window.innerWidth;
  c.height = window.innerHeight;

  const pieces = [];
  const colors = ['#00f0ff','#7b61ff','#ff6b9d','#00e676','#ffd740','#ff5252'];
  for (let i = 0; i < 120; i++) {
    pieces.push({
      x: Math.random() * c.width,
      y: Math.random() * c.height - c.height,
      w: Math.random() * 10 + 5,
      h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      vy: Math.random() * 3 + 2,
      vx: (Math.random() - 0.5) * 2,
      rot: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      opacity: 1
    });
  }

  let frame = 0;
  function draw() {
    cctx.clearRect(0, 0, c.width, c.height);
    let alive = false;
    pieces.forEach(p => {
      if (p.opacity <= 0) return;
      alive = true;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.rotSpeed;
      if (frame > 120) p.opacity -= 0.01;
      cctx.save();
      cctx.translate(p.x, p.y);
      cctx.rotate(p.rot * Math.PI / 180);
      cctx.globalAlpha = Math.max(0, p.opacity);
      cctx.fillStyle = p.color;
      cctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      cctx.restore();
    });
    frame++;
    if (alive) requestAnimationFrame(draw);
    else cctx.clearRect(0, 0, c.width, c.height);
  }
  draw();
}
