// Init GitHub
const github = new GitHub;

// Search input
const searchInput = document.querySelector('#search-user');

searchInput.addEventListener('keyup', (e) => {
    // Get Input text
    const userText = e.target.value;

    if(userText !== '') {
        console.log(userText);
        //make HTTP call

        github.getUser(userText)
            .then(data => console.log(data))
                if(data.profileData.message = 'Not Found'){
                    // showing alert

                } else {
                    // show the profile
                }
        
    } else {
        // Clear profile
    }
})