import derive from '../src/api/derive'

derive("x%5E2%20%2B%202x")
    .then(res => {
        console.log("Le résultat est : " + res);
    })
    .catch(err => {
        console.error(err);
    })