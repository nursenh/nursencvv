document.addEventListener("DOMContentLoaded", function () {
    const defaultData = {
        name: "Nurşən Hüseynova",
        title: "İnformasiya Təhlükəsizliyi Tələbəsi",
        contact: {
            phone: "+994-70-864-19-05",
            email: "nursenhuseynova0059@icloud.com",
            location: "Bakı, Azərbaycan",
            website: "aztu.edu.az"
        },
        education: [
            "AZTU – İnformasiya Təhlükəsizliyi",
            "Fakültə: İnformasiya Texnologiyaları və Təhlükəsizlik",
            "I kurs (2024-2028)"
        ],
        skills: [
            "Office proqramları",
            "Problem həll etmə",
            "Analitik düşüncə"
        ],
        languages: [
            "İngilis dili (B1)",
            "Rus dili (A2)",
            "Azərbaycan dili (C1)"
        ],
        profile: "İnformasiya təhlükəsizliyi sahəsində təhsil alan 1-ci kurs tələbəsiyəm...",
        experience: "Hələ ki iş təcrübəm yoxdur...",
        reference: "Mövcuddur, istək əsasında təqdim oluna bilər."
    };

    const savedData = localStorage.getItem("cvData");
    const cvData = savedData ? JSON.parse(savedData) : defaultData;

    // Sahələri doldur
    document.getElementById("name").innerText = cvData.name;
    document.getElementById("title").innerText = cvData.title;
    document.getElementById("phone").innerText = cvData.contact.phone;
    document.getElementById("email").innerText = cvData.contact.email;
    document.getElementById("location").innerText = cvData.contact.location;
    document.getElementById("website").innerText = cvData.contact.website;
    document.getElementById("profile").innerText = cvData.profile;
    document.getElementById("experience").innerText = cvData.experience;
    document.getElementById("reference").innerText = cvData.reference;

    function populateList(id, items) {
        const ul = document.getElementById(id);
        ul.innerHTML = "";
        items.forEach(item => {
            let li = document.createElement("li");
            li.contentEditable = true;
            li.innerText = item;
            ul.appendChild(li);
        });
    }

    populateList("education-list", cvData.education);
    populateList("skills-list", cvData.skills);
    populateList("languages-list", cvData.languages);

    // Toggle funksiyası
    document.querySelectorAll('.toggle').forEach(title => {
        title.addEventListener('click', function () {
            const content = this.nextElementSibling;
            content.style.display = (content.style.display === 'block') ? 'none' : 'block';
        });
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validateRequired(text, fieldName) {
        if (!text || text.trim() === "") {
            alert(`${fieldName} sahəsi boş buraxıla bilməz!`);
            return false;
        }
        return true;
    }

    document.getElementById("saveBtn").addEventListener("click", function () {
        const name = document.getElementById("name").innerText.trim();
        const title = document.getElementById("title").innerText.trim();
        const phone = document.getElementById("phone").innerText.trim();
        const email = document.getElementById("email").innerText.trim();
        const location = document.getElementById("location").innerText.trim();
        const website = document.getElementById("website").innerText.trim();

        // Təsdiqləmələr
        if (!validateRequired(name, "Ad")) return;
        if (!validateRequired(email, "E-poçt")) return;
        if (!validateEmail(email)) {
            alert("E-poçt ünvanı düzgün formatda deyil!");
            return;
        }
        if (!validateRequired(phone, "Telefon")) return;

        const getListItems = (id) => {
            return Array.from(document.getElementById(id).children).map(li => li.innerText.trim()).filter(item => item !== "");
        };

        const updatedData = {
            name,
            title,
            contact: { phone, email, location, website },
            education: getListItems("education-list"),
            skills: getListItems("skills-list"),
            languages: getListItems("languages-list"),
            profile: document.getElementById("profile").innerText.trim(),
            experience: document.getElementById("experience").innerText.trim(),
            reference: document.getElementById("reference").innerText.trim()
        };

        localStorage.setItem("cvData", JSON.stringify(updatedData));
        alert("Məlumatlar uğurla yadda saxlanıldı!");
    });
}); jss
document.addEventListener("DOMContentLoaded", function () {
    const defaultData = {
        name: "Nurşən Hüseynova",
        title: "İnformasiya Təhlükəsizliyi Tələbəsi",
        contact: {
            phone: "+994-70-864-19-05",
            email: "nursenhuseynova0059@icloud.com",
            location: "Bakı, Azərbaycan",
            website: "aztu.edu.az"
        },
        education: [
            "AZTU – İnformasiya Təhlükəsizliyi",
            "Fakültə: İnformasiya Texnologiyaları və Təhlükəsizlik",
            "I kurs (2024-2028)"
        ],
        skills: [
            "Office proqramları",
            "Problem həll etmə",
            "Analitik düşüncə"
        ],
        languages: [
            "İngilis dili (B1)",
            "Rus dili (A2)",
            "Azərbaycan dili (C1)"
        ],
        profile: "İnformasiya təhlükəsizliyi sahəsində təhsil alan 1-ci kurs tələbəsiyəm...",
        experience: "Hələ ki iş təcrübəm yoxdur...",
        reference: "Mövcuddur, istək əsasında təqdim oluna bilər."
    };

    const savedData = localStorage.getItem("cvData");
    const cvData = savedData ? JSON.parse(savedData) : defaultData;

    // Sahələri doldur
    document.getElementById("name").innerText = cvData.name;
    document.getElementById("title").innerText = cvData.title;
    document.getElementById("phone").innerText = cvData.contact.phone;
    document.getElementById("email").innerText = cvData.contact.email;
    document.getElementById("location").innerText = cvData.contact.location;
    document.getElementById("website").innerText = cvData.contact.website;
    document.getElementById("profile").innerText = cvData.profile;
    document.getElementById("experience").innerText = cvData.experience;
    document.getElementById("reference").innerText = cvData.reference;

    function populateList(id, items) {
        const ul = document.getElementById(id);
        ul.innerHTML = "";
        items.forEach(item => {
            let li = document.createElement("li");
            li.contentEditable = true;
            li.innerText = item;
            ul.appendChild(li);
        });
    }

    populateList("education-list", cvData.education);
    populateList("skills-list", cvData.skills);
    populateList("languages-list", cvData.languages);

    // Toggle funksiyası
    document.querySelectorAll('.toggle').forEach(title => {
        title.addEventListener('click', function () {
            const content = this.nextElementSibling;
            content.style.display = (content.style.display === 'block') ? 'none' : 'block';
        });
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validateRequired(text, fieldName) {
        if (!text || text.trim() === "") {
            alert(`${fieldName} sahəsi boş buraxıla bilməz!`);
            return false;
        }
        return true;
    }

    document.getElementById("saveBtn").addEventListener("click", function () {
        const name = document.getElementById("name").innerText.trim();
        const title = document.getElementById("title").innerText.trim();
        const phone = document.getElementById("phone").innerText.trim();
        const email = document.getElementById("email").innerText.trim();
        const location = document.getElementById("location").innerText.trim();
        const website = document.getElementById("website").innerText.trim();

        // Təsdiqləmələr
        if (!validateRequired(name, "Ad")) return;
        if (!validateRequired(email, "E-poçt")) return;
        if (!validateEmail(email)) {
            alert("E-poçt ünvanı düzgün formatda deyil!");
            return;
        }
        if (!validateRequired(phone, "Telefon")) return;

        const getListItems = (id) => {
            return Array.from(document.getElementById(id).children).map(li => li.innerText.trim()).filter(item => item !== "");
        };

        const updatedData = {
            name,
            title,
            contact: { phone, email, location, website },
            education: getListItems("education-list"),
            skills: getListItems("skills-list"),
            languages: getListItems("languages-list"),
            profile: document.getElementById("profile").innerText.trim(),
            experience: document.getElementById("experience").innerText.trim(),
            reference: document.getElementById("reference").innerText.trim()
        };

        localStorage.setItem("cvData", JSON.stringify(updatedData));
        alert("Məlumatlar uğurla yadda saxlanıldı!");
    });
});
