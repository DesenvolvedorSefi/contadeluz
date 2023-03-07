import { component$, useContext } from "@builder.io/qwik";
import { AppContext } from "~/root";

export default component$(() => {
	const context = useContext(AppContext);

	return (
		<div class="p-8 md:p-16">
			<h2 class="text-3xl font-extrabold leading-none tracking-tight text-white text-center">
				Vamos voltar a negociar o seu empréstimo?
			</h2>
			<div class="mt-4 text-center">
				<a class="button shadow-lg shadow-sefi-4/50" href="#emprestimo">
					Quero meu empréstimo
				</a>
			</div>
			<div class="mt-4 text-center">
				<a
					href={context.whatsapp}
					class="text-sefi-5 uppercase text-sm font-bold"
					target="_blank"
				>
					Prefiro falar com uma consultora.
				</a>
			</div>
		</div>
	);
});
