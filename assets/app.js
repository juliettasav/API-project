// Init GitHub
const github = new GitHub;
const ui = new UI;

// Search input
const searchInput = document.querySelector('#search-user');

searchInput.addEventListener('keyup', (e) => {
    // Get Input text
    const userText = e.target.value;
    console.log(userText);
    

    if(userText !== '') {

        //make HTTP call

        github.getUser(userText)
            .then(data => {
                if(data.profileData.message ) {
                    ui.showMessage('User not found', 'alert alert-danger');
                    
                } else {
                    // Show profile
                    ui.showProfile(data.profileData);
                    ui.showRepos(data.reposData);

                }
                
            })
            .catch(err => console.log(err))
                  
    } else {
        // Clear profile
        ui.clearProfile();
    }
})