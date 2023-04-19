import { component$, Slot } from "@builder.io/qwik";

export default component$(({ classNames }: { classNames?: string }) => (
	<div class="px-4 md:px-8 relative">
		<div
			class={`bg-white shadow-xl shadow-sefi-4/25 px-4 py-8 md:p-8 rounded-xl md:rounded-3xl max-w-5xl mx-auto ${classNames}`}
		>
			<Slot />
		</div>
	</div>
));
