export type FolderConfig = {
  enabled: boolean,
  folderScanning?: boolean,
  prompt?: string
}

export type Folder = {
  id: number,
  title: string,
  config: FolderConfig,
  children?: Folder[]
}