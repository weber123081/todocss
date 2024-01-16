        window.onload = function () {
            updateCurrentDate();
            changecase('case3');
            document.querySelector('a[href="#tab-all"]').click();
        };

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
            var currentDateElement = document.getElementById("current-date");

            if (currentDateElement) {
                // 在確保元素存在後再設置 'textContent'
                var currentDate = new Date();
                var year = currentDate.getFullYear();
                var month = currentDate.getMonth() + 1;
                var day = currentDate.getDate();
                var dayOfWeek = currentDate.getDay();
                month = (month < 10) ? "0" + month : month;
                day = (day < 10) ? "0" + day : day;
                var daysOfWeek = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
                var formattedDate = month + "月" + day + "日，" + daysOfWeek[dayOfWeek];
                currentDateElement.textContent = formattedDate;
            }
        }

        /* ----------------------時間日期 end------------------------*/
        /* ----------------------代辦清單 下拉清單------------------------*/
        //顯示輸入欄
        function accordion() {
            var accordionContent = document.getElementById('accordionContent');
            if (accordionContent) {
                accordionContent.style.display = 'block';
            } else {
                console.error('Accordion content not found.');
            }
        }
        //隱藏輸入欄
        function hideAccordionContent() {
            var accordionContent = document.getElementById('accordionContent');
            if (accordionContent) {
                accordionContent.style.display = 'none';
            } else {
                console.error('Accordion content not found.');
            }
        }

        // 保存代辦事項
        var taskCounter = 1; // 計數器初始值
        function saveTask() {
            var inputText = document.getElementById('accordioninput').value;

            if (inputText.trim() !== "") {
                var date = document.getElementById('date').value;

                // Create a new task element
                var taskElement = document.createElement('div');
                taskElement.classList.add('task-item');

                // Add task content with a numbered prefix
                taskElement.innerHTML = '<p><strong>' + taskCounter + '. ' + inputText + '</strong><br>到期日: ' + date + '</p>';

                // Create an edit button
                var editButton = document.createElement('button');
                editButton.textContent = '修改';
                editButton.addEventListener('click', function () {
                    // Handle edit button click
                    var newText = prompt('Edit task:', inputText);
                    if (newText !== null) {
                        inputText = newText;
                        taskElement.querySelector('p').innerHTML = '<strong>' + inputText + '</strong><br>到期日: ' + date;
                    }
                });

                // Create a delete button
                var deleteButton = document.createElement('button');
                deleteButton.textContent = '刪除';
                deleteButton.addEventListener('click', function () {
                    // Handle delete button click
                    taskElement.remove();
                });

                // Increment the task counter
                taskCounter++;

                // Add edit button and delete button to taskElement
                taskElement.appendChild(editButton);
                taskElement.appendChild(deleteButton);

                // Append the task element to the task display div
                document.getElementById('content-all').appendChild(taskElement);

                // Clear the input fields after displaying the task
                document.getElementById('accordioninput').value = "";
                document.getElementById('date').value = "";
            }
            hideAccordionContent();
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
        /* ----------------------資料分類------------------------*/
