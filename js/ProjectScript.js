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
        1: '<p>The process of creating this game was quite interesting as it required me to figure out several things before getting into coding. I faced some issues while running C++ on Unreal engine and was confused as to why my code was not initializing. Upon researching and troubleshooting, I found out that a considerable amount of setup was required before working in Unreal Engine 5 with C++. Finally, I managed to get everything to work.</p><p>I have played games like World of Tanks and Warthunder before, so I wanted to make a game where the player is a tank and shoots at turrets. The C++ code includes everything, such as movement, aiming logic, camera, and enemy setup. The fire events logic was done in a blueprint with line tracing, and I added some visual effects to enhance the gameplay experience. The creation of this game was interesting as I had to figure out a lot of things before getting into the coding. I was having issues when running C++ on Unreal engine and was very confused as to why it was not working when I tried to initialize my code. After doing my research and troubleshooting I found that a decent amount of setting up was needed before you could work in Unreal Engine 5 with C++ and finally got everything to work.</p>',
        
		2: '<p>Solaris Assault is a 2D bullet hell game that my colleagues and I worked on during our semester at school. We are proud of what we were able to create in just a few months. The game is based on bullet hell games such as the beginning of Nier Automata or Touhou. Looking back, there are a few issues with the game that I would fix, such as the UI and some minor visual elements. Nonetheless, we are pleased with what we have accomplished.</p>',

		3: '<p>After rediscovering my love for FPS games, I decided to create a zombie round-based game mode. Call of Duty zombie game mode, in particular, inspired me. To make this game, I used the Unreal Engine 5. The project was a result of my nostalgia for black ops 1 and its zombie game mode. Kino Der Toten was my favorite map, and I have spent countless hours playing it.</p>',

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
