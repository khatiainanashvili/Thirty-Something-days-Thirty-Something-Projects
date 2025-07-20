const toggles = document.querySelectorAll('.toggle');
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');
const free = document.getElementById('free');

toggles.forEach(toggle =>
  toggle.addEventListener('change', (e) => {
    const theClickedOne = e.target;

     first
    if (theClickedOne === free && free.checked) {
      // Free turned on: disable all others immediately
      good.checked = false;
      cheap.checked = false;
      fast.checked = false;
      return; // Done
    }

    
    if ((theClickedOne === good || theClickedOne === cheap || theClickedOne === fast) && theClickedOne.checked) {
      free.checked = false;
    }

    // Now, apply your original 4-toggle interaction logic:
    if (good.checked && cheap.checked && fast.checked && free.checked) {
      if (free === theClickedOne) {
        cheap.checked = false;
        good.checked = false;
        fast.checked = false;
      }

      if (good === theClickedOne) {
        fast.checked = false;
        free.checked = false;
      }

      if (cheap === theClickedOne) {
        good.checked = false;
        free.checked = false;
      }

      if (fast === theClickedOne) {
        cheap.checked = false;
        free.checked = false;
      }
    }
  })
);