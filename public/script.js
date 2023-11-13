document.addEventListener("DOMContentLoaded", function() {
    const experience = [
        { jobTitle: "Software Developer", company: "ABC Corp", year: "2019-2022" },
    ];

    const education = [
        { degree: "BSc in Computer Science", institution: "XYZ University", year: "2015-2019" },
    ];

    const skills = ["JavaScript", "HTML", "CSS", "React", "Node.js"]; // Add more skills here

    function populateSection(sectionId, items) {
        const section = document.getElementById(sectionId);
        items.forEach(item => {
            const p = document.createElement("p");
            p.textContent = typeof item === 'string' ? item : `${item.jobTitle} at ${item.company}, ${item.year}`;
            section.appendChild(p);
        });
    }

    populateSection("experience", experience);
    populateSection("education", education);
    populateSection("skills", skills.map(skill => `${skill}`));
});
