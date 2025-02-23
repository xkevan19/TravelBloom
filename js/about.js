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
            style="background-image: url('img/zq-lee-DcyL0IoCY0A-unsplash.webp');">
        <div class="glass-effect p-16 rounded-2xl shadow-2xl max-w-4xl">
            <h1 class="text-8xl font-extrabold drop-shadow-2xl">🌎 About TravelBloom</h1>
            <p class="text-2xl mt-6 max-w-3xl">Your gateway to unforgettable adventures and cultural explorations.</p>
        </div>
    </header>

    <!-- About TravelBloom Section -->
    <section class="py-20 text-center max-w-6xl mx-auto">
        <h2 class="text-6xl font-extrabold text-gray-100 mb-8">🌍 Who We Are</h2>
        <p class="text-xl text-gray-300 max-w-4xl mx-auto">
            TravelBloom is dedicated to making travel easier, more exciting, and immersive. We connect explorers with stunning destinations,
            providing expert recommendations and seamless booking experiences.
        </p>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-20 px-10 max-w-6xl mx-auto grid gap-16">
        <h2 class="text-6xl font-extrabold text-gray-100 text-center mb-8">🚀 Why Choose TravelBloom?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-[#02382e] p-8 rounded-3xl shadow-2xl text-center flex flex-col items-center min-h-[260px]">
                <div class="text-6xl mb-4">🏆</div> <!-- Icon -->
                <h3 class="text-4xl font-bold text-yellow-300 mb-4">Handpicked Destinations</h3>
                <p class="flex-grow">We curate the best travel locations based on real experiences and expert insights.</p>
            </div>
            <div class="bg-[#02382e] p-8 rounded-3xl shadow-2xl text-center flex flex-col items-center min-h-[260px]">
                <div class="text-6xl mb-4">✈️</div> <!-- Icon -->
                <h3 class="text-4xl font-bold text-blue-300 mb-4">Seamless Booking</h3>
                <p class="flex-grow">Our easy-to-use platform ensures hassle-free booking with exclusive deals.</p>
            </div>
            <div class="bg-[#02382e] p-8 rounded-3xl shadow-2xl text-center flex flex-col items-center min-h-[260px]">
                <div class="text-6xl mb-4">🌟</div> <!-- Icon -->
                <h3 class="text-4xl font-bold text-red-300 mb-4">Expert Recommendations</h3>
                <p class="flex-grow">Our team provides personalized travel advice to help you explore the world with confidence.</p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#02382e] text-white py-6 text-center text-lg shadow-md">
        <p>&copy; 2025 TravelBloom | Follow us on <a href="#" class="underline hover:text-gray-300">Social Media</a></p>
    </footer>
`;
