class User{
    static countUser = 0;
    constructor(titre, prenom, nom, ville, pays, age, email, photo){
        this.title = titre;
        this.firstName = prenom;
        this.lastName = nom;
        this.city = ville;
        this.country = pays;
        this.age = age;
        this.email = email;
        this.picture = photo;
        this.present = false;
        this.element = this.generateElement();

        this.element.addEventListener('click', () => {
            this.togglePresent(this.element);
        });

        };

        generateElement(){
            const userElement = document.createElement('div');
            userElement.classList.add('user');
            userElement.dataset.present = this.present;
        const childHTML =
        `<img src="${this.picture}">
        <div class="user--info">
            <h1>${this.title} ${this.lastName} ${this.firstName}</h1>
            <p>${this.age} years old</p>
            <p>${this.city}, ${this.country}</p>
        </div>

        <a href="mailto:${this.email}">
            <span class="mail">✉️</span>
        </a>`;
        userElement.insertAdjacentHTML("afterbegin", childHTML);
        return userElement;
    };

    render(){
        const renderUser = document.querySelector('main').append(this.element);
        return renderUser;
    };

    togglePresent(element){
        if(this.present === false){
            element.dataset.present = true;
            this.present = true;
            User.countUser++;
            document.querySelector('.counter').textContent = User.countUser + "/20 people are here";
        }
        else{
            element.dataset.present = false;
            this.present = false;
            User.countUser--;
            document.querySelector('.counter').textContent = User.countUser + "/20 people are here";
        }   
    };

    
}

export default User;