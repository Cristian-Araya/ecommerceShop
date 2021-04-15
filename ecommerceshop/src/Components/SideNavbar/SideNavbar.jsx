import React from 'react'
import styled from 'styled-components'
import {ArrowDownIcon} from '@primer/octicons-react'

    const SideNavbarStyled = styled.div`
           .boton{
               background-color:red;
           }
    `;


const SideNavbar = () => {
    return (
        <SideNavbarStyled>
            <div className="container p-4 pt-5">
                {/* boton colapse para sideabr menu*/}
                <div>
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <div>
                            <span>Todos los elementos </span>
                                <ArrowDownIcon size={15}/> 
                        </div>
                    </button>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            <ul>
                                <li>Primero</li>
                                <li>Segundo</li>
                                <li>Tercero</li>
                            </ul>
                        </div>
                    </div>
               </div>
            </div>
        </SideNavbarStyled>
    )
}

export default SideNavbar
