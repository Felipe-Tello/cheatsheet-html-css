import React from 'react';
import '../Styles/BasicHTML.css';

const BasicHTMLForms = () => {

    const preventSubmit = (e) =>{
        e.preventDefault()
    }

    return (
        <div className="container-fluid contenedor">
            <h1 className="subtitulo">Inputs de formularios mas comunes</h1>
            <br />
            <p>Esta seccion esta enfocada a los formularios mas comunes encontrados en el desarrollo web, al igual que en la seccion HTML cabe menciona que solamente son algunos de una gran variedad de opciones disponibles, cada etiqueta puede tener un atributo en especifico o una convinacion de varios para personalizar la informacion entregada</p>
            <p>Cabe destacar que la etiqueta <code>&lt;input type=""&gt;</code> como tal acepta muchos parametros en su atributo <code>type=""</code> los que vamos a ver aca seran:</p>
            <ul>
                <li><code>&lt;input type="submit"&gt;</code>: nos permite enviar toda la informacion que pongamos entre las etiquetas <code>&lt;form&gt;</code><code>&lt;/form&gt;</code></li>
                <li><code>&lt;input type="text"&gt;</code>: nos permite enviar textos generalmente no superiores a 255 letras</li>
                <li><code>&lt;input type="number"&gt;</code>: nos permite enviar valores numericos</li>
                <li><code>&lt;input type="email"&gt;</code>: nos permite enviar correos electronicos ademas de verificar que tengan un formato valido</li>
                <li><code>&lt;input type="password"&gt;</code>: nos permite enviar contraseñas de manera anonima remplazando los caracteres por puntos</li>
                <li><code>&lt;input type="date"&gt;</code>: nos permite enviar fechas especificas</li>
                <li><code>&lt;input type="radio" name=""&gt;</code>: nos permite desplegar varias casillas circulares, con el objetivo de que solamente una sea escogida (para que solo se pueda escoger una sola opcion... el texto dentro del atributo <code>name=""</code> debe coincidir en todos los input)</li>
                <li><code>&lt;input type="checkbox" name=""&gt;</code>: contraparte del <code>&lt;input type="radio" name=""&gt;</code> haciendo que se puedan escoger multiples valores entre las casillas</li>
            </ul>
            <p>Otros inputs que no ocupan la etiqueta <code>&lt;input type=""&gt;</code> pero igualmente sirven para enviar informacion</p>
            <ul>
                <li><code>&lt;textarea cols="30" rows="10"&gt;</code><code>&lt;/textarea&gt;</code>: nos permite enviar textos generalmente superiores a 255 letras (las propiedades <code>cols="30"</code> y <code>rows="10"</code> sirven para asignar altura y anchura respectivamente)</li>
                <li>las etiquetas <code>&lt;select&gt;</code><code>&lt;/select&gt;</code> son parecidas a las etiquetas <code>&lt;ol&gt;</code><code>&lt;/ol&gt;</code> o <code>&lt;ul&gt;</code><code>&lt;/ul&gt;</code>  ya que dentro deben tener etiquetas <code>&lt;option&gt;</code><code>&lt;/option&gt;</code> que nos permitira desplegar una lista de opciones <br />
                    <code className="tab">&lt;select&gt;</code><br/>
                        <code className="tab1">&lt;option&gt;</code>texto visible<code>&lt;/option&gt;</code><br/>
                    <code className="tab">&lt;/select&gt;</code>
                </li>
            </ul>
            <p>Otra etiqueta util en los formularios es la etiqueta <code>&lt;label for=""&gt;&lt;/label&gt;</code> haciendo mas facil a los usuarios poder ingresar su informacion, ya que los textos que acompañan al input son sensibles tambien al usuario... aca un ejemplo</p>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div style={{marginLeft:"5vw", border:"2px solid green"}}>
                    <p>formulario con <code>&lt;label for=""&gt;&lt;/label&gt;</code></p>
                    <form action="/action_page.php">
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label htmlFor="html">HTML</label><br/>
                        <input type="radio" id="css" name="fav_language" value="CSS"/>
                        <label htmlFor="css">CSS</label><br/>
                        <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                        <label htmlFor="javascript">JavaScript</label><br/><br/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
                <div style={{marginLeft:"5vw", border:"2px solid red"}}>
                    <p>formulario sin <code>&lt;label for=""&gt;&lt;/label&gt;</code></p>
                    <form action="/action_page.php">
                        <h6><input type="radio" id="html" name="fav_language" value="HTML"/>HTML</h6>
                        <h6><input type="radio" id="css" name="fav_language" value="CSS"/>CSS</h6>
                        <h6><input type="radio" id="javascript" name="fav_language" value="JavaScript"/>JavaScript</h6>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
            <p>*Disclaimer: se desactivo el funcionamiento del <code>&lt;input type="submit" value="Enviar"&gt;</code> para efectuar un mejor ejemplo, normalmente este boton envia los datos que esten dentro de las etiquetas <code>&lt;form&gt;</code><code>&lt;/form&gt;</code> y nos rediriga a una pagina o haga una accion en especifico</p>
            <ol>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div>
                        <form style={{display:"flex", flexDirection:"column"}} action="">
                            <input type="submit" value="Enviar" /> <h6>Boton sin modificar</h6>
                        </form>
                    </div>
                    <div style={{width:"5vw"}}>
                    </div>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <input type="submit" onClick={preventSubmit} value="Enviar" /> <h6>Boton modificado</h6>
                    </div>
                </div>
            </ol>
            <br />
            <div className="main-table">
                <h3 className="subtitulo">Formulario</h3>
                <table className="table table-striped-columns">
                    <thead>
                        <tr>
                            <th className="col-3">Descripcion</th>
                            <th className="col-3">Codigo</th>
                            <th className="col-3">Demostracion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Para Enviar los datos de un formulario... todos los input deben estar dentro de las etiquetas <code>&lt;form&gt;</code><br/><code>&lt;/form&gt;</code> ademas de incluir un input o boton para enviar la informacion </td>
                            <td>
                                <code>&lt;form&gt;</code><br/>
                                    <code className="tab">&lt;input type="submit" value="Enviar"&gt;</code><br/>
                                <code>&lt;/form&gt;</code>
                            </td>
                            <td>
                                <input onClick={preventSubmit} type="submit" value="Enviar"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="main-table">
                <h3 className="subtitulo">Texto</h3>
                <table className="table table-striped-columns">
                    <thead>
                        <tr>
                            <th className="col-3">Descripcion</th>
                            <th className="col-3">Codigo</th>
                            <th className="col-3">Demostracion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nombres, Apellidos, Etiquetas</td>
                            <td>
                                <code>&lt;form&gt;</code><br/>
                                    <code className="tab">&lt;input type="text"&gt;</code><br/>
                                    <code className="tab">&lt;input type="submit" value="Enviar"&gt;</code><br/>
                                <code>&lt;/form&gt;</code>
                            </td>
                            <td>
                                <input type="text"/>
                                <input onClick={preventSubmit} type="submit" value="Enviar"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="main-table">
                <h3 className="subtitulo">Parrafos</h3>
                <table className="table table-striped-columns">
                    <thead>
                        <tr>
                            <th className="col-3">Descripcion</th>
                            <th className="col-3">Codigo</th>
                            <th className="col-3">Demostracion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>descripciones, comentarios, mensajes</td>
                            <td>
                                <code>&lt;form&gt;</code><br/>
                                    <code className="tab">&lt;textarea name="" id="" cols="30" rows="10"&gt;</code><code>&lt;/textarea&gt;</code><br/>
                                    <code className="tab">&lt;input type="submit" value="Enviar"&gt;</code><br/>
                                <code>&lt;/form&gt;</code>
                            </td>
                            <td>
                                <textarea name="" id="" cols="30" rows="3"></textarea>
                                <input onClick={preventSubmit} type="submit" value="Enviar"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="main-table">
                <h3 className="subtitulo">Numeros</h3>
                <table className="table table-striped-columns">
                    <thead>
                        <tr>
                            <th className="col-3">Descripcion</th>
                            <th className="col-3">Codigo</th>
                            <th className="col-3">Demostracion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>edades, pedidos, valores numericos</td>
                            <td>
                                <code>&lt;form&gt;</code><br/>
                                    <code className="tab">&lt;input type="number"&gt;</code><br/>
                                    <code className="tab">&lt;input type="submit" value="Enviar"&gt;</code><br/>
                                <code>&lt;/form&gt;</code>
                            </td>
                            <td>
                                <form action="" method="">
                                    <input type="number"/>
                                    <input onClick={preventSubmit} type="submit" value="Enviar"/>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="main-table">
                <h3 className="subtitulo">E-mail</h3>
                <table className="table table-striped-columns">
                    <thead>
                        <tr>
                            <th className="col-3">Descripcion</th>
                            <th className="col-3">Codigo</th>
                            <th className="col-3">Demostracion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Correos electronicos</td>
                            <td>
                                <code>&lt;form&gt;</code><br/>
                                    <code className="tab">&lt;input type="email"&gt;</code><br/>
                                    <code className="tab">&lt;input type="submit" value="Enviar"&gt;</code><br/>
                                <code>&lt;/form&gt;</code>
                            </td>
                            <td>
                                <form action="" method="">
                                    <input type="email"/>
                                    <input onClick={preventSubmit} type="submit" value="Enviar"/>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="main-table">
                <h3 className="subtitulo">Claves y contraseñas</h3>
                <table className="table table-striped-columns">
                    <thead>
                        <tr>
                            <th className="col-3">Descripcion</th>
                            <th className="col-3">Codigo</th>
                            <th className="col-3">Demostracion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Contraseñas</td>
                            <td>
                                <code>&lt;form&gt;</code><br/>
                                    <code className="tab">&lt;input type="password"&gt;</code><br/>
                                    <code className="tab">&lt;input type="submit" value="Enviar"&gt;</code><br/>
                                <code>&lt;/form&gt;</code>
                            </td>
                            <td>
                                <form action="" method="">
                                    <input type="password"/>
                                    <input onClick={preventSubmit} type="submit" value="Enviar"/>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="main-table">
                <h3 className="subtitulo">Fechas</h3>
                <table className="table table-striped-columns">
                    <thead>
                        <tr>
                            <th className="col-3">Descripcion</th>
                            <th className="col-3">Codigo</th>
                            <th className="col-3">Demostracion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Fechas de nacimiento, fechas de llegada y salida, busqueda de fechas</td>
                            <td>
                                <code>&lt;form&gt;</code><br/>
                                    <code className="tab">&lt;input type="date"&gt;</code><br/>
                                    <code className="tab">&lt;input type="submit" value="Enviar"&gt;</code><br/>
                                <code>&lt;/form&gt;</code>
                            </td>
                            <td>
                                <form action="" method="">
                                    <input type="date"/>
                                    <input onClick={preventSubmit} type="submit" value="Enviar"/>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="main-table">
                <h3 className="subtitulo">Casilla unica</h3>
                <table className="table table-striped-columns">
                    <thead>
                        <tr>
                            <th className="col-3">Descripcion</th>
                            <th className="col-3">Codigo</th>
                            <th className="col-3">Demostracion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Elegir una sola opcion de multiples</td>
                            <td>
                                <code>&lt;form&gt;</code><br/>
                                    <code className="tab">&lt;label for="Hombre"&gt;Hombre&lt;/label&gt;</code><br/>
                                    <code className="tab">&lt;input type="radio" name="genero" id="Hombre"&gt;</code><br/>
                                    <code className="tab">&lt;label for="Mujer"&gt;Mujer&lt;/label&gt;</code><br/>
                                    <code className="tab">&lt;input type="radio" name="genero" id="Mujer"&gt;</code><br/>
                                    <code className="tab">&lt;label for="Otro"&gt;Otro&lt;/label&gt;</code><br/>
                                    <code className="tab">&lt;input type="radio" name="genero" id="Otro"&gt;</code><br/>
                                    <code className="tab">&lt;input type="submit" value="Enviar"&gt;</code><br/>
                                <code>&lt;/form&gt;</code>
                            </td>
                            <td>
                                <form action="" method="">
                                    <div>
                                        <label htmlFor="Hombre">Hombre</label>
                                        <input type="radio" name="genero" id="Hombre"/>
                                    </div>
                                    <div>
                                        <label htmlFor="Mujer">Mujer</label>
                                        <input type="radio" name="genero" id="Mujer"/>
                                    </div>
                                    <div>
                                        <label htmlFor="Otro">Otro</label>
                                        <input type="radio" name="genero" id="Otro"/>
                                    </div>
                                    <input onClick={preventSubmit} type="submit" value="Enviar"/>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="main-table">
                <h3 className="subtitulo">Casillas multiples</h3>
                <table className="table table-striped-columns">
                    <thead>
                        <tr>
                            <th className="col-3">Descripcion</th>
                            <th className="col-3">Codigo</th>
                            <th className="col-3">Demostracion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Elegir una o varias opciones disponibles</td>
                            <td>
                                <code>&lt;form&gt;</code><br/>
                                    <code className="tab">&lt;label for="Facebook"&gt;Facebook&lt;/label&gt;</code><br/>
                                    <code className="tab">&lt;input type="checkbox" name="red_social" id="Facebook"&gt;</code><br/>
                                    <code className="tab">&lt;label for="Linkedin"&gt;Linkedin&lt;/label&gt;</code><br/>
                                    <code className="tab">&lt;input type="checkbox" name="red_social" id="Linkedin"&gt;</code><br/>
                                    <code className="tab">&lt;input type="submit" value="Enviar"&gt;</code><br/>
                                    <code className="tab">&lt;label for="Twitter"&gt;Twitter&lt;/label&gt;</code><br/>
                                    <code className="tab">&lt;input type="checkbox" name="red_social" id="Twitter"&gt;</code><br/>
                                <code>&lt;/form&gt;</code>
                            </td>
                            <td>
                                <form action="" method="">
                                    <div>
                                        <label htmlFor="Facebook">Facebook</label>
                                        <input type="checkbox" name="red_social" id="Facebook"/>
                                    </div>
                                    <div>
                                        <label htmlFor="Linkedin">Linkedin</label>
                                        <input type="checkbox" name="red_social" id="Linkedin"/>
                                    </div>
                                    <div>
                                        <label htmlFor="Twitter">Twitter</label>
                                        <input type="checkbox" name="red_social" id="Twitter"/>
                                    </div>
                                    <input onClick={preventSubmit} type="submit" value="Enviar"/>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="main-table">
                <h3 className="subtitulo">Lista desplegable</h3>
                <table className="table table-striped-columns">
                    <thead>
                        <tr>
                            <th className="col-3">Descripcion</th>
                            <th className="col-3">Codigo</th>
                            <th className="col-3">Demostracion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>selecciona una de las opciones en la lista</td>
                            <td>
                                <code>&lt;form&gt;</code><br/>
                                    <code className="tab">&lt;select&gt;</code><br/>
                                        <code className="tab1">&lt;option disabled selected &gt;</code>Selecciona tu color preferido<code>&lt;/option&gt;</code><br/>
                                        <code className="tab1">&lt;option&gt;</code>Verde<code>&lt;/option&gt;</code><br/>
                                        <code className="tab1">&lt;option&gt;</code>Azul<code>&lt;/option&gt;</code><br/>
                                        <code className="tab1">&lt;option&gt;</code>Rojo<code>&lt;/option&gt;</code><br/>
                                    <code className="tab">&lt;select&gt;</code>
                                <code>&lt;/form&gt;</code>
                            </td>
                            <td>
                                <form action="" method="">
                                    <select name="" id="">
                                        <option disabled selected>Selecciona tu color preferido</option>
                                        <option>Verde</option>
                                        <option>Azul</option>
                                        <option>Rojo</option>
                                    </select>
                                    <input onClick={preventSubmit} type="submit" value="Enviar"/>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BasicHTMLForms;