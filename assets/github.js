class GitHub {
    constructor() {
        this.client_id = 'affac355126730bc96de',
        this.client_secret = '8abd71081a42df4584a2cf81b13ba043ef3724db'
    }
    
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();

        return {profileData}
        
    }
    
}