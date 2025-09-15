// Mobile Menu Functionality
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const navOverlay = document.getElementById('nav-overlay');

if (menuToggle && mobileMenu && navOverlay) {
    // Open/close menu when clicking hamburger
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navOverlay.classList.toggle('active');
    });

    // Close when clicking a nav link
    const navLinks = mobileMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navOverlay.classList.remove('active');
        });
    });

    // Close when clicking outside (overlay)
    navOverlay.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navOverlay.classList.remove('active');
    });
}

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    const messageBox = document.getElementById('messageBox');
    const messageBoxContent = document.getElementById('messageBoxContent');

    if (contactForm && messageBox && messageBoxContent) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name === '' || email === '' || message === '') {
                messageBoxContent.innerHTML = '<p class="text-red-500 font-semibold mb-4">Please fill in all fields.</p>';
            } else if (!validateEmail(email)) {
                messageBoxContent.innerHTML = '<p class="text-red-500 font-semibold mb-4">Please enter a valid email address.</p>';
            } else {
                messageBoxContent.innerHTML = '<p class="text-green-600 font-bold text-xl mb-2">Message Sent! 🎉</p><p class="text-gray-700">Thank you for reaching out. We will be in touch shortly.</p>';
                contactForm.reset();
            }

            messageBox.classList.remove('hidden');
        });
    }

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Blog Posts (for blog.html)
    const blogPostsContainer = document.getElementById('blog-posts-container');

    if (blogPostsContainer) {
        const placeholderImage = "https://source.unsplash.com/600x400/?nature,calm"; // fallback image

        const blogPosts = [
            {
                title: "The Power of a 5-Minute Meditation 🧘‍♀️",
                date: "September 12, 2025",
                summary: "Discover how just a few minutes of daily practice can dramatically reduce stress and improve focus. Perfect for beginners!",
                link: "post-meditation.html",
                image: "images/meditation.jpg"
            },
            {
                title: "Journaling for Mental Clarity ✍️",
                date: "September 13, 2025",
                summary: "Learn simple techniques to clear your mind and organize your thoughts with a daily journaling habit.",
                link: "post-journaling.html",
                image: "images/journaling.jpg"
            }
        ];

        function renderBlogPosts() {
            blogPosts.forEach(post => {
                const imageUrl = post.image ? post.image : placeholderImage;
                const articleHtml = `
                    <article class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col">
                        <img src="${imageUrl}" alt="${post.title}" class="h-48 w-full object-cover">
                        <div class="p-6 flex flex-col flex-grow">
                            <h2 class="text-2xl font-bold text-gray-900 mb-2">${post.title}</h2>
                            <p class="text-sm text-gray-500 mb-4">Published: ${post.date}</p>
                            <p class="text-gray-700 mb-4 flex-grow">${post.summary}</p>
                            <a href="${post.link}" class="inline-block text-indigo-600 font-semibold hover:underline">Read More →</a>
                        </div>
                    </article>
                `;
                blogPostsContainer.insertAdjacentHTML('beforeend', articleHtml);
            });
        }

        renderBlogPosts();
    }
});
