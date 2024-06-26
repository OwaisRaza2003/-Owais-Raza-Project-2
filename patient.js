const readline = require('readline');

let patient = {
    firstName: "John",
    lastName: "Doe",
    age: 45,
    gender: "Male",
    medicalHistory: [
        "Hypertension",
        "Type 2 Diabetes"
    ],
    medications: [
        {
            name: "Lisinopril",
            dosage: "10mg",
            frequency: "Once a day"
        },
        {
            name: "Metformin",
            dosage: "500mg",
            frequency: "Twice a day"
        }
    ],
    contactInfo: {
        phone: "555-1234",
        email: "johndoe@example.com"
    },
    emergencyContact: {
        name: "Jane Doe",
        relationship: "Wife",
        phone: "555-5678"
    }
};

// Function to get input from the user
function displayPatientInformation() {
    console.log(`Patient: ${patient.firstName} ${patient.lastName}`);
    console.log(`Age: ${patient.age}`);
    console.log(`Gender: ${patient.gender}`);
    console.log(`Medical History: ${patient.medicalHistory.join(", ")}`);
    console.log(`Medications:`);
    patient.medications.forEach(med => {
        console.log(`- ${med.name}: ${med.dosage}, ${med.frequency}`);
    });
    console.log(`Emergency Contact: ${patient.emergencyContact.name} (${patient.emergencyContact.relationship}), Phone: ${patient.emergencyContact.phone}`);
}

// Call the function to display patient information
displayPatientInformation();
