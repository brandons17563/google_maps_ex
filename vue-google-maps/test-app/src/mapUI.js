const addTitle = (controlDiv) => {
  console.log('Adding Title');
  // Set CSS for the control border.
  const controlUI = document.createElement('div');
  controlUI.id = 'title';
  controlUI.classList.add('map-title');
  controlUI.style.width = '100%';
  controlUI.style.height = '100px';
  controlUI.style.backgroundColor = 'none';
  controlUI.style.textShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'My mApp';
  controlDiv.appendChild(controlUI);
  // Set CSS for the control interior.
  const controlText = document.createElement('div');
  controlText.style.color = '#fff';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '16px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = '<h1>My mApp</h1>';
  controlUI.appendChild(controlText);
  return;

}

const addZoomIn = (controlDiv) => {
  console.log('Adding zoom');
  // Set CSS for the control border.
  const controlUI = document.createElement('div');
  controlUI.id = 'zoomControl';
  controlUI.class = 'map';
  controlUI.style.width = '75px';
  controlUI.style.height = '75px';
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '100%';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.marginBottom = '15px';
  controlUI.style.marginLeft = '30px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to zoom in';
  controlDiv.appendChild(controlUI);
  // Set CSS for the control interior.
  const controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '30px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.style.paddingTop = '16px';
  controlText.innerHTML = '<i class="fa fa-search-plus" aria-hidden="true"></i>';
  controlUI.appendChild(controlText);
  return;
}
const addZoomOut = (controlDiv) => {
  console.log('Adding zoom');
   // Set CSS for the control border.
   const controlUI = document.createElement('div');
   controlUI.id = 'zoomControl';
   controlUI.class = 'map';
   controlUI.style.width = '75px';
   controlUI.style.height = '75px';
   controlUI.style.backgroundColor = '#fff';
   controlUI.style.border = '2px solid #fff';
   controlUI.style.borderRadius = '100%';
   controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
   controlUI.style.cursor = 'pointer';
   controlUI.style.marginLeft = '30px';
   controlUI.style.marginBottom = '15px';
   controlUI.style.textAlign = 'center';
   controlUI.title = 'Click to zoom out';
   controlDiv.appendChild(controlUI);
   // Set CSS for the control interior.
   const controlText = document.createElement('div');
   controlText.style.color = 'rgb(25,25,25)';
   controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
   controlText.style.fontSize = '30px';
   controlText.style.lineHeight = '38px';
   controlText.style.paddingLeft = '5px';
   controlText.style.paddingRight = '5px';
   controlText.style.paddingTop = '16px';
   controlText.innerHTML = '<i class="fa fa-search-minus" aria-hidden="true"></i>';
   controlUI.appendChild(controlText);
   return;

}

const addSidebarToggle = (controlDiv) => {
  console.log('Adding Sidebar Toggle');
  // Set CSS for the control border.
  const controlUI = document.createElement('div');
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.margin = '30px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to toggle the sidbar';
  controlDiv.appendChild(controlUI);
  // Set CSS for the control interior.
  const controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '20px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = '<i class="fas fa-bars"></i>';
  controlUI.appendChild(controlText);
  return;

}

const addPinControl = (controlDiv) => {
  // Set CSS for the control border.
  const controlUI = document.createElement('div');
  controlUI.id = 'rightControl';
  controlUI.style.width = '75px';
  controlUI.style.height = '75px';
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '100%';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.margin = '30px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to add a pin';
  controlDiv.appendChild(controlUI);
  // Set CSS for the control interior.
  const controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '30px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.style.paddingTop = '16px';
  controlText.innerHTML = '<i class="fas fa-map-pin"></i>';
  controlUI.appendChild(controlText);

}

export default {
  addTitle,
  addZoomIn,
  addZoomOut,
  addSidebarToggle,
  addPinControl,

}
