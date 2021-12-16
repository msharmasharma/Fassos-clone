function navbar() {
    return`<nav>
    <div id="navcontainer">
        <div id="navleft">
            <a href="/collections">
                <img src="https://assets.faasos.io/faasos_v2/faasosLogoPurple.svg" alt="faasos logo" />
            </a>
            <div id="navlocation">
                <p>Ranchi</p>
                <p>Ranchi Jharkhand</p>
            </div>
        </div>
        <div id="navright">
            <p id="userName">Hi Punam Mehra</p>
            <p class="hamburger" onclick="openSide()">
                <i class="fas fa-bars"></i>
            </p>
        </div>
    </div>

<section id="side">
    <div id="sideMain">
        <div id="sideList">
            <span onclick="closeSide()"><i class="fas fa-times"></i></span>
            <ul id="sideNavList">
                <li>
                    <a href="#">
                        <span><img src="./img/Sidebarprofile.png" alt="Profile"></span>
                        <p>Profile</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span><img src="./img/Sidebarmanageorder.png" alt="Order"></span>
                        <p>Manage Orders</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span><img src="./img/Sidebaraddress.png" alt="Manage Addresses"></span>
                        <p>Manage Addresses</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span><img src="./img/Sidebarpayment.png" alt="Manage Payments"></span>
                        <p>Manage Payments</p>
                       
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span><img src="./img/Sidebarhelp.png" alt="Help & Support"></span>
                        <p>Help & Support</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span><img src="./img/Sidebarabout.png" alt="About Us"></span>
                        <p>About Us</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span><img src="./img/Sidebarparty.png" alt="Party Orders"></span>
                        <p>Party Orders</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span><img src="./img/Sidebarlogout.png" alt="Logout"></span>
                        <p>Logout</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</section>
</nav>`


}
export default navbar