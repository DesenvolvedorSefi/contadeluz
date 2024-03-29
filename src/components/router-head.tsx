import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
	const head = useDocumentHead();
	const loc = useLocation();

	return (
		<>
			<title>{head.title}</title>

			<link rel="canonical" href={loc.url.href} />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<link rel="icon" type="image/svg+xml" href="/favicon.svg" />

			<meta property="og:type" content="website" />
			<meta property="og:url" content={loc.url.href} />
			<meta
				property="og:title"
				content="Empréstimo na conta de Luz - Rápido e Fácil - SEFI Crédito"
			/>
			<meta
				property="og:description"
				content="Faça seu empréstimo na Conta de luz de forma rápida e sem burocracia."
			/>
			<meta property="og:image" content="./ogimage.png" />
			<meta
				name="keywords"
				content="empréstimo,crédito,dinheiro,conta,dívidas,serasa,fgts,conta de luz"
			/>

			{head.meta.map((m, i) => (
				<meta {...m} key={i} />
			))}

			{head.links.map((l, i) => (
				<link {...l} key={i} />
			))}

			{head.styles.map((s, i) => (
				<style {...s.props} dangerouslySetInnerHTML={s.style} key={i} />
			))}
		</>
	);
});
