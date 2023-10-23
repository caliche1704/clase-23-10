
import TypesProp from 'prop-types'

export const SegundoComponente = ({ titulo, subtitulo, fecha}) => {
    console.log(titulo)
    console.log(subtitulo)
  return (
    <>
        <h1>Comunicacion y Props</h1>
        <h2>{titulo}</h2>
        <h3>{subtitulo}</h3>
        <h4>{fecha}</h4>
    </>
  )
};
SegundoComponente.prototypes={
    titulo:TypesProp.string.isRequired,
    subtitulo:TypesProp.string.isRequired,
    fecha:TypesProp.string.isRequired
}
