function showProjectDetails(projectId) {
    const projectDetails = getProjectDetails(projectId);
    document.getElementById('project-content').innerHTML = projectDetails;
    document.getElementById('project-details').style.display = 'block';
	ScrollToBottom();
}

function hideProjectDetails() {
    document.getElementById('project-details').style.display = 'none';
}

function getProjectDetails(projectId) {
    
    const projectDetails = {
        1: '<p>Here is how the project turned out:</p><p>•Movable Tank.</p><p>• Turret enemies.</p><p>• Smooth Aiming and moving.</p><br><p>Here is what was not done:</p><p>• Complete level with a start and an end.</p><p>• Score system.</p><p>• Death screen and main menu.</p><br><p>Here is what I have learned from this project:</p><p>• The creation of classes in Unreal Engine.</p><p>• The usage of the Unreal Engine Library.</p><p>• C++ and blueprint relations in Unreal Engine.</p>',
        
		2: '<p>Here is how the project turned out:</p><p>• Multiple different enemies.</p><p>• Multiple different player abilities.</p><p>• A boss at the end of the level.</p><br><p>Here is what was not done:</p><p>•Developped Skill tree for permanent progression.</p><p>• Different levels to play through.</p><p>• Sound system.</p><br><p>Here is what I have learned from this project:</p><p>• Usage of the Unity engine and pipelines.</p><p>• Usage of the Unity Engine Library</p><p>• Object pooling.</p>',

		3: '<p>Here is how the project turned out:</p><p>• Responsive gameplay</p><p>• Round based game progressing with enemies defeated.</p><p>• Main menu and death screen.</p><br><p>Here is what was not done:</p><p>• Multiple weapons.</p><p>• Economy system to buy items or benefits during gameplay.</p><p>• Special enemies.</p><br><p>Here is what I have learned from this project:</p><p>•Usage of the Unreal engine.</p><p>• Quixel and importing files.</p><p>• Line tracing.</p>',

    };
	
    return projectDetails[projectId] || '<p>No details available for this project.</p>';
}

document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseenter', function () {
        // Change color when mouse enters
        this.style.transition = 'background-color 0.5s';
        this.style.backgroundColor = '#55725D';
    });

    project.addEventListener('mouseleave', function () {
        // Change color back when mouse leaves
        this.style.transition = 'background-color 0.5s';
        this.style.backgroundColor = '';
    });
});

function ScrollToBottom(){
	window.scrollTo({
	top: document.body.scrollHeight,
	behavior: 'smooth'
	});
}
