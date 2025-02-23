document.getElementById("content").innerHTML = `
    <!-- Navigation Bar -->
    <nav class="bg-[#02382e] text-[#F7FFF7] fixed w-full top-0 z-50 shadow-xl p-6">
        <ul class="flex justify-center space-x-16 text-xl font-bold tracking-wide uppercase">
            <li><a href="index.html" class="hover:text-gray-300 transition duration-300">Home</a></li>
            <li><a href="about.html" class="hover:text-gray-300 transition duration-300">About Us</a></li>
            <li><a href="contact.html" class="hover:text-gray-300 transition duration-300">Contact Us</a></li>
        </ul>
    </nav>

    <!-- Hero Section -->
    <header class="relative flex flex-col items-start justify-center pl-20 text-white h-screen bg-cover bg-center" 
            style="background-image: url('img/daniela-cuevas-t7YycgAoVSw-unsplash.webp');">
        <div class="glass-effect p-16 rounded-2xl shadow-2xl max-w-4xl">
            <h1 class="text-8xl font-extrabold drop-shadow-2xl">📞 Contact TravelBloom</h1>
            <p class="text-2xl mt-6 max-w-3xl">Get in touch with us for inquiries, support, or collaboration!</p>
        </div>
    </header>

    <!-- Contact Form Section -->
    <section class="py-20 max-w-4xl mx-auto text-center">
        <h2 class="text-6xl font-extrabold text-gray-100 mb-8">📩 Get in Touch</h2>
        <p class="text-xl text-gray-300 mb-8">Have a question? Drop us a message and we'll get back to you!</p>
        <form id="contact-form" class="bg-[#02382e] p-8 rounded-3xl shadow-2xl text-left">
            <label class="block text-lg font-semibold text-gray-100 mb-2">Name</label>
            <input type="text" id="name" class="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 mb-4" placeholder="Your Name" required>

            <label class="block text-lg font-semibold text-gray-100 mb-2">Email</label>
            <input type="email" id="email" class="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 mb-4" placeholder="Your Email" required>

            <label class="block text-lg font-semibold text-gray-100 mb-2">Message</label>
            <textarea id="message" rows="5" class="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 mb-4" placeholder="Your Message" required></textarea>

            <button type="submit" class="w-full mt-4 px-8 py-4 bg-orange-500 hover:bg-orange-700 text-white text-2xl rounded-full shadow-xl transition transform hover:scale-105">Send Message</button>
        </form>
    </section>

    <!-- Contact Details -->
    <section class="py-10 text-center max-w-4xl mx-auto">
        <h2 class="text-4xl font-extrabold text-gray-100 mb-6">📍 Our Location</h2>
        <p class="text-xl text-gray-300 mb-4">123 Adventure Lane, Wanderlust City, 45678</p>
        
        <h2 class="text-4xl font-extrabold text-gray-100 mb-6">📧 Email</h2>
        <p class="text-xl text-gray-300 mb-4">support@travelbloom.com</p>

        <h2 class="text-4xl font-extrabold text-gray-100 mb-6">📞 Phone</h2>
        <p class="text-xl text-gray-300">+1 (555) 123-4567</p>
    </section>

    <!-- Footer -->
    <footer class="bg-[#02382e] text-white py-6 text-center text-lg shadow-md">
        <p>&copy; 2025 TravelBloom | Follow us on <a href="#" class="underline hover:text-gray-300">Social Media</a></p>
    </footer>
`;

// Google Sheets Form Submission Script
document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {
        let response = await fetch("https://script.google.com/macros/s/AKfycbylXJPLOImz8eDB86U8aN_4sH8u0WctBO3t_LhXGgVAwp1XLYoQeXnfzeAH9IyloMpq/exec", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        document.getElementById("contact-form").reset();
        alert("Message sent successfully!");
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to send message. Please try again.");
    }
});
