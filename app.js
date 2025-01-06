// app.js
const shortTermGoals = [];
const midTermGoals = [];
const longTermGoals = [];

const setupButton = document.getElementById('setup-button');
const shortTermList = document.getElementById('short-term-goals');
const midTermList = document.getElementById('mid-term-goals');
const longTermList = document.getElementById('long-term-goals');

setupButton.addEventListener('click', () => {
    const goal = prompt('Zadejte nový cíl:');
    if (goal) {
        const type = prompt('Zadejte typ cíle (krátkodobý, střednědobý, dlouhodobý):').toLowerCase();
        if (type === 'krátkodobý') {
            shortTermGoals.push(goal);
            updateGoalList(shortTermList, shortTermGoals);
        } else if (type === 'střednědobý') {
            midTermGoals.push(goal);
            updateGoalList(midTermList, midTermGoals);
        } else if (type === 'dlouhodobý') {
            longTermGoals.push(goal);
            updateGoalList(longTermList, longTermGoals);
        } else {
            alert('Neplatný typ cíle!');
        }
    }
});

function updateGoalList(listElement, goals) {
    listElement.innerHTML = '';
    goals.forEach(goal => {
        const listItem = document.createElement('li');
        listItem.textContent = goal;
        listElement.appendChild(listItem);
    });
}
