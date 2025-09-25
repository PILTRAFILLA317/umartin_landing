<script lang="ts">
	const education = [
		{
			year: '2024-2025',
			title: 'Outer Core',
			institution: '42 Urduliz',
			description:
				'Advanced curriculum focusing on specializations including AI, cybersecurity, and mobile development. Currently specializing in full-stack development with emphasis on project collaboration, technology adaptation, and real-world partnerships.',
			status: 'current'
		},
		{
			year: '2021-2024',
			title: 'Common Core',
			institution: '42 Urduliz',
			description:
				'Foundational program covering C programming, algorithms, UNIX systems, file management, network architecture, system administration, and client-server development.',
			status: 'completed'
		}
	];
</script>

<div id="about" class="relative top-0 left-0 w-full py-8 md:py-4">
	<div class="mx-4 flex max-w-4xl flex-col items-start sm:mx-8 md:mx-16 lg:mx-30">
		<h2
			class="bg-gradient-to-b from-[#e7e6e6] to-[#3f3f3f] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl"
		>
			About Me
		</h2>
		<h2 class="mb-8 max-w-2xl text-base font-light text-[#b4b4b4] sm:text-lg md:text-xl">
			Get to know more about my background and educational journey.
		</h2>
	</div>

	<section class="flex flex-col items-center rounded-xs backdrop-blur-sm backdrop-filter justify-center sm:mx-8 md:mx-16 lg:mx-30 lg:flex-row">
		<div
			class="flex flex-1 flex-col overflow-hidden text-white"
		>
            <div class="relative flex flex-col justify-center gap-6 p-12">
                <div
                    class="backdrop-blur-2xs absolute inset-0 bg-cyan-400/5 text-white backdrop-filter rounded-2xl lg:rounded-l-2xl lg:rounded-r-none"
                ></div>
				<h2 class="text-2xl font-semibold tracking-wide">Who I Am</h2>
				<p class="text-md leading-relaxed text-gray-300">
					I'm a passionate Full Stack Developer and UI Designer with a knack for creating seamless
					digital experiences. With a strong foundation in both front-end and back-end technologies,
					I thrive on building applications that are not only functional but also visually
					appealing.
				</p>
				<p class="text-md leading-relaxed text-gray-300">
					Whether it's crafting intuitive user interfaces or architecting robust server-side
					solutions, I bring a dedicated and detail-oriented approach to every project I undertake.
					I'm always eager to learn new technologies and tackle challenging problems.
				</p>

				<div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
					<div class="flex items-center gap-3 text-base">
						<span class="text-cyan-400">
							<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
								<path
									fill="currentColor"
									d="M16 2A11.013 11.013 0 0 0 5 13a10.9 10.9 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.9 10.9 0 0 0 27 13A11.013 11.013 0 0 0 16 2m0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"
								/><circle cx="16" cy="13" r="4" fill="none" />
							</svg>
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
							<span class="font-bold">Availability</span>
							<span>Open to Opportunities</span>
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
							<span class="break-all">contacto@umartin.es</span>
						</div>
					</div>
					<div class="flex items-center gap-3 text-base">
						<span class="text-cyan-400">
							<svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
								><path
									fill="currentColor"
									fill-rule="evenodd"
									d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m2.96 6.056a.75.75 0 0 1 1.056-.096l.277.23c.605.504 1.12.933 1.476 1.328c.379.42.674.901.674 1.518s-.295 1.099-.674 1.518c-.356.395-.871.824-1.476 1.328l-.277.23a.75.75 0 1 1-.96-1.152l.234-.195c.659-.55 1.09-.91 1.366-1.216c.262-.29.287-.427.287-.513s-.025-.222-.287-.513c-.277-.306-.707-.667-1.366-1.216l-.234-.195a.75.75 0 0 1-.096-1.056M17.75 15a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75"
									clip-rule="evenodd"
								/></svg
							>
						</span>
						<div class="flex flex-col">
							<span class="font-bold">Projects</span>
							<span>20+ Completed</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div
			class="z-10 flex flex-[1.2] flex-col justify-center gap-4 bg-transparent p-6 text-white md:pr-16 md:pl-16"
		>
			<h2 class="mb-6 text-2xl font-semibold tracking-wide">Education Timeline</h2>
			<div class="relative">
				<!-- Timeline line -->
				<div
					class="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-cyan-400 to-cyan-600"
				></div>

				<div class="space-y-8">
					{#each education as edu, index}
						<div class="relative flex items-start gap-6">
							<!-- Timeline dot -->
							<div
								class="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full {edu.status ===
								'current'
									? 'bg-cyan-400'
									: 'bg-cyan-600'} shadow-lg"
							>
								{#if edu.status === 'current'}
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
											fill="white"
										/>
									</svg>
								{:else}
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z" fill="white" />
									</svg>
								{/if}
							</div>

							<!-- Content -->
							<div class="min-w-0 flex-1 pb-8">
								<div class="mb-1 flex flex-wrap items-center gap-3">
									<span class="text-sm font-medium text-cyan-400">{edu.year}</span>
									{#if edu.status === 'current'}
										<span
											class="rounded-full border border-cyan-400/30 bg-cyan-400/20 px-2 py-1 text-xs text-cyan-400"
											>Current</span
										>
									{/if}
								</div>
								<h3 class="mb-1 text-lg font-semibold text-white">{edu.title}</h3>
								<p class="mb-2 text-sm text-cyan-300">{edu.institution}</p>
								<p class="text-sm leading-relaxed text-gray-300">{edu.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
</div>
