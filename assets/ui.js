class UI {
    constructor(){
        this.divProfile = document.querySelector('.container-profile');
    }

    showProfile(user){
        // console.log(user);
        this.divProfile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-secondary btn-block">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-success">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-primary">Public Followers: ${user.followers}</span>
                        <span class="badge badge-success">Publics Following: ${user.following}</span>
                        <ul class="list-group mt-3">
                            <li class="list-group-item">NAME: ${user.name}</li>
                            <li class="list-group-item">WEBSITE/BLOG: <a>${user.blog}</a></li>
                            <li class="list-group-item">COMPANY: ${user.company}</li>
                            <li class="list-group-item">LOCATION: ${user.location}</li>
                            <li class="list-group-item">MEMBER SINCE: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
        
        
    }

    showRepos(userRepos){
        console.log(userRepos);
        let output = '';
        userRepos.forEach(item => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">

                        <div class="col-md-6">
                            <a href=${item.html_url} target="_blank">${item.name}</a>
                        </div>

                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars: ${item.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${item.watchers_count}</span>
                            <span class="badge badge-primary">Forks: ${item.forks_count}</span>
                        </div>

                    </div>
                </div>
            `
        });

        document.querySelector('#repos').innerHTML = output;

    }
    // Show message
    showMessage(text, typeClass){

        //Clear existing alert 

        clearMessage();

        // Creating new alert

        const div = document.createElement('div');
        const parent = document.querySelector('.container-search');
        div.className = typeClass;
        div.appendChild(document.createTextNode(text));
        const searchBox = document.querySelector('.search.card');
        parent.insertBefore(div, searchBox);

        //Clear after 3 sec

        setTimeout(() => {
            this.clearMessage();
        }, 3000);
    }

    clearMessage(){
        const currentMessage = document.querySelector('alert');
        if(currentMessage){
            currentMessage.remove();
        }
    }

    clearProfile() {
        this.divProfile = '';
    }
}