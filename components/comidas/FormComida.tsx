"use client";
import { useState, useEffect } from "react";
import PdForm from "@/components/pd-form";
import { insertElemento } from "@/lib/actions";
import { createClient } from "@/utils/supabase/client";

type Props = {
	formData: {
		campo1?: string;
		campo2?: string;
	};
};

type Props2 = {
	imgObjs: {
		name: string;
		url: string;
	}[];
};

export default function FormCategoriascomidasupa({
	id,
	tituloCategorias,
	tituloElementos,
	tituloElementos2,
	tablaElementos,
	tablaResultados,
	carpetaPadreImagenes,
	categorias = [],
	elementos2 = [],
}: {
	id: number;
	categorias: string[];
	elementos2: Props2["imgObjs"];
	tituloCategorias: string;
	carpetaPadreImagenes: string;
	tituloElementos: string;
	tituloElementos2: string;
	tablaElementos: string;
	tablaResultados: string;
}) {
	const [elementosManuales, setElementosManuales] = useState<any[]>([]);
	const [selectedElemento, setSelectedElemento] = useState<any>(null);
	const [selectedElemento2, setSelectedElemento2] = useState<any>(null);
	const [selectedCategoria, setSelectedCategoria] = useState<string | null>(
		null
	);
	const [resultados, setResultados] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [selectedDate, setSelectedDate] = useState<string | null>(null);
	const [nombreDeLaImagen, setNombreDeLaImagen] = useState("");
	const [file, setFile] = useState<File | null>(null);

	const handleUploadImageToBucket = async () => {
		if (!file) {
			console.error("No file selected");
			return;
		}

		const supabase = createClient();
		console.log("Uploading file:", file);

		try {
			const { data, error } = await supabase.storage
				.from("pesocomidbue")
				.upload(`comidas/${file.name}`, file);

			if (error) {
				console.error("Error uploading file:", error.message);
				return;
			}

			console.log("File uploaded successfully:", data);
		} catch (err) {
			console.error("Unexpected error uploading file:", err);
		}
	};

	const handleFileChange = (fileEvent: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = fileEvent.target.files?.[0];
		if (selectedFile) {
			setFile(selectedFile);
		}
	};

	const handleInsert = (nombre: string, tipoComida: string) => {
		setElementosManuales((prev) => [
			...prev,
			{ id: `Manual-${prev.length + 1}`, nombre, tipoComida },
		]);
	};

	useEffect(() => {
		console.log("Elementos Manuales:", elementosManuales);
	}, [elementosManuales]);

	return (
		<form className="flex-1 h-screen flex flex-col">
			<div className="flex flex-1 h-screen">
				{/* Columna de ComidasDia */}
				<div className="w-[15%] p-2 border-r h-full flex flex-col justify-between">
					<div>Fecha</div>
					<input
						type="datetime-local"
						onChange={(e) => setSelectedDate(e.target.value)}
						className="p-2 border rounded"
					/>
					<div>
						<h3 className="text-center text-white">{tituloCategorias}</h3>
						<div className="flex flex-col items-center gap-2 mt-4">
							{categorias?.map((dia) => (
								<button
									type="button"
									onClick={() => setSelectedCategoria(dia)}
									key={dia}
									className={`w-full p-3 text-white bg-slate-800 rounded capitalize ${
										selectedCategoria === dia ? "bg-green-500" : ""
									}`}>
									{dia}
								</button>
							))}
						</div>
					</div>
				</div>
				{/* subir imagen */}
				<div>
					<label htmlFor="nombre-comida">nombre de la comida</label>
					<input
						onChange={(e) => setNombreDeLaImagen(e.target.value)}
						type="text"
						name="nombre-comida-name"
						id="nombre-comida"
					/>
					<input
						onChange={handleFileChange}
						type="file"
						name="subir"
						id="subir-imagen"
					/>
					<button
						type="button"
						onClick={handleUploadImageToBucket}
						className="py-2 px-3 text-white bg-blue-500 rounded mt-2">
						Subir Imagen
					</button>
				</div>
				{/* Columna de Elementos2 */}
				<div className="w-[50%] p-2 overflow-y-auto h-full">
					<h3 className="text-center text-white">{tituloElementos2}</h3>
					<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-4">
						{elementos2.map((elemento) => (
							<button
								type="button"
								onClick={() => setSelectedElemento2(elemento)}
								key={elemento.name}
								className={`p-3 text-white bg-slate-800 rounded capitalize ${
									selectedElemento2?.name === elemento.name
										? "bg-green-500"
										: ""
								} w-full`}
								style={{ aspectRatio: "3/2" }}>
								<div className="flex flex-col items-center justify-between h-full">
									<span className="text-center text-sm">{elemento.name}</span>
									<img
										src={elemento.url}
										alt={elemento.name}
										className="w-full h-full object-contain rounded"
									/>
								</div>
							</button>
						))}
					</div>
				</div>
				{/* Columna de Resultados */}
				<div className="w-[35%] p-2 h-full overflow-hidden">
					<div className="bg-gray-200 p-4">
						<PdForm tabla={tablaElementos} onInsert={handleInsert} />
					</div>
					<h3 className="text-center text-white">Resultados - TEST</h3>

					<button
						type="button"
						onClick={async () => {
							if (!selectedElemento2 || !selectedCategoria || !selectedDate) {
								return;
							}

							setResultados((prev) => [
								...prev,
								{
									id: prev.length + 1,
									[selectedCategoria]: selectedElemento2.name,
									fechaCreacion: selectedDate,
								},
							]);
							setSelectedElemento2(null);
							setSelectedCategoria(null);
							await insertElemento(
								id,
								selectedElemento2.name,
								selectedCategoria,
								tablaResultados
							);
						}}
						disabled={!selectedElemento2 || !selectedCategoria || isLoading}
						className="py-2 px-3 text-white bg-blue-500 rounded disabled:bg-gray-300 w-full mb-2 text-sm">
						{isLoading ? "Insertando..." : "Insertar en la Tabla"}
					</button>
					<div className="overflow-x-auto">
						<table className="w-full mt-4 table-auto border-collapse border border-gray-300 text-sm">
							<thead>
								<tr>
									{categorias.map((dia) => (
										<th
											key={dia}
											className="border border-white px-4 py-2 text-sm text-white bg-blue-800">
											{dia}
										</th>
									))}
									<th className="border border-white px-4 py-2 text-sm text-white bg-blue-800">
										ID
									</th>
									<th className="border border-white px-4 py-2 text-sm text-white bg-blue-800">
										Fecha
									</th>
								</tr>
							</thead>
							<tbody>
								{resultados.map((resultado) => (
									<tr key={resultado.id}>
										{categorias.map((dia) => (
											<td
												key={dia}
												className="border border-white px-4 py-2 text-sm text-white bg-blue-800">
												{resultado[dia] || ""}
											</td>
										))}
										<td className="border border-white px-4 py-2 text-sm text-white bg-blue-800">
											{resultado.id}
										</td>
										<td className="border border-white px-4 py-2 text-sm text-white bg-blue-800">
											{resultado.fechaCreacion}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</form>
	);
}
