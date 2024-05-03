import React, { useEffect } from 'react';
import $ from 'jquery'; // Make sure you have jQuery installed

const GeneralScript = () => {
  useEffect(() => {
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
                    document.getElementById('warning3').style.display = 'none';
                    $('#discardProductBtn').hide();
                    $(".add-data").hide();
                    $('#addProductBtn').show();
                    $('#saveProductBtn').hide();
                })

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

            function myFunction() {
                var input, filter, table, tr, td, i, txtValue;
                input = document.getElementById("product-searchbar");
                filter = input.value.toUpperCase();
                table = document.getElementById("myTable");
                tr = table.getElementsByTagName("tr");
                for (i = 0; i < tr.length; i++) {
                    td = tr[i].getElementsByTagName("td")[1];
                    if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                    }       
                }
            }

            function filterProducts() {
                var input, filter, items, type, i, txtValue;
                input = document.getElementById("product-searchbar123");
                filter = input.value.toUpperCase();
                items = document.getElementsByClassName("showcase__item");

                for (i = 0; i < items.length; i++) {
                    type = items[i].getAttribute("data-category").toUpperCase();
                    txtValue = items[i].innerText || items[i].textContent;

                    if (type.indexOf(filter) > -1 || txtValue.toUpperCase().indexOf(filter) > -1) {
                        items[i].removeAttribute("style");
                    } else {
                        items[i].style.display = "none";
                    }
                }
            }

            document.querySelectorAll(".demo").forEach(function(element) {
                var x = Math.floor(Math.random() * 100) + 1;
                element.innerHTML = x;
            });

            document.querySelectorAll(".addToCartForm").forEach(function(form) {
                form.addEventListener("submit", function(event) {
                    alert("Item added to cart successfully!");
                });
            });
  }, []);
}

export default GeneralScript;
