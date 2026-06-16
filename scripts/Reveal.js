class Reveal {
	selectors = {
		reveal: '[data-reveal]',
	}

	stateClasses = {
		visible: 'is-visible',
	}

	constructor() {
		this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

		if (this.prefersReducedMotion) {
			return
		}

		this.elements = this.collectElements()

		if (!this.elements.length) {
			return
		}

		this.init()
	}

	collectElements() {
		return [...document.querySelectorAll(this.selectors.reveal)]
	}

	init() {
		this.observer = new IntersectionObserver(this.onIntersection, {
			threshold: 0.2,
			rootMargin: '0px 0px -8% 0px',
		})

		this.elements.forEach((element) => {
			this.observer.observe(element)
		})
	}

	onIntersection = (entries) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				return
			}

			entry.target.classList.add(this.stateClasses.visible)
			this.observer.unobserve(entry.target)
		})
	}
}

export default Reveal
