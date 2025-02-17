"use server";
import { createClient } from "@/utils/supabase/server";

export async function insertData(nombre: string, tipoComida: string) {
	const supabase = await createClient();
	console.log("Supabase client created:", supabase);

	const { error } = await supabase.from("peso_botoncomida").insert({
		nombre: nombre,
		descripcion: tipoComida,
		icono: null, // Ajusta según sea necesario
	});

	if (error) {
		console.error("Error inserting data:", error);
	} else {
		console.log("Data inserted successfully");
	}
}

export async function insertDefaultData() {
	const supabase = await createClient();
	console.log("Supabase client created:", supabase);

	const nombre = "defaultName"; // Define the variable 'nombre'
	const tipoComida = "defaultDescription"; // Define the variable 'tipoComida'

	const { error } = await supabase.from("peso_botoncomida").insert({
		nombre: nombre,
		descripcion: tipoComida,
		icono: null, // Ajusta según sea necesario
	});

	if (error) {
		console.error("Error inserting data:", error);
	} else {
		console.log("Data inserted successfully");
	}
}

insertDefaultData();
