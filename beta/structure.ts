

export class Title {
    protected content : string; // Le contenue soit le titre en claire
    protected type : string; // Quel est le contenu de ce qui est donnée
    protected order : number; // Ordre dans le rapport

    constructor(content : string, type : string, order : number) {
        this.content = content;
        this.type = type;
        this.order = order;
    }
}

export class Information extends Title {
    protected typeOfInformation : string; // Le type d'information (le titre)
    protected informationContent : string; // Le contenu de l'information
    protected infromationOrder : number; // Le numero de l'information parmis le Titre de base

    constructor(content : string, type : string, order : number, typeOfInformation : string, information : string, informationContent : string, infromationOrder : number) {
        super(content, type, order)
        this.typeOfInformation = typeOfInformation;
        this.informationContent = informationContent;
        this.infromationOrder = infromationOrder;
    }
}


//export class Explanation extends Title {
//    protected explanationContent : string; // Le contenu de l'explication
//    protected explanationOrder : number; // Le numero de l'explication
//
//    constructor(content : string, type : string, order : number, explanationContent : string, explanationOrder : number, explanationContent : string) {
//        super(content, type, order)
//        this.explanationContent = explanationContent;
//        this.explanationOrder = explanationOrder;
//    }
//}