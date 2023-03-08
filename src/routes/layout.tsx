import {
	component$,
	Slot,
	useContext,
	useStore,
	useVisibleTask$,
} from "@builder.io/qwik";
import Footer from "~/components/footer";
import { AppContext } from "~/root";
import Header from "../components/header";

const clientes = [
	{ nome: "Antônio", local: "Ipu-CE", valor: "1200" },
	{ nome: "Maria", local: "Fortaleza-CE", valor: "1300" },
	{ nome: "Sandra", local: "Guararipes-PE", valor: "1200" },
	{ nome: "José", local: "Itapipoca-CE", valor: "1200" },
	{ nome: "Roldão", local: "Natal-RN", valor: "1000" },
	{ nome: "Maria", local: "Forquilha-CE", valor: "1300" },
	{ nome: "Maria", local: "Sobral-CE", valor: "1200" },
	{ nome: "Prycila", local: "Sertânia-PE", valor: "600" },
	{ nome: "Ana", local: "Sobral-CE", valor: "1200" },
	{ nome: "Francisco", local: "Itapipoca-CE", valor: "1200" },
	{ nome: "Aline", local: "Salvador-BA", valor: "1000" },
	{ nome: "Francisca", local: "Reriutaba-CE", valor: "1300" },
	{ nome: "Antônia", local: "Sobral-CE", valor: "1100" },
	{ nome: "Francisco", local: "Acopiara-CE", valor: "1200" },
	{ nome: "Ana", local: "Tianguá-CE", valor: "1200" },
	{ nome: "Maria", local: "Reriutaba-CE", valor: "1000" },
	{ nome: "Eva", local: "Sobral-CE", valor: "1100" },
	{ nome: "Elizete", local: "Santa Quitéria-CE", valor: "1100" },
	{ nome: "Lana", local: "Sobral-CE", valor: "1100" },
	{ nome: "Claudenice", local: "Itapipoca-CE", valor: "1200" },
	{ nome: "Ivonete", local: "Itapajé-CE", valor: "1200" },
	{ nome: "Ricardo", local: "Ubajara-CE", valor: "1100" },
	{ nome: "Gisella", local: "Pentecoste-CE", valor: "1200" },
	{ nome: "Jacó", local: "Santana-BA", valor: "1000" },
	{ nome: "Francisco", local: "Itapipoca-CE", valor: "1100" },
	{ nome: "Francisca", local: "Meruoca-CE", valor: "1300" },
	{ nome: "Dielda", local: "Frecheirinha-CE", valor: "1000" },
	{ nome: "João", local: "Cruz-CE", valor: "1200" },
	{ nome: "Antônia", local: "Ceará-CE", valor: "1100" },
	{ nome: "Celenita", local: "Esplanada-BA", valor: "1000" },
	{ nome: "Valney", local: "Sobral-CE", valor: "1000" },
	{ nome: "Ana", local: "Itapajé-CE", valor: "1100" },
	{ nome: "Francisca", local: "Sobral-CE", valor: "500" },
	{ nome: "Cesarina", local: "Ceará-CE", valor: "1300" },
	{ nome: "Jeova", local: "Fortaleza-CE", valor: "1100" },
	{ nome: "Dayana", local: "Sobral-CE", valor: "1100" },
	{ nome: "Chistiane", local: "Recife-PE", valor: "1000" },
	{ nome: "Angélica", local: "Recife-PE", valor: "1000" },
	{ nome: "Ana", local: "Sobral-CE", valor: "1100" },
	{ nome: "Maria", local: "Santa Quitéria-CE", valor: "1100" },
	{ nome: "Rogelma", local: "Cruz-CE", valor: "1100" },
	{ nome: "Raimundo", local: "Alagoinhas-BA", valor: "1000" },
	{ nome: "José", local: "Almas-BA", valor: "500" },
	{ nome: "Maria", local: "Sobral-CE", valor: "1000" },
	{ nome: "Sara", local: "Itapajé-CE", valor: "1100" },
	{ nome: "Ariston", local: "Uruoca-CE", valor: "1300" },
	{ nome: "Thaís", local: "Sobral-CE", valor: "400" },
	{ nome: "Maria", local: "Sobral-CE", valor: "1000" },
	{ nome: "Benedita", local: "Meruoca-CE", valor: "800" },
	{ nome: "Priscila", local: "Sobral-CE", valor: "1100" },
	{ nome: "Lea", local: "Sobral-CE", valor: "1100" },
	{ nome: "Carlos", local: "Sobral-CE", valor: "1100" },
	{ nome: "Antônia", local: "Boa Viagem-CE", valor: "1000" },
	{ nome: "Stefanny", local: "Sobral-CE", valor: "1200" },
];

