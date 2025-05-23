import { getPosts } from '@/app/utils';
import { Flex } from '@/once-ui/components';
import { ProjectCard } from '@/app/components';
import ProjectSection from './ProjectLink';

interface ProjectsProps {
    range?: [number, number?];
    isSections?: boolean;
}

export function Projects({ range,isSections }: ProjectsProps) {
    let allProjects = getPosts(['src', 'app', 'work', 'projects']);

    const sortedProjects = allProjects.sort((a, b) => {
        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });

    const displayedProjects = range
        ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
        : sortedProjects;

    return (
        <section>
            {isSections?
            <ProjectSection/>:<div></div>
            } 
            <Flex
            fillWidth gap="l" marginBottom="40" paddingX="l"
            direction="column">
            {displayedProjects.map((post) => (
                <ProjectCard
                    key={post.slug}
                    href={`/work/${post.slug}`}
                    images={post.metadata.images}
                    title={post.metadata.title}
                    description={post.metadata.summary}
                    content={post.content}
                    avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}/>
            ))}
        </Flex>
        </section>
    );
}