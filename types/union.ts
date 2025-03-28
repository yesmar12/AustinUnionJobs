export interface JobSite {
  name: string;
  url: string;
}

export interface Union {
  union: string;
  desc: string;
  url: string;
  jobsites: JobSite[];
}