export default component$(() => {
	const context = useContext(AppContext);
	const animate = useStore({
		className: "opacity-0 -translate-y-12",
		in: false,
		client: 0,
	});

	useVisibleTask$(() => {
		(function loop() {
			animate.client = Math.floor(clientes.length * Math.random());
			const time = Math.floor(Math.random() * 10000) + 5100;

			setTimeout(() => {
				animate.className = "opacity-100 translate-y-0";
				setTimeout(() => {
					animate.className = "opacity-0 -translate-y-12";
					loop();
				}, 5000);
			}, time);
		})();
	});

	return (
		<>
			<main
				class={`bg-gradient-to-b from-sefi via-sefi-4 to-sefi min-h-screen relative`}
			>
				<Header />
				<section>
					<Slot />
				</section>
				<Footer />
				<a
					href={`${context.whatsapp}&text=Preciso%20de%20ajuda%20para%20fazer%20o%20meu%20empr%C3%A9stimo.&type=phone_number&app_absent=0`}
					target="_blank"
					class="fixed shadow-xl shadow-neutral-4/50 grid place-items-center bottom-2 right-2 rounded-full text-white bg-green w-16 h-16"
					title="WhatsApp da SEFI"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="800"
						height="800"
						viewBox="0 0 24 24"
						fill="none"
						class="w-12 h-12"
					>
						<path
							d="M17.6 6.32A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.865 3.963 7.94 7.94 0 0 0-.015 7.927L4 20l4.2-1.1a7.93 7.93 0 0 0 3.79 1 8 8 0 0 0 8-7.93 8 8 0 0 0-2.39-5.65zM12 18.53a6.58 6.58 0 0 1-3.36-.92l-.24-.15-2.49.66.66-2.43-.16-.25a6.6 6.6 0 0 1 1.497-8.637 6.6 6.6 0 0 1 8.753.467 6.65 6.65 0 0 1 2 4.66 6.66 6.66 0 0 1-6.66 6.6zm3.61-4.94l-1.35-.64c-.18-.06-.32-.1-.45.1-.196.268-.406.525-.63.77-.11.14-.23.15-.43 0a5.33 5.33 0 0 1-2.69-2.35c-.21-.35.2-.33.58-1.08a.38.38 0 0 0 0-.35c0-.1-.45-1.08-.61-1.47s-.32-.33-.45-.34h-.39a.71.71 0 0 0-.53.25A2.19 2.19 0 0 0 8 10.17a3.82 3.82 0 0 0 .81 2.05 8.89 8.89 0 0 0 3.39 3 3.85 3.85 0 0 0 2.38.5 2 2 0 0 0 1.33-.94 1.62 1.62 0 0 0 .12-.94c-.09-.1-.22-.15-.42-.25z"
							fill="currentColor"
						/>
					</svg>
				</a>
				<div
					class={`transition z-[100] max-w-[240px] fixed shadow-lg shadow-sefi-4/50 bg-gradient-to-br  top-4 right-4 p-0.5 text-sm  rounded-md from-yellow via-green to-yellow text-white ${animate.className} animate-bg`}
				>
					<div class="bg-neutral-5 px-3 py-1.5 rounded">
						<span class="font-semibold text-green">
							{clientes[animate.client].nome}
						</span>{" "}
						de {clientes[animate.client].local} acabou de conseguir{" "}
						<span class="font-semibold text-green">
							R$ {clientes[animate.client].valor}.
						</span>
					</div>
				</div>
			</main>
		</>
	);
});

// console.log({ clientes });
