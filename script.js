const hamburguerMenu = document.querySelector('.container-menu')
function changeDisplay() {
    const myLinks = document.querySelector(".my-links");
    if (myLinks.classList.contains('active')) {
      myLinks.classList.remove('active');
      myLinks.classList.add('unactive')
      hamburguerMenu.classList.toggle("change");
    } else {
      myLinks.classList.remove('unactive');
      myLinks.classList.add('active')
      hamburguerMenu.classList.toggle("change");
    }
}

const project01 = document.getElementById('project-01');
const project02 = document.getElementById('project-02');
const project03 = document.getElementById('project-03');
const project04 = document.getElementById('project-04');

function changeVisibleProject(projectToNone, projectToInline) {
  projectToInline.classList.remove('project-not-select')
  projectToInline.classList.add('project-select');
  projectToNone.classList.remove('project-select')
  projectToNone.classList.add('project-not-select')
}

function changeProjectsleft() {
  if(project01.classList.contains('project-select')) {
    changeVisibleProject(project01, project03);
  } else if(project02.classList.contains('project-select')) {
    changeVisibleProject(project02, project01);
  } else if(project03.classList.contains('project-select')) {
    changeVisibleProject(project03, project02);
  }
}

function changeProjectsRight() {
  if(project01.classList.contains('project-select')) {
    changeVisibleProject(project01, project02);
  } else if(project02.classList.contains('project-select')) {
    changeVisibleProject(project02, project03);
  } else if(project03.classList.contains('project-select')) {
    changeVisibleProject(project03, project01);
  }
}

const arrowLeftBtn = document.querySelector('#arrow-left')
const arrowRightBtn = document.querySelector('#arrow-right')
window.onload = () => {
    hamburguerMenu.addEventListener('click', changeDisplay);
    arrowLeftBtn.addEventListener('click', changeProjectsleft);
    arrowRightBtn.addEventListener('click', changeProjectsRight);
}