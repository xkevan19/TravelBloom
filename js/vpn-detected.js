async function checkVPN() {
    try {
        let response = await fetch("https://ipapi.co/json/");
        let data = await response.json();

        if (data.country_name === "Unknown") { // VPN/proxy detection method
            window.location.href = "vpn-blocked.html";
        }
    } catch (error) {
        console.error("VPN check failed:", error);
    }
}
checkVPN();
