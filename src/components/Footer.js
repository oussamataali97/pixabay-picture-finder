import React from 'react'

function Footer() {

    const footerYear=new Date().getFullYear()
  return (
    <div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <div>
    <p>Copyright © {footerYear} - Pixabay Picture Finder By Oussama</p>
  </div>
</footer>
    </div>
  )
}

export default Footer
