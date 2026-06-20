class MagneticButton {
  selectors = {
    target: '[data-magnetic]',
  }

  constructor() {
    this.prefersReducedMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )
    this.finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)')

    this.elements = document.querySelectorAll(this.selectors.target)

    if (!this.elements.length) {
      return
    }

    this.isEnabled = false
    this.updateAvailability()
    this.bindMediaEvents()
  }

  updateAvailability = () => {
    const shouldEnable =
      !this.prefersReducedMotionQuery.matches && this.finePointerQuery.matches

    if (shouldEnable === this.isEnabled) {
      return
    }

    this.isEnabled = shouldEnable

    if (this.isEnabled) {
      this.bindEvents()
      return
    }

    this.unbindEvents()
    this.resetStyles()
  }

  onMouseMove = (e) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    const strength = 0.3 // Сила притяжения (0.3 = 30% от расстояния до курсора)
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    el.style.transition = 'transform 0.1s ease-out'
  }

  onMouseLeave = (e) => {
    const el = e.currentTarget
    el.style.transform = 'translate(0, 0)'
    el.style.transition = 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
  }

  bindEvents() {
    this.elements.forEach((element) => {
      element.addEventListener('mousemove', this.onMouseMove)
      element.addEventListener('mouseleave', this.onMouseLeave)
    })
  }

  unbindEvents() {
    this.elements.forEach((element) => {
      element.removeEventListener('mousemove', this.onMouseMove)
      element.removeEventListener('mouseleave', this.onMouseLeave)
    })
  }

  resetStyles() {
    this.elements.forEach((element) => {
      element.style.transform = ''
      element.style.transition = ''
    })
  }

  bindMediaEvents() {
    this.prefersReducedMotionQuery.addEventListener('change', this.updateAvailability)
    this.finePointerQuery.addEventListener('change', this.updateAvailability)
  }
}

export default MagneticButton
