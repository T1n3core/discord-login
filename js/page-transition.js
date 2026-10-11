const prefersReducedMotion = window.matchMedia(
	"(prefers-reduced-motion: reduce)"
).matches;

window.addEventListener("pageshow", () => {
	document.body.classList.remove("is-leaving");
});

document.addEventListener("click", (event) => {
	const link = event.target.closest("a[data-page-transition]");

	if (
		!link ||
		event.button !== 0 ||
		event.ctrlKey ||
		event.metaKey ||
		event.shiftKey ||
		event.altKey
	) {
		return;
	}

	const destination = new URL(link.href, window.location.href);

	if (destination.origin !== window.location.origin) {
		return;
	}

	event.preventDefault();

	if (prefersReducedMotion) {
		window.location.assign(destination.href);
		return;
	}

	document.body.classList.add("is-leaving");

	window.setTimeout(() => {
		window.location.assign(destination.href);
	}, 180);
});
