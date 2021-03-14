/*interface IUserService {
    route: string
    getUser(id: string): any
    createUser(user: object): any
    updateUser(id: string, user: object): any
    deleteUser(id: string): any
}*/

export class UserService {

    route: string = 'http://localhost:3000/users'

    async getUsers() {
        const response = await fetch(this.route)
        const data = await response.json()

        return data
    }

    async createUser(user: object) {
        const response = await fetch(`${this.route}/create`, {
            method: 'POST', 
            mode: 'cors',
            //cache: 'no-cache', 
            //credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            //redirect: 'follow', // manual, *follow, error
            //referrerPolicy: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(user) // body data type must match "Content-Type" header
          })
        return response
    }

    async updateUser(id: string, user: object) {
        return {}
    }
    
    async deleteUser(id: string) {
        return {}
    }

}