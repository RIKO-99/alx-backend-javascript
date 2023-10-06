class Teacher {
  private readonly firstName: string;
  private readonly lastName: string;
  private fullTimeEmployee: boolean;
  private yearsOfExperience?: number;
  private location: string;
  private additionalAttributes: Record<string, any> = {};

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
  }

  setYearsOfExperience(yearsOfExperience: number) {
    this.yearsOfExperience = yearsOfExperience;
  }

  setAdditionalAttribute(key: string, value: any) {
    this.additionalAttributes[key] = value;
  }

  getAdditionalAttributes() {
    return this.additionalAttributes;
  }
}

// Create a new Teacher instance
const teacher = new Teacher("John", "Doe", true, "New York");

// Set years of experience (optional)
teacher.setYearsOfExperience(5);

// Set additional attributes dynamically
teacher.setAdditionalAttribute("contract", true);

// Display teacher information
console.log("Teacher Information:");
console.log("First Name:", teacher["firstName"]); // Accessing private properties directly for demonstration purposes
console.log("Last Name:", teacher["lastName"]);
console.log("Full Time Employee:", teacher["fullTimeEmployee"]);
console.log("Years of Experience:", teacher["yearsOfExperience"]);
console.log("Location:", teacher["location"]);
console.log("Additional Attributes:", teacher.getAdditionalAttributes());
