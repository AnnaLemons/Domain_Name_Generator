const PRONOUN= ['the', 'their'];
const ADJECTIVE= ['great', 'big'];
const NOUN= ['justdoit','nipples','racoon'];
const EXTENSION=['it', 'es', 'de'];

window.onload = () => {
    let result = generator();
};

function generator() {
        let domain= []
        for (let i in PRONOUN) {
            for (let j in ADJECTIVE) {
                for (let k in NOUN) {
                    for (let l in EXTENSION) {
                        domain.push(PRONOUN[i].concat(ADJECTIVE[j],NOUN[k],EXTENSION[l]));
                    }
                }
            }
        }
    return domain;
};



