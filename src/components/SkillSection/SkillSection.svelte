<script lang="ts">
	import SkillCard from '../SkillCard/SkillCard.svelte';

	const front_skills = [
		{
			name: 'Svelte',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/svelte/svelte-original.svg',
			gradientColor: '#ff3e00'
		},
		{
			name: 'Astro',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/astro/astro-original.svg',
			gradientColor: '#7f00ff'
		},
		{
			name: 'TypeScript',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
			gradientColor: '#3178c6'
		},
		{
			name: 'JavaScript',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
			gradientColor: '#f7df1e'
		},
		{
			name: 'CSS3',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
			gradientColor: '#1572b6'
		},
		{
			name: 'HTML5',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
			gradientColor: '#e34f26'
		},
		{
			name: 'Tailwind CSS',
			logo: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg',
			gradientColor: '#06b6d4'
		}
	];

	const back_skills = [
		{
			name: 'Firebase',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg',
			gradientColor: '#ffca28'
		},
		{
			name: 'Flask',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg',
			gradientColor: '#000000'
		},
		{
			name: 'MySQL',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
			gradientColor: '#4479a1'
		},
		{
			name: 'Node.js',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
			gradientColor: '#339933'
		},
		{
			name: 'Django',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg',
			gradientColor: '#092e20'
		},
		{
			name: 'PostgreSQL',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
			gradientColor: '#336791'
		},
		{
			name: 'Bun',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bun/bun-original.svg',
			gradientColor: '#fbf0df'
		},
		{
			name: 'Redis',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg',
			gradientColor: '#dc382d'
		},
		{
			name: 'Drizzle ORM',
			logo: 'https://avatars.githubusercontent.com/u/108468352?v=4',
			gradientColor: '#0D9488'
		},
		{
			name: 'Appwrite',
			logo: ' https://raw.githubusercontent.com/devicons/devicon/master/icons/appwrite/appwrite-original.svg',
			gradientColor: '#f02e65'
		},
		{
			name: 'Supabase',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg',
			gradientColor: '#3ecf8e'
		}
	];

	const mobile_skills = [
		{
			name: 'Flutter',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg',
			gradientColor: '#02569b'
		},
		{
			name: 'Kotlin',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg',
			gradientColor: '#7f52ff'
		},
		{
			name: 'Swift',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg',
			gradientColor: '#fa7343'
		},
		{
			name: 'Andoid Studio',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/androidstudio/androidstudio-original.svg',
			gradientColor: '#3DDC84'
		},
		{
			name: 'XCode',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/xcode/xcode-original.svg',
			gradientColor: '#147EFB'
		}
	];
	const tools = [
		{
			name: 'Kubernetes',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg',
			gradientColor: '#326ce5'
		},
		{
			name: 'Docker',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
			gradientColor: '#2496ed'
		},
		{
			name: 'Nginx',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg',
			gradientColor: '#009639'
		},
		{
			name: 'Git',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
			gradientColor: '#f05032'
		},
		{
			name: 'GitHub',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg',
			gradientColor: '#181717'
		},
		{
			name: 'Postman',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg',
			gradientColor: '#ff6c37'
		},
		{
			name: 'Prettier',
			logo: 'https://cdn.worldvectorlogo.com/logos/prettier-1.svg',
			gradientColor: '#f7b93e'
		},
		{
			name: 'VS Code',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg',
			gradientColor: '#007acc'
		},
		{
			name: 'Unity',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/unity/unity-original.svg',
			gradientColor: '#000000'
		}
	];

	const design_skills = [
		{
			name: 'Figma',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg',
			gradientColor: '#f24e1e'
		},
		{
			name: 'Illustrator',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/illustrator/illustrator-plain.svg',
			gradientColor: '#ff9a00'
		},
		{
			name: 'Photoshop',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-plain.svg',
			gradientColor: '#31a8ff'
		}
	];

	const languages = [
		{
			name: 'C',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg',
			gradientColor: '#A8B9CC'
		},
		{
			name: 'C#',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
			gradientColor: '#782599'
		},
		{
			name: 'C++',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
			gradientColor: '#00599c'
		},
		{
			name: 'Dart',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg',
			gradientColor: '#0175c2'
		},
		{
			name: 'Java',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
			gradientColor: '#ed8b00'
		},
		{
			name: 'JavaScript',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
			gradientColor: '#f7df1e'
		},
		{
			name: 'Python',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
			gradientColor: '#3776ab'
		},
		{
			name: 'TypeScript',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
			gradientColor: '#3178c6'
		},
		{
			name: 'PHP',
			logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
			gradientColor: '#777BB4'
		}
	];
</script>

<div class="relative top-0 left-0 mt-10 w-full py-8 md:py-4" id="Skills">
	<div class="mx-4 flex max-w-4xl flex-col items-start sm:mx-8 md:mx-16 lg:mx-30">
		<h1
			class="bg-gradient-to-b from-[#e7e6e6] to-[#3f3f3f] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl"
		>
			My Skills
		</h1>
		<h2 class="max-w-2xl mb-10 text-base font-light text-[#b4b4b4] sm:text-lg md:text-xl">
			The tools and technologies I use to bring ideas to life:
		</h2>
	</div>
	<!-- <div class="flex flex-col items-center justify-center 2xl:gap-12 2xl:flex-row">
		<SkillCard skills={front_skills} group={'Frontend'} />
		<SkillCard skills={back_skills} group={'Backend'} />
		<SkillCard skills={tools} group={'Tools'} />
	</div>
	<div class="flex flex-col items-center justify-center 2xl:gap-12 2xl:flex-row">
		<SkillCard skills={languages} group={'Languages'} />
		<SkillCard skills={design_skills} group={'Design'} />
		<SkillCard skills={mobile_skills} group={'Mobile Development'} /> -->
	<!-- Elimina el grid y usa el mismo flex que arriba para mantener el tamaño y estilo -->
	<!-- </div> -->
	<div
		class="
			grid grid-cols-1 items-center
			justify-center
			gap-x-8
			gap-y-10
			lg:gap-y-0
			mx-4
			md:mx-15
			lg:mx-15
			lg:grid-cols-2
			lg:grid-rows-3
			2xl:xl:grid-cols-3
			2xl:xl:grid-rows-2
		"
	>
		<SkillCard skills={front_skills} group={'Frontend'} />
		<SkillCard skills={back_skills} group={'Backend'} />
		<SkillCard skills={tools} group={'Tools'} />
		<SkillCard skills={languages} group={'Languages'} />
		<SkillCard skills={design_skills} group={'Design'} />
		<SkillCard skills={mobile_skills} group={'Mobile Development'} />
	</div>
</div>
