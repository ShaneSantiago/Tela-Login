import React from "react"
import { HeaderContainer } from "./styled"
import { IoMdDownload } from 'react-icons/io';
import { HiOutlineDocumentSearch } from 'react-icons/hi';
import { FiLogOut } from 'react-icons/fi';


const Header = () => {
    return(
        <HeaderContainer>
            <div>
                <h2>THINK</h2>
                </div>
                <div className="container-btn">

                <button className="btn-button"><IoMdDownload />DOWNLOAD DE ARQUIVOS</button>
                <button className="btn-button"><HiOutlineDocumentSearch />CONSULTAS</button>
    
                </div>
                <div>
                <button className="btn-logout"><FiLogOut />SAIR</button>
                </div>
                
            
                

        </HeaderContainer>
    )
}
export default Header