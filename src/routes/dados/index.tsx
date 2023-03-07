import { $, component$, useStore } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import Duvidas from "~/components/duvidas";
import Panel from "~/components/panel";

export const useData = routeLoader$(async ({ request, redirect }) => {
	try {
		const fd = await request.formData();
		const valor = fd.get("valor");
		const parcelas = fd.get("parcelas");
		return {
			valor,
			parcelas,
		};
	} catch (e) {
		redirect(303, "/");
		return {};
	}
});

export default component$(() => {
	const data = useData().value;

	const store = useStore({
		nome: "",
		cpf: "",
		nascimento: "",
		cep: "",
		email: "",
		telefone: "",
		valor: data.valor as string,
		parcelas: data.parcelas as string,
	});

	const validar = $(() => {
		if (store.nome === "") {
			alert(
				"Insira o seu nome. Lembre-se que você deve ser o titular da conta de energia."
			);
			return false;
		}
		if (store.cpf === "") {
			alert("Insira um CPF válido.");
			return false;
		}
		if (store.nascimento === "") {
			alert("Insira a data de nascimento.");
			return false;
		}
		if (store.cep === "") {
			alert("Insira um Cep válido.");
			return false;
		}
		if (store.email === "") {
			alert("Insira o seu email.");
			return false;
		}
		if (store.telefone === "") {
			alert("Insira um telefone válido.");
			return false;
		}
		if (store.valor === "") {
			alert("Escolha um valor entre R$ 500 a R$ 1500.");
			return false;
		}
		if (store.parcelas === "") {
			alert("Escola um número de parcelas, entre 12x e 20x.");
			return false;
		}

		const TestaCPF = (strCPF: string) => {
			let Soma, Resto;

			Soma = 0;
			if (strCPF == "00000000000") return false;

			for (let i = 1; i <= 9; i++)
				Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
			Resto = (Soma * 10) % 11;

			if (Resto == 10 || Resto == 11) Resto = 0;
			if (Resto != parseInt(strCPF.substring(9, 10))) return false;

			Soma = 0;
			for (let i = 1; i <= 10; i++)
				Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
			Resto = (Soma * 10) % 11;

			if (Resto == 10 || Resto == 11) Resto = 0;
			if (Resto != parseInt(strCPF.substring(10, 11))) return false;
			return true;
		};

		if (TestaCPF(store.cpf)) {
			//TO DO
		} else {
			alert(
				"Parece que o seu CPF não está correto, veja se você digitou corretamente."
			);
		}
	});

	return (
		<>
			<div class="max-w-5xl mx-auto p-4 md:p-8">
				<h2 class="font-extrabold mb-2 tracking-tighter text-5xl text-white">
					Está quase lá!
				</h2>
				<div class="text-sefi-5 text-xl font-medium">
					Só precisamos de poucos dados para darmos andamento ao
					processo.
				</div>
			</div>

			<Panel>
				<div>
					<form class="form">
						<label class="input col-span-2">
							<div class="input-label">Nome</div>
							<input
								class="input-field"
								name="nome"
								placeholder="Maria Aparecida dos Santos"
								value={store.nome}
								onChange$={(event) =>
									(store.nome = event.target.value)
								}
							/>
						</label>
						<label class="input col-span-2 md:col-span-1">
							<div class="input-label">CPF</div>
							<input
								class="input-field"
								name="cpf"
								placeholder="123.456.789-00"
								value={store.cpf}
								onChange$={(event) =>
									(store.cpf = event?.target.value)
								}
							/>
						</label>
						<label class="input">
							<div class="input-label">Data de nascimento</div>
							<input
								type="datetime-local"
								class="input-field"
								name="nascimento"
								placeholder="10/06/1975"
								value={store.nascimento}
								onChange$={(event) =>
									(store.nascimento = event.target.value)
								}
							/>
						</label>
						<label class="input">
							<div class="input-label">CEP</div>
							<input
								class="input-field"
								name="cep"
								placeholder="62011-000"
								value={store.cep}
								onChange$={(event) =>
									(store.cep = event.target.value)
								}
							/>
						</label>
						<label class="input col-span-2 sm:col-span-1">
							<div class="input-label">Email</div>
							<input
								class="input-field"
								name="email"
								type="email"
								placeholder="seu@email.com"
								value={store.email}
								onChange$={(event) =>
									(store.email = event.target.value)
								}
							/>
						</label>
						<label class="input col-span-2 sm:col-span-1">
							<div class="input-label">Telefone</div>
							<input
								class="input-field"
								name="telefone"
								placeholder="(00) 9 1234-5678"
								value={store.telefone}
								onChange$={(event) =>
									(store.telefone = event.target.value)
								}
							/>
						</label>
						<label class="input">
							<div class="input-label">Valor</div>
							<input
								class="input-field"
								name="valor"
								placeholder="Valor"
								value={store.valor}
								onChange$={(event) =>
									(store.valor = event.target.value)
								}
							/>
						</label>
						<label class="input">
							<div class="input-label">Parcelas</div>
							<input
								class="input-field"
								name="parcelas"
								placeholder="Parcelas"
								type="number"
								value={store.parcelas}
								onChange$={(event) =>
									(store.parcelas = event.target.value)
								}
							/>
						</label>
						<div class="col-span-full sm:mt-4 text-center">
							<h3 class="text-2xl font-bold text-sefi-4 tracking-tighter">
								Viu como foi rápido?
							</h3>
							<div class="leading-tight max-w-xs mx-auto text-neutral-4">
								Agora é só enviar e aguardar que entraremos em
								contato rapidinho.
							</div>
							<div class="mt-4">
								<button
									onClick$={validar}
									preventdefault:click
									type="button"
									class="button button-large"
								>
									Enviar
								</button>
							</div>
						</div>
					</form>
				</div>
			</Panel>

			<Duvidas />
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
