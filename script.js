//dropdown button
document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})

//sidebar menu
document.addEventListener('click', e => {
    const isSidebarButton = e.target.matches("[data-sidebar-button]")
    if (!isSidebarButton && e.target.closest('[data-sidebar]') != null) return

    let currentSidebar
    let currentContentBox

    if (isSidebarButton) {
        currentSidebar = e.target.closest('[data-sidebar]')
        currentSidebar.classList.toggle('active')
    }    
})