import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import '../Styles/BasicHTML.css';

const BasicHTMLTags = () => {

    const defaultValues = { word: "Palabra", src:"chrome://branding/content/about-logo.png",path: "https://www.google.com/", alt: "Logo", list:["perro", "gato"], table:[['Nombre', 'Apellido', 'Edad'],['John', 'Doe', '42'],['Mary', 'Adams', '36'],], Link: "this link go to google", paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quidem culpa molestias omnis velit libero tenetur saepe quia assumenda, unde odit nihil! Cumque illo, nam velit amet minus soluta reprehenderit sint repellat recusandae enim sit. Harum voluptates, in, iusto praesentium illo architecto odio incidunt magni aut quas aperiam culpa officia."}

    const [word, setWord] = useState(defaultValues.word)
    const [paragraph, setParagraph] = useState(defaultValues.paragraph)
    const [link, setLink] = useState(defaultValues.Link)
    const [path, setPath] = useState(defaultValues.path)
    const [src, setSrc] = useState(defaultValues.src)
    const [alt, setAlt] = useState(defaultValues.alt)
    const [list, setList] = useState(defaultValues.list)
    const [tableData, setTableData] = useState(defaultValues.table);
    const [listOne, setListOne] = useState("")
    const [counter, setCounter] = useState(0);
    const [inputVal, setInputVal] = useState('');

    const setDefaultWord = (event) => {
        setWord(defaultValues.word);
        event.target.value = ''
    }
    const setDefaultParagraph = (event) => {
        setParagraph(defaultValues.paragraph);
        event.target.value = ''
    }
    const setDefaultLinkPath = () => {
        setLink("This link go to google");
        setPath("https://www.google.com/");
    }
    const setDefaultSrcAlt = () => {
        setSrc("chrome://branding/content/about-logo.png");
        setAlt("Logo");
    }
    const setDefaultlList = () => {
        setList(["perro", "gato"])
        setListOne('')
    }
    const addElement = () => {
        setList([...list, listOne])
        setListOne('');
    }
    const setDefaultTable = () => {
        setTableData(defaultValues.table);
        setCounter(0)
    }
    function addRow() {
        setTableData((prevTableData) => {
            const newTableData = [...prevTableData];
            newTableData.push(Array(prevTableData[0].length).fill(''));
            return newTableData;
        });
    }

    function addColumn() {
        setTableData((prevTableData) => {
            const newTableData = prevTableData.map((row) => [...row, '']);
            newTableData[0][newTableData[0].length - 1] = 'Title';
            return newTableData;
        });
        setCounter(counter + 1)
        console.log(counter);
    }

    return (
        <div>
            <div className="container-fluid contenedor">
                <h1 className="subtitulo">Estructuras HTML mas comunes</h1>
                <br />
                <p>Esta seccion esta enfocada a las etiquetas mas ocupadas en la creacion de una pagina web, el codigo HTML actua como un esqueletodonde desplegaremos la informacion que consideremos necesaria. cabe recalcar que solamente son algunas... existen muchas mas que tienen distintos objetivos</p>
                <br />
                <div>
                    <table className="table table-striped-columns main-table">
                        <thead>
                            <tr>
                                <th colSpan={3}><h3 className="subtitulo">Titulos or Subtitulos</h3></th> 
                            </tr>
                            <tr>
                                <th></th>
                                <th><input placeholder='Ingresa texto aca!!' id='word' maxLength="20" type="text" style={{ wordWrap: "break-word", maxWidth: "23vw" }} className="form-control" onBlur={setDefaultWord} onChange={(e) => setWord(e.target.value)} /></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th className="col-3">Etiquetas</th>
                                <th className="col-3">Codigo</th>
                                <th className="col-3">Demostracion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>&lt;h1&gt;&lt;/h1&gt;</code></td>
                                <td><code>&lt;h1&gt;{word}&lt;/h1&gt;</code></td>
                                <td><h1>{word}</h1></td>
                            </tr>
                            <tr>
                                <td><code>&lt;h2&gt;&lt;/h2&gt;</code></td>
                                <td><code>&lt;h2&gt;{word}&lt;/h2&gt;</code></td>
                                <td><h2>{word}</h2></td>
                            </tr>
                            <tr>
                                <td><code>&lt;h3&gt;&lt;/h3&gt;</code></td>
                                <td><code>&lt;h3&gt;{word}&lt;/h3&gt;</code></td>
                                <td><h3>{word}</h3></td>
                            </tr>
                            <tr>
                                <td><code>&lt;h4&gt;&lt;/h4&gt;</code></td>
                                <td><code>&lt;h4&gt;{word}&lt;/h4&gt;</code></td>
                                <td><h4>{word}</h4></td>
                            </tr>
                            <tr>
                                <td><code>&lt;h5&gt;&lt;/h5&gt;</code></td>
                                <td><code>&lt;h5&gt;{word}&lt;/h5&gt;</code></td>
                                <td><h5>{word}</h5></td>
                            </tr>
                            <tr>
                                <td><code>&lt;h6&gt;&lt;/h6&gt;</code></td>
                                <td><code>&lt;h6&gt;{word}&lt;/h6&gt;</code></td>
                                <td><h6>{word}</h6></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={3} style={{textAlign:"center"}}>Comentarios</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>
                                    <ol>
                                        <li><p>Las etiquetas h1, h2, h3, h4, h5 y h6 son para que el buscador web (google, yahoo, bing, etc..) catalogue correctamente la importancia de estos. Por ejemplo cuando uno busca la palabra "mascotas" en el navegador, este busca las paginas donde su h1 y h2 contengan la palabra "mascotas" y le da menor prioridad en la lista de resultados a las paginas contengan "mascotas" en un h5 o h6, por eso la importancia de saber catalogar los titulos de los contenidos("ocupar solamente h1 tambien puede ser perjucidial para la pagina creada ya que te asigna mas atras en las busquedas")</p></li>
                                        <li>No existen mas etiquetas despues del h6</li>
                                        <div style={{textAlign:"center"}}>
                                            <h5>puedes aprender mas de esta etiqueta en el siguiente enlace</h5>
                                            <p>-----------&gt;<a href="">Titulos or Subtitulos</a>&lt;-----------</p>
                                        </div>
                                    </ol>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div>
                    <table className="table table-striped-columns main-table">
                        <thead>
                            <tr>
                                <th colSpan={3}><h3 className="subtitulo">Parrafos</h3></th> 
                            </tr>
                            <tr>
                                <th></th>
                                <th><input placeholder='Ingresa texto aca!!' id='paragraph' maxLength="300" type="text" style={{ wordWrap: "break-word", maxWidth: "23vw" }} className="form-control col-3" onBlur={setDefaultParagraph} onChange={(e) => setParagraph(e.target.value)} /></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th className="col-3">Etiquetas</th>
                                <th className="col-3">Codigo</th>
                                <th className="col-3">Demostracion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>&lt;p&gt;&lt;/p&gt;</code></td>
                                <td><code>&lt;p&gt;{paragraph}&lt;/p&gt;</code></td>
                                <td><p>{paragraph}</p></td>
                            </tr>
                            <tr>
                                <td><code>&lt;br/&gt;</code></td>
                                <td><code>&lt;p&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit.&lt;br/&gt;&lt;br/&gt; Ab quidem culpa molestias omnis velit libero tenetur saepe quia assumenda, unde odit nihil! Cumque illo, nam velit amet minus soluta reprehenderit sint repellat recusandae enim sit.&lt;br/&gt; Harum voluptates, in, iusto praesentium illo architecto odio incidunt magni aut quas aperiam culpa officia.&lt;/p&gt;</code></td>
                                <td><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /><br /> Ab quidem culpa molestias omnis velit libero tenetur saepe quia assumenda, unde odit nihil! Cumque illo, nam velit amet minus soluta reprehenderit sint repellat recusandae enim sit.<br /> Harum voluptates, in, iusto praesentium illo architecto odio incidunt magni aut quas aperiam culpa officia.</p></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={3} style={{textAlign:"center"}}>Comentarios</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>
                                    <ol>
                                        <li><p>La etiqueta &lt;p&gt; se utiliza principal mente para escribir parrafos granes de texto o contenido (comentarios, descripciones, parrafos, citados)</p></li>
                                        <li><p>la etiqueta &lt;br/&gt; es un salto de linea que se utiliza <strong>SOLAMENTE</strong> en los parrafos para dar el efecto de "punto y aparte". Es mala practica utilizarlo fuera de este contexto (muchas personas lo utilizan simplemente para crear un espacio entre dos etiquetas llevando a malas practicas)</p></li>
                                    </ol>
                                    <div style={{textAlign:"center"}}>
                                        <h5>puedes aprender mas de esta etiqueta en el siguiente enlace</h5>
                                        <p>-----------&gt;<a href="">Parrafos</a>&lt;-----------</p>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div>
                    <table className="table table-striped-columns main-table">
                        <thead>
                            <tr>
                                <th colSpan={3}><h3 className="subtitulo">Modificadores de fuente</h3></th> 
                            </tr>
                            <tr>
                                <th></th>
                                <th><input placeholder='Ingresa texto aca!!' id='word' maxLength="20" type="text" style={{ wordWrap: "break-word", maxWidth: "23vw" }} className="form-control" onBlur={setDefaultWord} onChange={(e) => setWord(e.target.value)} /></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th className="col-3">Etiquetas</th>
                                <th className="col-3">Codigo</th>
                                <th className="col-3">Demostracion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>&lt;strong&gt;&lt;/strong&gt;</code></td>
                                <td><code>&lt;strong&gt;{word}&lt;/strong&gt;</code></td>
                                <td><strong>{word}</strong></td>
                            </tr>
                            <tr>
                                <td><code>&lt;em&gt;&lt;/em&gt;</code></td>
                                <td><code>&lt;em&gt;{word}&lt;/em&gt;</code></td>
                                <td><em>{word}</em></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={3} style={{textAlign:"center"}}>Comentarios</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>
                                    <ol>
                                        <li><p>Los modificadores de fuente como &lt;em&gt;&lt;/em&gt; o &lt;strong&gt;&lt;/strong&gt; son utilizados en ocaciones concretas y no es necesarion tenerlos mucho en consideracion ya que existen propiedades CSS que aplican estos efectos y permiten una mayor personalizacion</p></li>
                                        <li><p>Son utilizados en Paginas web sencillas donde no sea necesario aplicar grandes estilos de CSS (como esta pagina)</p></li>
                                    </ol>
                                    <div style={{textAlign:"center"}}>
                                        <h5>puedes aprender mas de esta etiqueta en el siguiente enlace</h5>
                                        <p>-----------&gt;<a href="">Modificadores de fuente</a>&lt;-----------</p>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div>
                    <table className="table table-striped-columns main-table">
                        <thead>
                            <tr>
                                <th colSpan={3}><h3 className="subtitulo">Enlaces</h3></th> 
                            </tr>
                            <tr>
                                <th></th>
                                <th style={{ display: "flex" }}><input placeholder='Ingresa la direccion web!!' id='Path' maxLength="300" type="text" style={{ wordWrap: "break-word", width: "40%", maxWidth: "23vw" }} className="form-control col-3" onChange={(e) => setPath(e.target.value)} /><button onClick={setDefaultLinkPath}>resetear valores</button><input placeholder='Ingresa texto del enlace!!' id='paragraph' maxLength="300" type="text" style={{ wordWrap: "break-word", width: "40%", maxWidth: "23vw" }} className="form-control col-3" onChange={(e) => setLink(e.target.value)} /></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th className="col-3">Etiquetas</th>
                                <th className="col-3">Codigo</th>
                                <th className="col-3">Demostracion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>&lt;a&gt;&lt;/a&gt;</code></td>
                                <td><code>&lt;a href="{path}"&gt;{link}&lt;/a&gt;</code></td>
                                <td><a href={path} target="_blank">{link}</a></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={3} style={{textAlign:"center"}}>Comentarios</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>
                                    <ol>
                                        <li><p>El usuario solamente vera lo que uno escriba dentro de &lt;a&gt;&lt;/a&gt; y no vera ninguno de los atributos de la etiqueta como lo es <code>href=""</code> (esto permanece oculto a simple vista)</p></li>
                                            <ul>
                                                <li><code>&lt;a href=</code>"no visible"<code>&gt;</code>visible<code>&lt;/a&gt;</code></li>
                                            </ul>
                                        <li><p>La etiqueta <code>&lt;a&gt;&lt;/a&gt;</code> tiene un atributo principal:</p></li>
                                        <ul>
                                            <li>El atributo <code>href=""</code> nos permite definir el enlace que nos dirigira a un sitio web en especifico. Por ejemplo https://www.google.com/</li>
                                            <li><code>&lt;a href=""&gt;&lt;/a&gt;</code> es el formato comun de esta etiqueta</li>
                                        </ul>
                                        <li><p>existen mas atributos para la etiqueta <code>&lt;a&gt;&lt;/a&gt;</code> por ejemplo:</p></li>
                                        <ul>
                                            <li>El atributo <code>target="_blank"</code> hace abrir una nueva ventana cuando se haga click en el enlace(sin esta etiqueta ocupa la pestaña actual)</li>
                                            <li>El atributo <code>download</code> nos permite asignar un documento o archivo para que el usuario descargue cuando haga click</li>
                                        </ul>
                                    </ol>
                                    <div style={{textAlign:"center"}}>
                                        <h5>puedes aprender mas de esta etiqueta en el siguiente enlace</h5>
                                        <p>-----------&gt;<a href="">Enlaces</a>&lt;-----------</p>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div>
                    <table className="table table-striped-columns main-table">
                        <thead>
                            <tr>
                                <th colSpan={3}><h3 className="subtitulo">Imagenes</h3></th> 
                            </tr>
                            <tr>
                                <th></th>
                                <th style={{ display: "flex" }}><input placeholder='Ingresa el enlace del img!!' id='Src' maxLength="300" type="text" style={{ wordWrap: "break-word", width: "40%", maxWidth: "23vw" }} className="form-control col-3" onChange={(e) => setSrc(e.target.value)} /><button onClick={setDefaultSrcAlt}>resetear valores</button><input placeholder='Ingresa la descripcion el img!!' id='paragraph' maxLength="300" type="text" style={{ wordWrap: "break-word", width: "40%", maxWidth: "23vw" }} className="form-control col-3" onChange={(e) => setAlt(e.target.value)} /></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th className="col-3">Etiquetas</th>
                                <th className="col-3">Codigo</th>
                                <th className="col-3">Demostracion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>&lt;img src="" alt=""/&gt;</code></td>
                                <td><code>&lt;img src="{src}" alt="{alt}"/&gt;</code></td>
                                <td><img src={src} alt={alt} width={100} height={100} /></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={3} style={{textAlign:"center"}}>Comentarios</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>
                                    <ol>
                                        <li><p>La etiqueta <code>&lt;img/&gt;</code> tienes dos atributos principales:</p></li>
                                        <ul>
                                            <li>El atributo <code>src=""</code> es para definir el enlace de la imagen</li>
                                            <li>El atributo <code>alt=""</code> es para definir una descripcion de la imagen (util para los usuarios con poca capacidad visual que utilizan lectores de texto)</li>
                                            <li><code>&lt;img src="" alt=""/&gt;</code> es el formato comun de esta etiqueta</li>
                                        </ul>
                                    </ol>
                                    <div style={{textAlign:"center"}}>
                                        <h5>puedes aprender mas de esta etiqueta en el siguiente enlace</h5>
                                        <p>-----------&gt;<a href="">Imagenes</a>&lt;-----------</p>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div>
                    <table className="table table-striped-columns main-table">
                        <thead>
                            <tr>
                                <th colSpan={3}><h3 className="subtitulo">Listas</h3></th> 
                            </tr>
                            <tr>
                                <th></th>
                                <th style={{ display: "flex" }}><input placeholder='Ingresa un objeto a la lista!!' id='word' maxLength="20" type="text" style={{ wordWrap: "break-word", maxWidth: "23vw" }} className="form-control" onChange={(e) => setListOne(e.target.value)} value={listOne} /><button onClick={addElement}>Añadir</button><button onClick={setDefaultlList}>resetear valores</button></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th className="col-3">Etiquetas</th>
                                <th className="col-3">Codigo</th>
                                <th className="col-3">Demostracion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>&lt;ul&gt;&lt;/ul&gt;</code></td>
                                <td>
                                    <code>&lt;ul&gt;</code><br />
                                    {list.map((item, index) => {
                                        return (<div key={index}>
                                            <code className="tab">&lt;li&gt;{item}&lt;/li&gt;</code><br />
                                        </div>)
                                    })}
                                    <code>&lt;/ul&gt;</code>
                                </td>
                                <td>
                                    <ul>
                                        {list.map((item, index) => {
                                            return (<li key={index}>{item}</li>)
                                        })}
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><code>&lt;ol&gt;&lt;/ol&gt;</code></td>
                                <td>
                                    <code>&lt;ol&gt;</code><br />
                                    {list.map((item, index) => {
                                        return (<div key={index}>
                                            <code className="tab">&lt;li&gt;{item}&lt;/li&gt;</code><br />
                                        </div>)
                                    })}
                                    <code>&lt;/ol&gt;</code>
                                </td>
                                <td>
                                    <ol>
                                        {list.map((item, index) => {
                                            return (<li key={index}>{item}</li>)
                                        })}
                                    </ol>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={3} style={{textAlign:"center"}}>Comentarios</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>
                                    <ol>
                                        <li><p>La etiqueta <code>&lt;li&gt;&lt;/li&gt;</code> tiene una jerarquia definida... no se puede colocar una etiqueta <code>&lt;li&gt;&lt;/li&gt;</code> fuera de un <code>&lt;ul&gt;&lt;/ul&gt;</code> o un <code>&lt;ol&gt;&lt;/ol&gt;</code></p></li>
                                        <li><p><code>&lt;ol&gt;&lt;/ol&gt;</code> es la definicion de "Ordered list" o "Lista ordenada" haciendo que cada elemento tenga un numero a su costado</p></li>
                                        <li><p><code>&lt;ul&gt;&lt;/ul&gt;</code> es la definicion de "Unordered list" o "Lista desordenada" haciendo que cada elemento tenga un punto a su costado</p></li>
                                        <li><p>Se pueden eliminar los numeros y puntos que aparecen al costado de cada <code>&lt;li&gt;&lt;/li&gt;</code> a traves de los estilos CSS</p></li>
                                    </ol>
                                    <div style={{textAlign:"center"}}>
                                        <h5>puedes aprender mas de esta etiqueta en el siguiente enlace</h5>
                                        <p>-----------&gt;<a href="">Listas</a>&lt;-----------</p>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div>
                    <table className="table table-striped-columns main-table">
                        <thead>
                            <tr>
                                <th colSpan={3}><h3 className="subtitulo">Tablas</h3></th> 
                            </tr>
                            <tr>
                                <th></th>
                                <th style={{ display: "flex" }}><button style={{ width: "33%" }} onClick={addRow}>Añadir fila</button><button style={{ width: "33%" }} onClick={addColumn} disabled={counter === 5}>Añadir columna</button><button style={{ width: "33%" }} onClick={setDefaultTable}>resetear valores</button></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th className="col-3">Etiquetas</th>
                                <th className="col-3">Codigo</th>
                                <th className="col-3">Demostracion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>&lt;table&gt;&lt;/table&gt;</code></td>
                                <td rowSpan={6}>
                                    <code>&lt;table&gt;</code><br />
                                    <code className="tab">&lt;thead&gt;</code><br />
                                    <code className="tab1">&lt;tr&gt;</code><br />
                                    {tableData[0].map((header, index) => (
                                        <div key={index}>
                                            <code className="tab2">&lt;th&gt;{header}&lt;/th&gt;</code>
                                        </div>
                                    ))}
                                    <code className="tab1">&lt;/tr&gt;</code><br />
                                    <code className="tab">&lt;/thead&gt;</code><br />
                                    <code className="tab">&lt;tbody&gt;</code><br />
                                    {tableData.slice(1).map((row, rowIndex) => (
                                        <div key={rowIndex}>
                                            <code className="tab1">&lt;tr&gt;</code>
                                            {row.map((cell, cellIndex) => (
                                                <div key={cellIndex}>
                                                    <code className="tab2">&lt;td&gt;{cell}&lt;/td&gt;</code>
                                                </div>
                                            ))}
                                            <code className="tab1">&lt;/tr&gt;</code>
                                        </div>
                                    ))}
                                    <code>&lt;/table&gt;</code>
                                </td>
                                <td rowSpan="6">
                                    <table className="table">
                                        <thead className="thead-dark">
                                            <tr>
                                                {tableData[0].map((header, index) => (
                                                    <th className="border border-primary" key={index}>{header}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tableData.slice(1).map((row, rowIndex) => (
                                                <tr key={rowIndex}>
                                                    {row.map((cell, cellIndex) => (
                                                        <td key={cellIndex} className="border border-primary">
                                                            <input style={{ maxWidth: "3vw" }} type="text" value={cell} onChange={(e) => {
                                                                const newTableData = [...tableData];
                                                                newTableData[rowIndex + 1][cellIndex] = e.target.value;
                                                                setTableData(newTableData);
                                                            }}
                                                            />
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td><code>&lt;thead&gt;&lt;/thead&gt;</code></td>
                            </tr>
                            <tr>
                                <td><code>&lt;tbody&gt;&lt;/tbody&gt;</code></td>
                            </tr>
                            <tr>
                                <td><code>&lt;tr&gt;&lt;/tr&gt;</code></td>
                            </tr>
                            <tr>
                                <td><code>&lt;th&gt;&lt;/th&gt;</code></td>
                            </tr>
                            <tr>
                                <td><code>&lt;td&gt;&lt;/td&gt;</code></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={3} style={{textAlign:"center"}}>Comentarios</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>
                                    <ol>
                                        <li><p>Al igual que las listas las etiquetas <code>&lt;tr&gt;&lt;/tr&gt;</code>, <code>&lt;thead&gt;&lt;/thead&gt;</code>, <code>&lt;th&gt;&lt;/th&gt;</code>, <code>&lt;tbody&gt;&lt;/tbody&gt;</code> y <code>&lt;td&gt;&lt;/td&gt;</code> tienen una jerarquia definida... puedes ver su estructura en la casilla "codigo"</p></li>
                                        <li><p>Solamente dentro de las etiquetas <code>&lt;td&gt;&lt;/td&gt;</code> y <code>&lt;th&gt;&lt;/th&gt;</code> nosotros ingresaremos los datos de la tabla, las demas etiquetas son estructurales pero necesarias para tener un codigo entendible (el propìo navegador exigue este tipo de estructura)</p></li>
                                        <li><p>Estas etiquetas al igual que las listas se describen asi mismas sus propositos</p></li>
                                        <ol>
                                            <li><p>Las etiquetas <code>&lt;tr&gt;&lt;/tr&gt;</code> ("table row" o "fila de la tabla") que podrian ser las mas importantes, nos permite crear una nueva fila en nuestra tabla</p></li>
                                            <li><p>Las etiquetas <code>&lt;thead&gt;&lt;/thead&gt;</code> ("table head" o "cabeza de la tabla")nos indica que todas las filas creadas dentro de estas tendran como objetivo estar en la parte superior de la tabla</p></li>
                                            <li><p>Las etiquetas <code>&lt;th&gt;&lt;/th&gt;</code> ("table head" o "cabeza de la tabla") nos proporciona un efecto parecido a <code>&lt;strong&gt;&lt;/strong&gt;</code> haciendo que todo el texto que coloquemos entre estas este en <strong>negrita</strong></p></li>
                                            <li><p>Las etiquetas <code>&lt;tbody&gt;&lt;/tbody&gt;</code> ("table body" o "cuerpo de la tabla") nos permite definir cual sera el cuerpo de la tabla donde generalmente tiene todos los datos</p></li>
                                            <li><p>Las etiquetas <code>&lt;td&gt;&lt;/td&gt;</code> ("table data" o "datos de la tabla") son similares a <code>&lt;th&gt;&lt;/th&gt;</code> la diferencia es que todo el texto que coloquemos entre estas etiquetas sera texto simple, sin el efecto de <strong>negrita</strong></p></li>
                                        </ol>
                                        <li><p>La diferencia entre <code>&lt;thead&gt;&lt;/thead&gt;</code>("table head" o "cabeza de la tabla") y <code>&lt;th&gt;&lt;/th&gt;</code>("table head" o "cabeza de la tabla") es que la primera afecta a varias filas (da estructura al codigo) mientras que la segunda afecta solo a los datos de una fila (le aplica el efecto <code>&lt;strong&gt;&lt;/strong&gt;</code>)</p></li>
                                    </ol>
                                    <div style={{textAlign:"center"}}>
                                        <h5>puedes aprender mas de esta etiqueta en el siguiente enlace</h5>
                                        <p>-----------&gt;<a href="">Tablas</a>&lt;-----------</p>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default BasicHTMLTags;