export type Galleries =
  | "individual-monuments"
  | "companion-monuments"
  | "etchings"
  | "granite-colors";

export type ImageMetadata = {
  key?: string;
  url?: string;
  lastModified?: Date;
  size?: number;
};
