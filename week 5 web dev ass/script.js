// ---------- script.js ----------
// Toggle between the two loop examples each time button is clicked
let _toggle = false;
generateListBtn.addEventListener('click', () => {
loopList.innerHTML = '';
if (!_toggle) populateWithForLoop();
else populateWithForEach();
_toggle = !_toggle;
});




// -----------------------
// Part 4 — At least 3 DOM interactions
// -----------------------


// Already used: #1 update textContent, #2 addEventListener, #3 createElement
// More DOM interactions below:


// 4) querySelectorAll to attach handlers to palette buttons
const colorButtons = document.querySelectorAll('.color-btn');
colorButtons.forEach(btn => {
btn.addEventListener('click', (e) => {
const color = btn.dataset.color;
document.body.style.backgroundColor = color; // DOM interaction #4: modify style
});
});


// 5) dynamic list: read input, create element, append
const addItemBtn = document.getElementById('add-item');
const newItemInput = document.getElementById('new-item');
const dynamicList = document.getElementById('dynamic-list');


addItemBtn.addEventListener('click', () => {
const text = newItemInput.value.trim();
if (!text) return; // guard
const li = createListItem(text);
// example of attaching an event to the created element
li.addEventListener('click', () => li.remove()); // click to remove — DOM interaction #5: remove on event
dynamicList.appendChild(li); // DOM interaction #6: appendChild
newItemInput.value = '';
});


// Bonus small utility: toggleTheme (another custom function)
function toggleTheme() {
const current = document.body.dataset.theme || 'light';
document.body.dataset.theme = (current === 'light') ? 'dark' : 'light';
}


// Expose a quick keyboard shortcut to increase score (Enter)
document.addEventListener('keydown', (e) => {
if (e.key === 'Enter') updateScore(1);
});


// End of script.js