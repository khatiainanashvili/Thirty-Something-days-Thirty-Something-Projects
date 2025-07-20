const toggles = document.querySelectorAll('.toggle');
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');
const free = document.getElementById('free');

toggles.forEach(toggle =>
  toggle.addEventListener('change', (e) => {
    const clicked = e.target;

   
    if (clicked === free && free.checked) {
      good.checked = false;
      cheap.checked = false;
      fast.checked = false;
      return; 
    }

    
    if ((clicked === good || clicked === cheap || clicked === fast) && clicked.checked) {
      free.checked = false;
    }

    if (good.checked && cheap.checked && fast.checked && free.checked) {
      if (free === clicked) {
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