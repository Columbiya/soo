import { EntityId } from '@/types'

type ParseIdFromFileName = (fileName: string) => [EntityId, string]

const parseIdFromFileName: ParseIdFromFileName = (fileName) => {
	const [name = '', id = ''] = fileName.split('/')

	return [id, name]
}

export default parseIdFromFileName
