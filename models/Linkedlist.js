class LinkedList{
    #head;
    #tail;
    #qtd;

    constructor(){
        this.#head = null;
        this.#tail = null;
        this.#qtd = 0;
    }

    addFirst(novoDado){
        const novoNo = new No(novoDado);
        if(this.#head === null) // se estiver vazio
            this.#tail = novoNo;
        else{
            novoNo.proximo = this.#head;
            this.#head.anterior = novoNo;
        }
        this.#head = novoNo;
        this.#qtd++;
        return true;
    }

    addLast(novoDado){
        const novoNo = new No(novoDado);
        if(this.#head===null)// vazia
            this.#head = novoNo;
        else{
           novoNo.anterior = this.#tail;
           this.#tail.proximo = novoNo;
        }
        this.#tail = novoNo;
        this.#qtd++;
        return true;
    }

    addAtIndex(posicao,novoDado){
        if(posicao<=0)
            return this.addFirst(novoDado);
        if(posicao>=this.#qtd)
            return this.addLast(novoDado);
        const novoNo = new No(novoDado);
        let aux = this.#head;
        let indice = 0;
            while(indice < posicao-1){
                aux = aux.proximo;
                indice++;
        }
        novoNo.anterior = aux;
        novoNo.proximo = aux.proximo;
        aux.proximo = novoNo;
        novoNo.proximo.anterior = novoNo;
        qtd++;
        return true;
    }

    removeAtIndex(index){
        let atual = this.#head;
        let posicao = 0;
            while(posicao < index){
                atual = atual.proximo;
                posicao++;
        }
        const anterior = atual.anterior;
        const proximo = atual.proximo;
        anterior.proximo = proximo;
        proximo.anterior = anterior;
        this.#qtd--;
        return atual.dado;
    }

    removeFirst(){
        const dadoRemovido = this.#head.dado;
        this.#head = this.#head.proximo;
        if(this.#head!==null)
            this.#head.anterior = null;
        else
            this.#tail = null;
        this.#qtd--;
        return dadoRemovido;
    }

    removeLast(){
        const dadoRemovido = this.#tail.dado;
        this.#tail = this.#tail.anterior;
        if(this.#tail!=null)
            this.#tail.proximo = null;
        else
          this.#head = null;
        this.#qtd--;
        return dadoRemovido;
    }
    
    getLast(){
      return this.#tail.dado;
    }
     getFirst(){
        return this.#head.dado;
     }
    isEmpty(){
        return this.#head === null;
    }

    get length(){
        return this.#qtd;
    }

    //-------------------------------------
//Quando um objeto tem um iterator, ele pode ser iterado com construções como [ for(const item of minhaLista)*/

[Symbol.iterator]() {         
    let noAtual = this.#head;
          return {
            next: function() {
              if (noAtual!==null) {
                let valor = noAtual.dado;
                noAtual = noAtual.proximo;
                return { value: valor, done: false };
              } else {
                return { done: true };
              }
            }
          };
        }
  //—----------------
    toString() {
          let result = "";
          let noAtual = this.#head;
          while (noAtual !== null) {
              result += noAtual;
              noAtual = noAtual.proximo;
          }
          return result;
      }
   //----------------   
    }
