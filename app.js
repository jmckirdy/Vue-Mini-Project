
// app is a constant found in an id in the index.html file
// u only have access to Vue (global object) because of the CDN u inluded("https: link")
const app = Vue.createApp({
    // template: '<h1>Hello {{firstName}}</h1>',

    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'johnnydee@gmail.com',
            gender: 'male',
            picture: 'recipeplaceholder.png'
        }
    },
    // define methods right below data()
    // so look at console and it records the amount of clicks and shows click value
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')

            // here, at results, we had a variable data there first but used {} to get all the results

            const { results } = await res.json()
            
            console.log(results)

            // had hardcoded values before in place of results[], eg: 'Sam Smith'
            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender,

            // use the 'randomuser' API so we have to declare getUser() as async method
            this.picture = results[0].picture.large
        }
    }

})


app.mount('#app')
