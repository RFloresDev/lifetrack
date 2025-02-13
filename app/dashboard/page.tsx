import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		return redirect("/sign-in");
	}

	return (
		<div className="p-4 flex gap-4 flex-col md:flex-row">
			{/* Parte Central*/}
			<div className="w-full lg:w-2/3 flex flex-col gap-8">
				{/* Graficos centrales */}
				<div className="flex gap-4 flex-col lg:flex-row">
					{/* Grafico de peso ideal ultimo mes */}
					<div className="w-full lg:w-2/4 h-[450px]">
						{/* <PesoIdealMesContainer /> */}
					</div>
					{/* Peso ideal Año*/}
					<div className="w-full lg:w-2/4 h-[450px]">
						{/* <PesoIdealAnualContainer /> */}
					</div>
				</div>
				{/* Tabla resultados semanales*/}
				<div className="w-full h-[500px]">{/* <ResultadosSemanales /> */}</div>
			</div>
			{/* Columna Derecha */}
			<div className="w-full lg:w-1/3 flex flex-col gap-8">
				{/* <RecordatoriosContainer />
        			<FinanzasContainer /> */}
			</div>
		</div>
	);
}
