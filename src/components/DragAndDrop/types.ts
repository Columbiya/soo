import { HTMLAttributes } from 'react'

export type FileSize = [number, SizeTypes]

export enum AcceptTypes {
	ZIP = 'application/zip',
	JPG = 'image/jpg',
	JPEG = 'image/jpeg',
	PNG = 'image/png',
	WEBP = 'image/webp',
	SVG = 'image/svg',
	DOC = 'application/msword',
	TXT = 'text/plain',
	PPT = 'application/vnd.ms-powerpoint',
	PPTX = 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
	DOCX = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
	XLS = 'application/vnd.ms-excel',
	XLSX = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
	PDF = 'application/pdf',
	MP3 = 'audio/mpeg',
	MP4 = 'video/mp4',
	MKV = 'video/x-matroska',
	MPEG4 = 'audio/mp4',
	XM4A = 'audio/x-m4a',
	WAV = 'audio/wav'
}

export enum VideoExtensions {
	MPEG4 = 'mpeg4',
	MP4 = 'mp4',
	MKV = 'mkv'
}

export interface ImagePreview {
	url: string
	file?: File
}

export interface DragAndDropBaseProps
	extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
	name?: string
	isDrag: boolean
	accept?: string
	size?: FileSize
	imagesPreview?: ImagePreview[]
	recommendedImageWidth?: number
	recommendedImageHeight?: number
	disabled?: boolean
}

export interface DragAndDropSingleProps extends DragAndDropBaseProps {
	file?: File
	onChange: (file?: File | null) => void
	files?: never
}

export interface DragAndDropMultipleProps extends DragAndDropBaseProps {
	onChange: (files: File[]) => void
	file?: never
	onDelete: (removeTitleArray: string[]) => void
}

interface DragAndDropAdditionalProps {
	multiple?: boolean
	name: string
	accept?: AcceptTypes[]
	onDelete?: (removeTitleArray: string[]) => void
}
export type DragAndDropProps = Omit<
	DragAndDropMultipleProps | DragAndDropSingleProps,
	'isDrag' | 'accept'
> &
	DragAndDropAdditionalProps

export enum SizeTypes {
	B = 1,
	KB = 1024,
	MB = 1024 ** 2,
	GB = 1024 ** 3
}
