document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('grid')

  for (let i = 1; i <= 90; i++) {
    const btn = document.createElement('button')
    btn.classList.add('number-btn')
    btn.textContent = i

    btn.addEventListener('click', () => {
      btn.classList.toggle('active')
    })

    grid.appendChild(btn)
  }
})
