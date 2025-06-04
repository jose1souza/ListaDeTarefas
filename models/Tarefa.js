class Tarefa{
    #descricao;
    #prioridade;
    #data;
    #hora;
    
    constructor(descricao, prioridade, data, hora) {
        this.#descricao = descricao;
        this.#prioridade = prioridade;
        this.#data = data;
        this.#hora = hora;
    }
  
    get descricao() {
        return this.#descricao;
    }

    set descricao(novaDescricao) {
        this.#descricao = novaDescricao;
    }

    get prioridade() {
        return this.#prioridade;
    }

    set prioridade(numPrioridade) {
        this.#prioridade = numPrioridade;
    }

    get data() {
        return this.#data;
    }

    set data(data) {
        this.#data = data;
    }

    get hora() {
        return this.#hora;
    }

    set hora(hora) {
        this.#hora = hora;
    }

    equals(outraTarefa) {
        if (!(outraTarefa instanceof Tarefa)) {
            return false;
        }
        return this.#prioridade === outraTarefa.prioridade && 
               this.#descricao === outraTarefa.descricao;
    }

    toString() {
        return `Descrição: ${this.#descricao} - Prioridade: ${this.#prioridade} - Data: ${this.#data} - Hora: ${this.#hora}`;
    }
}
