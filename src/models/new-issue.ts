export class NewIssue {
    description: string;
    imageUrl: string;
    issueTypeHref: string;
    location: {
      coordinates: [number, number],
      type: string
    };
    tags: string[];
}