<script lang="ts">
	import Globe from '../Globe/Globe.svelte';
	import { onMount } from 'svelte';

	let form_name = $state('');
	let form_email = $state('');
	let form_subject = $state('');
	let form_message = $state('');
	let form_success = $state(false);
	let form_error = $state('');
	let isSubmitting = $state(false);

	async function handleFormSubmit(event: Event) {
		event.preventDefault();
		if (isSubmitting) return;
		isSubmitting = true;
		form_success = false;
		form_error = '';
		try {
			const res = await fetch('https://formspree.io/f/xldpebqo', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ form_name, form_email, form_subject, form_message })
			});

			if (res.ok) {
				form_success = true;
				form_name = '';
				form_email = '';
				form_subject = '';
				form_message = '';
			} else {
				const data = await res.json().catch(() => null);
				form_error = data?.error ?? 'Error sending message. Please try again.';
			}
		} catch (error) {
			form_error = 'Network error. Please try again in a moment.';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<div id="Contact" class="relative top-0 left-0 w-full py-8 md:py-4">
	<div class="mx-4 flex max-w-4xl flex-col items-start sm:mx-8 md:mx-16 lg:mx-30">
		<h1
			class="bg-gradient-to-b from-[#e7e6e6] to-[#3f3f3f] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl"
		>
			Contact
		</h1>
		<h2 class="mb-8 max-w-2xl text-base font-light text-[#b4b4b4] sm:text-lg md:text-xl">
			Have a project in mind or just want to say hi? Feel free to reach out!
		</h2>
	</div>
	<section
		class="mx-4 flex flex-col-reverse items-center justify-center rounded-2xl bg-black/5 backdrop-blur-sm backdrop-filter md:mx-16 lg:mx-30 lg:flex-row"
	>
		<div class="flex flex-1 flex-col w-full h-full overflow-hidden text-white">
			<div class="relative flex flex-col justify-center gap-6 p-4 md:p-12">
				<div
                    class="backdrop-blur-2xs absolute inset-0 bg-cyan-400/5 text-white backdrop-filter rounded-2xl lg:rounded-l-2xl lg:rounded-r-none"
                ></div>
				<h2 class="text-2xl font-semibold tracking-wide mb-25">Contact Info</h2>
				<div class="flex items-center gap-3 text-base">
					<span class="text-cyan-400">
						<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
							><path
								fill="currentColor"
								d="M16 2A11.013 11.013 0 0 0 5 13a10.9 10.9 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.9 10.9 0 0 0 27 13A11.013 11.013 0 0 0 16 2m0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"
							/><circle cx="16" cy="13" r="4" fill="none" /></svg
						>
					</span>
					<div class="flex flex-col">
						<span class="font-bold">Location</span>
						<span>Bilbao, Spain</span>
					</div>
				</div>
				<div class="flex items-center gap-3 text-base">
					<span class="text-cyan-400">
						<svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
							><g fill="currentColor"
								><path
									d="M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297l.116.066a1 1 0 0 0 .878 0l.116-.066z"
								/><path
									d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a3 3 0 0 1 2.354-1.42L5 4z"
								/></g
							></svg
						>
					</span>
					<div class="flex flex-col">
						<span class="font-bold">Email</span>
						<span>contacto@umartin.es</span>
					</div>
				</div>
				<div class="flex items-center gap-3 text-base">
					<span class="text-cyan-400">
						<svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
							><path
								fill="currentColor"
								fill-rule="evenodd"
								d="m16.1 13.359l.456-.453c.63-.626 1.611-.755 2.417-.317l1.91 1.039c1.227.667 1.498 2.302.539 3.255l-1.42 1.412c-.362.36-.81.622-1.326.67c-1.192.111-3.645.051-6.539-1.643zm-5.91-5.876l.287-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.065 1.14.453 3.22 2.149 5.776z"
								clip-rule="evenodd"
							/><path
								fill="currentColor"
								d="M12.063 11.497c-2.946-2.929-1.88-4.008-1.873-4.015l-4.039 4.04c.667 1.004 1.535 2.081 2.664 3.204c1.14 1.134 2.26 1.975 3.322 2.596L16.1 13.36s-1.082 1.076-4.037-1.862"
								opacity=".6"
							/></svg
						>
					</span>
					<div class="flex flex-col">
						<span class="font-bold">Phone</span>
						<span>+34 652 68 68 29</span>
					</div>
				</div>
				<Globe />
			</div>
		</div>
		<div
			class="z-10 flex flex-[1.2] flex-col justify-center gap-4 bg-transparent p-6 text-white md:pr-16 md:pl-16"
		>
			<h2 class="mb-6 text-2xl font-semibold tracking-wide">Send Me a Message</h2>
			<form class="space-y-4" onsubmit={handleFormSubmit} autocomplete="on">
				<div class="flex w-full flex-row gap-4">
					<div class="flex-1">
						<input
							type="text"
							placeholder="Name"
							bind:value={form_name}
							required
							class="w-full rounded-xl bg-zinc-800 px-4 py-3 text-base text-white shadow transition outline-none focus:ring-2 focus:ring-cyan-400"
						/>
					</div>
					<div class="flex-1">
						<input
							type="email"
							placeholder="Email"
							bind:value={form_email}
							required
							class="w-full rounded-xl bg-zinc-800 px-4 py-3 text-base text-white shadow transition outline-none focus:ring-2 focus:ring-cyan-400"
						/>
					</div>
				</div>
				<div>
					<input
						type="text"
						placeholder="Subject"
						bind:value={form_subject}
						required
						class="w-full rounded-xl bg-zinc-800 px-4 py-3 text-base text-white shadow transition outline-none focus:ring-2 focus:ring-cyan-400"
					/>
				</div>
				<div>
					<textarea
						placeholder="Message"
						bind:value={form_message}
						required
						rows="4"
						class="w-full rounded-xl bg-zinc-800 px-4 py-3 text-base text-white shadow transition outline-none focus:ring-2 focus:ring-cyan-400"
					></textarea>
				</div>
				<button
					type="submit"
					disabled={isSubmitting}
					aria-busy={isSubmitting}
					class="rounded-xl bg-cyan-400 bg-gradient-to-r px-8 py-3 text-lg font-semibold text-white shadow transition-transform duration-200 hover:scale-105 hover:-rotate-2 hover:shadow-cyan-400/40 active:scale-95 disabled:cursor-not-allowed disabled:opacity-80"
				>
					{#if isSubmitting}
						Sending...
					{:else}
						Submit
					{/if}
				</button>
			</form>
			<div class="min-h-[24px]" aria-live="polite" aria-atomic="true">
				{#if form_success}
					<p class="mt-2 text-cyan-400">
						Thank you for your message! I'll get back to you as soon as possible.
					</p>
				{:else if form_error}
					<p class="mt-2 text-red-400">{form_error}</p>
				{/if}
			</div>
		</div>
	</section>
</div>
