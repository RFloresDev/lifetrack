"use client";

import { useRef, useState } from "react";
// import { insertData } from "@/components/pdformserver";
import { insertElementoManual } from "@/lib/actions";

type Props = {
	tabla: string;
	onInsert: (nombre: string, tipoComida: string) => void;
};

export default function PdForm({ tabla, onInsert }: Props) {
	const nombreRef = useRef<HTMLInputElement>(null);
	const tipoComidaRef = useRef<HTMLInputElement>(null);
	const comentarioRef = useRef<HTMLInputElement>(null);
	const handleSubmit = async () => {
		await insertElementoManual(
			nombreRef.current!.value,
			tipoComidaRef.current!.value,
			comentarioRef.current!.value,
			tabla
		);
		onInsert(nombreRef.current!.value, tipoComidaRef.current!.value);
	};

	return (
		<div style={{ textAlign: "center" }}>
			<h1>Introduce comida nueva</h1>
			<section className="flex flex-col gap-2 items-start">
				<label className="w-full">
					Nombre:
					<input
						ref={nombreRef}
						name="nombre"
						className="border rounded"
						type="text"
					/>
				</label>
				<label className="w-full">
					Tipo comida:
					<input
						ref={tipoComidaRef}
						name="descripcion"
						className="border rounded"
						type="text"
					/>
				</label>
				<label className="w-full">
					Comentario:
					<input
						ref={comentarioRef}
						name="comentario"
						className="border rounded"
						type="text"
					/>
				</label>
				<button
					onClick={handleSubmit}
					type="button"
					className="bg-slate-800 text-white rounded w-full">
					Enviar
				</button>
			</section>
		</div>
	);
}
