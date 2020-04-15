class GitHub {
    constructor() {
        this.client_id = 'affac355126730bc96de',
        this.client_secret = '8abd71081a42df4584a2cf81b13ba043ef3724db',
        this.repos_count = 5,
        this.repos_sort = 'created: asc'
    }
    
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        const reposData = await repoResponse.json();

        return {profileData, reposData}
        
    }
    
}