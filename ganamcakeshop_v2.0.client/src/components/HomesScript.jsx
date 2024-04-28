import React from "react";
import {Helmet} from "react-helmet";
 
class HomesScript extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <script src="/js/jquery.countup.min.js"></script>
                <script src="/js/lightbox.min.js"></script>
                <script src="/js/isotope.pkgd.min.js"></script>
                <script src="/js/owl.carousel.min.js"></script>
                <script src="/js/util.js"></script>
                <script src="/js/main-backtotop.js"></script>
                <script src="/js/main.js"></script>
                <script src="/js/script.js"></script>
                <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
                <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
                <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
            </Helmet>
        </div>
    );
  }
};

export default HomesScript;