const demoAlert = {
	icon: "info",
	text: "This is a visual-only project. Authentication is not connected, and no credentials were checked or saved.",
	confirmButtonText: "OK",
	confirmButtonColor: "#5865f2",
	background: "#232428",
	color: "#f2f3f5",
};

document.querySelectorAll("[data-demo-form]").forEach((form) => {
	form.addEventListener("submit", async (event) => {
		event.preventDefault();

		await Swal.fire({
			...demoAlert,
			title: form.dataset.demoTitle || "Demo",
		});
	});
});

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
