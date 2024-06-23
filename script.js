document.getElementById('add-project-btn').addEventListener('click', function() {
    document.getElementById('project-popup').style.display = 'block';
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('project-popup').style.display = 'none';
});

document.getElementById('project-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const projectName = document.getElementById('project-name').value;
    const githubLink = document.getElementById('github-link').value;
    const description = document.getElementById('description').value;

    const projectContainer = document.getElementById('projects-container');

    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';
    projectDiv.innerHTML = `
        <h3>${projectName}</h3>
        <p><a href="${githubLink}" target="_blank">${githubLink}</a></p>
        <p>${description}</p>
    `;

    projectContainer.appendChild(projectDiv);

    document.getElementById('project-popup').style.display = 'none';
    document.getElementById('project-form').reset();
});
