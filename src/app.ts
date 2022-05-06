class projectInput {
    templateElement:HTMLTemplateElement
    hostElement:HTMLDivElement
    element:HTMLFormElement

    constructor(){
        this.templateElement=document.querySelector("#project-input")! as HTMLTemplateElement
        this.hostElement=document.querySelector("#app")! as HTMLDivElement

        const importNode=document.importNode(this.templateElement.content,true)
        this.element=importNode.firstElementChild as HTMLFormElement
      
        this.attach()
    }

    private attach(){
        this.hostElement.insertAdjacentElement("afterbegin",this.element)
    }
}

const project=new projectInput()