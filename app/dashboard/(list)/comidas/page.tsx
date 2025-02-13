"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { createClient } from "@/utils/supabase/server";

const ComidasPage = () => {
	return (
		<div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
			{/* Izquierda*/}
			<div className="w-full xl:w-2/3">
				{/* Superior*/}
				<div className="flex flex-col lg:flex-row gap-4">
					{/* Botones */}
					<div className="flex-1 flex gap-2 justify-start flex-wrap">
						<div className="bg-white p-4 rounded-md flex gap-2 w-[45%] md:w-[24%] xl:w-[45%] 2xl:w-[24%] sm:w-[24%]">
							<div className="">
								<h1 className="text-xl font-semibold">Desayuno</h1>
							</div>
						</div>
						<div className="bg-white p-4 rounded-md flex gap-2 w-[45%] md:w-[24%] xl:w-[45%] 2xl:w-[24%]">
							<div className="">
								<h1 className="text-xl font-semibold">Almuerzo</h1>
							</div>
						</div>
						<div className="bg-white p-4 rounded-md flex gap-2 w-[45%] md:w-[24%] xl:w-[45%] 2xl:w-[24%]">
							<div className="">
								<h1 className="text-xl font-semibold">Comida</h1>
							</div>
						</div>
						<div className="bg-white p-4 rounded-md flex gap-2 w-[45%] md:w-[24%] xl:w-[45%] 2xl:w-[24%]">
							<div className="">
								<h1 className="text-xl font-semibold">Merienda</h1>
							</div>
						</div>
						<div className="bg-white p-4 rounded-md flex gap-2 w-[45%] md:w-[24%] xl:w-[45%] 2xl:w-[24%]">
							<div className="">
								<h1 className="text-xl font-semibold">Cena</h1>
							</div>
						</div>
						<div className="bg-white p-4 rounded-md flex gap-2 w-[45%] md:w-[24%] xl:w-[45%] 2xl:w-[24%]">
							<div className="">
								<h1 className="text-xl font-semibold">Picoteo</h1>
							</div>
						</div>
						<div className="bg-white p-4 rounded-md flex gap-2 w-[45%] md:w-[24%] xl:w-[45%] 2xl:w-[24%]">
							<div className="">
								<h1 className="text-xl font-semibold">Calendario</h1>
							</div>
						</div>
						<div className="bg-white p-4 rounded-md flex gap-2 w-[45%] md:w-[24%] xl:w-[45%] 2xl:w-[24%]">
							<div className="">
								<h1 className="text-xl font-semibold">Seleccionar</h1>
							</div>
						</div>
					</div>
				</div>
				{/* BOTTOM */}
				<div className="mt-4 bg-white rounded-md p-4 h-[800px]">
					<h1>Seleccione un Alimento </h1>
					tabla de alimentos
				</div>
			</div>
			{/* RIGHT */}
			<div className="w-full xl:w-1/3 flex flex-col gap-4">
				<div className="bg-white p-4 rounded-md">
					<h1 className="text-xl font-semibold">Nuevo Alimento</h1>
					<div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
						<span>Foto</span>
						<span>Subir</span>
					</div>
				</div>
				<div className="bg-white p-4 rounded-md">
					<h1 className="text-xl font-semibold">Tabla</h1>
					<div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
						<span>Alimentos seleccionados</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ComidasPage;
