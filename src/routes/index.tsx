import { $, component$, useStore } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import Duvidas from "~/components/duvidas";
import Modalidades from "~/components/modalidades";
import Panel from "~/components/panel";
import Separator from "~/components/separator";
import Sobre from "~/components/sobre";
import Volte from "~/components/volte";

export default component$(() => {
	const store = useStore({
		valor: 1200,
		parcela: 18,
		dono: false,
	});

	const solicitar = $(async () => {
		if (store.dono) {
			document.querySelector("form")?.submit();
		} else {
			alert(
				"Você precisa confirmar que é o titular da conta de energia."
			);
		}
	});

	return (
		<>
			<div class="max-w-5xl mx-auto px-4 md:px-8">
				<div class="hero">
					<div class="flex justify-between relative">
						<div class="py-8 sm:pt-0 md:py-16 z-10">
							<h5 class="uppercase font-bold tracking-wider text-sefi-5">
								empréstimo na conta de luz
							</h5>
							<h1 class="text-[34px] sm:text-5xl lg:text-6xl leading-none font-extrabold text-white tracking-tighter">
								Dinheiro <span class="text-yellow">rápido</span>
								!
								<br />{" "}
								<span class="text-yellow">
									Sem comprovar
								</span>{" "}
								renda. <br /> 100% digital e{" "}
								<span class="text-yellow">seguro</span>.
							</h1>
						</div>
						<div class="hidden z-0 sm:block absolute right-0 -top-16 w-52 md:w-72">
							<img
								src="./homem-feliz-dinheiro.webp"
								alt="Na SEFI é muito rápido e fácil conseguir o seu empréstimo."
								class="w-auto"
								width={"379"}
								height={"600"}
							/>
						</div>
					</div>
				</div>
			</div>

			<div id="emprestimo" />
			<Panel>
				{/* Valor */}
				<div>
					<div
						class={`mb-4 text-lg font-bold uppercase tracking-wider text-center text-neutral-4`}
					>
						Quanto você precisa?
					</div>
					<div class="buttons">
						{[500, 700, 900, 1200, 1500].map((item, i) => (
							<div
								key={i}
								class={`button-label ${
									item > 1000 ? "basis-1/2" : "basis-1/3"
								}`}
							>
								<input
									id={`valor-${item}`}
									type="radio"
									name="valor"
									value={item}
									checked={store.valor === item}
									onClick$={() => (store.valor = item)}
								/>
								<label for={`valor-${item}`}>R${item}</label>
							</div>
						))}
					</div>
				</div>
				<hr class="my-8 border-t-neutral-2" />
				{/* Parcelas */}
				<div>
					<div
						class={`mb-4 text-lg font-bold uppercase tracking-wider text-center text-neutral-4 mx-auto max-w-[240px] sm:max-w-none leading-tight`}
					>
						Em quantas parcelas você prefere pagar?
					</div>
					<div class="buttons">
						{[12, 14, 16, 18, 20].map((item, i) => (
							<div class="button-label" key={i}>
								<input
									id={`parcela-${item}`}
									type="radio"
									name="parcela"
									value={item}
									checked={store.parcela === item}
									onClick$={() => (store.parcela = item)}
								/>
								<label for={`parcela-${item}`}>{item}x</label>
							</div>
						))}
					</div>
				</div>
				<hr class="my-8 w-full border-t-neutral-2" />
				<div class="flex flex-col gap-8 flex-wrap lg:flex-nowrap sm:flex-row justify-center text-center">
					<div class="lg:w-1/4">
						<div class="text-5xl font-black text-sefi">
							R${store.valor}
						</div>
						<div class="text-sefi-4 text-center text-4xl font-black">
							EM {store.parcela}X
						</div>
					</div>
					<div class="mx-auto max-w-xs lg:w-1/4">
						<div class="font-bold text-red text-xl">ATENÇÃO</div>
						<div class="leading-tight">
							A SEFI não solicita nenhum pagamento antecipado para
							fazer o seu empréstimo.
						</div>
					</div>
					<div class="lg:w-1/2">
						<div
							onClick$={() => (store.dono = !store.dono)}
							class={`cursor-pointer text-sm flex items-center justify-center gap-2 mb-4 `}
						>
							<div
								class={`checkbox ${
									store.dono
										? "bg-green text-neutral-1"
										: "bg-neutral-2"
								}`}
							>
								{store.dono && (
									<svg
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M7 12L9.89075 14.8907V14.8907C9.95114 14.951 10.049 14.9511 10.1094 14.8907V14.8907L17 8"
											stroke="currentColor"
											stroke-width="3"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								)}
							</div>
							<div>
								Confirmo que sou o titular da conta de Energia.
							</div>
						</div>

						<div>
							<form method="post" action="/dados/">
								<input
									type="hidden"
									value={store.valor}
									name="valor"
								/>
								<input
									type="hidden"
									value={store.parcela}
									name="parcelas"
								/>
							</form>
							<button
								class="button button-large -mb-4 md:mb-0"
								onClick$={solicitar}
							>
								Solicitar Empréstimo
							</button>
						</div>
					</div>
				</div>
			</Panel>

			<Sobre />

			<div class="bg-sefi-5">
				<Duvidas />
			</div>

			<Modalidades />

			<Separator classNames="h-[1px] via-sefi-4" />

			<Volte />
		</>
	);
});

export const head: DocumentHead = {
	title: "Empréstimo na conta de Luz - Rápido e Fácil - SEFI Crédito",
	meta: [
		{
			name: "description",
			content:
				"Faça seu empréstimo na Conta de luz de forma rápida e sem burocracia.",
		},
	],
};
