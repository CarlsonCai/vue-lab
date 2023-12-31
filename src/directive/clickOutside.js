const ClickOutside = {
  beforeMount(el, binding) {
    const handleClickOutside = event => {
      if (!el.contains(event.target) && el !== event.target) {
        // Click outside callback function
        binding.value()
      }
    }
    // Store the event listener so we can remove it later
    el._clickOutsideHandler = handleClickOutside

    // Listen for click events
    document.addEventListener('click', handleClickOutside)
  },
  beforeUnmount(el) {
    // Remove the event listener during component unmount
    document.removeEventListener('click', el._clickOutsideHandler)
  }
}
export default ClickOutside
