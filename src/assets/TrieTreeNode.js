export class TrieTreeNode {

    constructor(value) {
        this.value = value;
        this.children ={};
        this.terminal = false;
        this.isFinalWordButHasChildren = false;
    }

    //regresa true si un nodo es terminal, es decir si el nodo representa el último caracter de un string
    // que almacenamos en el árbol
    isTerminal(){
        return this.terminal;
    }
    
    // regresa el número de hijos del nodo actual.
    numChildren(){
        let count = 0;
        for (const property in this.children) {
            count++;
        }
        return count;
    }
    
    // regresa true si alguno de los hijos del nodo contiene un caracter dado.
    hasChild(character){
        
        if(!this.children[character])
          return false;

        for (const property in this.children[character]) {
            if(property === character)
                return true;
        }
        return false;
    }
    
    // regresa el nodo hijo que contiene/almacena un caracter dado.
    getChild(character){

        if(this.children[character.toLowercase()])
            return this.children[character.toLowercase()];
        else
            return null;
    }
    
    // agrega un nuevo nodo hijo al nodo actual. Deberás de comprobar si el
    // nodo actual tiene un hijo con el caracter que deseamos agregar.
    addChild(character, child_node){
        this.children[character] = child_node;
    } 
}
