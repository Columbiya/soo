const getFileSizeFromBytesInGb = (sizeInBytes: string | number) => {
	const sizeNumber = Number(sizeInBytes)

	if (Number.isNaN(sizeNumber)) {
		throw new Error('unsupported size type')
	}

	const kbInGb = 1073741824
	const sizeInGb = sizeNumber / kbInGb

	if (sizeNumber % kbInGb === 0) {
		return sizeInGb.toString()
	}

	return sizeInGb.toFixed(4)
}

export default getFileSizeFromBytesInGb
