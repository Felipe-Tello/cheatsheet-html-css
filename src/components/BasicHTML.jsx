import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import {vscodeDark}  from "@uiw/codemirror-theme-vscode";  
import { html } from '@codemirror/lang-html';
import '../Styles/BasicHTML.css';

const code =
`<html>
<head>
<title>
Básico I
</title>
</head>
<body>
<h1>
¿Qué lenguaje te encanta?
</h1>
<p>
¡Amo HTML!
</p>
</body>
</html>`;
const code2 =
`<html>
    <head>
        <title>
            Básico I
        </title>
    </head>
    <body>
        <h1>
            ¿Qué lenguaje te encanta?
        </h1>
        <p>
            ¡Amo HTML!
        </p>
    </body>
</html>`;


const BasicHTML = () => {

    return (
        <div>
            <div className="container-fluid contenedor">
                <h1 className="subtitulo">HTML conocimientos basicos</h1>
                <br />
                <p>Esta seccion esta enfocada a las etiquetas mas ocupadas en la creacion de una pagina web, el codigo HTML actua como un esqueletodonde desplegaremos la informacion que consideremos necesaria. cabe recalcar que solamente son algunas... existen muchas mas que tienen distintos objetivos</p>
                <br />
                <div>
                    <table className="table table-striped main-table">
                        <thead>
                            <tr>
                                <th colSpan={3}><h3 className="subtitulo">Estructura HTML</h3></th> 
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={3}>
                                    <p>para identificar una etiqueta nosotros tenemos que considerar que tienen esta estructura</p>
                                    <ul>
                                        <li><code>&lt;&gt;</code> <code>&lt;/&gt;</code> utilizan el simbolo "menor que" <code>&lt;</code>, el simbolo "mayor que" <code>&gt;</code> y el simbolo "slash"<code>/</code></li>
                                    </ul>
                                    <p>es importante saber que las etiquetas normalmente tienen una etiqueta de apertura y una etiqueta de cierre, asi nosotros podemos definir donde empieza y donde termina el codigo que vamos a crear</p> 
                                    <ul>
                                        <li><code>&lt;h1&gt;</code> Es una etiqueta de apertura</li>
                                        <li><code>&lt;/h1&gt;</code> Es una etiqueta de cierre</li>
                                    </ul>
                                    <p>generalmente nosotros podemos ingresar cosas entre la apertura y cierre, como otras etiquetas o texto </p>
                                    <p>esta etiqueta en si es para escribir un titulo simple</p>
                                    <ul style={{display:"flex", justifyContent:"center"}}>
                                        <li style={{display:"flex", flexDirection:"column",justifyContent:"center", marginRight:"2vw"}}>
                                            <p>esto es lo que nosotros escribimos en nuestro documento HTML</p>
                                            <p style={{textAlign:"center"}}><code>&lt;h1&gt;</code>Hola Mundo!<code>&lt;/h1&gt;</code></p>
                                        </li>
                                        <li style={{display:"flex", flexDirection:"column"}}>
                                            <p>-------------------------&gt;</p>
                                            <p>-------------------------&gt;</p>
                                            <p>-------------------------&gt;</p>
                                        </li>
                                        <li style={{display:"flex", flexDirection:"column",justifyContent:"center", marginLeft:"2vw"}}>
                                            <p>esto es lo que nuestro navegador va a interpretar</p>
                                            <h1 style={{textAlign:"center"}}>Hola Mundo!</h1>
                                        </li>
                                    </ul>
                                    <p>ahora debemos considerar que existen etiquetas que abren y cierran en un solo conjunto</p>
                                    <ul>
                                        <li><code>&lt;input /&gt;</code></li>
                                    </ul>
                                    <p>mas adelante veremos su algunas que tienen este formato</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table className="table table-striped main-table">
                        <thead>
                            <tr>
                                <th colSpan={3}><h3 className="subtitulo">Identacion</h3></th> 
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={3}>
                                    <p>Anteriormente hablabamos de etiquetas que pueden contener otras etiquetas dentro, la finalidad de la identacion es poder crear un codigo entendible para ti y otras personas que lo vean</p>
                                    <p>aca un ejemplo de identacion</p>
                                </td>
                            </tr>
                            <tr style={{textAlign:"center"}}>
                                <td>Mal identado</td>
                                <td>bien identado</td>
                            </tr>
                            <tr>
                                <td><CodeMirror width="48vw" editable={false} value={code} theme={vscodeDark} extensions={[html({ jsx: true })]}></CodeMirror></td>
                                <td><CodeMirror width="48vw" editable={false} value={code2} theme={vscodeDark} extensions={[html({ jsx: true })]}></CodeMirror></td>
                            </tr>
                            <tr>
                                <td colSpan={3}>
                                    <p>como podemos ver en el codigo bien indentado podemos sacar las siguientes conclusiones:</p>
                                    <ul>
                                        <li>la etiqueta <code>&lt;html&gt;&lt;/html&gt;</code> viene siendo el padre de las etiquetas <code>&lt;head&gt;&lt;/head&gt;</code> y <code>&lt;body&gt;&lt;/body&gt;</code> ademas es abuelo de las etiquetas <code>&lt;title&gt;&lt;/title&gt;</code>, <code>&lt;h1&gt;&lt;/h1&gt;</code> y <code>&lt;p&gt;&lt;/p&gt;</code></li>
                                        <li>las etiquetas <code>&lt;head&gt;&lt;/head&gt;</code> y <code>&lt;body&gt;&lt;/body&gt;</code> son hemanas ya que estan en la misma linea de identacion</li>
                                        <li>la etiqueta <code>&lt;head&gt;&lt;/head&gt;</code> tiene de hijo a <code>&lt;title&gt;&lt;/title&gt;</code> y la etiqueta <code>&lt;body&gt;&lt;/body&gt;</code> tiene de hijos a <code>&lt;h1&gt;&lt;/h1&gt;</code> y <code>&lt;p&gt;&lt;/p&gt;</code></li>
                                    </ul>
                                    <p>el navegador se encarga automaticamente de asignar estas familiaridades entre las etiquetas, pero es parte nuestra hacer un codigo legible para poder encontrar errores y errores</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}

export default BasicHTML;