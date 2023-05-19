// import React from 'react';
// import CodeMirror from '@uiw/react-codemirror';
// import { javascript } from '@codemirror/lang-javascript';

// const code = `## Title

// \`\`\`jsx
// function Demo() {
//   return <div>demo</div>
// }
// \`\`\`

// \`\`\`bash
// # Not dependent on uiw.
// npm install @codemirror/lang-markdown --save
// npm install @codemirror/language-data --save
// \`\`\`

// [weisit ulr](https://uiwjs.github.io/react-codemirror/)

// \`\`\`go
// package main
// import "fmt"
// func main() {
//   fmt.Println("Hello, 世界")
// }
// \`\`\`
// `;

// const BasicCSS = () => {
//     const onChange = React.useCallback((value, viewUpdate) => {
//         console.log('value:', value);
//       }, []);
//       return (
//         <CodeMirror
//           value="console.log('hello world!');"
//           height="200px"
//           width='400px'
//           extensions={[javascript({ jsx: true })]}
//           onChange={onChange}
//         />
//       );
// }

// export default BasicCSS;

import { useState } from 'react';

function BasicCSSProperties() {

    return (
        <div className="container-fluid contenedor">
            <h1 className="subtitulo">Propiedades CSS mas comunes</h1>
            <br />
            <p>Esta seccion esta enfocada a los formularios mas comunes encontrados en el desarrollo web, al igual que en la seccion HTML cabe menciona que solamente son algunos de una gran variedad de opciones disponibles, cada etiqueta puede tener un atributo en especifico o una convinacion de varios para personalizar la informacion entregada</p>
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
                            <td>Para Enviar los datos de un formulario... todos los input deben estar dentro de las etiquetas <code>&lt;form&gt;</code><br /><code>&lt;/form&gt;</code> ademas de incluir un input o boton para enviar la informacion </td>
                            <td>
                                <code>&lt;div&gt;</code><br />
                                <code className="tab">&lt;input type="submit" value="Enviar"&gt;</code><br />
                                <code>&lt;/div&gt;</code>
                            </td>
                            <td>
                                <input type="submit" value="Enviar" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BasicCSSProperties;
