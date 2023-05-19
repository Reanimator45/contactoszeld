import Nav from "../cards/nav"
import banner from "../media/banner.jpg"
import Card from "../cards/card"
const Principal = () => {
	return (

		<section>
			<Nav />
			<section className="banner" >
				<img src={banner} height="400"></img>
			</section>
			<section className="columnas">
				<section className="texto">
					<center><h1>Contactos</h1></center>
					<section className="texto" id="text1">





						<p>           Aqui esta un breve repaso por la lista de tus contactos, selecciona la pestaña de contactos para observarlos todos               ​</p>
						<img src="https://cdn.discordapp.com/attachments/939940696717160448/1108984834656845884/contact-icon-png-1.png" ></img>
					</section>
				</section>

				<Card />
			</section>
		</section>





	)
}

export default Principal