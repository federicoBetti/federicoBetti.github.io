import { z, defineCollection } from "astro:content";

const workExperienceSchema = z.object({
    title: z.string(),
    company: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    description: z.string(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
});

const researchPaperSchema = z.object({
    title: z.string(),
    authors: z.string(),
    conference: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    link: z.string().optional(),
    pdfUrl: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
});

const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    link: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
});

const educationSchema = z.object({
    title: z.string(),
    institution: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    description: z.string().optional(),
    degree: z.string().optional(),
    gpa: z.string().optional(),
});

export type WorkExperienceSchema = z.infer<typeof workExperienceSchema>;
export type ResearchPaperSchema = z.infer<typeof researchPaperSchema>;
export type ProjectSchema = z.infer<typeof projectSchema>;
export type EducationSchema = z.infer<typeof educationSchema>;

const workExperienceCollection = defineCollection({ schema: workExperienceSchema });
const researchPaperCollection = defineCollection({ schema: researchPaperSchema });
const projectCollection = defineCollection({ schema: projectSchema });
const educationCollection = defineCollection({ schema: educationSchema });

export const collections = {
    'work-experience': workExperienceCollection,
    'research-papers': researchPaperCollection,
    'projects': projectCollection,
    'education': educationCollection
}