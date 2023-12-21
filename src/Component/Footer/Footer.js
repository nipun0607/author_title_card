import './Footer.css'
 const Footer=()=>{
    return(
        <div className="footer_container">
            <img src="https://pbs.twimg.com/media/F-0cCM_bEAADC6_.png"/>
            <p class="Footer_para">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Incidunt consequuntur amet culpa cum itaque neque.</p>
            <ul className="footer_list">
                <li>About</li>
                <li>Careers</li>
                <li>History</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Blog</li>
            </ul>
            <div className="footer_contact">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-dribbble"></i>
            </div>

        </div>
    )
}
export default Footer