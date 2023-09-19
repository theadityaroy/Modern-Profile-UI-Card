const showSocial = (ToggleCard, socialCard) =>{
    const toggle = document.getElementById(ToggleCard),
          social = document.getElementById(socialCard)

    toggle.addEventListener('click', () =>{
        if(social.classList.contains('animation')){
            social.classList.add('down-animation')

            setTimeout(() =>{
                social.classList.remove('down-animation')

            }, 1000)

        }

        social.classList.toggle('animation')
    })
}
showSocial('card-toggle', 'card-social')