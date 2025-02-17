"use server";

import { createClient } from "@/utils/supabase/server";

export const insertComida = async (comida: string, comidaDiaItem: string) => {
	"use server";
	const supabase = await createClient();
	console.log("comida", comida);
	try {
		const result = await supabase.from("peso_comidaresultboton").insert([
			{
				[comidaDiaItem]: comida,
				fecha: new Date().toISOString(),
			},
		]);
		console.log("Datos insertados correctamente:", result);
	} catch (err) {
		console.log("Error al insertar datos:", err);
	}
};
