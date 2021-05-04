import Axios from 'axios';

//llamada al endpoint de sepomex 
export const consultaSepomex = async(request) => {

    let endpoint_sepomex = "https://api-sepomex.hckdrk.mx/query/info_cp/"; //api sepomex
    let url = endpoint_sepomex + request + '?token=42fd5bc7-bc25-496b-ba24-2b1235445e43'; //token
        // realizamos la consulta
    let result = await Axios.get(url).then((res) => {
        // resultado
        return res.data;
    }).catch((error) => {
        let respuesta = JSON.stringify(error)
        return JSON.parse(respuesta).name
        
    });
    return result,
    console.log(result);
    // console.log(result.response.ciudad)
}

export function resultMunicipios(request) {
    let municipios = [];
    for (let i = 0; i < request.length; i++) {
        if (municipios .indexOf(request[i].response.municipio)) {
            municipios .push(request[i].response.municipio);
        }
    }
    return municipios;
}


export function resultEstados(request) {
    let estados = [];
    for (let i = 0; i < request.length; i++) {
        if (estados.indexOf(request[i].response.estado)) {
            estados.push(request[i].response.estado);
        }
    }
    return estados;
}


export function resultColonias(request) {
    let colonias = [];
    for (let i = 0; i < request.length; i++) {
        if (colonias.indexOf(request[i].response.colonia)) {
            colonias.push(request[i].response.colonia);
        }
    }
    return colonias;
}
