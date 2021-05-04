import { Nav, Button } from 'react-bootstrap'

const Menu = () => {
  return (
    <>
      <Nav
        className='navbar navbar-expand-lg bg-secondary fixed-top'
        id='mainNav'
      >
        <div className='container'>
          <a
            className='navbar-brand js-scroll-trigger text-uppercase'
            href='#page-top'
          >
            chris achinga
          </a>
          <Button
            className='navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded'
            type='button'
            data-toggle='collapse'
            data-target='#navbarResponsive'
            aria-controls='navbarResponsive'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            Menu <i className='fas fa-bars ml-2'></i>
          </Button>
          <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item mx-0 mx-lg-1'>
                <a
                  className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger'
                  href='#skills'
                >
                  SKILLS
                </a>
              </li>
              <li className='nav-item mx-0 mx-lg-1'>
                <a
                  className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger'
                  href='#about'
                >
                  ABOUT
                </a>
              </li>
              <li className='nav-item mx-0 mx-lg-1'>
                <a
                  className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger'
                  href='#contact'
                >
                  CONTACT
                </a>
              </li>
              <li className='nav-item mx-0 mx-lg-1'>
                <a
                  className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger'
                  href='https://chrisdev.hashnode.dev'
                >
                  BLOG
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Nav>
    </>
  )
}

export default Menu