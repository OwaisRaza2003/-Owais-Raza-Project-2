let student = {
    firstName: "Owais",
    lastName: "Raza",
    age: 21,
    gender: "male",
    studentID: "S1234567",
    major: "Computer Science",
    courses: [
        {
            courseName: "Data Structures",
            courseCode: "CS200",
            grade: "A"
        },
        {
            courseName: "Operating Systems",
            courseCode: "CS300",
            grade: "B+"
        },
        {
            courseName: "Web Development",
            courseCode: "CS400",
            grade: "A-"
        }
    ],
    contactInfo: {
        phone: "555-9876",
        email: "owaisraza@gmail.com"
    },
    address: {
        street: "123 University ",
        city: "College Town",
        state: "CA",
        zip: "90210"
    }
};

console.log(`Student: ${student.firstName} ${student.lastName}`);
console.log(`Major: ${student.major}`);
console.log("Courses:");
student.courses.forEach(course => {
    console.log(`- ${course.courseName} (${course.courseCode}): ${course.grade}`);
});
console.log(`Contact Info: ${student.contactInfo.phone}, ${student.contactInfo.email}`);
console.log(`Address: ${student.address.street}, ${student.address.city}, ${student.address.state} ${student.address.zip}`);
 