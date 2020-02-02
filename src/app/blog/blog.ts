export interface Blog {
  posts?: BlogPostSummary[];
  editing?: Post;
}

export interface BlogPostSummary {
  id: string;
  title: string;
  summary: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
}
