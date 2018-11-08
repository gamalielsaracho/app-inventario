
import MenuSidebar from './MenuSidebar'
import HeaderMobile from './HeaderMobile'
import HeaderDesktop from './HeaderDesktop'

function DashBoard() {
    return `
        <!-- DASHBOARD PAGE -->
        <div>
            ${HeaderDesktop()}
            ${MenuSidebar()}
            ${HeaderMobile()}

            <!-- PAGE CONTAINER-->
            <div class="page-container">

                <!-- MAIN CONTENT-->
                <div class="main-content">
                
                </div>
                <!-- END MAIN CONTENT-->

            </div>
            <!-- END PAGE CONTAINER-->
        </div>
    `
}

export default DashBoard
