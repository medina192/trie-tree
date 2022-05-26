import { TrieTreeNode } from "./TrieTreeNode";

export class TrieTree {
    
    constructor(word) {
        
        this.root = new TrieTreeNode('root');

        if(Array.isArray(word))
        { 
          for(const str of word)
          {
            this.insert(str);
          }
        }
        else if( typeof word == 'string' && word.length > 0)
        {
          this.insert(word);
        }
    }

    // regresa [node, depth] node -> el último nodo para el string dado (prefijo) y depth -> numero de
    // caracteres del prefijo que coinciden con los nodos de la estructura.
    findNode(prefix){

    }

    //  Recorre el árbol de forma recursiva.
    traverse(node, prefix, visit){

    }

    // regresa true si el árbol está vacio o false y si no está vacio.
    isEmpty(){
      for (const property in this.root.children) {
        return true;
      }
      return false;
    }
    
    // regresa true si el string se encuentra en el tree trie.
    contains(str){
      if(!str.length > 0)
      return false;

      str = str.toLowerCase();
      
      if(this.root.children[str[0]])
      {
          
          return this.#containsRecursively(str.slice(1), this.root.children[str[0]]);
      }
      else{
          return false;
      }
    
    }

    // regresa true si el string se encuentra en el tree trie.
    #containsRecursively(str, currentNode){

      if(!str.length > 0 && currentNode.terminal)
      {
        return true;
      }

      if(currentNode.children[str[0]])
      {
        return this.#containsRecursively(str.slice(1), currentNode.children[str[0]]);
      }
      else{
        return false;
      }  
    
    }
    




    // agrega un string en el tree trie.
    insert(str){
        
        if(!str)
          return;

        if(!str.length > 0 || typeof str !== 'string')
          return;

        str = str.toLowerCase();
        
        if(this.root.children[str[0]])
        {
            
            this.#inserRecursively(str.slice(1), this.root.children[str[0]]);
        }
        else{
            let currentNode = new TrieTreeNode(str[0]); 
            this.root.addChild(str[0], currentNode);

            if(str[1])
            {
              currentNode.terminal = false;
              this.#inserRecursively(str.slice(1), this.root.children[str[0]]);
            }
            else{
                currentNode.terminal = true;
            }
        }
        
    }

    #inserRecursively(str, currentNode) {

        if(!str.length > 0)
        { 
          // case  you have alexis, and need to insert alex
          if(Object.keys(currentNode.children).length > 0 )
          {
            currentNode.isFinalWordButHasChildren = true;
            currentNode.terminal = false;
          }
          return;
        }


        // has children
        if(currentNode.children[str[0]])
        {
          this.#inserRecursively(str.slice(1), currentNode.children[str[0]]);

          // but it is the final letter of another word, that is part of a larger word, fed in fedelobo
          if(!str[1])
          {
            //currentNode.isFinalWordButHasChildren = true;
          }
        }
        else{
          let childNode = new TrieTreeNode(str[0]); 
          currentNode.addChild(str[0], childNode);
          if(str[1])
          {
            childNode.terminal = false;
            this.#inserRecursively(str.slice(1), childNode);
          }
          else{
            if(Object.keys(childNode.children).length > 0 )
              childNode.terminal = false;
            else
              childNode.terminal = true;
          }
        }        

    }




    // regresa un arreglo de strings con el prefijo dado.
    complete(prefix){
      if(!prefix.length > 0)
        return [];

      
      prefix = prefix.toLowerCase();
      
      if(this.root.children[prefix[0]])
      {
          const prefixComplete = prefix;
          const arrayOfStringsFound = [];
          this.#completeRecursively(prefix.slice(1), prefixComplete, this.root.children[prefix[0]], arrayOfStringsFound);
          
          const arrayOfStringsFoundWithPrefix = [];
          for(let i = 0; i < arrayOfStringsFound.length; i++)
          {
            arrayOfStringsFoundWithPrefix.push(prefix+arrayOfStringsFound[i])
          }
          
          return arrayOfStringsFoundWithPrefix;  
      }
      else{
        return [];
      }
    }



    #completeRecursively(prefix, prefixComplete, currentNode, arrayOfStringsFound){
      // check if the prefix reach the last letter of the prefix
      if(!prefix.length > 0)
      {
        if(currentNode.terminal)
          return [];

        // the prefix ends, extract all the word that exists in the tree
        for(const letterProperty in currentNode.children)
        {
          this.#extractCharactersWithPrefix(letterProperty, currentNode.children[letterProperty], arrayOfStringsFound);
        }
      }
      // the prefix doesn´t end yet
      if(currentNode.children[prefix[0]])
        this.#completeRecursively(prefix.slice(1), prefixComplete, currentNode.children[prefix[0]], arrayOfStringsFound);
      else
        return [];
    }





    #extractCharactersWithPrefix(word, currentNode, arrayOfStringsFound){

      if(currentNode.isFinalWordButHasChildren)
      {
        arrayOfStringsFound.push(word);
      }

      if(currentNode.terminal)
      {
        arrayOfStringsFound.push(word);

        // if is terminal, but has children, continues the search
        if(Object.keys(currentNode.children).length > 0 )
        {
          for(const letterProperty in currentNode.children)
            this.#extractCharactersWithPrefix(word+letterProperty, currentNode.children[letterProperty], arrayOfStringsFound);
        }
      }
      else{
        for(const letterProperty in currentNode.children)
          this.#extractCharactersWithPrefix(word+letterProperty, currentNode.children[letterProperty], arrayOfStringsFound);
      }
    }


    // regresa un arreglo con todos los strings almacenados en el tree trie.
    allTreeStrings(){

    }
}
