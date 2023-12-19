export type MediaPreviewType = {
  fillMedia: (arrayMedia: string[]) => void;
  handleEditFile: (id?: string | undefined) => void;
  fileRef: React.RefObject<HTMLInputElement>;
  changeFile: (e: any) => void;
  cancelFiles: () => void;
  fileList: { id: string; result: string | ArrayBuffer | null; file: File | null }[];
  removeFile: (id: string) => void;
}