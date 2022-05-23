import styled from "styled-components"


export const Container = styled.div`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    background-color: rgb(0, 126, 255);

.container-login{
    display: flex;
    max-height: 100vh;
    flex-direction: column;
}

span{
    color: white;
    font-size: 20px;
    font-weight: bold;
}


.login-form{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    border-radius: 10px;
    padding: 50px;
    width: 100%;
   
}
.input{
   margin-top: 20px;
   width: 380px;
   background-color: transparent;
   height: 45px;
   color: #fff;
   padding: 0 5px;
   border: 0;
   margin-botton 45px;
   font-family: inherit;
   border-bottom: 2px solid #fff;
   outline: 0;
   transition: border-color 0.2s;
   &::placeholder {
    color: white;
  }
}
.btn-button{
    float: right;
    margin: 5px;
    padding: 8px;
    width: 100px;
    color: #1d94ff;
    cursor: pointer;
    border: none;
}
`;
export const Logo = styled.div`
    width: 100%;
h2{
    float: right;
    color: white;
    margin-right: 50px;
    
}
`;