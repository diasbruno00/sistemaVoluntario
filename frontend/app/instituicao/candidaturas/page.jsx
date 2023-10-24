
'use client'


import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import axios from 'axios'

const buscarTodasAsCandidaturas = async () => {

    try {

        const response = await axios.get(`http://localhost:3333/selecionada/instituicao`)

        return  response.data

    } catch (error) {
        console.log(error)

    }

}

export default function ListaDeMinhasCandidaturas(){

    const { push } = useRouter()

    const [listaCandidaturas, setListaCandidaturas] = useState([]);
    const [busca, setBusca] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const lista = await buscarTodasAsCandidaturas();
            console.log(lista)
            setListaCandidaturas(lista);
        };

        fetchData();
    }, []);

    const listaFiltrada = listaCandidaturas.filter((candidatura) => candidatura.instituicao.nome.toLowerCase().includes(busca.toLowerCase()))

    return (
     
        <div >
            <nav className="navbar bg-body-tertiary ">
                <div className="container-fluid">
                    <a className="navbar-brand"></a>
                    <form className="d-flex" role="search" method="get" >
                        <input className="form-control me-2" type="search" value={busca} onChange={(event) => setBusca(event.target.value)} placeholder="Nome instituição" aria-label="Search" />
                    </form>
                </div>
            </nav>
            <table className="table" >
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">localização</th>
                        <th scope="col">Causa</th>
                        <th scope="col">Numero de vagas de Voluntario</th>
                        <th scope="col">Doação Minima</th>
                        <th scope='col'>Area de Interesse</th>
                        <th scope='col'>Modalidade do serviço voluntario</th>
                        <th scope='col'>Duracao Servico </th>

                    </tr>
                </thead>
                <tbody>
                    {
                        listaFiltrada.map((valor) => {
                            return (
                                <tr key={valor._id} className="">
                                    <td>{valor.instituicao.nome}</td>
                                    <td>{valor.instituicao.localizacao}</td>
                                    <td>{valor.instituicao.causa}</td>
                                    <td>{valor.instituicao.numeroVagasVoluntario}</td>
                                    <td>{valor.instituicao.doacaoMinima}</td>
                                    <td>{valor.areaInterese}</td>
                                    <td>{valor.modalidadeServicoVoluntario}</td>
                                    <td>{valor.duracaoServico}</td>


                                    <button type="button" className="btn btn-info" onClick={() => {
                                            push(``)}}> </button>

                                    <button type="button" className="btn btn-warning" onClick={() => {
                                            push(``)}}> </button>


                                </tr>
                            )

                        })
                    }

                </tbody>
            </table>
        </div>
        
    )
}
