import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import {vscodeDark}  from "@uiw/codemirror-theme-vscode";  
import { html } from '@codemirror/lang-html';
import imagen from '../static/Msxw-B7p.png';

const code3 =
`<html>
    <body>
        <div>
            <header></header>
            <form></form>
            <div>
                <article></article>
                <article></article>
                <article></article>
                <section></section>
            </div>
            <footer></footer>
        </div>
    </body>
</html>`;

function BasicCSS() {

    return (
        <div className="container-fluid contenedor">
            <h1 className="subtitulo">CSS conocimientos basicos</h1>
            <br />
            <p>Esta seccion esta enfocada a los formularios mas comunes encontrados en el desarrollo web, al igual que en la seccion HTML cabe menciona que solamente son algunos de una gran variedad de opciones disponibles, cada etiqueta puede tener un atributo en especifico o una convinacion de varios para personalizar la informacion entregada</p>
            <br />
            <div className="main-table">
                <table className="table table-striped main-table">
                    <thead>
                        <tr>
                            <th colSpan={3}><h3 className="subtitulo">Contenedores</h3></th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={3}>
                                <p>Nuestro codigo debe ser los mas descriptivo y estructurado posible. por eso mismo HTML no estrega herramientas para estructurar nuestro codigo con etiquetas especificadas para cada seccion las estiqwetas mas usadas son:</p>
                                <ul>
                                    <li><code>&lt;div&gt;</code><code>&lt;/div&gt;</code>: utilizado para englobar contenidos generales sin objetivos en especifico (queda al criterio del desarrollador)</li>
                                    <li><code>&lt;article&gt;</code><code>&lt;/article&gt;</code>: utilizado para englobar articulos</li>
                                    <li><code>&lt;section&gt;</code><code>&lt;/section&gt;</code>: utilizado para englobar secciones en la pagina</li>
                                    <li><code>&lt;header&gt;</code><code>&lt;/header&gt;</code>: utilizado para todo el contenido que ira en la parte superiror de la pagina como barras de navegacion y logos</li>
                                    <li><code>&lt;footer&gt;</code><code>&lt;/footer&gt;</code>: utilizado para todo el contenido que ira en la inferior de la pagina como otros enlaces, informacion o informacion legal</li>
                                    <li><code>&lt;form&gt;</code><code>&lt;/form&gt;</code>utilizado para englobar formularios donde el usuario ingresara la informacion</li>
                                </ul>
                                <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                                    <p>aca un ejemplo visual de cada contenedor</p>
                                    <img src={imagen} alt="" style={{width:"70%"}} />
                                    <p>en codigo seria equivalente a:</p>
                                    <p style={{width:"20vw"}}><CodeMirror width="100%" editable={false} value={code3} theme={vscodeDark} extensions={[html({ jsx: true })]}></CodeMirror></p>
                                    <p>considerar que todo el codigo que escribamos ahora en adelante debe ser escrito entre las etiquetas <code>&lt;body&gt;</code><code>&lt;/body&gt;</code> de nuestro archivo, estas etiquetas son las que el navegador hace visible:</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="main-table">
                <table className="table table-striped main-table">
                    <thead>
                        <tr>
                            <th colSpan={3}><h3 className="subtitulo">BOX Model</h3></th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={3}>
                                <p>El box model o modelado de caja esta enfocado a pensar de una manera modular la construccion de un sitio web</p>
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
        </div>
    );
}

export default BasicCSS;
