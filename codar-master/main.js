function escodeMenu() {
    const btn_menu = document.getElementById('icone_menu')
    const nav_list = document.getElementById('nav-list')
    const btn_icone_xmenu = document.getElementById('icone_xmenu')
    btn_menu.addEventListener('click', function(){
        nav_list.classList.add('ative')
        btn_icone_xmenu.addEventListener('click',function(){
            nav_list.classList.remove('ative')
        })
    })
}

escodeMenu()