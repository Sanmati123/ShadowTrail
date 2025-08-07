let mouseCount = 0;
let keyCount = 0;
let tabSwitches = 0;
let idleTime = 0;
let idleTimer;

document.addEventListener("mousemove", () => {
  mouseCount++;
  document.getElementById("mouseCount").textContent = mouseCount;
  resetIdleTime();
});

document.addEventListener("keydown", () => {
  keyCount++;
  document.getElementById("keyCount").textContent = keyCount;
  resetIdleTime();
});

// Track Tab Switches
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    tabSwitches++;
    document.getElementById("tabSwitches").textContent = tabSwitches;
  }
});

// Idle Time Tracker
function startIdleTimer() {
  idleTimer = setInterval(() => {
    idleTime++;
    document.getElementById("idleTime").textContent = idleTime;
  }, 1000);
}

function resetIdleTime() {
  idleTime = 0;
  document.getElementById("idleTime").textContent = idleTime;
}

// Start the idle timer when the page loads
startIdleTimer();
function downloadReport() {
  const report = `
ShadowTrail: Session Summary
----------------------------
Mouse Movements: ${mouseCount}
Key Presses: ${keyCount}
Tab Switches: ${tabSwitches}
Idle Time: ${idleTime} seconds
`;

  const blob = new Blob([report], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "ShadowTrail_Session.txt";
  link.click();
}
