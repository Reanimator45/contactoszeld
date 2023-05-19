import Datos from "../media/Contactos.json"
import imagen from "../media/avatar.png"

const datos = Datos.contactos
const datos2 = Datos.contactos2
console.log(datos)
const Card = () => {
	return (
		<div className="card">


			{
				datos.map((dato) => (
					<section className="container">
						<img className="imagen" src={imagen}></img>

						<section className="dato2">
							<p><b>Nombre</b></p>
							<p><b>Telefono</b></p>
							<p><b>Email</b></p>
							<p><b>Direccion</b></p>
							<p><b>Ciudad</b></p>
							<p><b>País</b></p>

						</section >
						<section className="datos">
							<p><b>{dato.nombre}</b></p>
							<p>{dato.telefono}</p>
							<p>{dato.email}</p>
							<p>{dato.direccion}</p>
							<p>{dato.ciudad}</p>
							<p>{dato.pais}</p>

						</section >
					</section >




				))

			}




		</div >

	);
};




export default Card