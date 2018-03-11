class planner
{
    constructor()
    {
        this.element = document.querySelector('.planner_element--modifier');
        this.button_save = document.querySelector('.addtask_element--modifier');
        this.button_close = document.querySelector('.addtask_element--modifier_');
        this.war = document.querySelector('.warning');
    }
    load()
    {
       
        (this.element).addEventListener("click", evt => this.OpenNewTask(evt));
        (this.button_close).addEventListener("click", evt => this.closeaddtask(evt));
        (this.button_save).addEventListener("click", evt => this.save(evt));
        
        
    }
    save(evt)
    {
     evt.stopPropagation();
     const texttask = document.querySelector('.texttask');   
     const valtexttask = texttask.value.trim();
     const selectedday = document.querySelector('.selectday');
     const valselectday = selectedday.value;
     const selected = document.querySelector(`#${valselectday.toLowerCase()}`).querySelector('.tasks');
     const li = document.createElement('li');
     li.classList.add('task');
     li.innerHTML = `<p> ${valtexttask} </p>`;
     if (texttask && selected.children.length >= 10 )
         {
             (this.war).textContent= "Możesz dodać tylko dziesięć lekcji!";
         }
        else if (texttask)
            {
                selected.appendChild(li);
                this.closeaddtask();
                
            }
            else (selected.children.length<=0)
                {
                    (this.war). textContent = "Pole nie może być puste!";
                }
    }
    OpenNewTask(evt)
    {
        evt.stopPropagation();
        const el = document.querySelector('.container');
        const elp = document.querySelector('header p');
        const div = document.querySelector('.addtask');
        el.classList.add('sub_container');
        elp.classList.add('pa');
        div.classList.add('_addtask');
    }
    
    closeaddtask()
    {
        const closewindow = document.querySelector('.addtask');
        const closesubcontainer = document.querySelector('.container');
        closewindow.classList.remove('_addtask');
        closesubcontainer.classList.remove('sub_container');
    }
}
var plan = new planner();
plan.load();