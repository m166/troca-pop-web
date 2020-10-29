listarPops = () => {
    return fetch('http://localhost:3000/pops')
        .then(reposta => {
            return reposta.json()
        })
        .then(json => {
            return json
        })
};