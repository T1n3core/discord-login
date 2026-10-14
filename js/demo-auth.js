const demoAlert = {
	confirmButtonText: "OK",
	confirmButtonColor: "#5865f2",
	background: "#232428",
	color: "#f2f3f5",
};

document.querySelectorAll("[data-demo-form]").forEach((form) => {
	form.addEventListener("submit", async (event) => {
		event.preventDefault();

		const title = form.dataset.demoTitle || "Demo";

		if (title === "Demo Login") {
			const username = form.querySelector("#email").value;
			const password = form.querySelector("#password").value;

			if (username === "discord" && password === "discord") {
				await Swal.fire({
					...demoAlert,
					icon: "success",
					title: "Login successful!",
					text: "Welcome back!",
				});
			} else {
				await Swal.fire({
					...demoAlert,
					icon: "error",
					title: "Login failed",
					text: "Invalid username or password.",
				});
			}

			return;
		}

		await Swal.fire({
			...demoAlert,
			icon: "info",
			title: "Demo registration",
			text: "This is a visual-only project. No account was created or registered.",
		});
	});
});

// Demo-only links: legal policies and passkey authentication.
document.querySelectorAll('a[href="#"]').forEach((link) => {
	const text = link.textContent.trim().toLowerCase();

	let title;
	let message;

	if (text === "terms of service") {
		title = "Terms of Service";
		message =
			"This is a school project for visual demonstration only. These are not real Terms of Service and do not constitute a legal agreement.";
	} else if (text === "privacy policy") {
		title = "Privacy Policy";
		message =
			"This is a visual-only demonstration. No real privacy policy is provided, and this demo does not submit or store your form data.";
	} else if (
		text.includes("passkey") ||
		text.includes("passcode")
	) {
		title = "Passkey sign-in unavailable";
		message =
			"This is a visual recreation only. Real passkey authentication is not implemented, and no authentication will take place.";
	} else {
		return;
	}

	link.addEventListener("click", async (event) => {
		event.preventDefault();

		await Swal.fire({
			...demoAlert,
			icon: "info",
			title,
			text: message,
		});
	});
});

// Populate registration date-of-birth dropdowns.
const monthSelect = document.querySelector("#month");
const daySelect = document.querySelector("#day");
const yearSelect = document.querySelector("#year");

if (monthSelect) {
	[
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	].forEach((month, index) => {
		monthSelect.append(new Option(month, String(index + 1)));
	});
}

if (daySelect) {
	for (let day = 1; day <= 31; day += 1) {
		daySelect.append(new Option(String(day), String(day)));
	}
}

if (yearSelect) {
	const currentYear = new Date().getFullYear();

	for (let year = currentYear; year >= 1900; year -= 1) {
		yearSelect.append(new Option(String(year), String(year)));
	}
}
