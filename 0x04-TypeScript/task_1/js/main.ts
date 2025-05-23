interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string
    [propName: string]: any,
}

interface Directors extends Teacher {
    numberofReports: number,
};

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string) : string => `${firstName.charAt(0)}.${lastName}`;
interface classInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements classInterface{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName;
        this.lastName;
    }

    workOnHomework():string{
        return "Currently working";
    }

    displayName():string{
        return this.firstName;
    }

}

interface StudentConstructor {
    (firstName: string, lastName: string): classInterface;
}

const student = new StudentClass("Tmo", "tmo");
console.log(student.displayName())
console.log(student.workOnHomework())