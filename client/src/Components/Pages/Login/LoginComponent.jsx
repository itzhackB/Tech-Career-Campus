import React from 'react'

const Login = ()=> {
    const url= "http://localhost:8080"

    function testServer(){
        fetch(url+'/api/login')
        .then(res=> res.json())
        .then(content=>{
            document.getElementById("div").innerText=JSON.stringify(content);
        })
        .catch(err=>console.error());
    }

    function getToken(){

    }

    function checkToken(){

    }

    return (
        <div>
            Login
            <button onClick={testServer}>Test Server</button>
            <button>Get Token</button>
            <button>Check Token</button>
            <h1 id="div">1</h1>
        </div>
    )
}
export default Login
