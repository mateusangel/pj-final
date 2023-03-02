

const btnShow = document.getElementById('btn-nave');
btnShow.addEventListener('click', ()=> {
  const menuShow = document.getElementById('menu');
  menuShow.classList.toggle('active');
})

class Menu {
  constructor(){
    this.menu = document.querySelector("#btn-nave")
    this.menu2 = document.querySelector(" #menu-nave1")
    this.menu3 = document.querySelector(" #menu-nave2")
    this.menu4 = document.querySelector(" #menu-nave3")
    this.listMenu = document.querySelector("#menu")
    
  }

  handleclick(){
    this.menu.addEventListener("click",()=>{
       
        this.menu2.classList.toggle("active1")
        this.menu3.classList.toggle("active2")
        this.menu4.classList.toggle("active3")
        this.listMenu.classList.toggle("active4")

        
        
     
        console.log(this.listMenu)
      
    })
  }

}



const menu = new Menu()
menu.handleclick()

