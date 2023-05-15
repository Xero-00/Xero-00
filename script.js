document.addEventListener("DOMContentLoaded",
    function(e){
        let linkButton = document.querySelector("#main_button_visual")
        
        linkButton.addEventListener("click",
            function(e){
                let link = "https://github.com/Xero-00"
        
                location.href = link
            }
        )
    }
)