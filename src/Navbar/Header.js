export default function Header(){
    return(
        <header>
         <div className="header-top">
            <div className="header">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                        <div className="full">
                           <div className="center-desk">
                              <div className="logo">
                                 <a href="index.html"><img src="images/logo.png" alt="#" /></a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                        <div className="menu-area">
                           <div className="limit-box">
                              <nav className="main-menu">
                                 <ul className="menu-area-main">
                                    <li className="active"> <a href="index.html">Home</a> </li>
                                    <li> <a href="#jewellery">jewellery</a> </li>
                                    <li> <a href="#contact">Contact</a> </li>
                                    <li> <a href="#clients">Our Clients</a> </li>
                                 </ul>
                              </nav>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <section className="slider_section">
               <div className="banner_main">
                  <div className="container">
                     <div className="row d_flex">
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 ">
                           <div className="text-bg">
                              <h1>Jewellery</h1>
                              <span>Indulge yourself in the joy of dressing <br /> 
                              <strong className="land_bold"></strong></span>
                              <a href="#">Contact Us</a>
                           </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                           <div className="text-img">
                              <figure><img src="images/img.png" /></figure>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
         </section>
         </div>
      </header>
    )
}