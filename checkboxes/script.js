const toggles = document.querySelectorAll('.toggle');
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');
const free = document.getElementById('free');

toggles.forEach(toggle =>
  toggle.addEventListener('change', (e) => {
    const theClickedOne = e.target;

 
    if (theClickedOne === free && free.checked) {
      good.checked = false;
      cheap.checked = false;
      fast.checked = false;
      return; 
    }

  
    if (free.checked && (theClickedOne === good || theClickedOne === cheap || theClickedOne === fast)) {
      free.checked = false;
    }

  
    if (good.checked && cheap.checked && fast.checked) {
      if (theClickedOne === good) {
        fast.checked = false;
      }

      if (theClickedOne === cheap) {
        good.checked = false;
      }

      if (theClickedOne === fast) {
        cheap.checked = false;
      }
    }
  })
);