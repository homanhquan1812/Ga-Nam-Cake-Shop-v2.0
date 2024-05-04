import React, { useEffect } from 'react';
import $ from 'jquery'; // Make sure you have jQuery installed

const GeneralScript = () => {
  useEffect(() => {
    const loadScript = (url, options = {}) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.async = options.async !== undefined ? options.async : true;
        script.defer = options.defer !== undefined ? options.defer : false;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const scriptUrls = [
      // Critical scripts
      'https://code.jquery.com/jquery-3.7.0.min.js',
      'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js',
      
      // Non-critical scripts
      '/js/jquery.countup.min.js',
      '/js/lightbox.min.js',
      '/js/isotope.pkgd.min.js',
      '/js/owl.carousel.min.js',
      '/js/util.js',
      '/js/main-backtotop.js',
      '/js/main.js',
      '/js/script.js',
      'https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.js',
      'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js',
      'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js',

      // Additional scripts
      'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js',
      'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js',
      'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'
    ];

    const loadScripts = async () => {
      for (const url of scriptUrls) {
        try {
          await loadScript(url, { async: !url.startsWith('http') }); // Scripts from CDNs are async
        } catch (error) {
          console.error(`Failed to load script: ${url}`, error);
        }
      }
    };

    loadScripts();

    $("#discardInfoBtn, #saveInfoBtn").hide();
    $("#discardAddedInfoBtn, #saveAddedInfoBtn").hide();
    $(".add-data").hide();
    $(".currentPosition").show();
    $(".changeCurrentPosition").hide();
    $(".currentDepartment").show();
    $(".changeCurrentDepartment").hide();
    $('#discardNoteBtn').hide();
    $('#discardProductBtn').hide();
    $('#saveProductBtn').hide();
    $('#saveNoteBtn').hide();

    $(document).ready(function () {
        $("#changeInfoBtn").click(function () {     
            $(".currentPosition").toggle();
            $(".changeCurrentPosition").toggle();
            $(".currentDepartment").toggle();
            $(".changeCurrentDepartment").toggle();
        });

        $('#discardInfoBtn').click(function () {
            $("#discardInfoBtn, #saveInfoBtn").hide();
            $("#changeInfoBtn, #addInfoBtn").show();
        });

        $('#discardNoteBtn').click(function () {
          $("#discardNoteBtn, #saveNoteBtn").hide();
          $('#addNoteBtn').show();
          $(".add-data").hide();
          $('#discardNoteBtn').hide();
      });
        // 

        $("#changeInfoBtn").click(function () {
            $("#discardInfoBtn, #saveInfoBtn").show();
            $("#changeInfoBtn, #addInfoBtn").hide();
            var element = document.getElementById('saveInfoBtn');
            element.style.margin = null;
            document.getElementById('warning').style.display = '';
        });

        $('#addInfoBtn').click(function() {
            $("#discardInfoBtn, #saveInfoBtn, #changeInfoBtn, #addInfoBtn").hide();
            $("#discardAddedInfoBtn, #saveAddedInfoBtn").show();
            var element = document.getElementById('saveAddedInfoBtn');
            element.style.margin = null;
            $(".add-data").show();
        })

        $('#addNoteBtn').click(function() {
            $('#addNoteBtn').hide();
            $(".add-data").show();
            $('#discardNoteBtn').show();
            $('#saveNoteBtn').show();
            /* document.getElementById('warning2').style.display = ''; */
            var element = document.getElementById('saveNoteBtn');
            element.style.margin = null;
        })

        $('#addProductBtn').click(function() {
            $('#addProductBtn').hide();
            $(".add-data").show();
            $('#discardProductBtn').show();
            $('#saveProductBtn').show();
            $('#product-searchbar').hide();
            document.getElementById('warning3').style.display = '';
        })

        $('#discardProductBtn').click(function() {
            $('#discardProductBtn').hide();
            $(".add-data").hide();
            $('#addProductBtn').show();
            $('#saveProductBtn').hide();
        })

        $('#discardInfoBtn').click(function () {
          $(".currentPosition").toggle();
            $(".changeCurrentPosition").toggle();
            $(".currentDepartment").toggle();
            $(".changeCurrentDepartment").toggle();
        });

        $('#discardAddedInfoBtn').click(function () {
            $("#discardInfoBtn, #saveInfoBtn").hide();
            $("#changeInfoBtn, #addInfoBtn").show();
            $("#discardAddedInfoBtn, #saveAddedInfoBtn").hide();
            $(".add-data").hide();
        });

        $('#saveAddedInfoBtn').click(function () {
            $(".add-data").hide();
            $('#saveAddedInfoBtn, #discardAddedInfoBtn').hide();
            $("#addInfoBtn, #changeInfoBtn").show();
        })

        $('#saveInfoBtn').click(function () {
            $('#saveInfoBtn, #discardInfoBtn').hide();
            $("#addInfoBtn, #changeInfoBtn").show();
        })
    });

            document.querySelectorAll(".addToCartForm").forEach(function(form) {
                form.addEventListener("submit", function(event) {
                    alert("Item added to cart successfully!");
                });
            });
  }, []);

  return null;
};

export default GeneralScript;
