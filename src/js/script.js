sidebar_state = 'open';
sidebar_width = '150px';

function toggleNav() {
  if (sidebar_state == 'open') {
    document.getElementById('mySidebar').style.width = sidebar_width;
    document.getElementById('main').style.marginLeft = sidebar_width;
    sidebar_state = 'closed';
  } else if (sidebar_state == 'closed') {
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    sidebar_state = 'open';
  } else {
    console.log('Error: ' + sidebar_state);
  }
}
