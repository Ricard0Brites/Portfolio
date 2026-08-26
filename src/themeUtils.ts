export function getThemes()
{
return {        
        dark: 
            {
                bg: 'bg-zinc-600',
                text: 'text-zinc-200',
                secondaryText: 'text-zinc-400',
                stroke: 'text-zinc-300',
                hover: 'bg-zinc-500',
                border: 'border-zinc-600',
            },
        light: 
            {
                bg: 'bg-zinc-200',
                text: 'text-zinc-600',
                secondaryText: 'text-zinc-400',
                stroke: 'stroke-zinc-600',
                hover: 'bg-zinc-300',
                border: 'border-zinc-300',
            },
        headerHeight: 'h-14',
        }
};

export function getCurrentTheme()
{
    const themes = getThemes();
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    return prefersDark ? themes.dark : themes.light;
}