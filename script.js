document.addEventListener("DOMContentLoaded",
    function(e){
        let linkButton = document.querySelector("#main_button_visual")
        
        linkButton.addEventListener("click",
            function(e){
                let link = "https://github.com/Xero-00"
                location.href = link
            }
        )

        linkButton.addEventListener("mouseover",
            function(e){
                linkButton.style.backgroundColor = "rgb(200,200,200)"
                linkButton.style.cursor = "pointer"
            }
        )

        linkButton.addEventListener("mouseleave",
            function(e){
                linkButton.style.backgroundColor = "rgb(245,245,245)"
            }
        )

        
        let XButton = document.querySelector("#top_X")
        let bodyContent = document.querySelector("body")

        let timerIDInterval = 0
        let timerIDCount = 0
        let timerIDTimeout = 0

        function countClear() {
            clearInterval(timerIDInterval)
        }

        function nyanText() {
            bodyContent.innerHTML = "404 'Nyan' Found"
        }

        XButton.addEventListener("click",
            function(e){
                let countNum = 0
                let displayNum = 3 - countNum

                function normalText() {
                    bodyContent.innerHTML = "404 Not Found: " + displayNum
                    countNum++
                    displayNum = 3 - countNum
                }

                normalText()
                timerIDInterval = setInterval(normalText, 1000)
                timerIDCount = setTimeout(countClear, 3000)
                timerIDTimeout = setTimeout(nyanText, 4000)
            }
        )
    }
)