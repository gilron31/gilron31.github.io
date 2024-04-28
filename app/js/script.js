console.log('Hello WIDIU');

sidebar_state = 'open';

function toggleNav() {
  if (sidebar_state == 'open') {
    document.getElementById('mySidebar').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
    sidebar_state = 'closed';
  } else if (sidebar_state == 'closed') {
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    sidebar_state = 'open';
  } else {
    console.log('Error: ' + sidebar_state);
  }
}
