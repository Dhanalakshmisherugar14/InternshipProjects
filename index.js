// Store for contacts
let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

// Function to generate random ID for contacts
const generateId = () => '_' + Math.random().toString(36).substr(2, 9);

// Form validation and submission handler
if (document.getElementById('contactForm')) {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values
        const firstName = form.querySelector('input[placeholder="First name"]').value.trim();
        const surname = form.querySelector('input[placeholder="Surname"]').value.trim();
        const company = form.querySelector('input[placeholder="Company"]').value.trim();
        const jobTitle = form.querySelector('input[placeholder="Job title"]').value.trim();
        const email = form.querySelector('input[placeholder="Email"]').value.trim();
        const phone = form.querySelector('input[placeholder="Phone"]').value.trim();

        if(firstName=="" || email=="" || phone==""){
            alert('Please fill required field')
            return
        }
        
        if(firstName=="" || firstName.length<2 || firstName.length>10){
            alert('Please enter a  valid Full name with 2-10 char')
            return;
        }
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Validate phone format (10 digits)
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid 10-digit phone number');
            return;
        }
        
        // Create contact object
        const newContact = {
            id: generateId(),
            firstName,
            surname,
            company,
            jobTitle,
            email,
            phone,
            createdAt: new Date().toISOString()
        };
        
        // Add to contacts array
        contacts.push(newContact);
        
        // Save to localStorage
        localStorage.setItem('contacts', JSON.stringify(contacts));
        
        // Redirect to contacts page
        window.location.href = 'index.html';
    });
}

// Display contacts in table
if (document.getElementById('contactsList')) {
    const contactsList = document.getElementById('contactsList');
    const searchInput = document.querySelector('input[placeholder="Search"]');
    
    // Function to render contacts
    function renderContacts(contactsToRender) {
        contactsList.innerHTML = contactsToRender.map(contact => `
            <tr>
                <td>
                    <div class="d-flex align-items-center">
                        <div class="contact-avatar avatar-letter me-2" 
                             style="background-color: ${getRandomColor()}">
                            ${contact.firstName.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            ${contact.firstName} ${contact.surname}
                        </div>
                    </div>
                </td>
                <td>${contact.email}</td>
                <td>${contact.phone}</td>
                <td>
                    ${contact.jobTitle}
                    ${contact.company ? `at ${contact.company}` : ''}
                </td>
            </tr>
        `).join('');
        
        // Update contact count in sidebar
        const contactCount = document.querySelector('.contact-count');
        if (contactCount) {
            contactCount.textContent = contacts.length;
        }
    }
    
    // Function to generate random color for avatar
    function getRandomColor() {
        const colors = [
            '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
            '#2196f3', '#03a9f4', '#00bcd4', '#009688'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // Initial render
    //renderContacts(contacts);
    renderContacts(contacts)
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const filteredContacts = contacts.filter(contact => 
                contact.firstName.toLowerCase().includes(searchTerm) ||
                contact.surname.toLowerCase().includes(searchTerm) ||
                contact.email.toLowerCase().includes(searchTerm) ||
                contact.phone.includes(searchTerm) ||
                contact.company.toLowerCase().includes(searchTerm) ||
                contact.jobTitle.toLowerCase().includes(searchTerm)
            );
            renderContacts(filteredContacts);
        });
    }
}

function clearAllContacts() {
    contacts = []; // Reset the array
    localStorage.setItem('contacts', JSON.stringify(contacts)); // Clear localStorage
    renderContacts(contacts); // Render empty table
    alert('All contacts have been cleared!');
}