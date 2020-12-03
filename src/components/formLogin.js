import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Link from 'next/link'
class SimLogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            valid: true,
            email: '',
            password: '',
            registrationErrors: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSumbit = this.handleSumbit.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSumbit(e) {
        e.preventDefault();
        const {
            email,
            password,
        } = this.state;

        axios.post('http://localhost:8000/login', {
            "email": this.state.email,
            "passwd": this.state.password,
        },
        )
            .then(Response => {
                console.log("post realizado correctamente", Response)

                if (Response.data.found == undefined) {
                    let rol = Response.data.Rol;
                    if (rol == "CUSTOMER") {
                        console.log(rol)
                        
                    } else {
                        console.log(rol)
                    }
                }else{
                    console.log(Response.data.found)
                }
            })
            .catch(error => {
                console.log("¿QUE QUERES?", error)
            });



    }

    render() {
        return (
            <Fragment>
                <div className="formLogin">
                    <form onSubmit={this.handleSumbit}>
                        <h1>Ingreso</h1>
                        <p>Email *</p>
                        <input className="inputIngreso"
                            autoComplete="off"
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <p>Contraseña *</p>
                        <input className="inputIngreso"
                            autoComplete="off"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <a href="/empty" ><p className="recContr"> Recuperar contraseña</p></a>
                        <a href="/registro" ><button disabled={this.valid} className="btnPrimario" type="submit"> Ingresar</button></a>
                    </form><br />
                    <a href="/registro" target="_blank"><button className="btnSecundario">Registrarse</button></a>
                </div>
            </Fragment>

        )
    }

}

export default SimLogin;
