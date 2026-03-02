import { Title, Information } from './structure.ts'

class Interface extends Information {
    while () {
            console.log("Bienvenue dans notre créateur de rapport d'enquete OSINT : ");
            console.log("[1] - Créer un contenue")
            console.log("[2] - Modifier un contenue")
            console.log("[3] - Supprimer un contenue")
            const choice = prompt("Que voulez vous faire ? : ") as any
            switch (choice) {
                case 1 :
                    this.addContent()
                    console.clear()
                    break;
                case 2 : 
                    this.editContent()
                    console.clear()
                    break;
                case 3 :
                    this.deleteContent()
                    console.clear()
                    break;
                default :
                    console.log("Invalid : Vous devez entrer un numero") 
            }
        }
    
    addContent() {
        const choiceContent = prompt("Entrez le titre : ")
        this.content = choiceContent as string

        const choiceType = prompt("Entrez le type : ")
        this.content = choiceType as string

        const choiceOrder = prompt("Entrez le numero : ")
        this.content = choiceOrder as string
    }

    editContent() {

    }

    deleteContent() {

    }
}

const start = new Interface()