$(document).ready(function() {

            /*EVERYTHING FOR LARGE SCREEN GOES HERE*/
            
            /*The two next functions are there for the hover effect; the background turns dark green on hover*/
            $(".menu a").mouseenter(function() {
                $(this).parent().addClass("hoverEffekt");
            });

            $(".menu a").mouseout(function() {
                $(this).parent().removeClass("hoverEffekt");
            });

            /*EVERYTHING FOR SMALL SCREEN GOES HERE*/
            
            /*the two next functions add the hover effect from before to the first list item (menu)*/
            $("ul.topmenu li:first-child").mouseenter(function() {
                $("ul.topmenu li:first-child").addClass("hoverEffekt");
            });

            $("ul.topmenu li:first-child").mouseout(function() {
                $("ul.topmenu li:first-child").removeClass("hoverEffekt");
            });

                /*This functions checks whether the list items with the .menu class are displayed or not, then sets them to the opposite when the first list item (menu) is clicked. It also rotates the arrow img to point the opposite direction.*/
            $("ul.topmenu li:first-child").click(function() {
                if ($(".menu").css("display") == 'none'){
                    $(".menu").slideDown().css("display", "block");
                    $("ul.topmenu li:first-child img").css("transform", "rotate(-180deg)");
                }
                else if ($(".menu").css("display") == 'block'){
                    $(".menu").slideUp()/*css("display", "none")*/;
                    $("ul.topmenu li:first-child img").css("transform", "rotate(0deg)");
                }
            });

                /*This function checks each time the window is resized whether the first list item (menu) is displayed or not. It then sets the list items with the class .menu to the opposite.*/
            $(window).resize(function() {
                if ($("ul.topmenu li:first-child").css("display") == 'none')
                    $(".menu").css("display", "block");
                else if ($("ul.topmenu li:first-child").css("display") == 'block')
                    $(".menu").css("display", "none");
            });
        });