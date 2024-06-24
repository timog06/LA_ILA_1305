document.addEventListener('DOMContentLoaded', function() {
    const addProjectBtn = document.getElementById('add-project-btn');
    const projectsContainer = document.getElementById('projects-container');
    const projectPopup = document.getElementById('projectPopup');
    const newProjectForm = document.getElementById('newProjectForm');
    const closePopupBtn = document.getElementById('closePopup');
    const deleteConfirmPopup = document.getElementById('deleteConfirmPopup');
    const confirmDeleteBtn = document.getElementById('confirmDelete');
    const cancelDeleteBtn = document.getElementById('cancelDelete');
    let projectToDelete = null;

    addProjectBtn.addEventListener('click', function(e) {
        e.preventDefault();
        projectPopup.style.display = 'block';
    });

    closePopupBtn.addEventListener('click', function() {
        projectPopup.style.display = 'none';
    });

    newProjectForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('projectName').value;
        const github = document.getElementById('projectGithub').value;
        const description = document.getElementById('projectDescription').value;

        if (name && github && description) {
            addProject(name, github, description);
            projectPopup.style.display = 'none';
            newProjectForm.reset();
        } else {
            alert('Bitte füllen Sie alle Felder aus.');
        }
    });

    function addProject(name, github, description) {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
            <h3>${name}</h3>
            <p><strong>GitHub:</strong> <a href="${github}" target="_blank">${github}</a></p>
            <p><strong>Beschreibung:</strong> ${description}</p>
            <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
        `;
        projectsContainer.appendChild(projectElement);

        const deleteBtn = projectElement.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            projectToDelete = projectElement;
            deleteConfirmPopup.style.display = 'block';
        });
    }

    confirmDeleteBtn.addEventListener('click', function() {
        if (projectToDelete) {
            projectToDelete.remove();
            projectToDelete = null;
            deleteConfirmPopup.style.display = 'none';
        }
    });

    cancelDeleteBtn.addEventListener('click', function() {
        projectToDelete = null;
        deleteConfirmPopup.style.display = 'none';
    });
});