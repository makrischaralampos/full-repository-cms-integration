export const getProjectsQuery = `
        *[_type == "project"] | order(date desc) {
        _id,
        title,
        slug,
        description,
        image,
        url,
        github,
        techStack,
        date
    }
`
