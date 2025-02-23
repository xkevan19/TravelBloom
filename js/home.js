// Dynamic Navigation Bar
document.getElementById("navbar").innerHTML = `
    <ul class="flex justify-center space-x-16 text-xl font-bold tracking-wide uppercase">
        <li><a href="index.html" class="hover:text-gray-300 transition duration-300">Home</a></li>
        <li><a href="about.html" class="hover:text-gray-300 transition duration-300">About Us</a></li>
        <li><a href="contact.html" class="hover:text-gray-300 transition duration-300">Contact Us</a></li>
    </ul>
`;

// Dynamic Hero Section
document.getElementById("hero").innerHTML = `
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('img/simon-spring-phZTeFPPKO0-unsplash.webp');"></div>
    <div class="relative glass-effect p-16 rounded-2xl shadow-2xl max-w-4xl z-10">
        <h1 class="text-8xl font-extrabold drop-shadow-2xl animate-pulse">🌍 TravelBloom</h1>
        <p class="text-2xl mt-6 max-w-3xl">Escape the ordinary, embrace adventure, and redefine luxury travel.</p>
        <a href="#" class="mt-8 px-12 py-5 bg-orange-500 hover:bg-orange-700 text-white text-2xl rounded-full shadow-xl transition transform hover:scale-110 inline-block">Book Now</a>
    </div>
`;

// Travel Recommendations Data
const recommendationsData = [
    {
        title: "🏝️ Beautiful Beaches",
        category: "Beaches",
        country: "",
        images: [
            { 
                src: "img/mike-swigunski-ueBmz9K8zTg-unsplash.webp", 
                title: "Maldives Beach", 
                description: "A stunning escape with white sand and turquoise waters in the Maldives."
            },
            { 
                src: "img/renaldo-matamoro-weJBleMT_CA-unsplash.webp", 
                title: "Pigeon Point Beach", 
                description: "Relax on the breathtaking beaches of Pigeon Point with crystal-clear water."
            }
        ],
        textColor: "text-yellow-300"
    },
    {
        title: "🏯 Ancient Temples",
        category: "Temples",
        country: "Japan, India",
        images: [
            { 
                src: "img/cj-C1zsA0ndNPA-unsplash.webp", 
                title: "Japanese Temple", 
                description: "Discover the rich cultural heritage of ancient Japanese temples."
            },
            { 
                src: "img/abhimanyu-shivkumar-8fGpaUWAits-unsplash.webp", 
                title: "Indian Temple", 
                description: "Explore India’s historic temples, filled with centuries of history."
            }
        ],
        textColor: "text-red-400"
    },
    {
        title: "🌏 Explore by Country",
        category: "Explore",
        country: "Maldives, Thailand",
        images: [
            { 
                src: "img/rayyu-maldives-xPsFXsbXJRg-unsplash.webp", 
                title: "Maldives Paradise", 
                description: "A tropical dream destination with luxury resorts over turquoise waters."
            },
            { 
                src: "img/alejandro-cartagena-B64B6-kAWlw-unsplash.webp", 
                title: "Thailand Views", 
                description: "Experience the vibrant culture and stunning landscapes of Thailand."
            }
        ],
        textColor: "text-blue-400"
    }
];

// Generate Recommendations
const recommendationsContainer = document.getElementById("recommendations");
recommendationsData.forEach(rec => {
    let imagesHTML = rec.images.map(img => `
        <div class="relative group">
            <img src="${img.src}" alt="${img.title}" class="standard-image">
            <p class="text-center text-lg font-semibold mt-2">${img.title}</p>
            
            <!-- Individual Hover Description -->
            <div class="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-4 text-center">
                <p class="text-lg text-white font-semibold">${img.description}</p>
            </div>
        </div>
    `).join("");

    const recHTML = `
        <div class="bg-[#02382e] from-gray-800 to-gray-900 p-12 rounded-3xl shadow-2xl"
             data-category="${rec.category}" data-country="${rec.country}">
            <h3 class="text-5xl font-bold ${rec.textColor} mb-6">${rec.title}</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">${imagesHTML}</div>
        </div>
    `;
    
    recommendationsContainer.innerHTML += recHTML;
});


// Dynamic Footer
document.getElementById("footer").innerHTML = `
    <p>&copy; 2025 TravelBloom | Follow us on <a href="#" class="underline hover:text-gray-300">Social Media</a></p>
`;

// Search Function
function filterRecommendations() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let recommendations = document.querySelectorAll("#recommendations > div");

    recommendations.forEach(rec => {
        let title = rec.querySelector("h3").textContent.toLowerCase();
        let category = rec.getAttribute("data-category") ? rec.getAttribute("data-category").toLowerCase() : "";
        let countries = rec.getAttribute("data-country") ? rec.getAttribute("data-country").toLowerCase() : "";

        rec.style.display = (title.includes(input) || category.includes(input) || countries.includes(input)) ? "block" : "none";
    });
}
