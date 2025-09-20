<script lang="ts">
    interface ProjectCardProps {
        project: {
            name: string;
            description: string;
            technologies: string[];
            link: string;
            language: string;
            icon: string;
            date: string;
            status: 'public' | 'private';
            category: string;
        };
        languageColors: Record<string, string>;
        isHovered: boolean;
        onHover: () => void;
        onLeave: () => void;
    }

    let { project, languageColors, isHovered, onHover, onLeave }: ProjectCardProps = $props();
</script>

<div 
    class="relative group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 transform hover:-translate-y-2"
    role="button"
    tabindex="0"
    onmouseenter={onHover}
    onmouseleave={onLeave}
>
    <!-- Status Badge -->
    <div class="absolute top-3 right-3 z-10">
        <span class="px-2 py-1 text-xs rounded-full {project.status === 'public' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'}">
            {project.status}
        </span>
    </div>

    <!-- Project Content -->
    <div class="p-6">
        <!-- Header -->
        <div class="flex items-center gap-3 mb-3">
            <span class="text-2xl">{project.icon}</span>
            <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white truncate">
                    {project.name}
                </h3>
                <p class="text-xs text-gray-500 dark:text-gray-400">{project.date}</p>
            </div>
            <div 
                class="w-3 h-3 rounded-full flex-shrink-0" 
                style="background-color: {languageColors[project.language] || '#6b7280'}"
                title={project.language}
            ></div>
        </div>

        <!-- Description -->
        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
            {project.description}
        </p>

        <!-- Technologies -->
        <div class="flex flex-wrap gap-1 mb-4">
            {#each project.technologies.slice(0, 2) as tech}
                <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-md">
                    {tech}
                </span>
            {/each}
            {#if project.technologies.length > 2}
                <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                    +{project.technologies.length - 2}
                </span>
            {/if}
        </div>

        <!-- Footer -->
        <div class="flex items-center justify-between">
            <span class="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-md">
                {project.category}
            </span>
            <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
                aria-label="View {project.name} repository"
            >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
            </a>
        </div>
    </div>

    <!-- Hover Overlay -->
    {#if isHovered}
        <div class="absolute inset-0 bg-gradient-to-br from-blue-600/95 to-purple-600/95 p-6 flex flex-col justify-center transition-all duration-300 backdrop-blur-sm">
            <div class="text-center">
                <span class="text-4xl mb-3 block">{project.icon}</span>
                <h3 class="text-xl font-bold text-white mb-2">
                    {project.name}
                </h3>
                <p class="text-blue-100 text-sm mb-4">
                    {project.description}
                </p>

                <!-- All Technologies -->
                <div class="mb-6">
                    <div class="flex flex-wrap gap-2 justify-center">
                        {#each project.technologies as tech}
                            <span class="px-2 py-1 bg-white/20 text-white text-xs rounded-full backdrop-blur">
                                {tech}
                            </span>
                        {/each}
                    </div>
                </div>

                <!-- Action Button -->
                <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                    View Repository
                </a>
            </div>
        </div>
    {/if}
</div>

<style>
    .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>