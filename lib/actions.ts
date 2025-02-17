"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export const insertElemento = async (
	id: number,
	elemento: string,
	categoria: string,
	tablaResultados: string
) => {
	const supabase = await createClient();
	try {
		const result = await supabase.from(tablaResultados).insert([
			{
				[categoria]: elemento,
				fotourl: elemento,
				// guardar fotourl, columna
				fecha: new Date().toISOString(),
			},
		]);
		console.log("Datos insertados correctamente:", result);
	} catch (err) {
		console.log("Error al insertar datos:", err);
	}

	revalidatePath(`/bp/${id}/comida2`);
};

export const insertElementoManual = async (
	nombre: string,
	descripcion: string,
	comentario: string,
	tabla: string
) => {
	const supabase = await createClient();
	try {
		const result = await supabase.from(tabla).insert({
			nombre,
			descripcion,
			comentario,
		});
		//onInsert(formData.get("nombre"), formData.get("descripcion"));
		console.log("Datos insertados correctamente:", result);
	} catch (err) {
		console.log("Error al insertar datos:", err);
	}
};
