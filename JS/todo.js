       /* ----------------------側邊欄------------------------*/

        function openNav() {
            document.getElementById("mySidepanel").style.width = "140px";
            document.getElementById("right-content").style.marginLeft = "150px";
        }
        function closeNav() {
            document.getElementById("mySidepanel").style.width = "0";
            document.getElementById("right-content").style.marginLeft = "0";
        }
        /* ----------------------側邊欄 end ------------------------*/
        /* ----------------------時間日期------------------------*/

        function updateCurrentDate() {
            var currentDate = new Date();
            var year = currentDate.getFullYear();
            var month = currentDate.getMonth() + 1; // Months are zero-based
            var day = currentDate.getDate();
            var dayOfWeek = currentDate.getDay(); // 0 is Sunday, 1 is Monday, etc.
            month = (month < 10) ? "0" + month : month;
            day = (day < 10) ? "0" + day : day;
            var daysOfWeek = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
            var formattedDate = month + "月" + day + "日，" + daysOfWeek[dayOfWeek];
            document.getElementById("current-date").textContent = formattedDate;
        }
        setInterval(updateCurrentDate, 1000);
        updateCurrentDate();
        /* ----------------------時間日期 end------------------------*/
        /* ----------------------代辦清單 下拉清單------------------------*/

        function accordion() {
            var accordionContent = document.getElementById('accordionContent');
            accordionContent.style.display = (accordionContent.style.display === 'none' || accordionContent.style.display === '') ? 'block' : 'none';
        }

        function saveTask() {
            var inputText = document.getElementById('accordioninput').value;

            if (inputText.trim() !== "") {
                var taskList = document.getElementById('taskList');
                var newTaskItem = document.createElement('li');
                newTaskItem.textContent = inputText;

                // You can customize the task item styling here if needed

                taskList.appendChild(newTaskItem);

                // Clear the input field after displaying the task
                document.getElementById('accordioninput').value = "";
            }
        }
        /* ----------------------代辦清單 下拉清單 end------------------------*/
        function showContent(contentId) {
            var contentElements = document.querySelectorAll('.scroll.content');
            contentElements.forEach(function (element) {
                if (element.classList.contains(contentId)) {
                    element.style.display = 'block';
                } else {
                    element.style.display = 'none';
                }
            });
        }
        function changecase(themeId) {
            // 先將所有主題的CSS禁用
            document.getElementById('case1').disabled = true;
            document.getElementById('case2').disabled = true;
            document.getElementById('case3').disabled = true;
    
            // 啟用選擇的主題的CSS
            document.getElementById(themeId).disabled = false;
        }