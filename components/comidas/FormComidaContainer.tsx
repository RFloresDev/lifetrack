import { createClient } from "@/utils/supabase/server";
import React, { Fragment } from "react";
import FormComida from "./FormComida";

const comidasDia = [
	"desayuno",
	"almuerzo",
	"comida",
	"merienda",
	"cena",
	"picoteo",
];

interface Props {
	params: {
		id: string;
	};
}

export default async function ProtectedPage({ params }: Props) {
	const id = params.id;
	const supabase = await createClient();

	const { data: comidas, error: tareasError } = await (await supabase)
		.from("peso_botoncomida_sup2")
		.select("*")
		.order("id", { ascending: true });

	if (tareasError) {
		console.error("Error fetching tareas:", tareasError);
		return <div>Error fetching tareas</div>;
	}

	const { data: files, error: listError } = await supabase.storage
		.from("pesocomidbue")
		.list("comidas", { limit: 1000 });

	if (listError) {
		console.error("Error listing files:", listError);
		return;
	}

	const imgObjs = await Promise.all(
		(files ?? []).map(async (file) => {
			const { data: signedUrlData, error } = await supabase.storage
				.from("pesocomidbue")
				.createSignedUrl(`comidas/${file.name}`, 600); // URL válida por 10 minutos

			if (error) {
				console.error("Error creating signed URL:", error);
				return null;
			}
			return { name: file.name, url: signedUrlData.signedUrl };
		})
	);

	// console.log("Todas las fotos, incluyendo null:", imgObjs);

	type ImageObject = { name: string; url: string };
	const filteredImgObjs: ImageObject[] = imgObjs.filter(
		(imgObj): imgObj is ImageObject => imgObj !== null
	);
	const { data: resultados, error: resultadosError } = await (
		await supabase
	).from("peso_comidaresultboton").select(`
        id,
        desayuno,
        almuerzo,
        comida,
        merienda,
        cena,
        picoteo,
        fecha
      `);

	if (resultadosError) {
		console.error("Error fetching categorias:", resultadosError);
		return <div>Error fetching categorias</div>;
	}
	return (
		<div className="p-2 w-full bg-blue-600">
			<FormComida
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
}
