import Image from "next/image";
import Link from "next/link";

const ComidasPage = () => {
	return (
		<div className="p-2 w-full bg-blue-600">
			<FormComidas
				id={+id}
				categorias={comidasDia}
				// elementos={imgObjs.filter((imgObj) => imgObj !== null)}
				elementos2={filteredImgObjs}
				tituloElementos2="Comidas"
				carpetaPadreImagenes="fotcomidanuevas"
				tituloCategorias="Comidas del día"
				tituloElementos="Comidas"
				tablaElementos="peso_botoncomida"
				tablaResultados="peso_comidaresultboton"
			/>
		</div>
	);
};
