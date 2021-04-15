import React from 'react'
import Styled from 'styled-components'

const HomeContentStyled = Styled.div`\
    .imagen{
        max-height:100px;
        max-width:100px;
    }
    .card{
        width:20em;
        height:18em;
    }
`;

const HomeContent = () => {
    return (
        <HomeContentStyled>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-3">
                        {/*Procesador */}
                        <div className="card">
                            <img src="https://www.spdigital.cl/img/products/BX8070110100.jpg" className="card-img-top imagen" alt="ProcesadorIntel"/>
                            <div className="card-title">
                                Procesador Intel i3
                            </div>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                            {/* Trajeta grafica */}
                        <div className="card">
                            <img src="https://www.spdigital.cl/img/products/06G-P4-6161-KR.jpg" className="card-img-top imagen img-fluid" alt="TarjetaNvidia"/>
                            <div className="card-title text-center">
                                Tarjeta Grafica
                            </div>
                            <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeContentStyled>
    )
}

export default HomeContent
