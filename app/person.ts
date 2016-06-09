export class Person {
    name: string;
    title: string;
    school: string;
    email: string;
    imageUrl: string;

    constructor(name: string, title: string, school: string, email: string, imageUrl: string) {
        this.name = name;
        this.title = title;
        this.school = school;
        this.email = email;
        this.imageUrl = imageUrl;
    }
}