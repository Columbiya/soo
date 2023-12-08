'use client'

import {
	ChangeEvent,
	FC,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState
} from 'react'

import { getUniqueId, padStr } from '@/helpers'
import {
	clearFileInput,
	getFileList,
	getImageUrlFromFile,
	validateFiles
} from '@/helpers/files'

import { toast } from 'react-toastify'

import { DragAndDropSingleProps } from '../types'

import cl from '../style.module.scss'
import { classNames } from '@/helpers'

const DragAndDropSingle: FC<DragAndDropSingleProps> = ({
	name,
	isDrag,
	accept,
	onChange,
	size,
	id,
	disabled,
	file,
	restrictFileLength,
	...defaultProps
}) => {
	const loadingFileError = {
		message: 'Размер файла превышает допустимые требования'
	}

	const displayMessage = () =>
		toast(loadingFileError.message, { type: 'error' })

	const uniqueId = useMemo(getUniqueId.bind(null, id), [])
	const fileInput = useRef<HTMLInputElement>(null)

	const [fileUrl, setFileUrl] = useState(file?.name)

	useEffect(() => {
		if (restrictFileLength && file?.name) {
			setFileUrl(padStr(file.name, restrictFileLength))
		} else {
			setFileUrl(file?.name)
		}
	}, [file, restrictFileLength])

	const changeHandler = useCallback(
		async (event: ChangeEvent<HTMLInputElement>) => {
			if (!event.target.files?.length) {
				return
			}
			const filesList = Array.from(event.target.files)
			const { typesIsValid, sizeIsValid } = validateFiles({
				files: filesList,
				accept,
				size
			})

			if (!typesIsValid || !sizeIsValid) {
				clearFileInput(event.target)
				onChange(null)
				displayMessage()

				// setFileUrl('')
				return
			}

			const fileList = await getFileList(filesList)
			event.target.files = fileList

			const file = Array.from(fileList).pop()
			if (!file) {
				// setFileUrl('')
				return
			}

			// setFileUrl(URL.createObjectURL(file))
			onChange(file)
		},
		[]
	)

	const deleteHandler = useCallback(() => {
		if (!fileInput.current) {
			return
		}

		onChange(null)
		clearFileInput(fileInput.current)
		setFileUrl('')
	}, [fileInput.current])

	return (
		<div className={cl.fileDragSingleWrapper}>
			<div
				{...defaultProps}
				className={classNames(cl.fileDragSingle, {
					[cl.fileDragSingleDragover]: isDrag
				})}
			>
				<input
					name={name}
					ref={fileInput}
					accept={accept}
					onChange={changeHandler}
					// id={uniqueId}
					type="file"
					disabled={disabled}
				/>
				{/* <span className={classNames({ [cl.FullSize]: !!fileUrl })}>
					{fileUrl}
				</span> */}
				<div
					className={cl.fileDragSingleOptions}
					onClick={() => fileInput.current?.click()}
				>
					<span>{fileUrl || 'Прикрепить изображение'}</span>
					<img src="/images/common/paper-clip-icon.svg" alt="" width="18" />
				</div>
			</div>
		</div>
	)
}

export default DragAndDropSingle
