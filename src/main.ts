import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <section>
    <nav class="main-menu">
        <ul>
            <li class="menu-item">
                <a href="/src/debounce/">Debounce</a>
            </li>
            <li class="menu-item">
                <a href="/src/search-bar-debounce/">Search Bar (using debounce)</a>
            </li>
            <li class="menu-item">
                <a href="/src/throttle/">Throttle</a>
            </li>
        </ul>
    </nav>
  </section>
`

document.querySelector('.main-menu ul')?.addEventListener('click', (event) => {
  const target = event.target as HTMLElement
  let linkEl: HTMLAnchorElement | null
  if (target.tagName === 'LI') {
    linkEl = target.querySelector('a')
    if (!linkEl) return

    linkEl.click()
  }
})
