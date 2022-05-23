import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Retorno from "./Retorno";
export default function Cadastro() {

    const url = "http://localhost:5000/register"
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [data, setData] = useState([])


    function registerProfile(e) {
        e.preventDefault();

        const data = new FormData
        data.append("name", name)
        data.append("email", email)
        data.append("password", password)
        data.append("image", image)

        // const data = {
        //     name,
        //     email,
        //     password
        // }
        
        const promisse = axios.post(url, data);

        promisse.then(response => {
            console.log(response.data)
            setData(response.data)
        })
        promisse.catch(err => {
            alert("deu ruim em" + err.response)
        })
    }

    return (
        <Container>
            <form onSubmit={registerProfile} encType="multipart/form-data">
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="name"
                    placeholder="nome"
                    type="text">
                </input>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="e-mail"
                    placeholder="email"
                    type="email">
                </input>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="pass"
                    placeholder="senha"
                    type="password">
                </input>
                <input   
                        onChange={(e)=>setImage(e.target.files[0])} 
                        className="pic" 
                        placeholder="foto (url)" 
                        type="file">
                </input>
                <button className="send" type="submit" >Cadastrar</button>
            </form>
            <Retorno data={data} />
        </Container>
    )
}


const Container = styled.main`
    color: white;

    form, section{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        margin-top: 50px;
    }

    input, button{
        width: 300px;
        height: 40px;
        border-radius: 5px;
        border: 1px solid gray;
        margin-bottom: 15px;
        font-size: 22px;
        padding: 5px;
    }

    input::placeholder{
        font-size: 22px;
        padding: 5px;
    }

`
// 
{/* <input   
                        onChange={(e)=>setImage(e.target.value)} 
                        value={image} 
                        className="pic" 
                        placeholder="foto (url)" 
                        type="file">
                </input> */}
//