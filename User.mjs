class User {
        constructor(firstName, lastName) {
                this.firstName = firstName;
                this.lastName = lastName;
        }

        getName() {
                console.log(`The full name  is ${this.firstName} ${this.lastName}`);//templet literals 
        }
}

export default User