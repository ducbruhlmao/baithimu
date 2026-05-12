document.addEventListener("DOMContentLoaded", function() {

    var tabs = document.querySelectorAll(".tab");
    var indicator = document.querySelector(".indicator");

    tabs.forEach(function(tab, index) {
        tab.addEventListener("click", function() {

            // animation
            indicator.style.transform = "translateX(" + (index * 100) + "%)";

            var activeTab = document.querySelector(".tab.active");
            if (activeTab) {
                activeTab.classList.remove("active");
            }
            tab.classList.add("active");

            // delay rồi chuyển trang
            setTimeout(function() {
                if (index === 0) {
                    window.location.href = "trandau.html";
                } else if (index === 1) {
                    window.location.href = "ketqua.html";
                } else if (index === 2) {
                    window.location.href = "bxh.html";
                }
            }, 200);

        });
    });
        // set vị trí indicator theo tab active
        var activeIndex = 0;

        tabs.forEach(function(tab, index) {
            if (tab.classList.contains("active")) {
                activeIndex = index;
            }
        });

        // cập nhật vị trí thanh vàng
        indicator.style.transform = "translateX(" + (activeIndex * 100) + "%)";
});
//bật/tắt trạng thái hiển thị của một “card” và đảm bảo chỉ có 1 card mở tại một thời điểm.
        function toggleCard(header) {
        let card = header.parentElement;

        let allCards = document.querySelectorAll(".card");

        allCards.forEach(function (item) {
            if (item !== card) {
            item.classList.remove("active");
            }
        });

        card.classList.toggle("active");
        }
// thanh menu mobile
        function toggleMenu() {
            document.getElementById("nav").classList.toggle("active");
            document.querySelector(".overlay").classList.toggle("active");
        }